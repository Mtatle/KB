// Document content for Personal Information Process
const personalInformationProcessContent = {
    id: '1-xCyJdTC-vOhEbdAUCeZIQg7zTjutrMJys0ESLvhybY',
    title: 'Personal Information Process',
    type: 'doc',
    description: 'Process for handling personal information and privacy',
    tags: ['content', 'compliance', 'personal', 'information', 'privacy', 'process'],
    content: `Personal Information Process


In order to maintain data security and privacy, we must ask that customers provide their own information to minimize the risk of revealing sensitive details. 


What is considered personal information? 


Personal information includes any data that helps us uniquely identify the individual customer. This includes, but is not limited to: 


* Phone number
* Email address
* Credit card information
* Shipping/Billing address


Note: Order numbers aren’t considered personal info, because they are used to identify transactions and not the individual customer. Therefore, we can continue to confirm these from the UI. 


Workflow


We will refrain from confirming personal details via the UI and instead request customers to provide this information themselves. 


We also should not verify order details by sending the order confirmation link. This includes if the order confirmation page has blurred information, as we cannot guarantee it will be censored for the customer upon receipt.


We should only send the order confirmation link once we’ve confirmed their order number and email address, and the info provided matches the one in the UI.


Utilizing the order confirmation link for verifying order details may pose privacy concerns for our customers. It contains a significant amount of personal information, and there is a possibility that customers may express apprehension regarding the extent of data accessible through this link.


________________


Illustration of Compliance
If customer info is available in UI
	Compliance
	Non-Compliance
	  

	  

			

		If no info is available in the UI
	Compliance
	Non-Compliance
	  

	  





	

Useful FAQs


1. What should we do if the information the customer gives us does not match what we see in the UI?


If the email address they provided has a typo in it, ask them to confirm their full name and shipping address to verify.


If the email address they provided is completely different than what is shown in the UI, ask them if it is possible that they used a different email address to place the order. If that email still does not match, or they say no, ask them to confirm their full name and shipping address to verify.




2. What if the customer asks us to cross-check the personal information on our end, and we have it in the UI?


First, we'll request their email address and confirm or ask for their order number. Only after receiving or confirming these details can we send the requested information to the customer.


3. What if AI has already mentioned the customer’s personal information? Do we still ask for them? 


Unless confirmed by the customer, we can still ask for them. We need to get a hard yes from the customer when verifying.


4. Can we still call customers by their name, or do we wait for them to introduce themselves to us? 


Yes, we can. Journeys use our customers’ first names most of the time.


5. Can we still send tracking and order confirmation links, since they contain personal information?


Order confirmation links: After the customer provides their email address and confirms their order number, we can send the order confirmation link. If details aren't confirmed or don't match, we should not share the link.


Tracking information/links: We can send tracking information since technically, the tracking number is not personal information.`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(personalInformationProcessContent, 'content', 'compliance');
} 