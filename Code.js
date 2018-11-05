function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var template = HtmlService.createTemplateFromFile('index');
  var html = template.evaluate().setTitle('1i');
  DocumentApp.getUi()
      .showSidebar(html);
}

function results_run() {
  looper();
  results_show();
}

function results_clear() {
  clearText();
  showSidebar();
}

function results_show() {
  var template = HtmlService.createTemplateFromFile('index');
  var html = template.evaluate().setTitle('1i');
  var number = number_oresults;
  var full = ['<div class="results">',"<h3>Found", number ,"things to fix</h3>",
              '<div class="highlights">',
              results.join('\n'),
              "</div>","</div>"].join('\n');

  html.append(full);
  DocumentApp.getUi()
      .showSidebar(html);
}
