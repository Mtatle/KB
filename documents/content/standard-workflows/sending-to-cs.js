// Document content for Sending to CS
const sendingToCSContent = {
    id: '1mjBNfpQ6HJS7hhqxLOvSNYvaLLQHEREE4gAo1g9WObs',
    title: 'Sending to CS',
    type: 'presentation',
    description: 'Guidelines for sending customers to Customer Service',
    tags: ['content', 'standard-workflows', 'sending', 'cs', 'customer-service'],
    content: `Sending to CS

Overview
Scenarios
When NOT to send to CS
Sending to CS
Redirecting Professionally

Why Do We Forward Concerns?
Unfortunately, not every customer issue can be resolved directly via the UI. In some cases, specialized support is required to resolve complex inquiries. Forwarding customer’s concerns to the brand’s Customer Support (CS) ensures that the right experts handle these cases. This helps us and Brands maintain:
Customer Experience
Customer Retention
Positive Brand Perception

How We Forward Concerns
We forward issues to the client using two methods
Escalations
Sending to CS

What Is “Sending to CS”?
This bypasses our internal escalation system
Once the customer reaches out, CS will reply to them directly, and we will not be part of the resolution process
Forward the Customer
Customer Reaches out to CS
CS Replies
CS Handles All Further Communication
Sending to CS directly means asking the customer to reach out to the support team themselves, usually via email
When we send to CS:

Overview
Scenarios
When NOT to send to CS
Sending to CS
Redirecting Professionally

Scenarios Which We Send To CS
If a customer issue goes beyond what we can troubleshoot ourselves and needs to be forwarded to the appropriate team, our default option is to escalate. However, there are certain situations where we need to send the customer to CS instead. Those situations are:


Brand notes say to send to CS for specific issues (after troubleshooting or immediately, as stated)
Brand notes


Appropriate Brand-specific templates require contacting CS
Brand-specific templates


Customer insists on emailing or calling
Customer insists


Customer is asking about physical store availability
Physical store availability


Wholesale, ambassador inquiries or tech issues
Certain inquiries


Images won’t load in the UI after 2 tries, and they're essential for resolution
Images won’t load

If not, the CS template is our default option
Brand Notes
Look for specific instructions under “Escalations” or “Send to CS” sections
1
If notes say “No escalations, send everything to CS”, we never escalate!
2
However often notes are issue-specific, e.g., “send to CS for post-purchase issues”. In that case we would only send to CS in those specific scenarios
3
Always Follow the Notes!
When sending to CS
If the notes point out a specific process or template we follow it

Brand-Specific Templates
If a template includes sending the customer to CS and it's suitable for the issue, we should make sure to use it
1
Templates like CED (Cancel/Edit Order) and DMI (Damaged Item) can send to CS even if notes don’t mention it
2
Never use the general CS template if there is a brand-specific template for that situation
3
Rules on Brand-Specific Templates
CED template example
DMI template example

Customer Insists
If a customer insists on emailing CS, provide them with the appropriate template (CS, or brand-specific)
1
If the customer asks for phone support, use the PS (Phone Support) template
2
Adjust the ending of the PS template if it doesn’t match the conversation’s tone or context
3
When the Customer Wants to Contact CS
PS template example

Physical Store Availability
If the customer is asking about stock in a physical store, see if there’s a way to check specific product availability on the website. If not, and the notes allow for it, provide the phone number of the specific store.
1
Do not escalate or send to CS unless notes say otherwise
2
An Outlier to the Workflow
Example of a store’s phone number

Specific Inquiries
Use templates like WLS (Wholesale) or AMS (Ambassador/Sponsorship) where available
1
If templates aren’t available and no resources exist in the UI or website
2
Use the general CS template or follow brand notes if they specify a template
3
Wholesale, Sponsorship, Jobs
WLS template
AMS template
Technical Issues
If there is a confirmed technical issue on the website, direct the customer to cs. Read more on: Troubleshooting Website Issues 

Images Won’t Load
After the first failed attempt, ask the customer to provide key details shown in the screenshot that may help us troubleshoot (e.g., the specific error message or items in their cart).
1
If the screenshot is essential for resolution or the customer is unable to provide those key details, ask them to try sending the screenshot one more time.
2
If the second attempt also fails, send to CS.
3
Conversation example
When a customer’s screenshot fails to send:

Sorry, the image you sent didn't come through. Could you share a few details from the screenshot that might help me troubleshoot? What specific issues are you experiencing? Otherwise please try resending it. I would be happy to assist you!

SUBSCRIBER
AGENT
SUBSCRIBER
Thank you! It looks like it still won’t load, apologies for the trouble. The best way to resolve this issue is to email us directly at cs@brand.com
AGENT

Overview
Scenarios
When NOT to send to CS
Sending to CS
Redirecting Professionally

When NOT to Send to CS
Do not redirect to CS if
The situation doesn’t fall under one of the approved redirect reasons 
1
If there are no notes we escalate. That is our default way of forwarding an issue
2
The brand note says “always escalate”
3
Only in the previously mentioned scenarios, we send to CS!

Overview
Scenarios
When NOT to send to CS
Sending to CS
Redirecting Professionally

Redirecting Professionally
When conveying the redirection to CS, the language should be clear and be empathetic
Always begin by acknowledging the customer’s concern, showing understanding of their situation
Even if it’s not written in the template, empathy is really important. If a customer is facing an issue or any kind of inconvenience, we should always apologize and show that we understand how they feel
Make sure to adjust the template if parts of it don’t fully match the context of the chat
The message should feel like it's from within the brand, not as if we're simply passing the customer along
If a customer says they reached out to CS already and are awaiting a response, we should ask them to check their spam and promo folders!
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(sendingToCSContent, 'content', 'standardWorkflows');
} 