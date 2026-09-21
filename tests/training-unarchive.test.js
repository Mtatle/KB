const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');

const modules = [
    ['1olKxtscaFT702gQyDccRJ_m3MYW6iaqyW3Oo9rmzjJ4', '1uc8VVay3VsTWdBlHZBeVojnKSuo4WElQaiSvfRBvlcY', 'Performance Tracking & Support Tools'],
    ['1vqhJEJKPffTT8I5z2anpyVHpqMc-GHXe9U79zgdZfrk', '1j8mQg06tEznwNKbh8Clhe8ADJFw1uIGfeNFXbYJYmkY', 'Website Navigation & Research Process'],
    ['1Qy3__PYg__gjNi7LMsw9bpnPj9MsK7Chwlg-dh4qa_k', '103cdVsuxlMg13ZETDq1tIQcUIdi57uPIzueLKtFjPIU', 'Templates & Notes'],
    ['1rARWcKeZKqv-h_y-uiYrUDyhhtf0Iy8SnqLr_audy_U', '1M8WexxavK78aA4pf8540X8OaW_AOr5znCJOqcBrTACY', 'When to Mark as Do Not Respond'],
    ['1r9mTN_Mgc9_QjoF1OvWhMNgr9MoaF2BsMgZEhzjqfxs', '1F1YOGatMkOPCxO2s78tvVImNXsj77yrWz2IN2pIlkZY', 'Driving to Purchase & Links'],
    ['1SSliJGLwg6srjDmqwUtSsVDhAdCBQSWDfmRPToM9yyE', '1PimzX0zM4Jq-XoGUZnQ2hDgKYRFft7amO-OcFMssQSk', 'Discounts, Rewards, and Promo Codes'],
    ['1MkPhItX5zQC6xWitpRl49P2zol9z1SjbwPR8LADkLKk', '11RyXQEqnssS-vAnGQ-yGCL0nhEKIBDbrsUa3cIwYGrY', 'Shipping Options and Delivery'],
    ['1niTTES92AD7eFtSaKr2j3sXAMsR5MMRCKh8VbxYungY', '1hb4rh3Ja4_sa2OECaeR7AC0GRaDfDnuvmC85BElGaDI', 'Payments & Accounts'],
    ['1hmZHxSn6p5gusRkCV-KxNFcRkEJUmasyeSATIsi6fBs', '1KHj1hr7EyT4SIjALkzHfwsT9d3PgeiuJ24GmeCdQ8Uo', 'Returns, Exchanges, and Warranties'],
    ['17lJ5yL5Q4snbWlbs_x1_08Mx9ghvQD8F5UHT3IvGf7s', '1RSUl45KEIRpAAnfkPfqJVvbTq9vjS_ktnhxAv80eBUA', 'Escalations and Redirecting to CS'],
    ['1TzTq8ZwSNYWXIgJ93X6TURxEydkPkEiKJnrfGSaA8YA', '1aN9vlTcIKb3PB54-8FUJQA8AGU49m6XjvWXPU24HzsA', 'Customer Engagement Techniques'],
    ['1GPwyy4Y0hAq9HIrSJ-0XPcb9kPOz7kGDR6nIRF6xMhw', '1an6hq-1h-G3bOOcMxPmZZErJ10zyeZlYj4ZSZmXDwhk', 'Cancelling and Editing Orders']
];

function read(relativePath) {
    return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function createAppContext() {
    const context = {
        console: { log() {}, warn() {}, error() {} },
        setTimeout() {},
        CustomEvent: class CustomEvent {},
        addEventListener() {},
        dispatchEvent() {}
    };
    context.window = context;
    vm.createContext(context);
    return context;
}

function runScript(context, relativePath) {
    vm.runInContext(read(relativePath), context, { filename: relativePath });
}

function count(haystack, needle) {
    return haystack.split(needle).length - 1;
}

function viewerLink(section, id) {
    const match = section.match(new RegExp(`href="([^"]*viewer\\.html\\?id=${id}[^"]*)"`));
    assert.ok(match, `Missing viewer link for ${id}`);
    return new URL(match[1], 'https://kb.local/');
}

test('all reviewed training modules are live in navigation, search, and direct access', () => {
    const indexHtml = read('index.html');
    const viewerHtml = read('viewer.html');
    const indexSidebar = indexHtml.slice(
        indexHtml.indexOf('<!-- Independent Training Category -->'),
        indexHtml.indexOf('<!-- Sidebar Overlay -->')
    );
    const indexContent = indexHtml.slice(
        indexHtml.lastIndexOf('<!-- Independent Training Category -->'),
        indexHtml.indexOf('</main>')
    );
    const viewerSidebar = viewerHtml.slice(
        viewerHtml.indexOf('<!-- Training Category -->'),
        viewerHtml.indexOf('<!-- Sidebar Overlay -->')
    );
    const context = createAppContext();

    runScript(context, 'documents/archive.js');
    runScript(context, 'documents/registry.js');

    const trainingScripts = [...indexHtml.matchAll(/<script src="(documents\/training\/[^"]+\.js)"><\/script>/g)]
        .map((match) => match[1]);
    for (const scriptPath of trainingScripts) {
        runScript(context, scriptPath);
    }
    vm.runInContext('loadDocumentsFromFlatRegistry()', context);

    assert.equal(context.kbArchive.isCategoryArchived('training'), false);
    assert.equal(trainingScripts.length, 12);

    for (const [id, quizId, title] of modules) {
        assert.equal(context.kbArchive.isDocumentArchived(id), false, `${title} remains archived`);
        assert.equal(context.kbArchive.isDocumentArchived(quizId), false, `${title} quiz remains archived`);
        assert.equal(context.documentRegistry.getDocument(id)?.title, title, `${title} is missing from search`);
        assert.ok(
            context.documentRegistry.searchDocuments(title).some((result) => result.document.id === id),
            `${title} cannot be found through search`
        );
        assert.equal(count(indexSidebar, `viewer.html?id=${id}`), 1, `${title} is missing from the home sidebar`);
        assert.equal(count(indexContent, `viewer.html?id=${id}`), 1, `${title} is missing from the home content`);
        assert.equal(count(viewerSidebar, `viewer.html?id=${id}`), 1, `${title} is missing from viewer navigation`);
        assert.equal(count(indexSidebar, `quiz=${quizId}`), 1, `${title} quiz is missing from the home sidebar`);
        assert.equal(count(indexContent, `quiz=${quizId}`), 1, `${title} quiz is missing from the home content`);
        assert.equal(count(viewerSidebar, `quiz=${quizId}`), 1, `${title} quiz is missing from viewer navigation`);

        for (const section of [indexSidebar, indexContent, viewerSidebar]) {
            const link = viewerLink(section, id);
            assert.equal(link.searchParams.get('title'), title, `${title} is not safely encoded`);
            assert.equal(link.searchParams.get('quiz'), quizId, `${title} has the wrong quiz link`);
            assert.equal(link.searchParams.get('training'), 'true', `${title} is missing training mode`);
        }
    }
});

test('training search results retain their quiz metadata in the viewer URL', () => {
    const context = createAppContext();
    context.URLSearchParams = URLSearchParams;
    runScript(context, 'script.js');

    const url = context.buildViewerUrl({
        id: 'presentation-id',
        type: 'presentation',
        title: 'Templates & Notes',
        category: 'training',
        quiz: 'quiz-id'
    });

    assert.equal(
        url,
        'viewer.html?id=presentation-id&type=presentation&title=Templates+%26+Notes&quiz=quiz-id&training=true'
    );
});
