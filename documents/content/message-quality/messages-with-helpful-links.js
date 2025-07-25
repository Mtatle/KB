// Document content for Messages with Helpful Links
const messagesWithHelpfulLinksContent = {
    id: '1VYRBNSJMcBH58ynQlFFK0WZuNu6roRCwpF57Cp8DZug',
    title: 'Messages with Helpful Links',
    type: 'doc',
    description: 'Guidelines for including helpful links in messages',
    tags: ['content', 'message-quality', 'links', 'helpful', 'guidelines'],
    content: `Messages With Helpful Links
Helpful links are non-product-specific URLs sent to customers to provide important information, accelerate resolution, or clarify a policy or process. Unlike product or checkout links used to drive purchases, helpful links are designed to provide general brand assistance and educational value.
  



Key Note: Links should never be sent on their own to the customer. We always need to address their initial question or concern, and provide a direct answer. However, keep in mind that responses should be SMS-friendly. If the answer becomes too long, detailed, or difficult to read in a text format, it’s best to include a link instead.   


That being said, we can also avoid sharing links if we’re able to clearly convey the same information directly in our message while still providing the same level of assistance.


1. Website Reference Links


These are direct links to pages on the brand’s website that help customers resolve their issues or understand a policy.
Common types:
* Return policy page
* Return portal
* Warranty details
* Size chart or measurement info
* Loyalty or rewards program page


Compliance Example


Below is an example of how we share a link to provide the customer with additional information related to their inquiry.


  



Non-compliance Example


If a customer reaches out about exchanging an item, we always direct them to the appropriate exchange template for the brand. If no specific exchange template exists, or if the customer is simply looking to return the item, we would provide the return policy (rp) template along with a link to initiate the return (when available).


  



Compliance Example


In this example, while we respond to the customer’s direct question, we overlook the underlying issue, that they received the wrong size and may want to return it. In the revised example below, you’ll see how we address the concern with empathy and provide a more complete and helpful response.


  





2. Links to Screenshots


We usually only send links to the brand’s website or ones related to the specific order. However, one exception to this rule is links to screenshots. When customers can’t see something on their end or need visual support, we use a screenshot link to communicate the message clearly.


Use screenshots when a visual is necessary to clarify or confirm what words cannot. 
Or if a visual aid would better support the customer.
	

When to Use Screenshot Links: Common Scenarios


* Comparing two products or specs (e.g., TV model features)
* Displaying a mock cart (for non-Shopify brands) that can't use checkout links
* Showing site UI elements that the customer is missing
* Highlighting important measurements or features hidden in dropdowns
* Confirming order status visuals or shipping confirmations
        
We send screenshots by specifically including a Lightshot link. Here is an example of a working Lightshot screenshot: https://prnt.sc/0loB-0VdxTYE


How to Send a Lightshot Link
1. Take a screenshot of the needed section by pressing PRT SCR (Print Screen) key, or pressing the Lightshot Icon usually available in your taskbar. 
2. After taking the screenshot, press CTRL/CMD + D, or click on the “Upload to prntscr.com button”. 
3. Copy the generated link.
4. Double-check that the image link is clear and accessible.
5. Add it to your response.


Non-compliance Example


In this example, although a resolution was provided, it was not the most effective or efficient approach. This would have been an ideal opportunity to share a screenshot link comparing the two TV models the customer inquired about.


  



Compliance Example


Here’s a sample response that more effectively addresses the customer’s issue by offering a visual explanation and saving them the trouble of using the tool themselves:


  







© 2025 Attentive Mobile Inc.`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(messagesWithHelpfulLinksContent, 'content', 'messageQuality');
} 