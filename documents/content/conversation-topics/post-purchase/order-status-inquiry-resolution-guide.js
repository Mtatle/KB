// Order Status Inquiry and Resolution Guide - Conversation Topics > Post-Purchase
window.documentRegistry = window.documentRegistry || {};
window.documentRegistry["1_6FReKGa18LL7pZjgLcdzNQ99Se-oAMrcpz3Cy88YA0"] = {
    id: "1_6FReKGa18LL7pZjgLcdzNQ99Se-oAMrcpz3Cy88YA0",
    title: "Order Status Inquiry and Resolution Guide",
    type: "doc",
    category: "content",
    folder: "conversation-topics",
    subfolder: "post-purchase",
    tags: ["order status", "inquiry", "resolution", "post-purchase", "customer service"],
    description: "Guide for handling order status inquiries and resolutions",
    content: ` O  rder Status Inquiry and Resolution Guide
This training document provides a comprehensive guide for handling order status inquiries and resolving related issues effectively, ensuring a positive customer experience.
Note on Precedence: If a brand has specific Notes or a brand-specific template regarding order status inquiries (including tracking, pre-orders, etc.), those instructions supersede the general processes outlined in this training.
Always follow the brand's Notes first (whether it says to send to CS, escalate, use a tool on the brand’s website, etc.). If Notes provide specific direction, adhere to it. In the absence of overriding Notes, your next step is to thoroughly troubleshoot by checking the customer profile/UI for order details (order date, processing status, tracking information). Only after conducting this initial troubleshooting should you consider using a brand-specific order status/tracking template (if available and appropriate for the situation after your checks) or, as a last resort, the general template for order status inquiries. Simply sending a template without first investigating the available UI information should be avoided.
Understanding the Order Lifecycle & Scenarios
The shipping process involves multiple stages, from order placement to delivery. Each step is crucial.
We will primarily encounter three main scenarios when handling order status inquiries:
1. Confirmed Orders
Orders that are visible in the UI under the "Purchase log" or "Order History" for the customer. These orders have been successfully placed and recorded in the system.
  
        
    




2. Unconfirmed Orders
These are orders that customers claim they placed, but there’s no corresponding log or an absence of recent logs in the customer information under "Purchased" or "Order History" in the UI.
What does not seeing the order history mean: This indicates our system has no record of a completed transaction linked to the customer information we currently have. This could be due to a failed transaction, the customer using a different account/email, or the order being placed via an alternative sales channel (if applicable to the brand).
          
  
3.  Miscellaneous Scenarios
These are typically non-standard situations that may arise, such as exceptionally delayed shipments (beyond normal processing/shipping times), or orders canceled by the system/brand. They often require specific handling based on context and brand policies.
Handling Confirmed Orders Inquiries
When an order is confirmed in the UI:
1. Check the Date of the Order:

   * Verify the exact date the order was placed. This is the starting point for all timeline calculations.


  
  

   1. Processing Time Check:

      * Refer to the processing time mentioned in the brand’s shipping template (shp temp) or their specific order processing guidelines in the Notes. This is the time it takes for the brand to verify, prepare, and hand over an order to the carrier.
  
  

      * If no processing time is in the template: Check the brand’s FAQ’s or Help Center. If no information is found, we may assume a maximum of 3 business days for processing. Orders exceeding this timeframe without shipping should be considered delayed.

         2. Has It Shipped?

            * If a tracking link/number is present on the order confirmation page or in the order details in the UI, the order has shipped. In this case, directly share the tracking link and number with the customer. This is quicker and more helpful than redirecting them. (This takes precedence over sending a generic tracking template if direct info is available).

            * If no direct tracking info is visible in the UI, but the order is confirmed and should have shipped based on processing times:

               1. Check if a brand-specific template for order tracking or shipment updates exists and use that to guide the customer (e.g., how to find tracking on their account or to check their email).
               2. If no brand-specific template exists, use the general trck template to advise the customer to check their email (including spam/promo folders) for a shipping confirmation email which would contain tracking information.

                  * For brands where only a purchase log is visible (no detailed order confirmation page or tracking in UI): In these cases, we cannot confirm shipment status from our end directly.

                     1. Use the relevant brand-specific tracking template if one exists, guiding the customer to check their email (including spam/promo folders) for a shipping confirmation.

                     2. If no brand-specific template exists, use the general trck template to advise the customer to check their email (spam/promo folders) for a shipping confirmation email which would contain tracking information.
  

                        3. Not Shipped Yet, but Within Stated Processing Time:

                           * Educate the customer about the processing time mentioned in the brand’s shp template (or Notes). Reassure them that their order is being prepared and is expected to ship within that timeframe.

                           * You can send the full shp template if all information is relevant, or quote the specific processing time.

                           * Additionally, if there is a brand-specific template that provides more tailored information about order processing or what to expect during this stage, use that alongside or instead of the global shp template, as appropriate.

                              4. Not Shipped and Over the Stated Processing Time:
If the order has exceeded the brand's stated processing time and has not yet shipped:
                              * Apologize for the delay.

                              * Escalate the issue or redirect to Customer Support (CS) as per the brand's specific Notes or escalation workflow for overdue processing.


  

Handling Unconfirmed Orders Inquiries
When there is no log or no recent log of the order in the UI:
                                 1. Inquire About the Order Details:

                                    1. Use the coc template to ask if they received an order confirmation email OR if they see a charge (not pending authorization) on their bank/card statement. These are the two key indicators of a successfully processed order. (The question of "when" the order was placed will be asked later if they confirm having one of these).
  

                                    2. Order Confirmation Check Based on Customer Info:

                                       1. If the customer provides a valid confirmation email OR a confirmation email AND details of a posted charge (with date): Consider the order as confirmed, even if not immediately visible in the UI view (it might be under a different customer profile or there could be a sync delay). (Note: A posted charge alone, without a confirmation email, is less definitive and should be handled per point b.4 if no email is found). Proceed to point 'c' (Cross-Check Order Date).

                                       2. If the customer has a pending charge but no confirmation email: This often indicates the order may not have gone through successfully or is still being authorized. Use the cp template to explain this and advise them to monitor the charge (it should drop off if the order failed).
  



                                          3. If the customer has no confirmation email and no charge (or only a pending one that disappears): The order likely did not complete. Advise them to try placing the order again, ensuring all details are correct.

                                          4. If the customer has a completed charge but no confirmation email and no order in UI: This suggests an issue. Escalate or send to CS following brand notes.
                                             3. Cross-Check Order Date (from customer) with Shipping Template (if they provide confirmation email):

                                                1. If a confirmation email is confirmed, now send the wmo (Where is My Order) template (or ask directly) to inquire when they placed the order.

                                                2. Once the customer shares the date, cross-check it with the processing time mentioned in the shipping template (plus estimated shipping time if they are asking about delivery).

                                                3. If there's no processing time in the temp, check the brand’s FAQ’s or Help Center. If no info is found, we may assume a maximum of 3 business days for processing. Orders exceeding this timeframe without shipping should be considered delayed.

                                                   4. Order is Overdue (based on customer-provided date and shipping template timelines):
If their provided information suggests the order should have processed/shipped/arrived by now:
                                                   4. Apologize for the trouble.
                                                   5. Ask to check spam and promo folders for tracking information.
                                                   6. If there’s no tracking, escalate the issue or direct to Customer Support (cs) as per brand notes, providing all details the customer shared.

                                                      5. Order is Still Within Processing/Shipping Time (based on customer-provided date):

                                                         1. Educate the customer about the standard processing and shipping time mentioned in the shipping template.

                                                         2. If they have a tracking number from a confirmation email, guide them on how to use it. If they don't, explain that tracking will be available once the order ships.


  

Handling Miscellaneous Scenarios 
These scenarios require careful attention to brand-specific notes and empathy.
                                                            1. Super Delayed Orders (Confirmed orders, including Pre-Orders/Backorders):

                                                               1. Acknowledge the customer's concern about the delay.

                                                               2. Check Product Pages: For pre-orders/backorders, review the current product page for any updated estimated shipping times.

                                                               3. Check Order History/Confirmation: Refer to the Order History in the UI and advise the customer to check their original Order Confirmation email/page for any estimated shipping or availability dates provided at the time of purchase. These initial estimates are important for managing expectations.

                                                               4. Communicate Findings: Share any available ETA. Or if it’s shipped and has been with the courier for a while, suggest reaching out to them directly

                                                               5. If no estimated time is mentioned (past or present) or if the delay is excessive beyond any provided estimate, or if they don’t get info from the courier: Escalate or send to CS based on the brand notes.

                                                                  2. Canceled Orders (Not by Customer):
If an order shows as "canceled" in the UI and the customer did not request it:
                                                                  6. Apologize for any confusion or inconvenience.

                                                                  7. Check brand Notes and Templates for reasons why orders might be system-canceled (e.g., out of stock, payment issue, suspected fraud).

                                                                  8. Usually, escalate the issue or redirect to Customer Support (cs) if there’s no information.

                                                                     3. Label Created, but there’s no Movement: 

If you checked the status of the order and you see that the label has been created and there’s no movement for a long while, refer to this document: Missing/Lost Items
General Best Practices & Tips


                                                                        * Notes & Templates First: Prioritize Brand Notes, then Brand-Specific Templates. Only use Global Templates if no specific guidance exists.

                                                                        * ALWAYS Personalize Templates: Adapt to the customer and situation; don't send generic text.

                                                                        * Lead with Empathy: Acknowledge customer concern/frustration before solutions, especially with delays or issues.

                                                                        * Set Clear Expectations: Be precise about processing vs. shipping times; avoid guaranteeing delivery dates unless offered by the brand.

                                                                        * Use All Tools: Check UI, tracking, FAQs, and product pages thoroughly.

                                                                        * Escalate Clearly: If escalating, provide concise details (order #, issue, steps taken).

                                                                        * Handling Personal Information (PI) with Tracking:

                                                                           * You can typically share direct tracking links/numbers with a customer if the tracking information is readily available in the UI for their confirmed order, often without needing extensive re-verification of PI beyond initial customer identification for the conversation.

                                                                           * However, you should not send full order confirmation pages or detailed order summaries containing extensive PI without first ensuring you are speaking to the authorized account holder, typically by confirming key pieces of information as per brand guidelines (e.g., email, full name, shipping address/zip). Always prioritize customer data security.
© 2023 Attentive Mobile Inc.`
}; 