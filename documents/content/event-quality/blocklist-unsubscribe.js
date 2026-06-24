// When to Unsubscribe - Event Quality
const blocklistUnsubscribeContent = {
    id: '129xSnb264I0hvhLMX2xNtWHjXk1CU5OP4zArHtzdefc',
    title: 'When to Unsubscribe',
    type: 'doc',
    description: 'Training guide for unsubscribe workflows',
    tags: ['content', 'event-quality', 'blocklist', 'unsubscribe', 'training', 'dnr'],
    content: `When to Unsubscribe

Event Quality training for unsubscribe workflows. Open the linked Google Doc for the current training content.`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(blocklistUnsubscribeContent, 'content', 'eventQuality');
}
