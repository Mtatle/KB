// Document content for Troubleshooting Website Issues
const troubleshootingWebsiteIssuesContent = {
    id: '1jQGlcMiaGpdeHijxi7dl5sqJxiBHpxGN6XMCMcuhe70',
    title: 'Troubleshooting Website Issues',
    type: 'presentation',
    description: 'Guide for troubleshooting website-related issues',
    tags: ['content', 'standard-workflows', 'troubleshooting', 'website', 'issues'],
    content: `Troubleshooting Website Issues

General Website Issues
Account & Checkout Issues
Account Errors
 Troubleshooting Website Issues
Checkout Errors

If after testing the issue ourselves, we find that we're experiencing the same problem, we should:
Check for relevant notes/templates
If there are no brand-specific instructions, send to cs (do not escalate!)
Note: Avoid providing specifics or making definitive statements about the issue unless they’ve been confirmed by the brand. Use general or cautious language when referencing the matter.
   General Websites Issues
How To Troubleshoot
        Test The Issue Yourself
    Issue Confirmed

If we’re not experiencing the same issue, we should ask them to try using an incognito window with the “sww temp”. 
If that doesn’t resolve the issue, we can escalate or send to cs (depending on notes/temps)
 Issue Not Confirmed

These are broad technical issues that can affect how the site loads or functions. Customers might report things like pages not loading, buttons not working, or content missing. These issues can vary depending on the browser, device, or even temporary site glitches.


     Account & Checkout Issues 

These are problems related to logging into a customer account, accessing account-related features on the website or issues that prevent a customer from successfully completing a purchase.

                Start by checking notes and templates
Look for any known issues or disclaimers related to account or checkout issues.
1
   Ask for a screenshot of the error message and description of the error 
This helps you identify if it’s a credential issue, an unregistered account, or a cart-related issue.
2
Sorry for the trouble. Can you describe what happens when you try to access your account? If there's an error message, can you please send a screenshot?
Steps To Follow
Sorry for the inconvenience. Can you describe what happens when you try to checkout? If there's an error message, can you please send a screenshot?

     Account Errors
This often means the customer never created an account. Many customers assume they have an account because they’ve entered their email at checkout, but that’s not always the case.        



Politely explain the difference to the customer and provide guidance on how to sign up on the website (include links if needed)
Account Not Recognized/Account Not Found
These happen when a customer enters incorrect login details, like the wrong email or password. In many cases, they may be using the right email but the wrong password - or vice versa.        



Ask them if there’s any other email they’ve could’ve used and also guide them to reset their password and remind them to check their spam or promo folders for the reset email.
Credential Error
If it’s a technical issue and the website isn’t working as expected → follow General Website Issues Troubleshooting

     Checkout Errors 
Sometimes when a customer checks out using ShopPay, they may not see all the checkout options.        





Create a mock cart to verify all options show for guest checkout, then use the XSP template to guide them.
ShopPay Issue
Customers can have trouble adding items to their cart, applying promo codes, or experience glitches that prevent smooth cart operations.        





For Shopify Brands, create a cart for them and send the checkout link. Else, follow General Website Issues Troubleshooting. 
Cart Functionality Error
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(troubleshootingWebsiteIssuesContent, 'content', 'standardWorkflows');
} 