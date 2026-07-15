// Central document registry - loads all document content for searching
class DocumentRegistry {
    constructor() {
        this.documents = new Map();
        this.categories = {
            admin: {
                title: "Admin",
                folders: {
                    system: { title: "System", documents: [] },
                    organizationStructure: { title: "Organization Structure", documents: [] },
                    onboarding: { title: "Onboarding", documents: [] },
                    kpis: { title: "KPIs", documents: [] },
                    codeOfConduct: { title: "Code of Conduct", documents: [] },
                    agentBehaviors: { title: "Agent Behaviors", documents: [] }
                },
                documents: [] // For documents directly under admin
            },
                            content: {
                    title: "Content",
                    folders: {
                        navigation: { title: "Navigation", documents: [] },
                        messageQuality: { title: "Message Quality", documents: [] },
                        intro: { title: "Intro", documents: [] },
                        content: { title: "Content", documents: [] },
                        eventQuality: { title: "Event Quality", documents: [] },
                        conversationTopics: {
                            title: "Conversation Topics",
                            subfolders: {
                                prePurchase: { title: "Pre-Purchase", documents: [] },
                                postPurchase: { title: "Post-Purchase", documents: [] },
                                flowCharts: { title: "Flow Charts", documents: [] },
                                general: { title: "General", documents: [] }
                            },
                            documents: []
                        },
                        introToConcierge: { title: "Intro to Concierge", documents: [] },
                        compliance: { title: "Compliance", documents: [] },
                        standardWorkflows: { title: "Standard Workflows", documents: [] }
                    },
                    documents: [] // For documents directly under content
                },
            training: {
                title: "Training",
                folders: {
                    module1: { title: "Module 1", documents: [] },
                    module2: { title: "Module 2", documents: [] },
                    module3: { title: "Module 3", documents: [] }
                },
                documents: [] // For documents directly under training
            }
        };
        console.log('DocumentRegistry initialized with categories and folders');
    }

    registerDocument(content, category = null, folder = null, subfolder = null) {
        if (!content || !content.id || !content.title) {
            console.error('Invalid document content passed to registry:', content);
            return;
        }

        // Archived documents stay in source control but never enter the searchable registry.
        if (window.kbArchive && window.kbArchive.isDocumentArchived(content, category)) {
            return;
        }
        
        // Store in the flat map for search
        this.documents.set(content.id, content);
        
        // Add metadata for category/folder
        content.category = category;
        content.folder = folder;
        content.subfolder = subfolder;
        
        // Add to category structure if provided
        if (category && this.categories[category]) {
            if (folder && this.categories[category].folders[folder]) {
                if (subfolder && this.categories[category].folders[folder].subfolders && 
                    this.categories[category].folders[folder].subfolders[subfolder]) {
                    // Add to subfolder
                    this.categories[category].folders[folder].subfolders[subfolder].documents.push(content);
                } else if (!subfolder) {
                    // Add to folder
                    this.categories[category].folders[folder].documents.push(content);
                }
            } else if (!folder) {
                // Add directly to category
                this.categories[category].documents.push(content);
            }
        }
        
        console.log(`Document registered: ${content.title}`);
    }

    searchDocuments(searchTerm) {
        console.log(`Registry searching for: "${searchTerm}"`);
        console.log(`Registry has ${this.documents.size} documents registered`);
        
        const results = [];
        const lowerSearchTerm = searchTerm.toLowerCase().trim();

        if (!lowerSearchTerm) {
            return results;
        }

        this.documents.forEach((doc) => {
            if (window.kbArchive && window.kbArchive.isDocumentArchived(doc)) {
                return;
            }

            let score = 0;
            let matchDetails = [];

            // Search in title (higher weight)
            if (doc.title && doc.title.toLowerCase().includes(lowerSearchTerm)) {
                score += 10;
                matchDetails.push(`Title: ${doc.title}`);
            }

            // Search in description
            if (doc.description && doc.description.toLowerCase().includes(lowerSearchTerm)) {
                score += 5;
                matchDetails.push(`Description: ${doc.description}`);
            }

            // Search in tags (medium weight)
            if (doc.tags && Array.isArray(doc.tags)) {
                doc.tags.forEach(tag => {
                    if (tag.toLowerCase().includes(lowerSearchTerm)) {
                        score += 3;
                        matchDetails.push(`Tag: ${tag}`);
                    }
                });
            }

            // Search in content (lower weight but important)
            if (doc.content && typeof doc.content === 'string' && doc.content.toLowerCase().includes(lowerSearchTerm)) {
                score += 2;
                
                // Find excerpt around the match
                const contentLower = doc.content.toLowerCase();
                const matchIndex = contentLower.indexOf(lowerSearchTerm);
                if (matchIndex !== -1) {
                    const start = Math.max(0, matchIndex - 50);
                    const end = Math.min(doc.content.length, matchIndex + lowerSearchTerm.length + 50);
                    const excerpt = doc.content.substring(start, end);
                    matchDetails.push(`Content: ...${excerpt}...`);
                }
            }

            if (score > 0) {
                results.push({
                    document: doc,
                    score: score,
                    matches: matchDetails
                });
            }
        });

        // Sort by score (descending)
        return results.sort((a, b) => b.score - a.score);
    }

    getDocument(id) {
        if (window.kbArchive && window.kbArchive.isDocumentArchived(id)) {
            return undefined;
        }

        return this.documents.get(id);
    }

    getAllDocuments() {
        return Array.from(this.documents.values()).filter((document) => {
            return !window.kbArchive || !window.kbArchive.isDocumentArchived(document);
        });
    }
}

// Initialize window.documentRegistry as empty object if it doesn't exist
window.documentRegistry = window.documentRegistry || {};

// Create DocumentRegistry class instance and attach it to window.documentRegistry
window.documentRegistry._instance = new DocumentRegistry();

// Add convenience methods to the main registry object
window.documentRegistry.searchDocuments = function(searchTerm) {
    return window.documentRegistry._instance.searchDocuments(searchTerm);
};

window.documentRegistry.getDocument = function(id) {
    return window.documentRegistry._instance.getDocument(id);
};

window.documentRegistry.getAllDocuments = function() {
    return window.documentRegistry._instance.getAllDocuments();
};

window.documentRegistry.registerDocument = function(content, category, folder, subfolder) {
    return window.documentRegistry._instance.registerDocument(content, category, folder, subfolder);
};

// Function to load documents from the flat window.documentRegistry object
function loadDocumentsFromFlatRegistry() {
    console.log('Loading documents from flat registry...');
    
    // Check if flat registry exists
    if (!window.documentRegistry || typeof window.documentRegistry !== 'object') {
        console.log('No flat registry found');
        return;
    }
    
    let loadedCount = 0;
    
    // Iterate through all documents in the flat registry
    Object.keys(window.documentRegistry).forEach(key => {
        const doc = window.documentRegistry[key];
        
        // Skip if it's the DocumentRegistry class instance or internal properties
        if (key === '_instance' || typeof doc === 'function' || !doc || typeof doc !== 'object') {
            return;
        }
        
        // Skip if it doesn't have required fields
        if (!doc.id || !doc.title) {
            console.warn('Skipping invalid document:', key, doc);
            return;
        }
        
        // Register the document with the proper registry
        try {
            window.documentRegistry._instance.registerDocument(
                doc,
                doc.category || null,
                doc.folder || null,
                doc.subfolder || null
            );
            loadedCount++;
        } catch (error) {
            console.error('Error registering document:', doc.title, error);
        }
    });
    
    console.log(`Loaded ${loadedCount} documents from flat registry`);
}

// Add a loaded event for other scripts to know when registry is ready
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded - Registry ready');
    
    // Load documents from flat registry after a longer delay to ensure all document scripts have loaded
    setTimeout(() => {
        console.log('Current window.documentRegistry state:', Object.keys(window.documentRegistry));
        loadDocumentsFromFlatRegistry();
        console.log('Documents in registry after loading:', window.documentRegistry._instance.documents.size);
        
        // Dispatch a custom event to notify that registry is ready and loaded
        window.dispatchEvent(new CustomEvent('registryReady'));
    }, 500);
});

// Also try loading when window is fully loaded
window.addEventListener('load', () => {
    // Give it another try in case DOMContentLoaded was too early
    setTimeout(() => {
        if (window.documentRegistry._instance.documents.size === 0) {
            console.log('Registry still empty, trying to load again...');
            loadDocumentsFromFlatRegistry();
        }
    }, 200);
});
