// Document content for Covercraft Link Guide
const covercraftLinkGuideContent = {
    id: '1B4AxcnQkfUcM_0Wv68nq7dbDBiWb4XTb9GfWtJCjfT8',
    title: 'Covercraft Link Guide',
    type: 'doc',
    description: 'Link guide for Covercraft brand interactions',
    tags: ['content', 'covercraft', 'link', 'guide', 'brand'],
    content: `Covercraft Link Guide
We've created this guide in response to ongoing challenges with sharing product links for Covercraft. Because their site is built around vehicle-specific compatibility, standard links, like those from the search bar or general navigation fail to reflect the customer’s actual vehicle and instead, only display products based on the customer’s or our own previous browsing cache. This can lead to confusion, irrelevant product suggestions, and a frustrating experience for the customer.
This guide outlines the correct method for generating general product links that are tailored to a customer’s vehicle, along with best practices for sharing specific product links and handling special cases like promotions or non-product pages.
Please follow these steps carefully and refer back to this guide as needed, it's now part of our standard workflow for Covercraft.
How to Share Accurate General Links
To ensure vehicle-specific accuracy, follow these steps:
Use “Select Your Vehicle”:


Choose Year → Make → Model (all fields required).


After selecting the vehicle, either:


Click “Shop” without choosing a Category (defaults to all products), or


Select a specific product Category before clicking “Shop.”


Copy and share the resulting URL.


This link is now filtered to the chosen vehicle and will reflect correctly regardless of cache or previous browsing history.


Optional: Use sidebar filters to narrow results further (e.g., color, material, etc.).


 Only this method ensures an accurate general link for a customer’s vehicle.


 What Doesn’t Work for General Links
Search Bar or Navigation Dropdowns: These do not carry vehicle-specific filters into the URL and can lead to irrelevant results.


Partial Vehicle Selection: The system does not allow it; full input is required.


Submodel Filtering: Not available until the product page level.


 Sharing Product Page Links
Product links remain valid regardless of vehicle selected on either end.


The vehicle name displayed, may reflect prior selections (or none), but:


The product remains relevant if found via proper vehicle filtering.


We can manually enter full vehicle info on the product page to confirm fitment.


 Important: When sharing a product link, confirm and note:
Submodel


Any additional fitment details


Special Cases
Special Offers Page:


Cannot be filtered by vehicle.


Instead, when necessary it is possible to locate applicable products and send individual product links, or send the entire Special Offers page in case the customer is generally interested in discounts.


Non-Product Pages (e.g., FAQs, Warranty Info):


Safe to share as-is. No filtering issues.


Best Practice:
To ensure product relevance, only share general links using the “Select Your Vehicle” feature. For product-specific links, verify vehicle fitment before sharing. Always avoid using general navigation or search-generated URLs for customer communication.

`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(covercraftLinkGuideContent, 'content', 'content');
} 