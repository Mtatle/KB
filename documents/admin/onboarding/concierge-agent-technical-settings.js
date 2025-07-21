// Document content for Concierge Agent Technical Settings
const conciergeAgentTechnicalSettingsContent = {
    id: '1ItUQAyYlBlCXy-paWCRg3oKSgC3525zBKTD5eXZiOfw',
    title: 'Concierge Agent Technical Settings',
    type: 'presentation',
    description: 'Technical settings and configuration guide for concierge agents',
    tags: ['admin', 'onboarding', 'technical', 'settings', 'configuration'],
    content: `Tech Settings

Table of Contents
Computer
Browser
Choice
Settings
Add-ons
Settings
Apps

Computer

Important Setting
Your timezone should be set to Eastern Time (or a city on the East Coast) at all times during your shift
Agents who are ahead of the East Coast time in the US will notice periods when they get assigned chats that have already been timed out because of incorrect timezone settings
Timezone Settings
You can do this in Settings by following the first part of this guide
Apple Guide
Windows Guide
You can do this in System Settings by following this guide

VPN Applications
The only approved VPN for Concierge is NordLayer
Every agent has access to this VPN and is encouraged to download and set it up following this guide
We do not support any other VPN
Any illegal use through NordLayer is explicitly prohibited; this includes torrent downloads
Using NordLayer for anything like this will result in immediate termination
Any app that blocks cookies or trackers is strictly prohibited
These include (but are not limited to): using a seedbox, PeerBlock, Guardian, etc.
VPN Disclaimer
Privacy Blockers
Application Usage

Browser

Choosing a Browser
Google Chrome
The recommended browser for all agents is Google Chrome (download)
Chromium-based browsers such as Microsoft Edge (download) are also an acceptable alternative
While not the Operations team’s first choice, we do accept Mozilla Firefox (download) as an alternative to any Chromium-based browser
We do not allow the use of any browser that has blocking features; these interfere with how the Attentive platform works
Examples: Brave Browser, Opera GX
Mozilla Firefox
Other Browsers

Browser Setup
Browser Profile
Create a dedicated profile in your browser that you will log in to with your Concierge email
This is done differently in each browser: Chrome, Edge, Firefox.
You should only ever have one Concierge tab open at a time
This means you need to work in one tab only, regardless of whether you are in a conversation, on the dashboard, or on the feedback page
Any browser that you use must have third-party cookie collection enabled
To be sure this is not blocked, please add an exception for the website in Settings (Chrome, Edge, Firefox)
Concierge Tabs
Enable Cookies

Banned Extensions
Cookie Blockers
Any extension that blocks cookies such as CookieBlock, Ghostery, or Ninja Cookie interferes with Concierge functionality

Privacy & Ad Blockers
Extensions such as uBlock Origin, Adblock Plus, or Privacy Badger go against our policies

VPN Extensions
As with apps, we do not allow outside VPN use; some of these are: Proton, Urban, and Browsec

Unauthorized Information
Extensions that offer unauthorized and unverified information such as Honey are strictly prohibited

The following groups of extensions are not allowed to be used during your shifts

Questions
If you are unsure about anything that is covered in this deck or have questions specific to your setup that have not been answered, please contact Petra via Slack!


Thanks for your time!
`
};

// Register the document
if (window.documentRegistry) {
    window.documentRegistry.registerDocument(conciergeAgentTechnicalSettingsContent, 'admin', 'onboarding');
} 