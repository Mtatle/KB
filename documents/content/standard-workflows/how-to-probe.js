// Document content for How To Probe
const howToProbeContent = {
    id: '1hmsq7VvrGCgeESZQFOhqIZ3VJIUcSnlng1EgPIQAtFc',
    title: 'How To Probe',
    type: 'presentation',
    description: 'Techniques for effective probing in conversations',
    tags: ['content', 'standard-workflows', 'probe', 'techniques', 'conversations'],
    content: `How To Probe



Language Barriers
Examples
How To Probe
Understanding Effective Probing
Asking The Right Questions

Understanding Effective Probing


Probing means asking thoughtful follow-up questions to fully understand the customer's issue.

It’s not about asking more questions, it’s about asking the right ones to:

Fill in missing information
Clear up vague or conflicting messages
Guide the customer to a solution faster
Avoid assumptions or incorrect next steps
What Is It?
Effective Probing =  less back-and-forth + faster resolutions

You don’t need to ask follow-up questions for every message - only when it’s necessary to move the conversation forward.

When To Probe 
The message is unclear or incomplete
The message is too ambiguous or open to interpretation
The info provided is not enough to resolve the issue
 There’s a problem! Help. 
The order is not what I expected.  
It won’t let me checkout. 
Examples
Understanding Effective Probing

Asking The Right Questions
Tailor your questions to what they said
1
Refer directly to the customer’s message to show we’re paying attention. This helps avoid generic or confusing questions and makes it easier for them to respond directly.
Use all available information to guide your questions
2
Leverage previous messages, the UI, website, Google or other research methods. This shows you’re thoughtfully piecing together the situation and asking precise questions.
Add context and reasoning to your ask
3
Explain why you need more details or what you’re trying to clarify. This reassures the customer you’re working toward a solution.
Use the “If-so” method when guessing
4
When you’re making an educated guess, phrase your question like, “Are you referring to [X]? If so, [info found].” This helps the customer easily confirm correct info and avoids back and forth.

What To Avoid? 

Asking vague or generic questions
Avoid questions like “Can you clarify?” or “What do you mean?” without context. They can frustrate customers.

Asking for info we already have
Double-check the resources available like previous texts, and the customer profile.

Sounding robotic or scripted
Avoid copy-pasting generic phrases that don’t fit the flow of the conversation

Sending multiple separate messages asking one question at a time
Combine your questions clearly in one message to keep the conversation efficient.
Asking The Right Questions

There are some cases where customers text in a language other than English. In those cases, we’re still expected to help them as normal, just with a few extra steps!

Language Barriers 
1
Look for any notes or company guidelines in the UI on how to handle these
2
If there are no notes, use Google Translate to understand their message
3
Once you have a response, translate it back to the customer’s original language and send!
 Quand est-ce que ma commande va arriver?
Je suis ravi de vous aider! Je vois que votre commande est prévue pour demain à 15 h. Vous pouvez la suivre ici: [link]

Examples
 I think it’s stuck! I called and no one answered! Can someone please help?
COMPLIANCE
 I’m really sorry to hear that! Please note phone support is open between 10am and 4pm ET. But I’d be happy to help via text. Are you referring to your most recent order 453646? If so, I see there was a recent tracking update and it just arrived at the USPS facility in your area. You can track it here: [link]  Otherwise if you referring to something else please let me know so I can look into it.  
 Sorry! Can you tell me what you’re referring to?
NON-COMPLIANCE

TV was working fine yday but now it’s just, frzen idk. no loading anythinf.
 I’m sorry for the trouble. Just to make sure I understand, is your TV frozen and not loading anything? If so, do you see any error message? And do you mind sending me the model number as well? That way I’ll be able to look into the issue for you. 
 Can you please clarify what you mean?
Examples
COMPLIANCE
NON-COMPLIANCE

¿Cómo devuelvo mi pedido?
Lamento que no haya sido lo adecuado para ti. Puedes consultar nuestra política de devoluciones aquí [link] y comenzar tu devolución aquí [link]. ¡Con gusto te ayudo si necesitas algo más!
 Sorry I don’t understand. What do you mean? 
Examples
COMPLIANCE
NON-COMPLIANCE
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(howToProbeContent, 'content', 'standardWorkflows');
} 