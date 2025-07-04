# PowerShell script to fix document ID issues
# Generated on 07/04/2025 00:09:47

# Fixing HTML issues
$htmlPath = "index.html"
$htmlContent = Get-Content -Path $htmlPath -Raw

# Write back to the file
Set-Content -Path $htmlPath -Value $htmlContent
Write-Host "HTML document IDs have been updated"

# Fixing JS issues        
# Fix Escalations in C:\Users\Tatle\Desktop\KB\KB\documents\content\concierge-agent-101\redirecting-to-cs.js
$jsPath = "C:\Users\Tatle\Desktop\KB\KB\documents\content\concierge-agent-101\redirecting-to-cs.js"
$jsContent = Get-Content -Path $jsPath -Raw
$jsContent = $jsContent -replace "id:\s*'17lJ5yL5Q4snbWlbs_x1_08Mx9ghvQD8F5UHT3IvGf7s'", "id: '1lLMI34T6ty9y0_0RqBqnHh9qgM3d5Sp9dom_YPgTmEc'"
Set-Content -Path $jsPath -Value $jsContent
        
# Fix Discounts in C:\Users\Tatle\Desktop\KB\KB\documents\content\conversation-topics\pre-purchase\discounts.js
$jsPath = "C:\Users\Tatle\Desktop\KB\KB\documents\content\conversation-topics\pre-purchase\discounts.js"
$jsContent = Get-Content -Path $jsPath -Raw
$jsContent = $jsContent -replace "id:\s*'1qJM9406IKWMnC3vbNRHMTLHTRNTDixNQRflBonFNZ_8'", "id: '1SSliJGLwg6srjDmqwUtSsVDhAdCBQSWDfmRPToM9yyE'"
Set-Content -Path $jsPath -Value $jsContent

Write-Host "All document ID issues have been fixed"
