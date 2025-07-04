// Document content for Missing/Lost Items
const missingLostItemsContent = {
    id: '1t5eJs6BWsC4I1t9z1P7n_BB1Idj4j4kQjPGo8JkuUpg',
    title: 'Missing/Lost Items',
    type: 'doc',
    description: 'Guide for handling missing or lost item cases',
    tags: ['missing items', 'lost items', 'customer service', 'resolution'],
    content: `Missing/Lost Items
Deliveries don’t always go as expected. Items may arrive incomplete, tracking may stop updating, or packages marked as delivered may never turn up. These situations can frustrate customers and impact their trust in the brand.
  

Your role is to offer clear, efficient, and empathetic solutions. This guide outlines how to best handle missing or lost item reports using the appropriate workflows, templates, and tools.


1. Customer Claims They Didn’t Receive Specific Items


Step 1: [a][b]Check if Order History is available.


Step 2: If Order History is available and details are not already provided; ask them to confirm which specific items are missing and request a photo of the items they did receive.


Step 3: Review their Order History in the customer profile to determine the situation:


* If the missing items are not listed on the order confirmation page:
   * Educate the customer and kindly suggest placing a new order for the missing items. 


* If the items were shipped separately, as per the order confirmation page:
   * Educate the customer, provide the estimated delivery date, and tracking information if available. 


* If the items are on backorder or pre-order, as indicated on the items’ product page:
   * Inform the customer, include the estimated delivery date, and tracking information if available.


Step 4: If Order History is not available, or none of the above apply, follow relevant notes or templates with instructions on how to handle the specific issue or post-purchase issues.


* If no guidance is available, escalate the conversation.


2. Customer Claims They Received the Wrong Items


Step 1: [c][d]Check if Order History is available.
Step 2: If Order History is available and details are not already provided; ask them to confirm which specific items they received, which items they were supposed to receive and request a photo of the items they did receive.
Step 3:  Check the Order History to verify if there was an error
* If the items received match what was ordered:
   * Educate the customer accordingly and, if possible, kindly suggest initiating a return.
Step 4: If the items received differ from what was ordered, or if Order History is unavailable, follow relevant notes or templates with instructions on how to handle the specific issue or post-purchase issues.
* If no guidance is available, escalate the conversation.


3. Customer Claims There are No Tracking Updates and Suspects Order is Lost in Transit


Step 1: Check the tracking information on the order confirmation page, or review the conversation to see if it was previously shared.


* If the tracking details show movement or contradict the customer’s concern:
   * Provide clarification and educate the customer based on the available information.


Step 2: If tracking details are not available, or show no movement. 


* Refer to the Shipping time template to confirm if the package is still within the estimated delivery window.
   * If it is, kindly reassure the customer and provide the estimated delivery timeframe. Let them know they can reach back out if there are no updates beyond that timeframe.


  





Step 3: If the shipment is past the estimated timeframe, follow relevant notes or templates with instructions on how to handle the specific issue or post-purchase issues.


Step 4: If no internal instructions are available, politely direct the customer to contact the courier for more details and real-time updates.


Step 5: If the courier cannot provide a resolution, or if the customer insists on a response from us, escalate the conversation.




4. Customer Claims The Order is Stuck in The Label Created Stage


Step 1: Check the order confirmation page or any available tracking information to determine if the order is truly stuck at “Label Created.”


* If the order is progressing normally:
   * Reassure the customer and share the tracking link if possible.


* If the order appears stuck at “Label Created”, but is still within the estimated delivery window:
   * Send the LBL template to help clarify the situation.


  



Step 2: If issues still persist, follow relevant notes or templates with instructions on how to handle the specific issue or post-purchase issues.
* If no guidance is available, escalate the conversation.






5. Customer Claims They Never Received Their Order, but Tracking Shows It Was Delivered


Step 1: Send the STL template and if available, give more information about where exactly the tracking says the order was delivered.


  



Step 2: If the customer is unable to locate their order, direct the customer to the courier for resolution. Making use of the MV template.


  





Step 3: If issues still persist, follow relevant notes or templates with instructions on how to handle the specific issue or post-purchase issues. 
* If no guidance is available, escalate the conversation.




Tips & Tricks 


* Always be polite and empathetic. Remember the customer is sharing a frustrating experience, so we need to be able to reassure them and show empathy. 
* Never guarantee a reshipment or refund. Instead, assure them that you’ll resolve the issue in the best way possible.
* Put yourself in the customers’ shoes and always try to think of the most efficient ways to resolve issues for special cases. 
© 2025 Attentive Mobile Inc.                                                                                       
[a]This change would mean we need to change the missing items template
[b]Not necessarily. Since the temp is bundled w/ damaged workflow -  I was just thinking more that we ask which items are missing + dmi temp. If that makes sense
[c]This change would mean we need to change the missing items template
[d]Not necessarily. Since the temp is bundled w/ damaged workflow -  I was just thinking more that we ask which items are missing + dmi temp. If that makes sense`
};

window.missingLostItemsContent = missingLostItemsContent;

// Register with document registry
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(missingLostItemsContent, 'content', 'conversationTopics', 'postPurchase');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry) {
            window.documentRegistry.registerDocument(missingLostItemsContent, 'content', 'conversationTopics', 'postPurchase');
        }
    });
}
