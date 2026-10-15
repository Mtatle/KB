// Flow Charts - Conversation Topics > Flow Charts
const flowChartsContent = {
    id: "1TAGsxDjV0WHbBMco0xA5u_QqHMUKta7y",
    title: "Flow Charts",
    type: "flowchart",
    description: "Updated flow charts for order issues, unconfirmed orders, confirmed orders, and promotion troubleshooting",
    tags: ["flow charts", "flowchart", "workflow", "process", "orders", "promo", "promotions", "troubleshooting"],
    content: `Flow Charts

Updated four-page PDF covering:
1. Order Issues
2. Unconfirmed Orders
3. Confirmed Orders
4. Promotion Troubleshooting

Use the PDF viewer controls to zoom and navigate between pages.`
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
