// Document content for KPIs
const kpisContent = {
    id: '11iWtVTv52akEfjN__TMae9xq2u7SOGrlHrU8ZBifq7Y',
    title: 'KPIs',
    type: 'presentation',
    description: 'Key Performance Indicators and metrics for concierge agents',
    tags: ['admin', 'kpis', 'performance', 'metrics', 'indicators'],
    content: `KPIs

   Why do we look at KPIs?
 Improve customer experience: They help us prioritize customer experience and satisfaction 
 Boost efficiency: They identify areas for improvement in workflow and issue resolution
 Enhance communication: They provide a common language for feedback and performance discussions
 Provide motivation: They are often linked to recognition and rewards for top performers
What are KPIs? 
KPIs (Key Performance Indicators) 
Provide targets for us to aim for
Help us gauge our progress

24+
Productivity
Boost your productivity by deepening your knowledge to solve problems faster, streamline your process,and always aim to improve!
Also commonly called “Sends per Hour”, it’s the total count of messages sent divided by   total available hours in the UI
Definition
What affects SPH?
Key Tip
Target
Unstable internet connection
Bad internet provider
Overthink processes
Slow typing
Not using TextBlaze and templates 

AST
AST stands for Average Send Time. It is the time between you entering a chat and sending a message. We average this time across all of your chats to get AST.
Definition
< 2 min
Boost your AST by deepening your knowledge to solve problems faster, streamline your process,and always aim to improve! Use templates for every response! 
What affects AST?
Key Tip
Target
Not knowing our workflows
Overthinking replies
Slow typing
Not using templates or tools  

QA
QA stands for Quality Assurance!
QA focuses on sending high quality, sales focused messages to enhance client satisfaction
Definition
PASS
Focus on sending polished, client-centered messages that meet QA standards
Use templates, review chat history, and avoid errors to achieve and maintain the target
What affects QA?
Key Tip
Target
Missing or incorrect use of templates
Failure to review chat history
Lack of attention to detail
Inconsistent tone or formatting

Availability
Availability is the percentage of time clocked into When I Work that was spent in the available state on the agent platform. 
Definition
94% - 101%
Stay clocked in and available during your shift, like a superhero on call! Take your breaks and avoid exceeding the allowed time to ensure consistent productivity
What affects Availability?
Key Tip
Target
Power Outage
Connectivity issues
Not clocking in/out of your shift
Clocking out late

  < 0.5
Avoidance Index
It is the count of how many times you disabled your availability manually per hour worked 
Definition
Only disable availability for true emergencies! Handle all chats assigned to your queue in a consistent manner
What affects Avoidance Index?
Key Tip
Target
Connectivity issues
Manual toggles outside of emergencies

DNR
DNR stands for Do Not Respond time. It is the time it takes to mark a conversation as "no reply needed", which includes unsubscribing, blocking, and all conversations that do not require a send
Definition
  < 20 sec
Treat DNR as a tool for efficiency! Close chats only when no response is required, like unsubscribing or blocking 

Review each case carefully before marking as “no reply needed”
What affects DNR?
Key Tip
Target
Not being familiar with our Closing Guidelines
Not reviewing notes
Not being familiar with our SOP for posting in #concierge-ops-issues

UT
UT stands for Unavailable Time! UT tracks the downtime between chats when you’re not actively responding. The goal is to keep this time minimal for maximum efficiency
Definition
  < 8 sec
Focus on minimizing downtime between chats! Be ready to jump into the next conversation quickly to stay productive
What affects UT?
Key Tip
Target
Ignoring the notifications for new messages 
Not entering the conversation in a timely manner
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(kpisContent, 'admin', 'kpis');
} 