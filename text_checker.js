
number_oresults = 0;
var cat = cats();
var results = [];

function case_insensitive(re){
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

// function longSentence(maxWords, colour,desc,rule_name) {
//   var body = DocumentApp.getActiveDocument().getBody();
//   var text = body.getText()
//   var sentences = text.split(/\.|\n/);
//   for (i = 0; i < sentences.length; i++) {
//     var wordCount = sentences[i].split(/\s/).length;
//     if (wordCount > maxWords) {
//       var foundElement = body.findText(sentences[i]);
//       var foundText = foundElement.getElement().asText();
//       var start = foundElement.getStartOffset();
//       var end = foundElement.getEndOffsetInclusive();
//       foundText.setBackgroundColor(start, end, colour);
//       number_oresults++;
//       var pusher = '<p><span style="background-color:'+colour+'"><b>'+"Long sentence"+'</b> - '+ desc +'</span></p>';
//       results.push(pusher);
//     }
//   }
// }
