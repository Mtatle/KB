// Document content for When I Work Guide
const whenIWorkGuideContent = {
    id: '1bt2m8jstjHm__PCuSoUd7-nMYIbe9gDPIe84Pp8PtM4',
    title: 'When I Work Guide',
    type: 'presentation',
    description: 'Guide for using When I Work scheduling system',
    tags: ['admin', 'system', 'when-i-work', 'scheduling', 'guide'],
    content: `When I Work Guide
How to Pick Up Shifts
How to Release Shifts
How to Swap Shifts
How to Clock In/Out
How to Request Time Off
Important Reminders!

How to Pick Up Shifts
1
Head over to ‘MY SCHEDULE’

You’ll see ‘Available Open Shifts’
Hover over a shift you’d like to pick up and click on ‘TAKE SHIFT’ 
Click on ‘TAKE OPENSHIFT’ in the pop-up window
2
3
4

How to Pick Up Shifts
ALTERNATIVE
1
Head over to ‘TEAM SCHEDULE’
You’ll see an OpenShifts section at the top
2
Click on the shift you’d like to pick up and click on ‘TAKE SHIFT’ 
3
Click on ‘TAKE OPENSHIFT’ in the pop-up window
4

How to Release Shifts
1
Head over to ‘MY SCHEDULE’
2
Click on a shift you’d like to release
3
Click on a ‘GET SHIFT COVERED’
4
Click on a ‘Release Shift’
5
Click on a ‘RELEASE SHIFT’ in the pop-up window
Make sure to always release shifts at least 48 hours before the shift start time 

How to Drop Shifts
1
Head over to ‘MY SCHEDULE’
2
Click on a shift you’d like to release
3
Click on a ‘GET SHIFT COVERED’
4
Click on a ‘Drop Shift’
5
Click on a ‘REQUEST DROP’ in the pop-up window
Note that you are still responsible for the shift until and if someone else decides to pick it up.

How to Swap Shifts
1
Follow the first 3 steps from the previous slide
How to Release Shifts
2
Click on a ‘Swap Shift’
3
Select all shifts you want to swap with
4
Click on ‘INITIATE SWAP’ 
If no one accepts your shift swap request, you are still responsible for it, so please track the status of your request

How to Clock In/Out
1
From anywhere in WIW hover over ‘ATTENDANCE’  in the bar at the top 
2
Click on ‘CLOCK IN’  
3
Position should already be filled-in, however if it is not select ‘Agent’ from the dropdown menu
4
Click on ‘CLOCK IN’  
You can clock in 5 minutes before the start of your shift, however try to clock in on time
CLOCKING IN

How to Clock In/Out
CLOCKING OUT
2
In case you are clocking out earlier than your shift end time, please add a note explaining why
Always make sure to clock out on time, clocking out later will negatively affect your performance
3
Click on ‘CLOCK OUT’ 
1
From anywhere in WIW hover over ‘ATTENDANCE’  in the bar at the top 

How to Request Time Off
1
Hover over a folder icon in the top bar
2
From the dropdown menu click on ‘REQUEST TIME-OFF’ 
3
Select Personal or Sick as Time Off Type
Make sure to submit your time off request at least 7 days in advance unless you’re taking time off for a medical reason
4
Input the dates and the message
5
Click on ‘SEND REQUEST’

Important Reminders!
Make sure to always clock in prior to going available in the UI and clock out after going unavailable in the UI
In case you forget to clock in, do not stop working in the inbox, just use the Timesheet Adjustment Request workflow in #team-deel
In case you forget to clock out, use the Timesheet Adjustment Request workflow in #team-deel
Do not stay in the inbox longer than you are scheduled, this can reflect poorly on your overall performance 
If you cannot work your shift always release it at least 48 hours prior, if not, use the Emergency Shift Release workflow in #team-deel

In case you have any other questions, feel free to ask in #team-deel, tagging Petar
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(whenIWorkGuideContent, 'admin', 'system');
} 