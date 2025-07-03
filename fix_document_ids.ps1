# PowerShell script to fix document IDs in index.html
# This script replaces placeholder IDs with actual Google Drive document IDs

# Define a mapping of placeholder IDs to real Google Drive IDs
$idMapping = @{
    "escalations_id" = "1lLMI34T6ty9y0_0RqBqnHh9qgM3d5Sp9dom_YPgTmEc"
    "general_client_id" = "1vqhJEJKPffTT8I5z2anpyVHpqMc-GHXe9U79zgdZfrk"
    "redirecting_to_cs_id" = "17lJ5yL5Q4snbWlbs_x1_08Mx9ghvQD8F5UHT3IvGf7s"
    "responding_to_customers_id" = "11T7I1iwLc7OejJWXnBqjBGemHdcP1KpgeeHBpBSKsoc"
    "technical_settings_id" = "1ItUQAyYlBlCXy-paWCRg3oKSgC3525zBKTD5eXZiOfw"
    "attentive_messages_id" = "1yTXSjLQ2u2BTnUYsG0XDyRJ8vx_mdegMXu521SW6XdM"
    "concierge_subscribers_id" = "1celRsgKBZwr4rqRKEe72Z_qVRDFxWYt729W3nzO8y8c"
    "ecommerce_id" = "1p_e1vLAOCjvx3QrUYpP5MtbcuuHy3f39ViqMOHKd21g"
    "opting_in_out_id" = "196tQ4DTNhJSLh4xvruucnnmhZN8iD3c9EmrTksp69qA"
    "sub_verticals_id" = "1yTFwAQEs0zettdi4aw9hA-IeN59AyAv8rw4jza0mAEY"
    "rewards_credit_id" = "1PhOw3LF0aNbJLyWFDBVaZTe2AiTxwrgbqZfSJfCHjuI"
    "discounts_rewards_id" = "1SSliJGLwg6srjDmqwUtSsVDhAdCBQSWDfmRPToM9yyE"
    "driving_to_purchase_id" = "1r9mTN_Mgc9_QjoF1OvWhMNgr9MoaF2BsMgZEhzjqfxs"
    "shipping_options_id" = "1MkPhItX5zQC6xWitpRl49P2zol9z1SjbwPR8LADkLKk"
    "missing_lost_items_id" = "1t5eJs6BWsC4I1t9z1P7n_BB1Idj4j4kQjPGo8JkuUpg"
    "order_status_id" = "1_6FReKGa18LL7pZjgLcdzNQ99Se-oAMrcpz3Cy88YA0"
    "payments_accounts_id" = "1niTTES92AD7eFtSaKr2j3sXAMsR5MMRCKh8VbxYungY"
    "sizing_id" = "1sWF5HFRu8rpk1kk9UXwsWzeb-p2zEzJUU-nBqx9j8Ko"
    "discounts_id" = "1qJM9406IKWMnC3vbNRHMTLHTRNTDixNQRflBonFNZ_8"
    "event-quality-id" = "1QJDaNbXtdb92SRwyJBn4FEW3lftD4Fx5wd2JcVFcquU"
    "blocklist-id" = "1rARWcKeZKqv-h_y-uiYrUDyhhtf0Iy8SnqLr_audy_U"
}

# Read the index.html file
$htmlPath = "index.html"
$htmlContent = Get-Content -Path $htmlPath -Raw

# Replace all placeholder IDs with real IDs
foreach ($placeholder in $idMapping.Keys) {
    $realId = $idMapping[$placeholder]
    $htmlContent = $htmlContent -replace "id=$placeholder&", "id=$realId&"
}

# Write back to the file
Set-Content -Path $htmlPath -Value $htmlContent

Write-Host "Document IDs have been updated in index.html"

# Now verify the JavaScript files to ensure they have the correct IDs
Write-Host "Verifying JavaScript files..."

# Documents to verify (add more as needed)
$jsFiles = @(
    "documents/content/concierge-agent-101/escalations.js",
    "documents/content/concierge-agent-101/technical-settings.js",
    "documents/content/intro/attentive-messages.js",
    "documents/content/intro/sub-verticals.js"
)

foreach ($file in $jsFiles) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        Write-Host "Checking $file..."
        
        # Extract the ID from the file
        if ($content -match "id: '([^']+)'") {
            $jsId = $matches[1]
            Write-Host "  ID in file: $jsId"
            
            # Find matching placeholder
            foreach ($entry in $idMapping.GetEnumerator()) {
                if ($entry.Value -eq $jsId) {
                    Write-Host "  Mapped to placeholder: $($entry.Key)"
                    break
                }
            }
        } else {
            Write-Host "  Could not find ID in file"
        }
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Document ID verification complete"
