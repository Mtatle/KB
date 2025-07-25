// Document content for Baby Quip Training Guide
const babyQuipTrainingGuideContent = {
    id: '1qfRLCHFhBBGC4Fd8dBjSB1om0toCqaJJIn_3wxb8Evo',
    title: 'Baby Quip Training Guide',
    type: 'doc',
    description: 'Training guide for Baby Quip brand interactions',
    tags: ['content', 'baby-quip', 'training', 'guide', 'brand'],
    content: `BabyQuip Training Guide


About the brand

BabyQuip is a platform that connects traveling families with local "Quality Providers" who rent out baby gear and other baby-related items. Their goal is to make traveling with young children more convenient and stress-free for parents. 
They offer thousands of baby gear items in over 1200 cities across the US, Canada, Mexico, the Caribbean, Australia, and New Zealand.

BabyQuip does not make or manufacture any of the products listed on its website. The Quality Providers rent equipment such as full-sized cribs, strollers, car seats, toys, books, high chairs, carriers, noise machines, baby baths, bouncy seats, pack ‘n plays, monitors, jumpers, etc.


What is a BabyQuip Quality Provider?

Independent Quality Providers (QPs) are independent business owners who rent, deliver, and set up clean, safe, and insured baby gear that customers can own at hotels, Airbnbs, vacation rentals, and private residences. QPs are gig-economy moms, dads, retirees, or best friend teams who are building a baby gear rental business on the BabyQuip platform.


Does BabyQuip ship the equipment?


No, BabyQuip does not ship. 
Quality Providers deliver the equipment. Customers can look at the Quality Provider pages to see where they deliver and how much they charge.



Where do Quality Providers deliver?

Customers can chat with their QP to arrange delivery details. Deliveries can be made directly at airports, hotels, resorts, vacation rental properties, and even family residences. Customers can also choose to do self-pickup and self-return.

How does it work?

To rent equipment, customers must have four pieces of information handy in order to filter out listings that are suitable for them:

Where
When
Delivery window
Pickup window


After entering this information, the site will pull up all Quality Providers in the area.

Customers can view all the items listed for rent by each Quality Provider.



















































They can also filter and browse through the listings of available gear in the area. They can filter by category, such as "strollers" or "car seats," and sort by brands, price, or rating. 





















They can also use the search bar to search for an item that may not be listed in the filters.



















When they find an item they would like to rent, they can click on the "Add to Cart" button. They can add multiple items to their cart before checking out. They can review their booking details, including the rental period and the total cost. They can also add any special requests or notes for the Quality Provider, such as delivery instructions or specific gear preferences.

They will then enter payment information to confirm the booking. Once the booking is confirmed, they will receive an email confirmation with the details of the rental, including the Quality Provider's contact information.

When they are finished using the gear, they return it to the Quality Provider in the same condition in which it was received. The Quality Provider will inspect the gear and confirm that it is in good condition before returning the security deposit, if applicable.

General Inbox Workflow

Some of the workflow for BabyQuip is different from other brands that we support. Here are a few things we do differently for BabyQuip:


For Delivery:


Do not use the word “ship”. They only deliver.
Any pick-up, drop-off, or post-reservation questions are directed to the Quality Provider. Use the temp "Post reservation updates".
For complaints about delivery being expensive, use the brand-specific “ste” temp.


For cancellations and edits: 

Cancellations and edits are done through the customer’s account. Always use the “CED” template to provide instructions. [You can find the policy details here]
Only ESC IF the customer can't reach the provider and wants to cancel/edit the reservation. 


What to ESC:

ESC any issues with discount codes.
ESC if cx didn't receive their order/the provider did not show up.
Please escalate the following scenarios:
➜ A customer mentions they are leaving and never returning
➜ A customer is going with a competitor
➜ A customer mentions reporting BabyQuip to the Better Business Bureau
➜ A customer is generally frustrated or angry with BabyQuip

Note:
If the customer asks for a phone number, we will never send BabyQuip’s number. Instead, send them the Quality Providers' phone number. 
Open the provider’s profile > on the left, you'll see "message provider”












For recommendations:

First, find out the delivery location before sending links.
Always provide links with the proper area the customer is from! You can check the link they were viewing to get that info!
Always send specific products and not a long list of providers.
If recommending multiple items, suggest items only from ONE provider.


Other:

Use the "onboarding" template for onboarding questions/how to become a quality provider, or if a QP reaches out.
If affiliates reach out about their account (commissions, property management, etc.), use the relevant template by searching the keyword “affiliate” in the templates.
Let the customer have the last word.
Close the conversation if customers respond with "no" to campaigns.
Do not ask cx for the reservation confirmation number.


`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(babyQuipTrainingGuideContent, 'content', 'content');
} 