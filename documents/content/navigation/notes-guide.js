// Document content for Notes Guide
const notesGuideContent = {
    id: '1aCnvtjEmL5lGK4CHtndiU6LmcwuyasOEHAZB_iZYAAE',
    title: 'Notes Guide',
    type: 'doc',
    description: 'Guide for taking and managing notes',
    tags: ['content', 'navigation', 'notes', 'guide', 'management'],
    content: ``
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(notesGuideContent, 'content', 'navigation');
} 