// Document content for E-Commerce
const ecommerceContent = {
    id: '1p_e1vLAOCjvx3QrUYpP5MtbcuuHy3f39ViqMOHKd21g',
    title: 'E-Commerce',
    type: 'presentation',
    description: 'E-commerce overview',
    tags: ['e-commerce', 'online shopping', 'digital retail'],
    content: `E-Commerce

E-Commerce
What It Is
How It Works
Examples

E-commerce is the process of buying and selling products or services online. Instead of visiting a physical store, customers can browse, compare, and purchase items from their computers or smartphones. 
Whether it's ordering shoes, subscribing to a meal kit, or booking a service, e-commerce makes transactions faster, more convenient, and accessible anytime, anywhere.

What Is It?

E-Commerce
What It Is
How It Works
Examples

How It Works
Browse & Choose
Add to Cart & Checkout
Payment Processing
Order Fulfillment & Delivery
Customers visit an online store, explore product categories, read descriptions, and check reviews before deciding what to buy.
Once they’ve made a choice, customers add the item to their cart, enter their shipping details, and choose a payment method.
The online store processes the payment through a secure system, ensuring transactions are safe and verified before the order is confirmed.
The order is packed, shipped, and delivered to the customer, who can track their package in real time.

E-Commerce
What It Is
How It Works
Examples

HeyDUDE is known for its lightweight, ultra-comfy shoes and its smooth online shopping experience. With a user-friendly site, easy checkout, and fast shipping, customers can find and buy their perfect pair hassle-free. By focusing on direct-to-consumer sales and smart online marketing, it’s has grown into a global success.


HeyDUDE

E-Commerce Simplifies Shopping
Buying and selling online makes transactions faster, easier, and more accessible.
The Process is Straightforward
Customers browse, add to cart, check out, and receive their orders - all from their devices.
Secure Payments Are Crucial
Safe and reliable payment processing builds trust with customers.
Customer Experience Drives Success
A well-designed website, clear product info, and smooth checkout keep shoppers engaged.
Logistics Keep It Running
Efficient order fulfillment, tracking, and delivery ensure customer satisfaction.
Key Takeaways
`
};

window.ecommerceContent = ecommerceContent;

// Register with document registry
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(ecommerceContent, 'content', 'intro');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry) {
            window.documentRegistry.registerDocument(ecommerceContent, 'content', 'intro');
        }
    });
}

