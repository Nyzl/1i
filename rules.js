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
                    "can not": {
                        "description": "Can\’t",
                        "js_rules": [
                            {
                                "name": "findRegex",
                                "parameter": "\\\\bcan not\\\\b|\\\\bcannot\\\\b"
                            }
                        ]
                    },
                    "do not": {
                        "description": "Don\’t",
                        "js_rules": [
                            {
                                "name": "findText",
                                "parameter": "do not"
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
                        "description": "Could have",
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