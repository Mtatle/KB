// Document content for Attentive Messages
const attentiveMessagesContent = {
    id: '1yTXSjLQ2u2BTnUYsG0XDyRJ8vx_mdegMXu521SW6XdM',
    title: 'Attentive Messages',
    type: 'presentation',
    description: 'Guide to attentive messaging',
    tags: ['attentive', 'messages', 'communication', 'customer service'],
    content: `Attentive Messages
Attentive powers some of the most engaging and effective messaging campaigns for brands looking to connect with their customers in a meaningful way. From driving sales to delivering important updates, the platform offers a variety of message types designed to enhance the customer experience.
Today, we’ll highlight some of the most common message types brands use to engage their audiences, boost conversions, and build long-term relationships. Let’s take a closer look!


Campaign Messages
Customer Journey Messages
Interactive Journey Messages
Transactional Messages
Attentive Messages

Campaign Messages
Product Launches 
Limited Offers
These messages aim to inform customers about special offers, discounts, or time-sensitive deals to encourage immediate action.
Announcement of new products, creating excitement and urgency to check them out.
Promotion of short-term discounts or deals to drive immediate action.
First up, we have Campaign Messages - these are all about promotions, sales, and exclusive offers that get customers excited and ready to shop.
These include:Product Launches – Whenever a brand introduces a new collection or product, they need to get the word out fast. A well-timed message can create excitement and urgency, letting customers know they can be among the first to shop. Think of a sneaker brand dropping a limited-edition release - this is where a product launch message builds hype.
 Limited-Time Offers – Sometimes, customers need a little nudge to make a purchase. Limited-time offers create urgency by giving them a reason to buy now rather than later. 


Campaign Messages
Coupon Offers
Seasonal/Flash/Exclusive Sales
These messages aim to inform customers about special offers, discounts, or time-sensitive deals to encourage immediate action.
Highlighting of ongoing sales to boost conversions.
Proactive offers of coupons to customers to incentivize purchases. 
Coupon Offers – A well-placed discount code can turn a hesitant shopper into a loyal customer. These messages are great for first-time buyers, VIP customers, or even as a reward for engagement.
Seasonal, Flash and Exclusive Sales – Brands often tie their biggest promotions to seasons or special events - think Black Friday, back-to-school sales, or exclusive member-only discounts. These campaigns help brands stay top of mind and drive major spikes in revenue.
But what happens once a customer starts their shopping journey? That’s where the next type of messages come in.

Campaign Messages
Customer Journey Messages
Interactive Journey Messages
Transactional Messages
Attentive Messages

Customer Journey Messages 
Welcome Series
Abandoned Cart Reminder
Browse Abandonment Reminder
These messages are tailored to specific stages in the customer lifecycle, enhancing engagement and fostering loyalty.
Greeting of new subscribers with an introduction or first-time discount.
Reminder of items left in the cart, sometimes including an incentive to complete the purchase.
Reminder of products viewed but not added to the cart, encouraging customers to return and complete their purchase.
Customer Journey Messages - these help build a strong connection with customers throughout their shopping experience.
Welcome Series – The first interaction with a brand sets the tone for the relationship. A welcome message is a great way to introduce a brand, share an exclusive offer, or highlight bestsellers. Think of it as rolling out the red carpet for new subscribers.
Abandoned Cart Reminders – Ever browse a website, add something to your cart, and then forget about it? Customers do this all the time. Abandoned cart messages remind them about what they left behind and encourage them to complete their purchase - sometimes with an extra incentive.
Browse Abandonment Reminders – Even before adding an item to their cart, customers often browse a site and leave. A reminder about what caught their eye can be the push they need to come back and shop.


Post-Purchase Follow-Up
Back-in-stock Alerts
These messages are tailored to specific stages in the customer lifecycle, enhancing engagement and fostering loyalty.
Sending of thank-you messages with review or feedback requests.
Notifications when high-demand out-of-stock items become available again.
Customer Journey Messages 
Post-Purchase Follow-Ups – Once a customer makes a purchase, the conversation shouldn’t end there. Following up with a thank-you message, a review request, or an exclusive offer for their next purchase helps build long-term loyalty.
Back-in-Stock Alerts – Sometimes, the demand for a product is higher than expected, and items sell out fast. Back-in-stock messages make sure interested customers get notified when their favorite items are available again.
But, there are other ways to make messages more interactive! 



Campaign Messages
Customer Journey Messages
Interactive Journey Messages
Transactional Messages
Attentive Messages

Interactive Journey Messages 
Subscription Preferences
Personalized Recommendations
These messages encourage two-way communication, allowing customers to engage directly with the brand for support, feedback, or inquiries.
Allowing of subscribers to choose what type of updates they’d like to receive.
Asking customers what type of product recommendations they’d like to receive depending on their needs.  
Customer Support Offers
Responses that offer assistance and redirect to live agents.
Sometimes, the best messages are the ones that invite customers to engage! That’s where Interactive Journey Messages come in.
Subscription Preferences – Not everyone wants the same updates. Giving customers control over what types of messages they receive helps build trust and keeps engagement high.
Personalized Recommendations – Sometimes, customers aren’t sure what product is right for them. These messages help guide them to the best option based on their needs, making the shopping experience feel more tailored and helpful.
Customer Support Offers – Customers more often than not, need quick answers. These messages provide instant support options, and redirect customers to a live agent.
Then finally, let’s talk about the essential messages that keep customers informed.


Campaign Messages
Customer Journey Messages
Interactive Journey Messages
Transactional Messages
Attentive Messages

Transactional Messages 
Order Confirmations
Shipping Notifications
Auto-shipment Updates
These messages provide essential information regarding a customer's interactions with your brand, ensuring they are informed about their transactions and orders.
Sending of purchase details after checkout.
Provision of real-time tracking for orders in transit.
Notifications for when a subscription has started or when the next shipment is scheduled to ship.
Let’s look into: Transactional Messages - these provide important order updates so customers always know what’s happening.
Order Confirmations – Immediately reassuring customers that their purchase was successful and providing order details.Shipping Notifications – Letting customers track their order, from shipment to delivery.Auto-Shipment Updates – For subscription-based products, these messages keep customers informed about important updates, such as when their next order will be processed and shipped or when their next payment will be charged.




Attentive Messages
And that’s a quick look at some of the most common Attentive message types! Of course, Attentive offers even more ways to connect with customers, but these are some of the biggest game-changers.
By using a mix of campaign, customer journey, interactive, and transactional messages, you can create a seamless and engaging customer experience.


`
};

window.attentiveMessagesContent = attentiveMessagesContent;

// Register with document registry
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(attentiveMessagesContent, 'content', 'intro');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry) {
            window.documentRegistry.registerDocument(attentiveMessagesContent, 'content', 'intro');
        }
    });
}

