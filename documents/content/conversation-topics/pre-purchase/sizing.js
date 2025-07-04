// Document content for Sizing
const sizingContent = {
    id: '1sWF5HFRu8rpk1kk9UXwsWzeb-p2zEzJUU-nBqx9j8Ko',
    title: 'Sizing',
    type: 'presentation',
    description: 'Guide to sizing information',
    tags: ['sizing', 'fit', 'measurements', 'guide'],
    content: ` Sizing

Size Charts
Sizing
Size Inquires

Sizing can vary depending on the brand and the product category. Here are some general guidelines on how sizing works for our brands:
Introduction
Size Charts
Most brands will provide a size chart for each product category. These size charts typically include measurements for the bust, waist, hips, and inseam, as well as any other relevant measurements based on the product category.
Size Charts

Some brands will also use fit models to help customers understand how a product fits. Fit models are typically people with specific body types who wear the product and provide feedback on how it fits.
Fit Models
Size Charts
Customer reviews can also provide helpful information about sizing for brands. Customers may leave comments on whether a product runs true to size or if it runs small or large.
Customer Reviews

Many brands will offer free returns and exchanges to help customers find the right size. This can help customers feel more comfortable purchasing online since they know they can easily return or exchange a product if it does not fit.
Returns and Exchanges
Size Charts
Some brands may use data analytics and customer profiling to personalize sizing recommendations for each customer based on their past purchases and preferences.
Personalization
Do not roughly recommend a size when a customer provides you with their height and weight; remember, everyone’s body proportions are different, so it is best to ALWAYS direct them to the brand’s size chart as their guide.

Note

When customers mention terms like “true to size” they’re usually referring to how the product fit compared to what they expected based on other brands or previous experience.
Common Terms
Size Charts
Fits as expected for the listed size. No need to size up or down.
True to size
Fits tighter or shorter than expected. Customers might prefer to size up.
Runs small
Fits looser or longer than expected. Customers may want to size down.
Runs large
If customers mention these terms, acknowledge their feedback, but always recommend checking the brand’s official size chart for the most accurate fit, especially since fit can vary by style or fabric type.

For most clothing items, the size chart will include measurements for the bust/chest, waist, and hips. It's important to advise the customer to measure themselves and compare their measurements to the size chart to determine the best size for them.
Clothing
Size Charts
Some brands may also offer sizing recommendations based on height and weight, but again, it’s important to remember that everyone's body proportions are different, so it's best to use the size chart as a guide.
Some brands also have their size charts as letter sizes (XXS, XS, S, M, L, XL, XXL, 3XL) or numbers (1, 2, 3, 4, 5, etc.), so we should always be wary of recommending a size and make sure the recommendation corresponds the equivalent letter/number size and/or measurements.
Height & Weight Sizes
Numbered Sizes

When it comes to footwear, it's important to have the customers measure their feet and compare their measurements to the size chart provided by the brand. Some brands may offer sizing recommendations based on foot length and/or width, but it's always best to have them consult the size chart to ensure a perfect fit.
Footwear
Size Charts

For athletic gear such as running tights, sports bras, and compression tops, it's important to consider both height and weight when selecting a size. Most brands will offer size charts that include both height and weight ranges to help the customers determine the best size for them.
Athletic Gear
Size Charts

For accessories such as hats, gloves, and belts, sizing can be more straightforward. Most brands will provide measurements for these items to help our customers determine the best size for them.
Accessories
Size Charts

Size Charts
Sizing
Size Inquires

Typically, we will send customers the sz template. If they need more help after we send them our sizing template, we can ask for their measurements and use the brand’s sizing chart as a guide. Make sure you study the size chart of the brand thoroughly before recommending a size so we won’t be at fault if and when the product arrives and it doesn’t fit them. The best practice would be to always send them the return policy alongside the size recommendation.
How do we respond to sizing inquiries?
Size Inquires
Sample sizing templates

Not all brands provide a complete size chart or exact measurements. When this happens:
When a Brand Doesn’t Provide a Size Chart
Size Inquires
Check the product page for fit details, model info, or general product notes.
Use available resources like customer reviews or internal notes to guide the conversation.
If the customer has ordered from the brand before, suggest sticking with the same size if it worked for them.
If the customer still doesn’t know the size that they should get, escalate the conversation to the brand, if available, to get the right size for the customer.
When there’s no sizing data, honesty and transparency are key. Avoid making rough guesses.

Customers often tell us what size they wear in other brands. For example, “I’m usually a Medium in Zara.” This can be a helpful starting point, but it shouldn’t be the only basis for a size recommendation.
How to approach it:
Customers Who Share Sizes in Other Brands
Size Inquires
Acknowledge the info: “Thanks for sharing that! It’s helpful to know.”
Check the brand’s size chart for measurements and the brand that the customer sent and compare them.
Share the size that matches what they wear and refer them to the brand’s size chart for accurate measurements.

Some brands, especially in underwear, swimwear, or shapewear, use personalized fit quizzes or tools to recommend sizes. These tools often ask about fit preferences, body shape, and current brands worn.
Personalized Sizing Tools
Size Inquires
If the brand offers a quiz or a fit finder, always direct the customer to try it because they use algorithms and customer data for a more tailored recommendation.
`
};

window.sizingContent = sizingContent;

// Register with document registry
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(sizingContent, 'content', 'conversationTopics', 'prePurchase');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry) {
            window.documentRegistry.registerDocument(sizingContent, 'content', 'conversationTopics', 'prePurchase');
        }
    });
}
