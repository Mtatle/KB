// Document content for Notes Guide
const notesGuideContent = {
    id: '1aCnvtjEmL5lGK4CHtndiU6LmcwuyasOEHAZB_iZYAAE',
    title: 'Notes Guide',
    type: 'doc',
    description: 'Guide for taking and managing notes',
    tags: ['content', 'navigation', 'notes', 'guide', 'management'],
    content: `Notes Guide
This guide is designed to help you understand and effectively use the client's notes in the Agent UI.
New Notes Structure and Their Equivalent Emojis
Main Note Categories
* 📬 SEND TO CS: Instructions for forwarding customer inquiries to customer support.
   * Example: Forward to CS for shipping inquiries.
* 🛑 ESCALATE: For issues that need to be escalated.
   * Example: Escalate for code issues.
* 📢 TONE: Guidelines on communication style and closing conversations.
   * Example: Use "we" instead of "I"; Close the conversation if the client takes over.
* ⚡ TEMPLATES: Instructions on when to use specific templates.
   * Example: Use the NLB shortcut for new light bulb inquiries.
* ✅ DOs AND DON'Ts: Directions on what information to share and what to avoid; important client information.
   * Example: Do not share the shipping policy.
* 🛒 DRIVE TO PURCHASE: Guidance on how and when to encourage purchases.
   * Example: Recommend only bestsellers.
* ✨ PROMO & PROMO EXCLUSIONS: Details on codes and promotions.
   * Example: Codes aren’t valid for Doorbusters and licensed products.
Additional Note Categories
* 🚨 IMPORTANT: Crucial information that must be followed meticulously.
* 🛤️ JOURNEY REPLIES PROCESS: Instructions on handling customer journeys.
* 🤖 AI NOTES: Information relevant to AI, not applicable to agents.
Workflow Guidelines
Presence of "Immediately"
* If "immediately" is mentioned in the note, do not troubleshoot and follow the instructions directly.
   * Example: Send to CS immediately for post-purchase inquiries.
* If "immediately" is not mentioned in the note, you should troubleshoot first. If unresolved, follow the note's instructions.
   * Example: Send to CS for post-purchase inquiries.
Replacing "Error" with "Issue"
* "Issues" refer to any technical problems, operational challenges, or any scenario that requires troubleshooting to resolve the problem.
   * This would encompass: cancellation and order edits, retroactive discounts, code errors, account login difficulties, reward points/discounts redemption difficulties, etc.
   * Example: Customer's code is not working; the order is late; the order arrived damaged.
Notes Indicating Preferences
* Notes marked with the  🅿️ emoji signify preferred workflows. While these workflows are recommended, they don't need to be followed rigidly, and the conversation should not be manipulated to fit them. However, if the context of the conversation allows, it is mandatory to adhere to the note.
   * Example: If customers are looking for an outfit recommendation/item pairing, direct them to the “shop the look” section on each product page 

Closing Conversations When the Client Takes Over


   * If the client responds directly to the customer, indicated by a white message bubble (not an automated journey message) and there's a note in the conversation saying to “Close the convo once the client takes over”, then we begin by checking whether it’s past 4 PM EST since the day the customer first responded to the latest client message.
   * Before 4 PM (EST)
   * We should not engage further with the customer before 4 PM EST, and we should close the conversation instead. This allows the client to continue the conversation.
   * Only if another agent has already responded to the customer, even if they weren’t supposed to, we do not close. Instead, we pick up from where they left off and continue helping the customer as normal.
   * After 4 PM (EST)
   * It’s okay to respond and proceed to help the customer as normal. From that point on, we can engage with the customer as long as the client hasn’t replied again.`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(notesGuideContent, 'content', 'navigation');
} 