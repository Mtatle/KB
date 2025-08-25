// Wooden Ships Workflow Guide - Content > Brand-Specific Guides
window.documentRegistry = window.documentRegistry || {};
window.documentRegistry["1Qc7W07VQleqW4Hm4SwaKMejR5D-kj8GofOQXH5ckiu0"] = {
    id: "1Qc7W07VQleqW4Hm4SwaKMejR5D-kj8GofOQXH5ckiu0",
    title: "Wooden Ships Workflow Guide",
    type: "doc",
    category: "content",
    folder: "brand-specific-guides",
    tags: ["wooden-ships", "workflow", "brand-specific", "guide", "process"],
    description: "Comprehensive workflow guide specific to Wooden Ships brand operations and procedures",
    content: `Wooden Ships – Full Updated Workflow Guide
The Wooden Ships brand has shared important feedback that has shaped the way we handle their customers. These updates bring together all current rules, expectations, and best practices into one place so our team can work consistently and confidently. By following this guide exactly, we’ll protect our relationship with the client, provide a seamless customer experience, and avoid the missteps that caused past concerns.
1. Promo Code Handling
* Offer Type: The offer code for Wooden Ships is $15 off — not a percentage discount.

* Verification: Always double-check the code type before applying or sharing. Never assume.

* Customer Responds to Automated Message Offering a Code:

   * Do NOT close the conversation.
   * Provide the concierge code or any available code visible in the UI.
   * If no code is visible → This is an Ops Issue — post it in the designated channel immediately.

2. Conversation Closure Rules When Client Responds
      * When Client Responds (Before 5 PM EST, Same Day):

         * Immediately close the conversation — do not reply further so the client can continue handling.
         * Continue closing the conversation throughout the same day until 5 PM EST, even if the customer replies again.

            * After 5 PM EST (Same Day) or On Any Subsequent Day:

               * You may respond and assist the customer as normal until a new client message appears.
               * Once a new client message appears, resume closing the conversation.

                  * If Another Agent Already Responded (Even Incorrectly):

                     * Do not close the conversation.
                     * Continue helping the customer from where the other agent left off.

3. Escalation Rules
                        * Escalating Conversations

                           * When escalating on weekdays 
                           * We use the ESC shortcut exclusively for escalations

                              * When escalating on weekends
                              * We use the WKD shortcut exclusively for escalations

                                 * Escalated Conversations (Before 5 PM EST, Same Day Escalated):

                                    * Do not send any messages.
                                    * Close immediately so the client can handle it.

                                       * After 5 PM EST (Same Day) or On Any Subsequent Day:

                                          * You may reply and proceed as normal.

                                             * Escalation Scenarios Include:

                                                * Any uncertainty about whether the client already has the information or can handle it directly. Escalate any questions for which you’re not completely certain of the answer.
                                                * Customer asking about item availability or restock timing.

                                                   * Customer Follows Up After Escalation:

                                                      * Use the DUP shortcut.
                                                      * Do not tell the customer we haven’t heard back from the client yet, at any point.

4. Language & Communication Style
                                                         * One-Person Voice:

                                                            * The customer should feel they are speaking to a single, dedicated person.
                                                            * Never make references to a “team” or multiple agents.
                                                            * Prohibited phrases include but are not limited to:

                                                               * “I’ll check with the team”
                                                               * “I haven’t heard back from the team”
                                                               * Any mention of “we” in the context of support operations

                                                                  * Escalation Language:

                                                                     * Keep language personal and direct.
                                                                     * Example: “I will look into this and get back to you as soon as possible.”

5. When Not to Take Responsibility or Directly Apologize
                                                                        * If customers experience inconvenience or frustration when the brand is not at fault and all systems are working as intended.

                                                                           * In these cases, do not send a direct apology that implies fault.

                                                                              * Examples of when this applies:

                                                                                 * Customers frustrated due to items not being in stock

                                                                                 * Customers upset about shipping times, even though their orders are still within the expected delivery timeframe
6. Additional Expectations
                                                                                    * Forbidden Phrases:

                                                                                       * Do not say “my system is limited” or “I have limited access.”

                                                                                          * Follow All Notes:

                                                                                             * Always check and follow all notes for Wooden Ships before acting on any conversation.

                                                                                                * Follow All Brand Flags:

                                                                                                   * Continue closing any conversations flagged in team-deel or relevant brand channels as instructed.`
};

// Pre-index registration with document registry
window.woodenShipsWorkflowGuideContent = window.documentRegistry["1Qc7W07VQleqW4Hm4SwaKMejR5D-kj8GofOQXH5ckiu0"];

// Register with document registry
if (window.documentRegistry && window.documentRegistry.registerDocument) {
    window.documentRegistry.registerDocument(window.woodenShipsWorkflowGuideContent, 'content', 'brandSpecificGuides');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry && window.documentRegistry.registerDocument) {
            window.documentRegistry.registerDocument(window.woodenShipsWorkflowGuideContent, 'content', 'brandSpecificGuides');
        }
    });
}
