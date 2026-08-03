// Connectivity Issues - Admin > Systems
const connectivityIssuesContent = {
    id: "10vXGG2c-t7jM1ABpVruqjPimdfDp6LYL",
    title: "Connectivity Issues",
    type: "flowchart",
    description: "Connectivity issues flow chart in the native Google Drive viewer",
    tags: ["admin", "systems", "connectivity", "issues", "flow chart", "troubleshooting"],
    content: `Connectivity Issues

Use Google Drive's native controls to zoom and pan through the connectivity issues flow chart.`
};

window.connectivityIssuesContent = connectivityIssuesContent;

if (window.documentRegistry) {
    window.documentRegistry.registerDocument(connectivityIssuesContent, 'admin', 'system');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry) {
            window.documentRegistry.registerDocument(connectivityIssuesContent, 'admin', 'system');
        }
    });
}
