// Flow Charts - Conversation Topics > Flow Charts
const flowChartsContent = {
    id: "1TAGsxDjV0WHbBMco0xA5u_QqHMUKta7y",
    title: "Flow Charts",
    type: "flowchart",
    fileUrl: "documents/content/conversation-topics/flow-charts/flow-charts.pdf",
    description: "Six flow charts covering order issues, unconfirmed and confirmed orders, promotion troubleshooting, retroactive discounts, and canceling or editing orders",
    tags: ["flow charts", "flowchart", "workflow", "process", "orders", "promo", "promotions", "troubleshooting", "order issues", "unconfirmed orders", "confirmed orders", "promotion troubleshooting", "retroactive discount", "cancel", "edit", "shipping address"],
    content: `Flow Charts

Use the PDF viewer controls to move between pages, zoom, print, or download the charts.

Page 1: Order Issues
Missing or wrong items, orders lost in transit, and orders marked delivered but not received.

Page 2: Unconfirmed Orders
Confirmation emails, pending or posted charges, processing times, and tracking information.

Page 3: Confirmed Orders
Order details and purchase logs, processing and shipping times, pre-orders and backorders, and tracking stuck at label created.

Page 4: Promotion Troubleshooting
Customer eligibility, code expiration, promo conditions and exclusions, minimum order requirements, and Shopify or non-Shopify cart issues.

Page 5: Retroactive Discount
Brand instructions, order details, previously used codes, discount requirements and exclusions, and existing discounts.

Page 6: Cancel/Edit
Brand notes, canceling or editing orders, changing the shipping address, and shipped or unshipped orders.`
};

window.flowChartsContent = flowChartsContent;

if (window.documentRegistry) {
    window.documentRegistry.registerDocument(flowChartsContent, 'content', 'conversationTopics', 'flowCharts');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry) {
            window.documentRegistry.registerDocument(flowChartsContent, 'content', 'conversationTopics', 'flowCharts');
        }
    });
}
