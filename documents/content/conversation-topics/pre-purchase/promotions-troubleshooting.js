// Promotions Troubleshooting - Conversation Topics > Pre-Purchase
window.documentRegistry = window.documentRegistry || {};
window.documentRegistry["1qJM9406IKWMnC3vbNRHMTLHTRNTDixNQRflBonFNZ_8"] = {
    id: "1qJM9406IKWMnC3vbNRHMTLHTRNTDixNQRflBonFNZ_8",
    title: "Promotions Troubleshooting",
    type: "doc",
    category: "content",
    folder: "conversation-topics",
    subfolder: "pre-purchase",
    tags: ["promotions", "troubleshooting", "pre-purchase", "document", "discounts"],
    content: `Promotions Troubleshooting  
Discounts and promotions are reductions of the regular price of a product or service to obtain or increase sales. Brands often offer them in the form of promotional codes, sale promotions, BOGO (buy one, get one free), bundling, and others.
This training will walk you through how to handle scenarios/conversations involving discounts and promotions.:
                
Quick Navigation
Offering Discounts
   * System Proactively Offers a Discount (Concierge Offer)
Customer Discount Requests
   * The Customer Asks for a General Discount Code/Deal
   * Customer Asks for their Welcome Discount Code/Deal
   * Customer Asks for a Specific Product Discount
Troubleshooting Common Discount/Promo Issues
   * General Troubleshooting Process (Overview)
   * Step A: Initial Information Gathering & Quick Checks
      * Confirming Code & Source
      * Verifying Customer Code Entry
   * Step B: Core Troubleshooting (The "ABC + T" Method)
      * Testing the Code (Mock Cart & Coupon Inspector)
      * Analyzing Validity & Terms (The "ABCs")
         * A - Availability & Expiration Dates
         * B - Basket Conditions (Min. Spend, Exclusions, etc.)
         * C - Customer Eligibility (First-Time, Previous Use, Resubscribed)
   * Step C: Resolution & Next Steps
      * If Code Should Work (But Customer Still Has Issues)
      * If Code is Invalid/Ineligible
      * Offering Alternatives (Crucial Step)
      * If No Other Codes/Promos Available


General Workflow: Offering & Responding to Discount Requests
We proactively offer a discount
We proactively ask the customer if they want a discount through the automated messages or tell them we have one available. When a customer responds that they would like a discount (after our proactive offer):  
















1. Check Concierge Offer & Promo Notes (UI): First, check the left-hand side of the UI for any Concierge discount codes available (these can be located either underneath the notes or in the Promo Notes section).  







* If a Concierge code or a suitable code from Promo Notes is available, check for any discount code/deal restrictions in the notes or promos on the left-hand side; we need to share these with the customer when sending the AW template. 
* If there are no restrictions or the customer is eligible, edit and send the AW template accordingly, or directly send the code to the customer if it’s in the Promo Notes.  








   * The macros shown in the templates (“{coupon}” and “{couponLink}”) will auto-populate once the text has been sent; there is no need to edit them manually. If an error pops up when you try to send the template, you can safely delete the “Just follow the link to use it: {couponLink}” and it should work when you try to send it next time.  










      * If the discount is not in the AW template, it can also be in the Promo Notes section of the UI
2. In case there is no Concierge discount available underneath the notes or in Promo Notes, follow the troubleshooting guidelines here Agents SOP for Posting in #concierge-ops-issues


The Customer Asks for a General Discount Code/Deal
When a customer asks us for a discount code without any offer from us, follow these steps:


1. Check Concierge Offer & Promo Notes (UI): First, check the left-hand side of the UI for any Concierge discount codes available (these can be located either underneath the notes or in the Promo Notes section).


      * If a Concierge code or a suitable code from Promo Notes is available, check for any discount code/deal restrictions in the notes or promos on the left-hand side; we need to share these with the customer when sending the AW template.
      * If there are no restrictions or the customer is eligible, edit and send the AW template accordingly, or directly send the code to the customer if it’s in Promo Notes.
2. Check Previous Interactions (UI): If no suitable code is found in Concierge Offers or Promo Notes, scroll up to the beginning of the conversation to check if we have sent any codes to the customer previously (e.g., welcome codes sent upon signing up for text messaging services). Ensure these haven't expired or been used.

3. Check Brand Website for General Offers/Sales: If no specific discount codes are found in the UI or previous messages, check the brand website for any ongoing public offers or sales (e.g., sitewide sales, free shipping offers, information on subscription discounts or financing options).


4. If No Codes Found After Steps 1-3: 

      * If the website does have general offers/sales (from Step 3): Use the NCODE template, and edit the last sentence to include details about these current deals or a link to the sales page. Example: "...In the meantime, you can check out our current [Summer Sale / Free Shipping over $XX] offer here: [link]."

         * If the website has no discernible public offers/sales AND no specific codes were found in Steps 1-2: Use the NCODE template and exclude the last sentence (as no general sales collection exists to point to).

________________
The Customer Asks for their Welcome Discount Code/Deal  
If a customer is asking for their welcome code (e.g., they were informed they'd get one but it wasn't available, or they claim they never received it), follow the specific troubleshooting steps from the Agents SOP for Posting in #concierge-ops-issues.
1. Verify Entitlement to Welcome Code[a][b][c]
            * Check the opt-in message (does it say "Opt in to receive your discount code"?).
            * Check the bottom of the brand's website (does it state that a code is given upon subscribing to Text Marketing?).
            * If the opt-in message or website information is unclear or doesn't confirm a discount, and the customer insists they were offered one (e.g., "I was told I'd get 20% for signing up"), you can politely ask for more details: "Thanks for letting me know! Could you tell me where you saw that offer for the welcome discount? For example, was it on our website or in a pop-up?" (This avoids sounding accusatory and helps gather information if our initial checks don't show the offer).

2. Check Automated Message: If they were supposed to get a code, check the automated welcome message in the conversation thread for the code or a link leading to it.
3. Check for Concierge Code Alternative: If no code is in the conversation thread, check if there is a Concierge code in the UI[d] that offers the same discount amount and share that instead, if permissible by brand notes.
4. Consult #concierge-ops-issues & Post if Necessary (If No Code Found & Issue Unresolved): 
               * First, search the #concierge-ops-issues channel for the brand name to see if a similar welcome code issue has already been reported and if a general (non-unique) welcome code or solution was provided that you can use.

                  * If no existing solution is found in the Ops channel search, and no code is available after the previous steps (UI check, automated message check), and the customer was indeed supposed to receive one:

                     * Let the customer know you're checking with your team.

                     * Post in the #concierge-ops-issues channel, including: the brand name, the conversation link, and a short description of the issue (e.g., "Customer asking for welcome code, not received, no alternative in UI or Ops search").

                     * Close the conversation (as per SOP) so it doesn’t inflate AST while Ops investigates.

                     * You are expected to respond to the customer within 5-10 minutes after Ops actions your post if you're still on shift, or first thing on your next shift.[e]

                     * Shared Responsibility: If you enter a conversation for which another agent has already posted in #concierge-ops-issues, and the customer is asking for an update, you are required to check the Ops channel to see if Ops has already provided a resolution. If a resolution is available, you must follow up with the customer even if you were not the agent who initially posted
Specific Product Discount Request


If the customer is looking for a deal on a specific product, and no general discount applies, check the product page to see if the original price is already discounted. If it is, encourage the sale and build value (e.g., “I’d recommend you go for it since you’re still getting it at the best price and with exceptional value!”).
Troubleshooting Discount/Promo Issues
Codes that companies release or publish often have limitations (terms and conditions, exclusions, expiration dates), which is why customers may not always be able to use them successfully. Additionally, some brands have specific workflows they want us to follow when troubleshooting these issues. 
Important Note on Precedence: Brand-specific instructions for troubleshooting, found in the Notes section & Brand-Specific Templates, ALWAYS take precedence over the general troubleshooting processes outlined below.
  















General Troubleshooting Process for Discounts/Promos
When no overriding brand-specific notes apply, use the following holistic approach.
Initial Information Gathering & Quick Checks
Confirm the Code & Source: (If Not Obvious or Provided):
                        * If the customer provides a code directly in their message, or if the context makes the code they are referring to clear (e.g., replying to a specific marketing message with a code), you can proceed.
                        * However, if the customer vaguely mentions "a discount isn't working" or if there's no clear information on what specific code they are using or where they obtained it, then your first step is to politely ask for the exact promotional code and, if relevant, where they saw it (e.g., "Could you please share the exact promo code you're trying to use, and where you found it? That will help me look into it for you!"). (This is similar to the intent of the disk template, which can be used or adapted.) This is crucial before diving into deeper troubleshooting.
Core Troubleshooting Steps (The "ABC + T" Method)

1. Internal Testing (Coupon Inspector & Mock Cart):
                        * Mock Cart First (Crucial Step): Create a mock cart with eligible, full-priced items that should meet the general terms of a promotion (based on the likely source of the code if known, or general best practices if not). Attempt to apply the code. This helps determine if the code itself is functional under ideal conditions, especially for non-Shopify brands or if the Coupon Inspector is inconclusive.

                        * Coupon Inspector (Shopify Brands): For Shopify-integrated brands (green shopping bag logo), enter the code in the Coupon Inspector. This tool can often reveal if the code is valid, expired, or has specific conditions?
2. Analyze Validity & Terms (The "ABCs" - Based on internal tests and available info):

A - Availability & Expiration Dates
                           * Is the code currently active? Check for expiration dates in the UI (Coupon Inspector, Promo Notes), original promotional texts/emails, or the brand's website (homepage, promotional pages, product pages).
                           * Milled.com can sometimes be used to find past email promotions and their original validity.






    
B - Basket Conditions (Cart Contents & Value)
1.   Specific Instructions to Apply: Does the promotion require specific items to be added to the cart, or a particular action to be taken (e.g., "buy X, get Y")? Check the original promo source. 
2.  Minimum Order Total Requirement: Many codes require a minimum spend. This is usually the cart subtotal after any item-level discounts but before shipping and taxes. Check Coupon Inspector, Promo Notes, promo text, or brand website.
  

                              * Item Eligibility & Exclusions: This is a very common reason for code failure.
                              * Excluded Items: Promotions often exclude sale items, clearance, bundles/sets, subscriptions, gift cards, or specific product categories/brands. Check the promo text, error message in cart, website, or the "applies to" section in the Coupon Inspector.
                              * Already Discounted Items: Typically, promo codes cannot be stacked or used on items that are already discounted, unless explicitly stated. Check product pages and cart.
                              * Brand Exception Example: Some brands, like Bonafide, may have codes specifically for subscriptions. Always check Notes. 
  



C - Customer Eligibility
                              1. First-Time Customers Only: Some codes are exclusive to new customers. Check the customer’s order history (under Customer Profile in the UI). If unavailable, politely ask the customer.
                              2. Previous Code Usage (One-Time Use Codes): Most promotional codes are intended for single use per customer. Check the customer’s order history to see if this specific code has been applied to a previous order.
                              * Note on Canceled Orders & Used Codes: If the customer used a one-time code on an order that was later canceled, the system will likely still register the code as "used." In such cases, refer to brand Notes: you might be able to offer an alternative valid code (if available and permitted) or escalate the issue. If no instructions, escalate.

                                 3. Resubscribed Customers & Stale Welcome Codes
                                 * Identify Potential Resubscribers: Be alert for signs a customer might be resubscribing rather than being a brand new subscriber. Indicators can vary by company setup but may include:

                                    * The welcome message does not populate the {coupon} macro or the code is 
visibly missing from the automated welcome text.

                                    * The system sends an automatic message like "You are already subscribed."

                                    * The customer explicitly mentions having subscribed before.

                                    * UI data (if available and clear) suggests a previous subscription history (e.g., past opt-out dates, previous conversations).

                                    * Caution: Avoid assuming a resubscription based solely on a "Send this text to subscribe" message from the customer, as this can also be used for initial subscriptions.

                                       * Welcome codes are typically for the initial subscription. If a resubscribing customer tries to use an old welcome code (or if the system attempts to send one), it will likely be invalid (expired or already used by them). This is often a system measure to prevent code abuse.

                                       * If you suspect a resubscription scenario is causing a welcome code issue, and a valid welcome code isn't being provided, send the mkt (Invalid code for marketing texts) template, which gently inquires about previous subscriptions.  
If Code Should Work After Internal Troubleshooting, BUT Customer Still Reports Issues:[f][g][h]
                                          * Politely explain your findings: "Thanks for confirming! I've tested the code [CODE] on my end with eligible items, and it seems to be working correctly. Just to be sure, could you try once more, ensuring there are no extra spaces?"

                                          * Request Screenshot (Now, as a final troubleshooting step on your end if the customer insists it's still not working despite your tests and guidance): "If it's still not applying, would you mind sending a screenshot of your cart showing the items, the code entered, and the error message you're seeing? That might help us spot what's going on." (Use der/det templates if appropriate, but adapt to request the screenshot).
Resolution & Next Steps (Communicating with the Customer)

After your internal troubleshooting (ABCs + Testing), you will have a better understanding of why the code might not be working. Now, communicate with the customer:
If[i][j] Your Internal Troubleshooting Shows the Code IS WORKING CORRECTLY (or should work with specific conditions):
                                             * Politely Explain Findings & Share Conditions/Exclusions: Inform the customer that the code appears to be working on your end but has certain conditions. Crucially, proactively share any key exclusions or requirements you found during your ABC checks.

                                             * Guide on Correct Entry (Now that you've shared conditions): Based on the conditions, suggest they try entering it again, ensuring items meet criteria and there are no typos, extra spaces, or case sensitivity issues (if noted in templates for that brand).
If Customer Still Reports Issues After Your Guidance & Their Re-attempt:
                                                * Request Screenshot (Now, as a final step to see their specific experience): "Okay, thanks for trying that. If it's still not applying, would you mind sending a screenshot of your cart showing the items, the code entered, and any error message you're seeing? That might help us spot what's going on from your side." (Use or adapt der/det templates).

                                                * Review Screenshot: If the screenshot reveals an obvious customer error (e.g., wrong items, typo you can now see), gently guide them.

                                                * If Screenshot Shows No Obvious Customer Error & Code Still Fails for Them:

                                                   * Shopify Brands (Cart Link): If the brand is Shopify-integrated, offer to create a cart link with the discount applied.

                                                   * General/If Cart Link Not Used/Still Fails: Use the cww template (which may reiterate screenshot request if not yet provided). If this doesn't resolve, check internal channels (#concierge-ops-issues) for known site issues.

                                                   * Escalate: If no known site issues and the problem persists specifically for them despite it working for you, escalate or send to CS.

                                                      * General Troubleshooting (If Cart Link Not Applicable/Desired, or if Issue Persists):
                                                      * Use the cww (Code Won't Work) template or a brand-specific equivalent. This template often includes asking for screenshots of the error message and items in their cart if not already provided, to further investigate. It may also suggest trying a different browser/device, though this is less likely to be the primary solution if your internal tests work.

                                                      * If the cww template steps (including their review of screenshots if newly provided) don't resolve it, check internal channels (like #concierge-ops-issues) for known site issues.

                                                      * If no known site issues and the problem persists, escalate or send to CS/Ops with all details (customer info, code, items, screenshots, steps taken, confirmation it works on your end).
If the code is invalid/ineligible (reason identified through ABC + T)

                                                         * Politely and Clearly Explain Why: Don't just say "it doesn't work." Explain the specific reason (e.g., "I see that code expired on [date]," or "That particular promotion doesn't apply to sale items," or "It looks like that code was for first-time orders only.").
                                                         * Offer Alternatives (CRUCIAL STEP)
                                                         * Always check if there are any other available AND ELIGIBLE valid codes (Concierge Offer, Promo Notes, current website banners) or ongoing sales that the customer can actually use based on their known status (e.g., order history) and cart (if visible). Proactively offer these.
                                                         * Important Clarification: Do NOT offer a code that you know the customer is ineligible for. For example, do not offer a "first-time customer only" code if you can see they have a past purchase history. Offering unusable codes creates further frustration. Your goal is to find a genuinely applicable alternative if one exists.
                                                         * Example: "While that code isn't applicable, we do have a 15% off code available right now: {coupon}. Would you like to use that instead?"
                                                         * If No Other Codes/Promos Available
                                                         * If truly no codes/offers: Send the NCODE template (if a general sales page exists, edit to include the link; if no sales at all, remove the last sentence of NCODE).

For all scenarios, if there are alternative valid codes that should work for the customer, always offer them while troubleshooting the original problematic code.


For a simplified flow chart when troubleshooting, please see the next page.








STEP 1: IDENTIFY CODE & SOURCE (IF NEEDED)
	ACTION / QUESTION TO INVESTIGATE
	WHERE TO CHECK / WHAT TO DO
	What is the exact code? Where did the customer get it?
	If not obvious from customer's message: Ask customer politely. (Use disk template if they have a discount but it's not working & you need origin info)
[k][l]	
  
  
  
  

STEP 2: INTERNAL TEST
	ACTION / QUESTION TO INVESTIGATE
	WHERE TO CHECK / WHAT TO DO
	Mock Cart First: (Especially for Non-Shopify / if Coupon Inspector is unclear). Does code work with eligible, full-priced items?
	     
Create a test cart in the UI or on the website.


	Coupon Inspector (Shopify Brands): What is the code status (active, expired, terms)?
	Use Coupon Inspector in the UI. (Refer to current UI guides for visuals)
	  
  
  
  

STEP 3: VALIDITY  
	ACTION / QUESTION TO INVESTIGATE
	WHERE TO CHECK / WHAT TO DO
	Is the code EXPIRED?
	Check Coupon Inspector, Promo Notes, original promo source (email, website, Milled.com).
	

  
  
  

STEP 4: BASKET
	ACTION / QUESTION TO INVESTIGATE
	WHERE TO CHECK / WHAT TO DO
	Minimum Spend Met? (Subtotal after item discounts, before tax/ship)
	Check Coupon Inspector, Promo Notes, promo terms.
	Required Items/Actions? (e.g., BOGO, specific product needed)
	Check original promo source.
	ITEM ELIGIBILITY / EXCLUSIONS: Are items in cart excluded (sale, bundles, subscriptions, specific categories)? Are items ALREADY discounted?
	Check promo terms, error message, website, Coupon Inspector ("applies to"). THIS IS KEY!
	  
        
                                                                      STEP 5: CUSTOMER
	ACTION / QUESTION TO INVESTIGATE
	WHERE TO CHECK / WHAT TO DO
	First-Time Customer Only?
	Check customer order history in UI; or ask customer.
	Code Already Used? (One-time use codes)
	Check customer order history. (Note: Canceled orders might still count code as used - check Notes/escalate).
	Resubscribed Customer? (Trying an old welcome code)
	Check UI for signs of previous subscription; send mkt template. (Refer to new UI screenshot/example )
	  

  
  
  

 STEP 6: GATHER INFO (IF UNRESOLVED & NEEDED)  
	ACTION / QUESTION TO INVESTIGATE
	WHERE TO CHECK / WHAT TO DO
	Confirm Code Source: "Thanks for checking that! Just so I have all the details, where did you see this promotion for [CODE]?"
	Ask customer; request screenshot if issue persists. Use der/det temps.
	Share Your Findings & Request Screenshot (as a final troubleshooting step before concluding code is unusable on their end or escalating):
	"On my end, I see that the code [CODE] [mention key condition found, e.g., 'is active and should apply to full-priced items' or 'seems to have expired on X date']. If it's still not working for you, could you send a screenshot of your cart with the error message?"
	

  
  
  

                                                                      STEP 7: RESOLUTION  
	ACTION / QUESTION TO INVESTIGATE
	WHERE TO CHECK / WHAT TO DO
	If Code Should Work: (All above checks passed)
	Guide re-application. If still fails, suggest browser/device change (cww temp). If persistent, check Ops for site issues, then escalate to CS/Ops with full details.
	If Code Invalid/Ineligible:
	Politely Explain Why. (e.g., "This code is for new customers only.")
	CRITICAL: Offer Alternatives! Is there any other valid code (Concierge, Promo Note, website) or current sale the customer is ELIGIBLE for and can use?
	ALWAYS CHECK & OFFER.
	If No Obvious Alternatives:
	Apologize that no other current promotions fit their needs for this specific code issue. Follow brand notes for next steps by either escalating or sending to CS
	________________


  
[m][n]
[a]@awedekind@attentivemobile.com @lmahao@attentivemobile.com do you think this whole section is needed here? This would be in our SOP so it's repetative
_Assigned to awedekind@attentivemobile.com_
[b]This goes in a little bit more depth so maybe some elaborated parts can also be moved to SOP? Like after how long they're expected to respond to the cx.
[c]Yup, we are going to revamp the SOP and we are going to go in depth, @nhrustanbegovic@attentivemobile.com is going to work on it. But also the time is listed there they just never read hahahha 


Nadir can you copy this part and have it somewhere for when you revamp the SOP?
1 total reaction
Nadir Hrustanbegovic reacted with 🙌 at 2025-06-17 13:06 PM
_Reassigned to nhrustanbegovic@attentivemobile.com_
[d]would a screenshot be helpful here or is that overkill
[e]@mramadan@attentivemobile.com lets add another bullet point here saying that if they enter a convo that has been posted by another agent in ops issues they're required to check for a resolution and respond even though they were not the ones that posted initially
1 total reaction
Mohammed Ramadan reacted with ✅ at 2025-06-13 09:14 AM
_Assigned to mramadan@attentivemobile.com_
[f]@lmahao@attentivemobile.com @awedekind@attentivemobile.com I'm a lil confused about this part here maybe because of the phrasing "but customer STILL reports issues". To me this sounds like we've followed up already. It's also confusing to me how we jump from here which seems like a resolution to the resolution section. 


Overall I feel this part should go into the resolution part or completely removed as we touch on this there - so maybe parts of it can be moved there?
_Assigned to lmahao@attentivemobile.com_
[g]The phrasing is confusing for me as well. I'm not entirely sure I follow this part.  I actually don't think we need this part at all since we already mentioned asking for a screenshot under general troubleshooting. And I don't agree with asking them to try again with no extra spaces. Also another crucial part we're missing is always telling the cx what the promo exclusions are from the get-go, even when we need to probe.
[h]I'm on board to remove this whole part as well. For the extra space though that is valid for some of our clients for sure but I think it's noted in templates that codes are case sensitive and spaces will affect if the code is applied or not 


I agree about the promo exclusions and sharing those with the customer from the bat, we'll add it to the resolution steps
[i]@mramadan@attentivemobile.com here, just to clarify quickly - how would they know if the code is supposed to work? would we have already probed about the items in their cart?
1 total reaction
Mohammed Ramadan reacted with ✅ at 2025-06-13 09:20 AM
[j]The way I understand this document and it's flow is 1. we check if we know what the code is 2. We analyze what the issue might be following the ABCs and 3 we have the resolution here and what we need to follow up with the customer after all of our probing during stage 2 💞
[k]I don't think this should be the first step. It's going to lead agents to just asking this without doing further research. So just because of how agents are if a cx comes in to say "my code isn't working" they'll just come back to say "did you enter it correctly" and do nothing else. I think it's best to include it under resolution - so things to look out for once we've gathered info and have a screenshot.
1 total reaction
Mohammed Ramadan reacted with ✅ at 2025-06-13 09:28 AM
[l]I agree, first step is per our guide above check if we know which code the customer is talking about
[m]I prefer the above visualization even though it isn't a pretty chart. not sure if we should have both in here- want to hear nelo's thoughts
[n]I'm not too hung up on it honestly since the viz above explains things pretty well.`
};
