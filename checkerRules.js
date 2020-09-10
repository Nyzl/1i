function rules() {

    var cat = {
        "category": {
            "punctuation": {
                "colour": "#4AFF77",
                "description": "bad bad bad punctuation!",
                "rules": {
                    "ampersand": {
                        "description": "Use \’and\’ instead",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "&"
                            }
                        ]
                    },
                    "can't": {
                        "description": "can not",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "can’t|can't|cannot|Can’t|Can't|Cannot"
                            }
                        ]
                    },
                    "don't": {
                        "description": "do not",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "don't|don’t|Don't|Don’t"
                            }
                        ]
                    },
                    "double space": {
                        "description": "Use single",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "  "
                            }
                        ]
                    },
                    "forward slash": {
                        "description": "Don\’t use",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "/"
                            }
                        ]
                    },
                    "greater/less than": {
                        "description": "Don\’t use",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": ">|<"
                            }
                        ]
                    },
                    "half an emoticon": {
                        "description": "Change to \’:\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": ":-"
                            }
				        ]
                    },
                    "semicolon": {
                        "description": "Don\’t use",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": ";"
                            }
                        ]
                    },
                    "you will": {
                        "description": "You\’ll",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "you will"
                            }
                        ]
                    }
                }
            },
            "numbers": {
                "colour": "#FF89DE",
                "description": "digity numbers",
                "rules": {
                    "digits": {
                        "description": "Use a digit",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "\\\\bone\\\\b|\\\\btwo\\\\b|\\\\bthree\\\\b|\\\\bfour\\\\b|\\\\bfive\\\\b|\\\\bsix\\\\b|\\\\bseven\\\\b|\\\\beight\\\\b|\\\\bnine\\\\b|\\\\bten\\\\b"
                            }
                        ]
                    }
                }
            },
            "words": {
                "colour": "#E2FF00",
                "description": "wordy words",
                "rules": {
                    "a number of": {
                        "description": "Complex: try many or some",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "a number of"
                            }
                        ]
                    },
                    "abundance": {
                        "description": "Complex: try enough or plenty",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "abundance"
                            }
                        ]
                    },
                    "accede to": {
                        "description": "Complex: try \’allow or agree to\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "accede to"
                            }
                        ]
                    },
                    "accelerate": {
                        "description": "Complex: try \’speed up\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "accelerate"
                            }
                        ]
                    },
                    "acquire": {
                        "description": "Complex: try \’get\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "acquire"
                            }
                        ]
                    },
                    "additional": {
                        "description": "Complex: Try \’more or extra\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "additional"
                            }
                        ]
                    },
                    "advisor": {
                        "description": "Use adviser",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "advisor"
                            }
                        ]
                    },
                    "all of": {
                        "description": "Complex: try \’all\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "all of"
                            }
                        ]
                    },
                    "alternatively": {
                        "description": "Complex: try \’or\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "alternatively"
                            }
                        ]
                    },
                    "and/or": {
                        "description": "Don\’t use",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "and/or"
                            }
                        ]
                    },
                    "assistance": {
                        "description": "Complex: try \’help\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "assistance"
                            }
                        ]
                    },
                    "bureau": {
                        "description": "Use local Citizens Advice",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "bureau|bureaux|Bureau|Bureaux"
                            }
                        ]
                    },
                    "Our name": {
                        "description": "Use \’local Citizens Advice\’",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "\\\\bCA\\\\b|\\\\bCAB\\\\b|Cita|LCA|Citizens Advices"
                            }
                        ]
                    },
                    "commence": {
                        "description": "Complex: try \’begin or start\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "commence"
                            }
                        ]
                    },
                    "comply with": {
                        "des cription": "Complex: try \’follow\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "comply with"
                            }
                        ]
                    },
                    "consequently": {
                        "description": "Complex: try \’so\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "consequently"
                            }
                        ]
                    },
                    "could’ve": {
                        "description": "could have",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "could’ve|could've"
                            }
                        ]
                    },
                    "demonstrate": {
                        "description": "Complex: try \’prove or show\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "demonstrate"
                            }
                        ]
                    },
                    "depart": {
                        "description": "Complex: try \’leave or go\’",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "\\\\bdepart\\\\b"
                            }
                        ]
                    },
                    "discontinue": {
                        "description": "Complex: try \’drop or stop\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "discontinue"
                            }
                        ]
                    },
                    "eg": {
                        "description": "Don\’t use",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "e.g."
                            }
                        ]
                    },
                    "however": {
                        "description": "Complex: try \’but or yet\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "however"
                            }
                        ]
                    },
                    "ie": {
                        "description": "Don\’t use",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "i.e."
                            }
                        ]
                    },
                    "it is essential": {
                        "description": "Complex: try \’must or need to\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "it is essential"
                            }
                        ]
                    },
                    "may": {
                        "description": "Say \’might\’",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "\\\\bmay\\\\b"
                            }
                        ]
                    },
                    "multiple": {
                        "description": "Complex: try \’many\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "multiple"
                            }
                        ]
                    },
                    "not unlike": {
                        "description": "Complex: try \’similar or alike\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "not unlike"
                            }
                        ]
                    },
                    "numerous": {
                        "description": "Complex: try \’many\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "numerous"
                            }
                        ]
                    },
                    "objective": {
                        "description": "Complex: try \’aim or goal\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "objective"
                            }
                        ]
                    },
                    "participate": {
                        "description": "Complex: try \’take part\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "participate"
                            }
                        ]
                    },
                    "previously": {
                        "description": "Complex: try \’before\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "previously"
                            }
                        ]
                    },
                    "prior to": {
                        "description": "Complex: try \’before\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "prior to"
                            }
                        ]
                    },
                    "purchase": {
                        "description": "Complex: Try \’buy or sale\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "purchase"
                            }
                        ]
                    },
                    "require": {
                        "description": "Complex: try \’must or need\’",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "\\\\brequire\\\\b"
                            }
                        ]
                    },
                    "s/he": {
                        "description": "Use \’they\’ instead",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "s/he"
                            }
                        ]
                    },
                    "should’ve": {
                        "description": "Should have",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "should’ve|should've"
                            }
                        ]
                    },
                    "sufficient": {
                        "description": "Complex: try \’enough\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "sufficient"
                            }
                        ]
                    },
                    "the client": {
                        "description": "Say \’your client\’ instead",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "the client"
                            }
                        ]
                    },
                    "therefore": {
                        "description": "Complex: try \’so\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "therefore"
                            }
                        ]
                    },
                    "this page": {
                        "description": "Don\’t use",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "this page"
                            }
                        ]
                    },
                    "this section": {
                        "description": "Don\’t use",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "this section"
                            }
                        ]
                    },
                    "UC": {
                        "description": "Use \’Universal Credit\’",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "\\\\b(UC)\\\\b"
                            }
                        ]
                    },
                    "utilise": {
                        "description": "Complex: try \’use\’",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "utilise"
                            }
                        ]
                    },
                    "would’ve": {
                        "description": "Would have",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "would’ve|would've"
                            }
                        ]
                    }
                }
            }
        }
    }

    return cat

}

function long_cats() {

    var long_cat = {
        "category": {
            "sentences": {
                "colour": "#00CFFF",
                "description": "long sentences and paragraphs",
                "rules": {
                    "long_sentence": {
                        "description": "Trim this below 25 words",
                        "js_rules": [
                            {
                                "name": "longSentence",
                                "parameter": 25
                            }
                        ]
                    }

                }
            }
    }
    }

return long_cat

}

number_oresults = 0;
var cat = rules();
var results = [];

function case_insensitive(re){
  if (typeof re != 'string')return;
  var tokens = re.split("");
  var output = "";
  for (x in tokens) {
    var y = tokens[x];
    output += "[" + y.toString().toUpperCase() + "|";
    output += y.toString().toLowerCase() + "]";
  }
  return output
}

function findText(findme,colour,desc,rule_name) {
  var body = DocumentApp.getActiveDocument().getBody();
  var regExp = case_insensitive(findme);
  var foundElement = body.findText(regExp);
  while (foundElement != null) {
    var foundText = foundElement.getElement().asText();
    var start = foundElement.getStartOffset();
    var end = foundElement.getEndOffsetInclusive();
    foundText.setBackgroundColor(start, end, colour);
    number_oresults++;
    foundElement = body.findText(regExp, foundElement);
    var pusher = '<p><span style="background-color:'+colour+'"><b>'+rule_name+'</b> - '+ desc +'</span></p>';
    results.push(pusher);
   }
}

function findRegex(findme,colour,desc,rule_name) {
  var body = DocumentApp.getActiveDocument().getBody();
  var foundElement = body.findText(findme);
  while (foundElement != null) {
    var foundText = foundElement.getElement().asText();
    var start = foundElement.getStartOffset();
    var end = foundElement.getEndOffsetInclusive();
    foundText.setBackgroundColor(start, end, colour);
    number_oresults++;
    foundElement = body.findText(findme, foundElement);
    var pusher = '<p><span style="background-color:'+colour+'"><b>'+rule_name+'</b> - '+ desc +'</span></p>';
    results.push(pusher);
   }
}

function longSentence(maxWords,colour,desc,rule_name) {
   var body = DocumentApp.getActiveDocument().getBody();
   var text = body.getText()
   var sentences = text.split(/\.|\n/);
   for (i = 0; i < sentences.length; i++) {
     var wordCount = sentences[i].split(/\s/).length;
     if (wordCount > maxWords) {
       var foundElement = body.findText(sentences[i]);
       var foundText = foundElement.getElement().asText();
       var start = foundElement.getStartOffset();
       var end = foundElement.getEndOffsetInclusive();
       foundText.setBackgroundColor(start, end, colour);
       number_oresults++;
       var pusher = '<p><span style="background-color:'+colour+'"><b>'+"Long sentence"+'</b> - '+ desc +'</span></p>';
       results.push(pusher);
     }
   }
}
