# PowerShell script to fix placeholder document IDs
# Generated on 07/04/2025

# Placeholder IDs that need to be replaced with actual Google Drive IDs
$placeholderMapping = @{
    "discounts_id" = "1qJM9406IKWMnC3vbNRHMTLHTRNTDixNQRflBonFNZ_8" # Discounts (pre-purchase)
    "discounts_rewards_id" = "1SSliJGLwg6srjDmqwUtSsVDhAdCBQSWDfmRPToM9yyE" # Discounts
    "driving_to_purchase_id" = "1r9mTN_Mgc9_QjoF1OvWhMNgr9MoaF2BsMgZEhzjqfxs" # Driving to Purchase
    "missing_lost_items_id" = "1t5eJs6BWsC4I1t9z1P7n_BB1Idj4j4kQjPGo8JkuUpg" # Missing/Lost Items
    "order_status_id" = "1_6FReKGa18LL7pZjgLcdzNQ99Se-oAMrcpz3Cy88YA0" # Order Status
    "payments_accounts_id" = "1niTTES92AD7eFtSaKr2j3sXAMsR5MMRCKh8VbxYungY" # Payments
    "rewards_credit_id" = "1PhOw3LF0aNbJLyWFDBVaZTe2AiTxwrgbqZfSJfCHjuI" # Rewards Credit
    "shipping_options_id" = "1MkPhItX5zQC6xWitpRl49P2zol9z1SjbwPR8LADkLKk" # Shipping Options
    "sizing_id" = "1sWF5HFRu8rpk1kk9UXwsWzeb-p2zEzJUU-nBqx9j8Ko" # Sizing
    "escalations_id" = "1lLMI34T6ty9y0_0RqBqnHh9qgM3d5Sp9dom_YPgTmEc" # Escalations
    "general_client_id" = "1vqhJEJKPffTT8I5z2anpyVHpqMc-GHXe9U79zgdZfrk" # General Client
    "redirecting_to_cs_id" = "17lJ5yL5Q4snbWlbs_x1_08Mx9ghvQD8F5UHT3IvGf7s" # Redirecting to CS
    "responding_to_customers_id" = "11T7I1iwLc7OejJWXnBqjBGemHdcP1KpgeeHBpBSKsoc" # Responding to Customers
    "technical_settings_id" = "1ItUQAyYlBlCXy-paWCRg3oKSgC3525zBKTD5eXZiOfw" # Technical Settings
    "attentive_messages_id" = "1yTXSjLQ2u2BTnUYsG0XDyRJ8vx_mdegMXu521SW6XdM" # Attentive Messages
    "concierge_subscribers_id" = "1celRsgKBZwr4rqRKEe72Z_qVRDFxWYt729W3nzO8y8c" # Concierge Subscribers
    "ecommerce_id" = "1p_e1vLAOCjvx3QrUYpP5MtbcuuHy3f39ViqMOHKd21g" # E-Commerce
    "opting_in_out_id" = "196tQ4DTNhJSLh4xvruucnnmhZN8iD3c9EmrTksp69qA" # Opting In/Out
    "sub_verticals_id" = "1yTFwAQEs0zettdi4aw9hA-IeN59AyAv8rw4jza0mAEY" # Sub-Verticals
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
