# 1i

A style guide checker built during OCtober 2018 Firebreak in the Citizens Advice Customer Journey team.
The team was: [Alec Johnson](https://github.com/MrAlecJohnson), [Ian Ansell](https://github.com/Nyzl), [Adam Smith](https://github.com/smifaye), [Greg Lamyman](https://twitter.com/greglmy), Adam Parsons, Jon Manning

The purpose was a build something that would highlight to users if they broke some of our simpler style rules. This would allow proof reading to focus more on tone rather than specific rules, and cut down on effort required.


Example JSON structure
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
