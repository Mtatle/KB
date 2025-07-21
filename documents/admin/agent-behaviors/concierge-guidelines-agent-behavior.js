// Document content for Concierge Guidelines - Agent Behavior
const conciergeGuidelinesAgentBehaviorContent = {
    id: '1eTHXGK8vhFTQfP5beBAR-s_9_fN4T729dMig0_Cp9JY',
    title: 'Concierge Guidelines - Agent Behavior',
    type: 'presentation',
    description: 'Guidelines for concierge agent behavior and conduct',
    tags: ['admin', 'agent-behaviors', 'guidelines', 'behavior', 'conduct'],
    content: `Agent Behavior Guidelines

Do Not Respond (DNR) Time is the time from when you enter a conversation to when you close it. The time when you are in another conversation does not affect this metric.
This includes unsubscribing, blocking, or closing a chat without a send.
Unproductive Time (UT) is the time from when a chat is assigned to you to when you enter it. If you have a chat in progress when a new one is assigned, this is switched to the time from when you end your current chat to when you enter the next one.
This applies to all chats you are assigned.
Schedule Adherence (SA) is the number of shifts that you did not attend.
It is your responsibility to drop any shifts you cannot attend and allow another agent to take over. If it remains unclaimed, it is necessary to follow the emergency release workflow pinned in Slack.
Agent Behavior Definitions
Unproductive Time
Schedule Adherence
Do Not Respond Time

Unauthorized Breaks (UB) are split into two categories:
Breaks you take when 2 agents are already on break
Breaks you take within the last 30 minutes of your shift
Both behaviors go against the guidelines for breaks.
Intervals where you sent very few messages when there was a chance for more than that. These intervals exclude when you were on a break.
Once your shift begins, you are expected to maintain productivity throughout.
Hourly intervals where your productivity was significantly below the team average. These intervals exclude when you were on a break.
This calculation accounts for low volume and only flags hours where you could have sent more messages.
Work Time Adherence
Low Productivity Hours
Unauthorized Breaks
Agent Behavior Definitions

Do Not Respond Time
Low Productivity Hours
Schedule Adherence
Unproductive Time
Work Time Adherence
Unauthorized Breaks
Less than 20 seconds
Maintaining target productivity
Full compliance with allocated shift times
Less than 8 seconds on average
No intervals with low sends
 Full compliance with break guidelines
DNR
LPH
SA
UT
WTA
UB
Agent Behavior Targets

Any questions? Ask in Slack!
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(conciergeGuidelinesAgentBehaviorContent, 'admin', 'agentBehaviors');
} 