// Central archive rules for content that must remain stored but unavailable on the site.
(function() {
    const archivedCategories = new Set([
        'training'
    ]);

    // Includes each Independent Training presentation and its quiz. Keeping the
    // IDs here also blocks old bookmarks from bypassing the archived navigation.
    const archivedDocumentIds = new Set([
        // Module 1
        '1olKxtscaFT702gQyDccRJ_m3MYW6iaqyW3Oo9rmzjJ4',
        '1uc8VVay3VsTWdBlHZBeVojnKSuo4WElQaiSvfRBvlcY',
        '1vqhJEJKPffTT8I5z2anpyVHpqMc-GHXe9U79zgdZfrk',
        '1j8mQg06tEznwNKbh8Clhe8ADJFw1uIGfeNFXbYJYmkY',
        '1Qy3__PYg__gjNi7LMsw9bpnPj9MsK7Chwlg-dh4qa_k',
        '103cdVsuxlMg13ZETDq1tIQcUIdi57uPIzueLKtFjPIU',
        '1rARWcKeZKqv-h_y-uiYrUDyhhtf0Iy8SnqLr_audy_U',
        '1M8WexxavK78aA4pf8540X8OaW_AOr5znCJOqcBrTACY',

        // Module 2
        '1r9mTN_Mgc9_QjoF1OvWhMNgr9MoaF2BsMgZEhzjqfxs',
        '1F1YOGatMkOPCxO2s78tvVImNXsj77yrWz2IN2pIlkZY',
        '1SSliJGLwg6srjDmqwUtSsVDhAdCBQSWDfmRPToM9yyE',
        '1PimzX0zM4Jq-XoGUZnQ2hDgKYRFft7amO-OcFMssQSk',
        '1MkPhItX5zQC6xWitpRl49P2zol9z1SjbwPR8LADkLKk',
        '11RyXQEqnssS-vAnGQ-yGCL0nhEKIBDbrsUa3cIwYGrY',
        '1niTTES92AD7eFtSaKr2j3sXAMsR5MMRCKh8VbxYungY',
        '1hb4rh3Ja4_sa2OECaeR7AC0GRaDfDnuvmC85BElGaDI',

        // Module 3
        '1hmZHxSn6p5gusRkCV-KxNFcRkEJUmasyeSATIsi6fBs',
        '1KHj1hr7EyT4SIjALkzHfwsT9d3PgeiuJ24GmeCdQ8Uo',
        '17lJ5yL5Q4snbWlbs_x1_08Mx9ghvQD8F5UHT3IvGf7s',
        '1RSUl45KEIRpAAnfkPfqJVvbTq9vjS_ktnhxAv80eBUA',
        '1TzTq8ZwSNYWXIgJ93X6TURxEydkPkEiKJnrfGSaA8YA',
        '1aN9vlTcIKb3PB54-8FUJQA8AGU49m6XjvWXPU24HzsA',
        '1GPwyy4Y0hAq9HIrSJ-0XPcb9kPOz7kGDR6nIRF6xMhw',
        '1an6hq-1h-G3bOOcMxPmZZErJ10zyeZlYj4ZSZmXDwhk'
    ]);

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
