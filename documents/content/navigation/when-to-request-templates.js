// Document content for When to Request Templates
const whenToRequestTemplatesContent = {
    id: '1p9aosWDa8VqobsdSQX6joNLiQ-f2FdCkSG-TgZb-p5Y',
    title: 'When to Request Templates',
    type: 'presentation',
    description: 'Guide on template requests',
    tags: ['templates', 'requests', 'process', 'guidelines'],
    content: ` When to Request Templates

What are Templates
Templates
Requesting Templates
Template Approval

Pre-written responses designed to help agents quickly and consistently address common customer inquiries. They streamline communication, allowing agents to focus on providing personalized support. 
Definition
Ensure consistency and accuracy in responses - Templates provide standardized language and information, ensuring that every agent gives the same accurate responses to similar customer questions. 
Save time and improve efficiency - Agents can reply to common inquiries much faster, reducing the time spent crafting individual replies and allowing them to handle more customers.
 Maintain brand voice and tone - Some templates are designed to reflect the company’s unique style and messaging, ensuring that every response is aligned with the brand's values and tone.
Reduce errors and guesswork - By providing pre-approved answers, templates minimize the risk of incorrect information or phrasing.
Benefits 
What are Templates

What are Templates
Templates
Requesting Templates
Template Approval

Requesting Templates
1
Click on the three dots in the top right corner of the message
2
Select"Request Template"

If you come across helpful information from credible brand sources (like the brand’s website, FAQs, or official social channels) that isn’t already in an existing template but could be useful for multiple customers, you can request a new template.
 When to Request?
How to Request?

Requesting Templates
6

Click"Request Template"

5
Include the source and link in "Notes for Approver"
3
Enter a clear and relevant“Title”
4
Add sourced information in the “Body” section

Outdated Templates

Another situation when you can request a template is that if you notice that a current template has outdated or inaccurate information different from what’s currently on the brand’s website.

The process to update the template is the same. 
Outdated Templates
Template
Info From Website

What are Templates
Templates
Requesting Templates
Template Approval

Template Approval
You’ll can see the template request in the “Templates” tab in the UI. 
In there, you can find check the status of your template and if it was accepted or denied by the operation team. 
What Happens after Requesting a Template?
If the template is accepted, it will be added to the brand specific templates for the brand.
`
};

window.whenToRequestTemplatesContent = whenToRequestTemplatesContent;

// Register with document registry
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(whenToRequestTemplatesContent, 'content', 'navigation');
} else {
    window.addEventListener('load', () => {
        if (window.documentRegistry) {
            window.documentRegistry.registerDocument(whenToRequestTemplatesContent, 'content', 'navigation');
        }
    });
}

