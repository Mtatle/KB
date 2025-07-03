# PowerShell script to fix placeholder document IDs
# Generated on 07/04/2025 00:08:02

# Placeholder IDs that need to be replaced with actual Google Drive IDs
$placeholderMapping = @{
    "discounts_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
        "discounts_rewards_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
        "driving_to_purchase_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
        "missing_lost_items_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
        "order_status_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
        "payments_accounts_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
        "rewards_credit_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
        "shipping_options_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
        "sizing_id" = "REPLACE_WITH_ACTUAL_ID" # TODO: Replace with actual Google Drive ID
    }

# Read the index.html file
$htmlPath = "index.html"
$htmlContent = Get-Content -Path $htmlPath -Raw

# Replace all placeholder IDs
foreach ($placeholder in $placeholderMapping.Keys) {
    $actualId = $placeholderMapping[$placeholder]
    $htmlContent = $htmlContent -replace "id=$placeholder&", "id=$actualId&"
}

# Write back to the file
Set-Content -Path $htmlPath -Value $htmlContent

Write-Host "Placeholder document IDs have been updated in index.html"
