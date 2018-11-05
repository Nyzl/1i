var cat = cats();
var clearColour = "#FFFFFF";


function looper() {
  var categories = Object.keys(cat.category);
  for (var i in categories) {
    var cat_name = categories[i];
    var cat_colour = cat.category[cat_name].colour;
    var rules = Object.keys(cat.category[cat_name].rules)

    for (var j in rules){
      var rule_name = rules[j];
      var rule_desc = cat.category[cat_name].rules[rule_name].description;
      var js_rules = cat.category[cat_name].rules[rule_name].js_rules;
      var js_rule_name = js_rules[0].name;
      var parameter = js_rules[0].parameter;
      var js_run_rule = js_rule_name + '("' + parameter +'","'+ cat_colour +'","'+ rule_desc +'","'+ rule_name +'")';
      var runner = eval(js_run_rule);
    }
  }
}

function clearText() {
  var categories = Object.keys(cat.category);
  for (var i in categories) {
    var cat_name = categories[i];
    var cat_colour = clearColour;
    var rules = Object.keys(cat.category[cat_name].rules)
    for (var j in rules){
      var rule_name = rules[j];
      var rule_desc = cat.category[cat_name].rules[rule_name].description;
      var js_rules = cat.category[cat_name].rules[rule_name].js_rules;
      var js_rule_name = js_rules[0].name;
      var parameter = js_rules[0].parameter;
      var js_run_rule = js_rule_name + '("' + parameter +'","'+ cat_colour +'","'+ rule_desc +'","'+ rule_name +'")';
      var runner = eval(js_run_rule);
    }
  }
}
