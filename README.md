# 1i [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

A style guide checker built during October 2018 Firebreak in the Citizens Advice Customer Journey team.
The team was: [Alec Johnson](https://github.com/MrAlecJohnson), [Ian Ansell](https://github.com/Nyzl), [Adam Smith](https://github.com/smifaye), [Greg Lamyman](https://twitter.com/greglmy), [Adam Parsons](https://github.com/adamgparsons), Jon Manning

The purpose was a build something that would highlight to users if they broke some of our simpler style rules. This would allow proof reading to focus more on tone rather than specific rules, and cut down on effort required.

## Installation
Currently this is only available to users with citizensadvice.org.uk accounts, or those with the link: https://chrome.google.com/webstore/detail/citizens-advice-style-che/nffbeolahalmiikmlaofbjlaofongaep?utm_source=permalink

### Using clasp to create your own project
Git clone to a location and use clasp to initialise that folder as a new project, you can then clasp push to you own apps script project


## Example JSON structure
```

"category": {
    "punctuation":
    {
      "colour": "#4AFF77",
      "description": "category description",
      "rules":       
      {
        "first rule":
        {
          "description": "description of the rule",
          "js_rules":
          [
            {
              "name": "name of js function",
              "parameter": "parameter to pass to the function"
            }
          ]
        },
        "second rule":
        {
          "description": "description of the rule",
          "js_rules":
          [
            {
              "name": "name of js function",
              "parameter": "parameter to pass to the function"
            }
          ]
        }
      }
    },
    "second category":
    {
      "colour": "#FFFFFF",
      "description": "category description",
      "rules":
      {
        "next rule name":
        {
          "description": "description of the rule",
          "js_rules":
          [
            {
              "name": "name of js function",
              "parameter": "parameter to pass to the function"
            }
          ]
        }
      }
    }
  }

```
