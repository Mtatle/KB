// Flow Charts - Conversation Topics > Flow Charts
const flowChartsContent = {
    id: "1P-lmWB40EUTqgHVvbN-Ap0fCOlKFJ7V7",
    title: "Flow Charts",
    type: "flowchart",
    description: "Flow charts in the native Google Drive viewer with high-quality zoom and panning",
    tags: ["flow charts", "flowchart", "workflow", "process", "interactive"],
    content: `Flow Charts

Use Google Drive's native controls to zoom and pan without browser-level image scaling. Ctrl/Command + wheel zooms directly in the Drive viewer.`
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
