// Document content for Availability
const availabilityContent = {
    id: '1TOtnRWPttWd5U9KQv72VvU8brF1lqprAPnd8AyS24Pg',
    title: 'Availability',
    type: 'presentation',
    description: 'KPI metrics and guidelines for agent availability',
    tags: ['admin', 'kpis', 'availability', 'metrics', 'performance'],
    content: ` Availability
In this video, we’ll be diving into the Availability feature in Concierge. This feature is crucial for making sure that only agents who are ready to take on new customer conversations are actively receiving chats, helping manage workload efficiently.
Let’s get into how Availability works, what you need to know, and when to use it.



How It Works
When To Use It
Insights
Availability

   How It Works
The Availability feature lets you set whether you’re ready to take on new customer conversations.

By toggling this feature, you indicate to the system whether you are available to work in the inbox or not.

Toggle Button:
Default status is Unavailable
Click to change to Available

It helps the system manage workload distribution efficiently
Prevents agents from receiving messages when they are not ready to respond.
What is it?
Unavailable
Available
The Availability feature lets the system know whether you’re ready to take on new customer conversations or not. By toggling this feature, you’re essentially informing the system if you are available to work in the inbox at that moment.
Toggle Button:
Default Status: Unavailable
Click to Change: Available
This feature helps prevent agents from receiving messages when they’re not ready to respond. It also ensures that the system distributes work efficiently to those who are actually available to assist customers.
Now let’s take a look at how this plays out on the dashboard, where you’ll see the following sections: 


   How It Works


All Conversations: All incoming conversations awaiting assignment by the system

My Conversations: Conversations assigned directly to your personal queue when available.

Start Sending: A button that appears when you're available and have an assigned conversation, directing you to the chat.












Dashboard Features
Here are the key dashboard features you'll interact with related to Availability:
All Conversations:This section shows all incoming conversations that are awaiting assignment by the system. These are chats that haven’t been assigned yet but are in the queue.
My Conversations:This is where you’ll see conversations that have been directly assigned to your personal queue once you are available.
Start Sending:This button only appears when you are marked as Available and have an assigned conversation. When you click this, you’ll be taken directly to the conversation to start responding.
Let’s take a look at where to find all these features on the UI [demonstration]
Ok now we can move on to when to use the availability feature.


How It Works
When To Use It
Insights
Availability

Start of your shift
Mark Yourself as Available
Mark Yourself as Unavailable
   When To Use It
   2.    On shift & actively responding
   3.    Ready to receive new conversations
End of your shift
   2.    Urgent need to stop responding
   3.    Taking a break
   4.    Just reviewing/reading conversations
   5.    Outside of shift hours
Knowing when to mark yourself as Available or Unavailable is essential for maintaining a smooth workflow and avoiding missed or delayed conversations.
Mark Yourself as Available When:
Starting Your Shift – The first thing you should do when you log in to your system.
While Actively Working – Keep yourself available during your shift as long as you're actively responding to customers.
Ready to Receive New Conversations – Even if you’ve cleared your queue and are prepared to handle more, stay available so the system knows to assign more to you.
Mark Yourself as Unavailable When:
End of Your Shift – When you're done for the day and you’re scheduled to clock out - you’re expected to mark yourself as unavailable and shouldn’t handle any more conversation. 
Urgent Need to Stop Responding – If something urgent comes up and you need to step away immediately (e.g., personal emergency or urgent break).
Taking a Break – Mark yourself unavailable when you're on an official break, so no chats are assigned to you.
Just Reviewing/Reading Conversations – If you’re reviewing conversations for training, audit purposes, or Slack discussions but aren’t actively engaging with customers, you should be marked as unavailable.
Outside of Shift Hours – If you're not scheduled to be working, make sure to mark yourself unavailable to avoid receiving chats.
We closely monitor the usage of this feature to ensure it's being utilized correctly and appropriately, so please make sure to strictly follow these guidelines.
Next, let's dive deeper into the insights related to this feature.

How It Works
When To Use It
Insights
Availability

Insights
The system assigns conversations from the general queue to available agents based on who has been waiting the longest
If idle for too long or if you lose internet connection, the system will automatically mark you as unavailable
Before taking a break or towards the end of your shift, you need to ensure the conversation you will be working on in your personal queue is resolved.
Once you mark yourself as unavailable, the chats that were assigned to you will be reassigned to other agents that are available. 
Here’s a bit more on how the system uses this feature and what is expected:
Chats are assigned based on wait time priority – The system looks at who has been waiting the longest and assigns the next available conversation to that agent.
Automatic Unavailability – If you’re idle for too long or lose internet connection, the system will automatically mark you as unavailable to avoid assigning you chats when you're not ready.
Before taking a break or right before you're scheduled to clock out, ensure that you resolve the conversation you're currently handling in your personal queue. You don’t need to handle all remaining conversations in your queue - just focus on wrapping up the one you're actively working on at that moment then mark yourself as unavailable. 
Once you mark yourself as unavailable, any chats that were assigned to you will be automatically reassigned to other available agents. This ensures that customers continue to receive timely responses without interruption. The system prioritizes agents who are marked as available, ensuring that no customer inquiries are left unattended.

Availability tells the system if you're ready for chats
The toggle informs the system whether you are actively working and can receive new conversations
Chats are assigned when you’re available
When marked available, you’ll receive conversations from the general queue based on wait time priority
When to Be Available vs. Unavailable
Be available during your shift while handling chats, and switch to unavailable for breaks, after your shift, or when not actively responding
System automates for efficiency
The system manages availability when idle and chat distribution to ensure smooth workflow and prevent delays
Key Takeaways


`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(availabilityContent, 'admin', 'kpis');
}
