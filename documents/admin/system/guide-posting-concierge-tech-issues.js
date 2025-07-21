// Document content for Guide to Posting in #concierge-tech-issues
const guidePostingConciergeTechIssuesContent = {
    id: '1ij_dlttVQkVhNBvLd2jjNSJ-fKwER4MgW2LY9DVRtr4',
    title: 'Guide to Posting in #concierge-tech-issues',
    type: 'doc',
    description: 'Guide for posting technical issues in the concierge tech issues channel',
    tags: ['admin', 'system', 'guide', 'concierge-tech', 'posting', 'technical'],
    content: `Guide to Posting in #concierge-tech-issues
Channel Use
The #concierge-tech-issues channel is meant for technical issues related to the Attentive Concierge platform. Technical issues with the brand’s website or offering or Shopify are not controllable by Attentive and should be handled by letting the customer know that the IT team is going to work on a fix as soon as possible.
Everyone who is responsible for handling these issues has all channel notifications on, so please do not tag specific people; there is also no need to tag @here and you should never use @channel.
When Not to Post
The channel is to be used only for issues that have been through basic troubleshooting. At times, the UI does not respond well when you have not refreshed for a while and that can cause individual issues. Here are some common examples and what to try before posting:
The UI is loading slowly or showing an error message when you try to access the Concierge page
Try: clearing your cache and cookies or restarting your computer
If that helps, there is no need to post
It takes time for your message to send
Try: clearing your cache and cookies or restarting your computer
If that helps, there is no need to post
You are marked unavailable by the system
Try: resetting your network connection and making sure it is stable
If that helps, there is no need to post
There is a Concierge AI reply but the message still came into your queue; or you / another agent replied but still got assigned the same conversation without a new customer message
Try: checking if the response and latest customer messages were sent within one minute, or if customer texted multiple times in a short amount of time - if so, you can close the conversation
If that helps, there is no need to post
Blank message box or broken image symbol
Reply to the message asking the customer if they could try resending the message according to the Closing guide
Template: “Did you try sending a message? If so, I'm afraid I’m not able to read it. Can you please try sending it again?”
How to Post
If you have verified the above and for issues that are controllable by us, you can use the channel to report them, bearing in mind that someone might have already posted it beforehand. If they have, please:
React to the message with  (:samee:)
Hover over the post
Click on the three dots in the top right corner
Click Turn on notifications for replies so that you are kept up to date
Once you have done this, there is no need to also comment on the post as this will clutter the replies that will be used for updates going forward.
If no one has posted before you, please describe the issue, if it’s only one client or more, the approximate time it started,  attach a conversation link (multiple if you have them), and (where applicable) add a screenshot or a video.
Next Steps
Once an issue is reported, someone from leadership will look into it and what is causing it. They will use the thread that was started for any updates or checks if engineering is applying a fix; please be responsive if there is a question or something needs to be checked by an agent within the UI.
If there is no known incident, please keep in mind that the team has to wait a certain amount of time before raising one; during this time, please be patient and keep trying to respond to the best of your ability.
Once some time passes, the person handling the issue will post if you should go unavailable during the incident. Before then, do not go unavailable on your own accord.
Technical Issue Examples and Troubleshooting
You can’t send a message or a message you sent is not visible
if a message isn’t visible, try refreshing the conversation or moving to the next one and then back to the original conversation
do not send the message again as this could just be a delay and we would spam the customer
if the message cannot be sent (e.g. send button is loading, an error pops out), try sending a message in your other conversation
if the message doesn’t load or you can’t send anything, report the issue
You are receiving no chats
if it has been more than 10 minutes, report the issue
There is a delay between the chat being assigned to you and the customer message being shown (more than a minute)
clear your cookies and cache and reset your browser
go from one conversation to another or refresh within the conversation
if the messages keep not loading after a few minutes, report the issue
A feature on the Concierge platform does not work properly (e.g. notes aren’t being shown, the templates are missing, creating a cart, etc.)
clear your cookies and cache and reset your browser
go from one conversation to another or refresh within the conversation
if the issue doesn’t resolve, report the issue
Automated messages direct the customer to text a keyword but that comes through to Concierge
follow the protocol laid out in the Concierge Agent Troubleshooting doc and close the conversation
if multiple messages of the same variety come in, report the issue
There is no customer message in the conversation - the last message is from an agent one
refresh the conversation page multiple times
move to your second conversation (if you have one) and check if there is a customer message
You can close the chat if after 1 minute and after a final refresh there is still no reply - if this happens in more than 1 chat, report the issue
Other Types of Posts
Impactless Bugs
there are conversation issues that do not impact regular work but still seem strange - we would like to know about these
e.g. subscriber who is unsubscribed for seemingly no reason
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(guidePostingConciergeTechIssuesContent, 'admin', 'system');
} 