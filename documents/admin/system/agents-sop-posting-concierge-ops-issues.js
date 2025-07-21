// Document content for Agents SOP for Posting in #concierge-ops-issues
const agentsSopPostingConciergeOpsIssuesContent = {
    id: '1c9pL9gMMSaHoHq4UWBtnEgH_w8h7aCsjfBsd24WvRyQ',
    title: 'Agents SOP for Posting in #concierge-ops-issues',
    type: 'doc',
    description: 'Standard Operating Procedure for agents posting in concierge operations issues channel',
    tags: ['admin', 'system', 'sop', 'concierge-ops', 'posting', 'guidelines'],
    content: `Agents SOP for Posting in #concierge-ops-issues

Background

The #concierge-ops-issues Slack channel exists to surface operational issues within our Agent UI and support collaboration between Agents, Agent Ops, and other Attentive teams.. This SOP outlines the proper workflow for when and how to post in the channel, as well as what agents are expected to do before and after posting. 



We commit to responding to all #concierge-ops-issues requests Monday–Friday in three batches: 11 AM, 3 PM, and 6 PM (EST).

You should still post regardless of the coverage schedule, but please note that if your post is outside of the coverage schedule, we will reply to you once coverage resumes.


When to Post in #concierge-ops-issues

The customer was informed they’d receive a discount code, but no discount code is available
The customer claims they never received their discount or welcome code
The brand persona name is not available
An automated message that was shared contains an error
The Concierge Offer displayed in the UI is invalid

Do not post about outdated templates/notes/promo notes. Instead, request a new template from the Conversation page. Be sure to include:
The source of the updated info
A short description of what needs to be changed


Workflow for Posting in #concierge-ops-issues
Before You Post:
Troubleshoot fully (see “Troubleshooting Guide” below)
Ask the customer for screenshots if needed
When You Post:
Include the following:
Conversation link
Brand name
Short description of the issue
After You Post:
Let the customer know you're checking with the team
Example: “I’m sorry for any inconvenience! Let me check with my team and I’ll follow up as soon as possible.”
You are responsible for customer follow-up
Once Ops responds, follow up with the customer within 5–10 minutes if you're still on shift
If your shift has ended, follow up first thing on your next shift
If another agent previously posted about the convo, and the customer is now asking for an update:
Check #concierge-ops-issues for a response
Follow up with the customer based on what was shared
You are now the one responsible for following up with the customer

Troubleshooting Guide

Customer Asking for Their Welcome Code


Customer Message
Example Phrases
Asking for the Welcome Code?
Notes
Explicitly asking for their welcome code
“Welcome code”
“I subscribed, where's the discount?
✅ Yes
The customer is clearly referencing the welcome offer
Just subscribed and requests an offer
“Code”
“Send me code”
✅ Yes
If the customer just subscribed, even vague requests for an offer, can be valid
Ambiguous but includes code specifics
“Where’s the 10%”
✅ Yes
Mentions of the discount percentage or exact promo tied to the welcome offer
General inquiry about discounts
“Any codes?”
“You got codes?”
❌ No
No matter when they ask, if it’s a broad question, it is not referring to the welcome code



Check if the customer should receive a code:
Opt-in message mentions a discount code
Website mentions a welcome offer for subscribing to Text Marketing, typically at the bottom of the website homepage 
The customer has provided proof that they should receive a code
If the customer was not supposed to receive a code:
Apologize, and inform the customer accordingly 
If the customer was supposed to receive a code, continue troubleshooting:
Look for a welcome code in the automated messages.
Search the UI for a Concierge code of equal or greater value
Search #concierge-ops-issues to see if a code was already requested/shared for the brand
General codes (e.g. WELCOME20) → OK to share
Unique subscriber codes (e.g. welc78njlwekd9) → Do NOT share

Before sharing any code, make sure it’s valid by double-checking it in a mock cart.

If there are no suitable codes available: 
Post in the #concierge-ops-issues channel

Welcome Code Isn’t Working

Check if the customer has already used the code on a previous order:
If they have, educate them accordingly
If there’s no clear record of prior use:
Create a mock cart
Check the Coupon Inspector
Check item eligibility
If the code is not valid on our end:
Post in the #concierge-ops-issues channel
If the code is valid on our end:
Request a screenshot of the customer’s cart
Share any exclusions or specific code details with the customer
Continue troubleshooting
If the code is valid and should work, check if the customer has subscribed before:
If they have subscribed → respond using the MKT template
If they have not subscribed, the code passes all checks, but still doesn’t work
Escalate or send to CS depending on notes

The Code We Shared Isn’t Working

Check:
If it’s expired → politely educate the customer
If it’s from a third-party website → politely educate the customer
If it’s supposed to be active and was just shared:
Check if we have a Concierge code that offers the same discount amount off, and share that instead
If there is no code available in the UI, search in #concierge-ops-issues channel to see if a code is available for the brand
General codes (e.g. WELCOME20) → OK to share
Unique subscriber codes (e.g. welc78njlwekd9) → Do NOT share

Before sharing any code, make sure it’s valid by double-checking it in a mock cart.

If the code is not valid, but was shared in an automated message:
Post in the #concierge-ops-issues channel
If the code is valid, but not working as supposed to: 
Escalate or send to CS depending on notes

Brand Persona Name Not Available

Search the conversation for automated messages that show a persona name:
If a name is available, use that name 
If none found:
Use the name Sarah

Errors in Automated Messages

If you notice any of the following issues in an automated message sent to the customer:
Typos
Broken links (e.g., link leads to a non-existent or incorrect page)
Outdated or incorrect information
After troubleshooting and confirming that the error is legitimate:
Post in #concierge-ops-issues

Concierge Offer is Invalid

If a Concierge Offer sent by a previous agent isn’t working, follow these steps to troubleshoot:
Create a mock cart
Check the Coupon Inspector
Check item eligibility
If the Concierge Offer is invalid, and there are no notes or promo notes to indicate that:
Post in #concierge-ops-issues


Journey Message Replies

This workflow only applies to journeys that offer the customer several options to select from (for ex. 1. Shirts, 2. Pants, 3. Hats, etc) or the journey instructs the customer to text in a keyword to receive personalized offers (for ex. DROP, STEAK, etc.). However, if the notes or brand-specific guidelines instruct otherwise, we do not follow this workflow and instead adhere to the brand-specific instructions.

These journeys allow customers to reply with specific keywords, which trigger automated responses and enable interaction with the brand. However, the keywords must be entered exactly as instructed in the journey message. If a customer enters a keyword incorrectly, or in some cases, even correctly, it may still cause the message to appear in the inbox. When that happens, we need to handle it according to the workflow outlined below.


Multiple Response Options in One Message 


Example:




If the customer sent only one message, close the conversation 
If the customer sent multiple messages, use the JNY template



Single Response Option (Correct Answer)
	
Example:



Close the conversation


Single Response Option (Incorrect Answer)

Example:



If the customer sent only one message, close the conversation 
If the customer sent multiple messages, use the JNY template (personalize the template as needed)


Customer Responds Again with a Keyword, After Receiving the Correct Automated Message

Example:



Close the conversation
  
Response with an Option Not Available in the Journey Message

Example:



Close the conversation












Customer Requests to Unsubscribe or to Stop Receiving Messages Based on Their Reply

Example:



Unsubscribe the conversation (shift + d)

If They Ask for Help or Pose an Inquiry, in The Same Message as The Journey Message Response 
We can reply regardless of the answer to the journey and assist the customer
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(agentsSopPostingConciergeOpsIssuesContent, 'admin', 'system');
} 