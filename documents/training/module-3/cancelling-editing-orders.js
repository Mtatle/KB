// Document content for Cancelling and Editing Orders
const cancellingOrdersContent = {
    id: '1GPwyy4Y0hAq9HIrSJ-0XPcb9kPOz7kGDR6nIRF6xMhw',
    title: 'Cancelling and Editing Orders',
    type: 'presentation',
    description: 'Training module on cancelling and editing customer orders',
    tags: ['training', 'module3', 'cancelling', 'editing', 'orders'],
    content: `Canceling and Editing Orders

Content
Canceling and Editing
Cancel/Edit Requests
Brand FAQ/Policies
Post-cancelation Issues

Canceling and Editing

Canceling an Order
Editing an Order
What is Canceling and Editing
Canceling and editing an order are both actions taken before an order is processed or shipped. They allow changes to be made, whether that means stopping the order entirely (canceling) or adjusting specific details (editing), to better align with the customer's needs
The entire order is voided before it ships
The customer will not be charged, or will be refunded if already charged
No items will be sent
Changes are made to the existing order before it’s processed/shipped
This may include updating a shipping address
Or changing an item quantity, size, or product altogether

Handling Cancel/Edit Requests



A template that serves as the primary response for handling Cancel/Edit requests


As always, be sure to check notes or related templates for additional context or guidance on the topic


This can be done by reviewing the order’s tracking information, typically found under Order Details, in the customer’s message, or within an automated journey update
Confirm if the order has already been shipped
Review the relevant CED template
Check any brand-specific information
1
2
3
First Steps

Why check if an order has shipped?
Once an order has shipped, most brands cannot make changes or cancel
If a customer requests an edit or cancellation after shipment, we will not follow the CED template in that case. Even if the template suggests escalation or sending to CS
Order Has Shipped
Unless notes or templates, specifically instruct us to do so

Keep in mind that the order confirmation page may not always display the most up-to-date information, as shown in this example. Always check tracking information as well when it’s possible to do so
Order details will be available on the left hand side of the UI
Check whether a tracking number or link is available
If a tracking number is available, it typically indicates that the package is already out for delivery meaning, in most cases, it can no longer be canceled or edited
How to Check Order Tracking

If the notes or templates indicate that we should send the case to CS
We should follow through and send the customer to CS. Starting of by apologizing, and usually providing the ced template
If the order has not yet shipped / there are no shipping details available, and no brand restrictions apply 
If notes or templates instruct us to gather information
Check Customer Information for an order #, apologize to the customer, and prepare for an escalation usually using the ced template
If the Order Has not Shipped

Based on the Customer's request we will either
Cancellations & Edits
Shipping Address Changes
Apologize and let the customer know the order is already on its way
Explain that orders in transit can’t be canceled/edited
Advise the customer to return if possible
Let the customer know the brand likely can’t update the address
Suggest they contact the courier for a delivery change
1
2
3
1
2
If they push back in either scenario, we’ll escalate or send to CS per the CED template
If the Order Has Shipped

However, brand-specific information can overrule this workflow. If the information indicates
They allow changes/cancellations after shipment in the notes or templates
Follow the brand’s rules, and respond accordingly
These issues require immediate escalation / sending to CS
Workflow Exceptions

In some cases, the brand may not allow any edits or cancellations at all. If that’s the case, it will be clearly stated in the CED template
Always review any notes associated with the scenario as well!
If the template clearly states that cancellations and edits are not allowed:
Politely inform them using the CED template
Suggest they wait and process a return if viable
Directly apologize to the customer
1
2
3
Workflow Exceptions

Brand FAQ/Policies

If there is no brand-specific information available in the UI
Default to the notes & templates, but use FAQ as a last resort
We are supposed to check if any information is available on the website regarding Canceling and Editing orders
If you find any information share it with the customer and request a template
Checking Brand FAQ/Policies

Post-cancelation Issues

A customer reaches out wanting to reuse a discount code from a previous order that they either cancelled or returned
Empathize with the customer if appropriate
Let the customer know that the code may not work because it was already used on their previous order
Check the UI for any active discount codes that provide the same discount
If available, share these alternative codes with the customer
If no equivalent codes exist, follow the notes and either:
Escalate the request
Send the Customer to CS
Step 1
Step 2
Be transparent and polite in your response
Step 3
Step 4
Code Applied to Cancelled Order

`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(cancellingOrdersContent, 'training', 'module3');
} 