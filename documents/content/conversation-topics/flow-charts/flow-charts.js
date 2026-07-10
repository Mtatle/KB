// Flow Charts - Conversation Topics > Flow Charts
const flowChartsContent = {
    id: "1P-lmWB40EUTqgHVvbN-Ap0fCOlKFJ7V7",
    title: "Flow Charts",
    type: "flowchart",
    description: "Interactive flow charts with zoom and hand-tool navigation",
    tags: ["flow charts", "flowchart", "workflow", "process", "interactive"],
    content: `Flow Charts

Use the zoom controls to inspect the chart and the hand tool to drag it around the viewer.`
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
