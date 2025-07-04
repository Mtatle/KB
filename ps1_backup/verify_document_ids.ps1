# PowerShell script to verify document IDs across HTML and JS files

# List of document names and their Google Drive IDs from the user's list
$documentMapping = @{
    "Technical Settings" = "1ItUQAyYlBlCXy-paWCRg3oKSgC3525zBKTD5eXZiOfw"
    "Escalations" = "1lLMI34T6ty9y0_0RqBqnHh9qgM3d5Sp9dom_YPgTmEc"
    "General Client" = "1vqhJEJKPffTT8I5z2anpyVHpqMc-GHXe9U79zgdZfrk"
    "Redirecting to CS" = "17lJ5yL5Q4snbWlbs_x1_08Mx9ghvQD8F5UHT3IvGf7s"
    "Responding to Customers" = "11T7I1iwLc7OejJWXnBqjBGemHdcP1KpgeeHBpBSKsoc"
    "Attentive Messages" = "1yTXSjLQ2u2BTnUYsG0XDyRJ8vx_mdegMXu521SW6XdM"
    "Concierge Subscribers" = "1celRsgKBZwr4rqRKEe72Z_qVRDFxWYt729W3nzO8y8c"
    "E-Commerce" = "1p_e1vLAOCjvx3QrUYpP5MtbcuuHy3f39ViqMOHKd21g"
    "Opting In/Out" = "196tQ4DTNhJSLh4xvruucnnmhZN8iD3c9EmrTksp69qA"
    "Sub-Verticals" = "1yTFwAQEs0zettdi4aw9hA-IeN59AyAv8rw4jza0mAEY"
    "Rewards Credit" = "1PhOw3LF0aNbJLyWFDBVaZTe2AiTxwrgbqZfSJfCHjuI"
    "Discounts" = "1SSliJGLwg6srjDmqwUtSsVDhAdCBQSWDfmRPToM9yyE"
    "Driving to Purchase" = "1r9mTN_Mgc9_QjoF1OvWhMNgr9MoaF2BsMgZEhzjqfxs"
    "Shipping Options" = "1MkPhItX5zQC6xWitpRl49P2zol9z1SjbwPR8LADkLKk"
    "Missing/Lost Items" = "1t5eJs6BWsC4I1t9z1P7n_BB1Idj4j4kQjPGo8JkuUpg"
    "Order Status" = "1_6FReKGa18LL7pZjgLcdzNQ99Se-oAMrcpz3Cy88YA0"
    "Payments" = "1niTTES92AD7eFtSaKr2j3sXAMsR5MMRCKh8VbxYungY"
    "Sizing" = "1sWF5HFRu8rpk1kk9UXwsWzeb-p2zEzJUU-nBqx9j8Ko"
    "Discounts (pre-purchase)" = "1qJM9406IKWMnC3vbNRHMTLHTRNTDixNQRflBonFNZ_8"
}

# Read the index.html file
$htmlPath = "index.html"
$htmlContent = Get-Content -Path $htmlPath -Raw

# Track issues for later fixing
$issues = @()

# Check each document in the mapping
foreach ($docName in $documentMapping.Keys) {
    $correctId = $documentMapping[$docName]
    
    # Clean up the document name for regex matching (handle special characters)
    $cleanDocName = [regex]::Escape($docName)
    
    # Try to find this document in the HTML
    $pattern = "title=$cleanDocName"
    if ($docName -eq "Discounts (pre-purchase)") {
        # Special case for this document since the title might be different
        $pattern = "title=Discounts"
    }
    
    if ($htmlContent -match "$pattern[^>]+id=([^&]+)") {
        $htmlId = $matches[1]
        
        if ($htmlId -ne $correctId) {
            $issues += [PSCustomObject]@{
                DocumentName = $docName
                CurrentId = $htmlId
                CorrectId = $correctId
                Status = "HTML ID mismatch"
            }
            Write-Host "HTML ID mismatch for '$docName': Current='$htmlId', Should be='$correctId'"
        } else {
            Write-Host "HTML ID for '$docName' is correct: $htmlId" -ForegroundColor Green
        }
    } else {
        $issues += [PSCustomObject]@{
            DocumentName = $docName
            CurrentId = "Not found"
            CorrectId = $correctId
            Status = "Document not found in HTML"
        }
        Write-Host "Could not find document '$docName' in the HTML" -ForegroundColor Yellow
    }
}

# Now check the JS files
$jsFolder = "documents"
$jsFiles = Get-ChildItem -Path $jsFolder -Recurse -Include "*.js" | Where-Object { $_.Name -notmatch "registry\.js" }

foreach ($jsFile in $jsFiles) {
    $jsContent = Get-Content -Path $jsFile.FullName -Raw
    
    # Extract the title and ID
    if ($jsContent -match "title:\s*'([^']+)'") {
        $jsTitle = $matches[1]
        
        if ($jsContent -match "id:\s*'([^']+)'") {
            $jsId = $matches[1]
            
            # Check if this title is in our mapping
            foreach ($docName in $documentMapping.Keys) {
                if ($jsTitle -like "*$docName*" -or $docName -like "*$jsTitle*") {
                    $correctId = $documentMapping[$docName]
                    
                    if ($jsId -ne $correctId) {
                        $issues += [PSCustomObject]@{
                            DocumentName = $docName
                            JsTitle = $jsTitle
                            JsFile = $jsFile.FullName
                            CurrentId = $jsId
                            CorrectId = $correctId
                            Status = "JS ID mismatch"
                        }
                        Write-Host "JS ID mismatch for '$jsTitle' in $($jsFile.Name): Current='$jsId', Should be='$correctId'" -ForegroundColor Red
                    } else {
                        Write-Host "JS ID for '$jsTitle' in $($jsFile.Name) is correct: $jsId" -ForegroundColor Green
                    }
                }
            }
        }
    }
}

# If we found issues, generate a fix script
if ($issues.Count -gt 0) {
    Write-Host "`nFound $($issues.Count) issues. Creating fix script..." -ForegroundColor Yellow
    
    $fixScript = @"
# PowerShell script to fix document ID issues
# Generated on $(Get-Date)

# Fixing HTML issues
`$htmlPath = "index.html"
`$htmlContent = Get-Content -Path `$htmlPath -Raw

"@
    
    foreach ($issue in $issues) {
        if ($issue.Status -eq "HTML ID mismatch") {
            $fixScript += @"
        
# Fix $($issue.DocumentName)
`$htmlContent = `$htmlContent -replace "id=$($issue.CurrentId)(&type=)", "id=$($issue.CorrectId)`$1"

"@
        }
    }
    
    $fixScript += @"

# Write back to the file
Set-Content -Path `$htmlPath -Value `$htmlContent
Write-Host "HTML document IDs have been updated"

# Fixing JS issues
"@
    
    foreach ($issue in $issues) {
        if ($issue.Status -eq "JS ID mismatch") {
            $fixScript += @"
        
# Fix $($issue.DocumentName) in $($issue.JsFile)
`$jsPath = "$($issue.JsFile)"
`$jsContent = Get-Content -Path `$jsPath -Raw
`$jsContent = `$jsContent -replace "id:\s*'$($issue.CurrentId)'", "id: '$($issue.CorrectId)'"
Set-Content -Path `$jsPath -Value `$jsContent

"@
        }
    }
    
    $fixScript += @"

Write-Host "All document ID issues have been fixed"
"@
    
    # Write the fix script
    $fixScriptPath = "fix_document_ids_detailed.ps1"
    Set-Content -Path $fixScriptPath -Value $fixScript
    
    Write-Host "Fix script generated at $fixScriptPath"
} else {
    Write-Host "`nNo document ID issues found! All IDs match." -ForegroundColor Green
}

# Check for placeholder IDs that might need to be replaced
$placeholderPattern = "id=([a-z_]+_id)&"
$placeholders = [regex]::Matches($htmlContent, $placeholderPattern) | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique

if ($placeholders.Count -gt 0) {
    Write-Host "`nFound $($placeholders.Count) placeholder IDs that should be replaced:" -ForegroundColor Yellow
    $placeholders | ForEach-Object { Write-Host "  - $_" }
    
    # Create a script to fix placeholder IDs
    $placeholderFixScript = @"
# PowerShell script to fix placeholder document IDs
# Generated on $(Get-Date)

# Placeholder IDs that need to be replaced with actual Google Drive IDs
`$placeholderMapping = @{

"@
    
    foreach ($placeholder in $placeholders) {
        $placeholderFixScript += @"
    "$placeholder" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
    
"@
    }
    
    $placeholderFixScript += @"
}

# Read the index.html file
`$htmlPath = "index.html"
`$htmlContent = Get-Content -Path `$htmlPath -Raw

# Replace all placeholder IDs
foreach (`$placeholder in `$placeholderMapping.Keys) {
    `$actualId = `$placeholderMapping[`$placeholder]
    `$htmlContent = `$htmlContent -replace "id=`$placeholder&", "id=`$actualId&"
}

# Write back to the file
Set-Content -Path `$htmlPath -Value `$htmlContent

Write-Host "Placeholder document IDs have been updated in index.html"
"@
    
    $placeholderFixPath = "fix_placeholder_ids.ps1"
    Set-Content -Path $placeholderFixPath -Value $placeholderFixScript
    
    Write-Host "Placeholder fix script generated at $placeholderFixPath"
}

Write-Host "`nDocument ID verification complete"
