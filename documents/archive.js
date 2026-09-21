// Central archive rules for content that must remain stored but unavailable on the site.
(function() {
    const archivedCategories = new Set();

    const archivedDocumentIds = new Set();

    window.kbArchive = Object.freeze({
        isCategoryArchived(category) {
            return archivedCategories.has(category);
        },

        isDocumentArchived(documentOrId, category = null) {
            const document = typeof documentOrId === 'object' && documentOrId !== null
                ? documentOrId
                : null;
            const id = document ? document.id : documentOrId;
            const resolvedCategory = category || (document && document.category);

            return archivedCategories.has(resolvedCategory) || archivedDocumentIds.has(id);
        }
    });
})();
