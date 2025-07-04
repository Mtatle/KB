# PowerShell script to check Google Drive document permissions

# List of document IDs and titles to check
$documents = @(
    @{Title="Technical Settings"; ID="1ItUQAyYlBlCXy-paWCRg3oKSgC3525zBKTD5eXZiOfw"; Type="presentation"},
    @{Title="Escalations"; ID="1lLMI34T6ty9y0_0RqBqnHh9qgM3d5Sp9dom_YPgTmEc"; Type="presentation"},
    @{Title="General Client"; ID="1vqhJEJKPffTT8I5z2anpyVHpqMc-GHXe9U79zgdZfrk"; Type="presentation"},
    @{Title="Redirecting to CS"; ID="17lJ5yL5Q4snbWlbs_x1_08Mx9ghvQD8F5UHT3IvGf7s"; Type="presentation"},
    @{Title="Responding to Customers"; ID="11T7I1iwLc7OejJWXnBqjBGemHdcP1KpgeeHBpBSKsoc"; Type="presentation"},
    @{Title="Attentive Messages"; ID="1yTXSjLQ2u2BTnUYsG0XDyRJ8vx_mdegMXu521SW6XdM"; Type="presentation"},
    @{Title="Concierge Subscribers"; ID="1celRsgKBZwr4rqRKEe72Z_qVRDFxWYt729W3nzO8y8c"; Type="presentation"},
    @{Title="E-Commerce"; ID="1p_e1vLAOCjvx3QrUYpP5MtbcuuHy3f39ViqMOHKd21g"; Type="presentation"},
    @{Title="Opting In/Out"; ID="196tQ4DTNhJSLh4xvruucnnmhZN8iD3c9EmrTksp69qA"; Type="presentation"},
    @{Title="Sub-Verticals"; ID="1yTFwAQEs0zettdi4aw9hA-IeN59AyAv8rw4jza0mAEY"; Type="presentation"},
    @{Title="Rewards Credit"; ID="1PhOw3LF0aNbJLyWFDBVaZTe2AiTxwrgbqZfSJfCHjuI"; Type="doc"},
    @{Title="Discounts"; ID="1SSliJGLwg6srjDmqwUtSsVDhAdCBQSWDfmRPToM9yyE"; Type="presentation"},
    @{Title="Driving to Purchase"; ID="1r9mTN_Mgc9_QjoF1OvWhMNgr9MoaF2BsMgZEhzjqfxs"; Type="presentation"},
    @{Title="Shipping Options"; ID="1MkPhItX5zQC6xWitpRl49P2zol9z1SjbwPR8LADkLKk"; Type="presentation"},
    @{Title="Missing/Lost Items"; ID="1t5eJs6BWsC4I1t9z1P7n_BB1Idj4j4kQjPGo8JkuUpg"; Type="doc"},
    @{Title="Order Status"; ID="1_6FReKGa18LL7pZjgLcdzNQ99Se-oAMrcpz3Cy88YA0"; Type="doc"},
    @{Title="Payments"; ID="1niTTES92AD7eFtSaKr2j3sXAMsR5MMRCKh8VbxYungY"; Type="presentation"},
    @{Title="Sizing"; ID="1sWF5HFRu8rpk1kk9UXwsWzeb-p2zEzJUU-nBqx9j8Ko"; Type="presentation"},
    @{Title="Discounts (pre-purchase)"; ID="1qJM9406IKWMnC3vbNRHMTLHTRNTDixNQRflBonFNZ_8"; Type="doc"}
)

# Open each document in the default browser to check if you have access
Write-Host "Opening Google Drive documents to check access permissions..."
Write-Host "For each document that opens, check if you have access."
Write-Host "Press any key to open each document (or Ctrl+C to cancel)..."

foreach ($document in $documents) {
    $id = $document.ID
    $title = $document.Title
    $type = $document.Type
    
    Write-Host "Checking $title ($id)..."
    
    # Create the URL based on document type
    $url = if ($type -eq "presentation") {
        "https://docs.google.com/presentation/d/$id/edit"
    } else {
        "https://docs.google.com/document/d/$id/edit"
    }
    
    # Prompt user before opening each document
    Read-Host "Press Enter to open document in browser or Ctrl+C to cancel"
    
    # Open the document in the default browser
    Start-Process $url
    
    # Give user time to check
    Write-Host "Opened $title. Check if you have access, then come back to this terminal."
    Write-Host "------------------------------------------------------------"
}

Write-Host "Done checking all documents."
Write-Host "For any documents you don't have access to, you'll need to request access from the document owner."
