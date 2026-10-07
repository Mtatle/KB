// Promo Troubleshooting flowchart - Conversation Topics > Flow Charts
const promoTroubleshootingFlowchartContent = {
    id: "1BxDB_wDN1TjM4qP9RSljL5JcHKpii0DJOHMaufTGYj8",
    title: "Promo Troubleshooting flowchart",
    type: "presentation",
    description: "Flowchart for troubleshooting promo issues",
    tags: ["promo", "promotions", "discounts", "troubleshooting", "flowchart", "flow charts"],
    content: `Promo Troubleshooting flowchart

Flowchart for troubleshooting promo issues.`
};

window.promoTroubleshootingFlowchartContent = promoTroubleshootingFlowchartContent;

if (window.documentRegistry) {
    window.documentRegistry.registerDocument(promoTroubleshootingFlowchartContent, 'content', 'conversationTopics', 'flowCharts');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry) {
            window.documentRegistry.registerDocument(promoTroubleshootingFlowchartContent, 'content', 'conversationTopics', 'flowCharts');
        }
    });
}
