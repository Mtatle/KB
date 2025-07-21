// Document content for Quality Assurance Dispute Process
const qaDisputeProcessContent = {
    id: '1Oh7Udx2-xvmnl5NAD113WNU4xgnKZytpQca-OXB7LzU',
    title: 'Quality Assurance Dispute Process',
    type: 'presentation',
    description: 'Process for disputing quality assurance evaluations',
    tags: ['admin', 'kpis', 'qa', 'dispute', 'process', 'quality'],
    content: `QA Dispute Process

Purpose
Dispute Process
Proper Submissions
QA Dispute Process
After the Dispute
Follow Ups Process

If once a conversation has been audited, you do not agree with your score, or you wish to further understand your markdown, the dispute process allows you to share your experience handling the conversation. This provides:
Additional context to the QA Analyst that they did not have before
An opportunity to raise any mistakes that may have occurred on the QA Analysts end
Purpose
Disputes hold QA Analysts Accountable
Agent Feedback
If a dispute is declined, the QA Analyst is required to provide a detailed explanation as to why. Doing so allows:
You to understand the logic behind the final score given on the convo
General Knowledge for how to handle similar conversations in the future
Detailed Explanations

This process allows you to submit a dispute if you believe the score on one or more of your messages is incorrect. This acts as a checks and balance for the  Quality Assurance team.


Dispute Process 
Start Workflow 
Workflow Form 
Fill Out Form 
Submit Form 
Go to #team-deel
Select Workflows
Select Disputes
The form will ask for the following information:
Your Concierge Email
Message ID
What is your dispute?
Fill out the entire form. Be sure to provide as much detail as possible on the last question.
Ensure the form is fully filled out, the press Submit
Disputes are submitted via a slack workflow that can be found in the #team-deel channel
Upon submitting, your dispute will be recorded in the QA Sheet on the Disputes tab
Confirm Submission 
Do NOT use line breaks when filling out the form. This will cause the dispute to not show up fully on the sheet.
1
2
3
4
5

Proper Submissions
Improper Disputes




Proper Disputes
All disputes should be based on a logical framework, following the.QA Guide. Before submitting a dispute, please review and include the following in the form:
What subcategory are you disputing?
Why do you believe the markdown was wrong? - please base this on the QA Guide
Concierge Email
Jane
Message ID
Row 3
What is your dispute?
I don’t agree with the QA thoughts on this conversation
Concierge Email
jane@concierge.attentivemobile.com
Message ID
018edc49-0407-418d-f000-000077919745
What is your dispute?
I believe the markdown for Credible Source should be removed because the information came from the brand’s socials: link
All disputes for the week must be submitted by 2pm EST the Friday the week of the audit. If the dispute is filed after this time, it will be marked as invalid.

After the Dispute
Analyst Assigned
Re-Audit
Additional Resources
Score Finalized
A QA Analyst will be assigned to your dispute. This will be a different analyst from the one who previously audited your message
The conversation will be re-audited within 1 business day to:
Determine the validity of the dispute
Explain their reasoning for approving or denying the dispute
Upon reviewing the  dispute decision, you should submit any additional resources needed by commenting on the notes cell in the Disputes tab
Final score is determined for the conversation (see next slide)
The dispute will be closed once the final decision is reached
Dispute Closed
When leaving a comment on the Notes cell in the Disputes tab DO NOT tag anyone specifically
1
2
3
4
5

If your dispute is approved, the following will happen:
Your original score will be deleted and the passing score will be submitted
The QA sheet will reflect the now passing score
QA Score Finalized
Approved Dispute
If a dispute was denied and you left a comment disputing further or providing additional information, the following will happen
Amanda will review your comment and make a final decision on the dispute
Denied Dispute w/ Comment added by Agent
After the Dispute

Start Workflow 
Workflow Form 
Fill Out Form 
Submit Form 
Go to #concierge-follow-up-agents
Select Workflows
Select Escalation Disputes
The form will ask for the following information:
Your Concierge Email
Message ID
What is your dispute?
Fill out the entire form. Be sure to provide as much detail as possible on the last question.
Ensure the form is fully filled out, the press Submit
Escalation disputes are submitted via a slack workflow that can be found in the #concierge-follow-up-agents channel
Upon submitting, your dispute will be recorded in the Follow Ups Agents QA Sheet on the Disputes tab
Confirm Submission 
Do NOT use line breaks when filling out the form. This will cause the dispute to not show up fully on the sheet.
1
2
3
4
5
Follow Ups Process
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(qaDisputeProcessContent, 'admin', 'kpis');
}
