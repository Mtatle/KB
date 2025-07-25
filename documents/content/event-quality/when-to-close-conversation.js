// Document content for When to Close a Conversation
const whenToCloseConversationContent = {
    id: '1gEqkOP2lJW37bzRptpqSY7Hdh8Jq7FyxEJK6P-oOeOY',
    title: 'When to Close a Conversation',
    type: 'doc',
    description: 'Guidelines for when to close customer conversations',
    tags: ['content', 'event-quality', 'close', 'conversation', 'guidelines'],
    content: `When to Close a Conversation  
Why do we close a conversation? 
Once you are set as available, the app will start to round-robin assign everyone messages. These messages will either need a reply or require an action to take place, i.e. close, unsubscribe, or block.


Closing a conversation means that we no longer need to reply to the customer, or the customer’s message does not warrant a reply. We do not close any conversation with a customer that still needs assistance. 
How do we close a conversation? 
We manually close a conversation by either clicking on the Close button here:
This can also be done by using Ctrl + C on Windows and Cmd + C on Mac.   
Chats will automatically close when


* We unsubscribe the customer (Shift + D) or if the customer texts STOP, UNSUBSCRIBE, or any message similar to wanting to be opted out of our messaging system
* We blocklist a customer (Shift+B)
Important differentiation
  

* Close (cmd/ctrl + shift + enter): We use this feature for any of the situations that no longer require a reply
* Close and Unsubscribe contact (shift + D): We only use this feature if a customer wants to be unsubscribed from our messages; more information can be found in the When to Unsubscribe document
* Close and Blocklist contact (shift + B): We only use this feature if we’re blocking a customer; more information can be found in the When to Blocklist document
When do we close a conversation? 


The Message is Not Meant For Us
	Our Reply Adds No Value
	Our Reply is Unnecessary
	Customer Asks a Question More Than Two Times
	Messages like lists, incoherent symbols, and/or letters and sentences that are incomplete
	When an agent sent a closer and the customer responded with a closing statement
	The customer sends a message that lacks context or is irrelevant
	If a customer asks the same question that was already answered by a prior agent
	  

	  

	  

	  

	



1. The message is clearly not meant for us


* These situations can look like:      
2. Our reply adds no value to the conversation


   * If another agent has already used a conversation closer (e.g., NW, NP, or similar), and the note says “Let the customer have the last word,” there's no need to reply if the customer sends a closer like “Thanks”,  “OK,” “got it,” or “fine.”. 
   * If there's no such note, you may respond once to acknowledge and wrap up.
3. Situations when a reply is unnecessary (these are examples and not all situations can be listed):


   * Customer sends a reaction to our last message
   * Customer texts in “Y” or copy-pastes the message to subscribe to texts
   * Customer has an automated text set up for when they’re driving
   * Customer replies to a journey
   * For more information, please see our Agents SOP for Posting in #concierge-ops-issues guide
   * Customer sends an emoji without any further context
   * Customer sends just their promo code without any context that makes it relevant
   * Customer sends a phone number without any context that makes it relevant
   * Customer sends a broken image(s) at the beginning of the conversation, or a blank first message without additional explanation


4. Customer asks a question more than two times


   * If a question is not related to any issues, concerns, products, or pending escalations, you can close the conversation after we have answered it twice
   * e.g., Customers asking for free things, wanting to meet the brand’s founder, etc.
4. Mental health crises
   * Messages related to mental health can vary, from expressions of emotional distress to direct mentions of self-harm or suicidal thoughts. 

      * These should always be handled according to the guidelines in ourHandling Emergencies & Sensitive Issues deck
      * After expressing care and sharing the appropriate resources, it's important not to stay engaged in conversations that go beyond your role. At that point, it's okay to close the conversation


When can you reply?
      1. If there is any relevance to the products on the website
      2. If they send in a number that could be an order number
  
      3. If they text an email address, they might need help with an existing order.
      4. If they ask for help in the same message as the journey message response  


         5. If the client responds directly to the customer with a white message box (not an automated journey message), and both of the following conditions are applied at the same time:
         * There’s a note in the conversation saying “Close the convo once the client takes over”
         * If this happens after 4 PM
         1. For more information regarding this workflow, please read the following article. Some automated messages may look like client responses, as indicated below. 




          Automated message  
	                     Client response  
	Non-compliance can look like
1. When our reply is unnecessary


         * If the customer sends a reaction to our last message
  

         * If a customer texts in “Y” or copies/pastes the message to subscribe to texts
  

         * If the customer has an automated text set up for when they’re driving
  











         * If the customer replies to a journey with more than 1 answer


  

         * If the customer has already received an automated message for their journey reply
  

         * If the customer sends any emoji without context




  





         * If a customer says their initial message wasn’t for us
  

         * Customer sends a broken image or a blank message first without additional explanation
         * If you receive a “Thanks”, “OK”, “got it”, “fine”, “likewise”, and it is clear that the conversation has come to a close and there’s a note to let the customer have the last word.`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(whenToCloseConversationContent, 'content', 'eventQuality');
} 