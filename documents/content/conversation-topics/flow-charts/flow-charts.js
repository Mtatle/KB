// Flow Charts - Conversation Topics > Flow Charts
const flowChartsContent = {
    id: "1P-lmWB40EUTqgHVvbN-Ap0fCOlKFJ7V7",
    title: "Flow Charts",
    type: "flowchart",
    description: "High-quality interactive flow charts with drag and scroll navigation",
    tags: ["flow charts", "flowchart", "workflow", "process", "interactive"],
    content: `Flow Charts

Drag to move around the chart. Use the mouse wheel to move vertically, Shift + wheel to move horizontally, and Ctrl/Command + wheel to adjust the level of detail.`
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
