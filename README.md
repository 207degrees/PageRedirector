# Page Redirector

A minimal and lightning-fast URL redirector with auto-close functionality.  
Originally designed for Obsidian protocol links but works with any valid URL.  

The purpose of this is to integrate it into sites which by default don't process the ``obsidian://`` protocol as a web-url.

Original code by [EDLLT](https://edllt.github.io/PageRedirector/).
He uses it personally use it to link to his Obsidian Vaults within Google Tasks.  

![image](https://github.com/user-attachments/assets/157b4315-e51b-450d-a8bf-021d3df02a97)

## This fork
For those who like me want to track links, I've not found a simple solution.
I've tried to add umami analytics to track my clicks but I can't seem to get it done. Probably the redirect is happening before the page is registered.
So in case the original code disappears, I’m keeping my fork.


## Omnifocus, Obsidian and Morgen calendar app
I've had the same problem with the Morgen calendar app, which can now automatically import Obsidian tasks.
However my task database is in Omnifocus and Morgen didn't like ``omnifocus:///`` links, so I'm now using this PageRedirector for that and adding a markdown link in the Obsidian task. It's quite a complicated setup.

Task in Omnifocus has a note with an Obsidian task setup in the format that Morgen expects:

``- [ ] Do this task #task/personal [OF](https://207degrees.github.io/PageRedirector/?link=omnifocus:///task/abcdefGHIJKL)``

There's an [Omni-Automation](https://omni-automation.com/omnifocus/plug-in-obsidian.html) script that adds the Omnifocus task into Obsidian and adds the link to the Omnifocus note.

There's a [Morgen](https://morgen.so) integration plugin for Obsidian that grabs appropriately configured tasks into Morgen from Obsidian.

The Morgen Obsidian integration shows an Obsidian link in Morgen, so I could go to Obsidian first then click Omnifocus task link in the Obsidian note.
However, I really wanted to cut out the extra step and this Page Redirector does that nicely.

There's one last thing, I use Bumpr app on my mac, which allows for rules per browser.
So when I hit my link, it opens Opera Browser, where TamperMonkey is installed and script is setup, so that the page is auto-closed after the redirect.

So **thanks** EDLLT for resolving that problem for me :)


## EDLLT's PageRedirector Features

- ⚡ Instant redirections
- 🔒 Security validation for URLs
- 📱 Mobile-friendly
- 🔍 Minimal code footprint
- 🚪 Optional auto-close functionality (via TamperMonkey)


## Usage

### Basic Redirection
Add your target URL as a `link` parameter:
```
https://edllt.github.io/PageRedirector/?link=YOUR_URL_HERE
```


### Opening Google
```
https://edllt.github.io/PageRedirector/?link=https://google.com/
```


### Opening a file in an Obsidian vault
(Copy the Obsidian URL by right-clicking on a file within Obsidian then click "Copy Obsidian URL")
```
https://edllt.github.io/PageRedirector/?link=obsidian://open?vault=YOURVAULT&file=FILEPATH
```


### (Optional) Opening a file in Obsidian using the Advanced URI Plugin
I recommended using Obsidian Advanced URI instead because you can customize the behavior to:
- Open specific headings
- Navigate to custom positions in Obsidian canvas
- Control whether links open in new or current tabs
- And much more

Example using [Obsidian Advanced URI plugin](https://publish.obsidian.md/advanced-uri-doc/Home):
(After installing the plugin, copy the Obsidian Advanced URI by right-clicking on a file within Obsidian then click "Copy Advanced URI")
```
https://edllt.github.io/PageRedirector/?link=obsidian://adv-uri?vault=YOURVAULT&file=FILEPATH&openmode=true
```


### (Optional) Auto-Close Feature
1. Install [TamperMonkey](https://www.tampermonkey.net/) in your browser
2. Install the [AutoPageClose.js](https://github.com/EDLLT/PageRedirector/releases/download/v1.0/AutoPageClose.user.js) script to TamperMonkey


## Technical Details

### Security
- URL validation before redirection
- Content Security Policy implemented
- JavaScript validation checks


### Browser Support
- Works in all modern browsers
- Fallback message for browsers with JavaScript disabled


## Contributing
Feel free to open issues or submit pull requests for improvements.
