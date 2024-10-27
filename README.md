# Page Redirector

A minimal and lightning-fast URL redirector with auto-close functionality.
Originally designed for Obsidian protocol links but works with any valid URL.


The purpose of this script is to integrate it into sites which by default don't process the ``obsidian://`` protocol as a web-url.
I personally use it to link to my Obsidian Vaults within Google Tasks.

![image](https://github.com/user-attachments/assets/157b4315-e51b-450d-a8bf-021d3df02a97)



## Features

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


### Opening a file in Obsidian using the Advanced URI Plugin
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


### Auto-Close Feature
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
