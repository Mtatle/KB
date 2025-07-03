# PowerShell script to check document accessibility

# List of document IDs to check
$documentIds = @(
    "1ItUQAyYlBlCXy-paWCRg3oKSgC3525zBKTD5eXZiOfw", # Technical Settings
    "1lLMI34T6ty9y0_0RqBqnHh9qgM3d5Sp9dom_YPgTmEc", # Escalations
    "1vqhJEJKPffTT8I5z2anpyVHpqMc-GHXe9U79zgdZfrk", # General Client
    "17lJ5yL5Q4snbWlbs_x1_08Mx9ghvQD8F5UHT3IvGf7s", # Redirecting to CS
    "11T7I1iwLc7OejJWXnBqjBGemHdcP1KpgeeHBpBSKsoc", # Responding to Customers
    "1yTXSjLQ2u2BTnUYsG0XDyRJ8vx_mdegMXu521SW6XdM", # Attentive Messages
    "1celRsgKBZwr4rqRKEe72Z_qVRDFxWYt729W3nzO8y8c", # Concierge Subscribers
    "1p_e1vLAOCjvx3QrUYpP5MtbcuuHy3f39ViqMOHKd21g", # E-Commerce
    "196tQ4DTNhJSLh4xvruucnnmhZN8iD3c9EmrTksp69qA", # Opting In/Out
    "1yTFwAQEs0zettdi4aw9hA-IeN59AyAv8rw4jza0mAEY", # Sub-Verticals
    "1PhOw3LF0aNbJLyWFDBVaZTe2AiTxwrgbqZfSJfCHjuI", # Rewards Credit
    "1SSliJGLwg6srjDmqwUtSsVDhAdCBQSWDfmRPToM9yyE", # Discounts
    "1r9mTN_Mgc9_QjoF1OvWhMNgr9MoaF2BsMgZEhzjqfxs", # Driving to Purchase
    "1MkPhItX5zQC6xWitpRl49P2zol9z1SjbwPR8LADkLKk", # Shipping Options
    "1t5eJs6BWsC4I1t9z1P7n_BB1Idj4j4kQjPGo8JkuUpg", # Missing/Lost Items
    "1_6FReKGa18LL7pZjgLcdzNQ99Se-oAMrcpz3Cy88YA0", # Order Status
    "1niTTES92AD7eFtSaKr2j3sXAMsR5MMRCKh8VbxYungY", # Payments
    "1sWF5HFRu8rpk1kk9UXwsWzeb-p2zEzJUU-nBqx9j8Ko", # Sizing
    "1qJM9406IKWMnC3vbNRHMTLHTRNTDixNQRflBonFNZ_8"  # Discounts (pre-purchase)
)

# Begin building HTML document
$testHtml = @"
<!DOCTYPE html>
<html>
<head>
    <title>Document Accessibility Test</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        .document-test { margin-bottom: 20px; padding: 10px; border: 1px solid #ddd; }
        .document-test iframe { width: 100%; height: 300px; border: none; }
        .success { color: green; }
        .failure { color: red; }
        .status { font-weight: bold; margin-top: 10px; }
    </style>
    <script>
        function checkIframeLoaded(iframe, statusId) {
            setTimeout(function() {
                try {
                    const statusElement = document.getElementById(statusId);
                    // Attempt to access the iframe content - if it fails due to permissions or non-existent document,
                    // we'll catch the error
                    const iframeContent = iframe.contentDocument || iframe.contentWindow.document;
                    if (iframeContent.body.innerHTML.includes("requested does not exist") || 
                        iframeContent.body.innerHTML.includes("don't have permission")) {
                        statusElement.innerHTML = "Status: <span class='failure'>FAILED - Document not accessible</span>";
                    } else {
                        statusElement.innerHTML = "Status: <span class='success'>SUCCESS - Document is accessible</span>";
                    }
                } catch (e) {
                    document.getElementById(statusId).innerHTML = "Status: <span class='failure'>ERROR - " + e.message + "</span>";
                }
            }, 3000); // Give it 3 seconds to load
        }
    </script>
</head>
<body>
    <h1>Document Accessibility Test</h1>
    <p>This page tests if the Google Documents are accessible with your current permissions.</p>
"@

# Add each document to test
$index = 1
foreach ($docId in $documentIds) {
    $statusId = "status-$index"
    
    # First check if it's a presentation or document
    if ($index % 2 -eq 0) {
        $embedUrl = "https://docs.google.com/document/d/$docId/preview"
        $docTypeText = "Document"
    } else {
        $embedUrl = "https://docs.google.com/presentation/d/$docId/embed?start=false&loop=false&delayms=3000"
        $docTypeText = "Presentation"
    }
    
    # Build each test div separately to avoid variable substitution issues
    $testDiv = "<div class='document-test'>"
    $testDiv += "`n        <h2>Test $index`: $docTypeText ($docId)</h2>"
    $testDiv += "`n        <iframe id='iframe-$index' src='$embedUrl' onload='checkIframeLoaded(this, `"$statusId`")'></iframe>"
    $testDiv += "`n        <div id='$statusId' class='status'>Status: Testing...</div>"
    $testDiv += "`n    </div>"
    
    $testHtml += $testDiv
    $index++
}

# Complete the HTML document
$testHtml += @"

</body>
</html>
"@

# Write the test HTML file
$testHtmlPath = "test_document_access.html"
Set-Content -Path $testHtmlPath -Value $testHtml

Write-Host "Document accessibility test created at $testHtmlPath"
Write-Host "Open this file in a web browser to check if your account can access these documents"
