function myMap(array, func) {
  const res = [];
  for (var i = 0; i < array.length; ++i) {
    res.push(func(array[i], i, array));
  }
  return res;
}

var HeadingCounter,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

HeadingCounter = (function() {

  HeadingCounter.name = 'HeadingCounter';
  HeadingCounter.HEADINGS = [DocumentApp.ParagraphHeading.HEADING1.toString(),
                             DocumentApp.ParagraphHeading.HEADING2.toString(),
                             DocumentApp.ParagraphHeading.HEADING3.toString(),
                             DocumentApp.ParagraphHeading.HEADING4.toString(),
                             DocumentApp.ParagraphHeading.HEADING5.toString(),
                             DocumentApp.ParagraphHeading.HEADING6.toString()];

  function HeadingCounter() {
    this.counter = {};
    this.reset();
  }

  HeadingCounter.prototype.reset = function(level) {
    var h, i, _i, _len, _level, _ref;
    if (level == null) level = DocumentApp.ParagraphHeading.HEADING1;
    _level = level.toString();
    i = HeadingCounter.HEADINGS.indexOf(_level);
    _ref = HeadingCounter.HEADINGS.slice(i);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      h = _ref[_i];
      this.counter[h] = 0;
    }
  };

  HeadingCounter.prototype.increment = function(level) {
    var _level;
    _level = level.toString();
    if (this.counter.hasOwnProperty(_level)) {
      this.counter[_level]++;
      var next_level = HeadingCounter.HEADINGS[HeadingCounter.HEADINGS.indexOf(_level)+1];
      if (next_level != undefined) this.reset(next_level);
    }
    return this.counter[_level];
  };

  HeadingCounter.prototype.sequence = function(level) {
    var i, _level;
    _level = level.toString();
    if (__indexOf.call(HeadingCounter.HEADINGS, _level) >= 0) {
      i = HeadingCounter.HEADINGS.indexOf(_level);
      var _this = this;
      return myMap(HeadingCounter.HEADINGS.slice(0, i + 1 || 9e9), function(num) {
        return _this.counter[num];
      });
    } else {
      return;
    }
  };

  return HeadingCounter;

})();

function execute() {
  var body = DocumentApp.getActiveDocument().getBody();
  var paragraphs = body.getParagraphs();

  var counter = new HeadingCounter();
  for (let key in paragraphs) {
    let p = paragraphs[key];
    var h = p.getHeading();
    counter.increment(h);
    var level = counter.sequence(h)
    if (level) {
      var children = [];
      for (var i = 0; i < p.getNumChildren(); i++) {
        children.push(p.getChild(i));
      }

      p.insertText(p.getNumChildren(), replace_heading(level, p.getText()));

      for (var i = 0; i < children.length; i++) {
        p.removeChild(children[i]);
      }
    }
  }
}

function replace_heading(level, text) {
  var stripped;
  stripped = text.replace(/^(\d+\.){1,}/i, '').replace(/^\d+．|\d+\s/, '').replace(/(^\s+)|(\s+$)/g, '');
  level.push(' ');
  return level.join('.') + stripped;
}

function checkWorkflow() {
  SpreadsheetApp.getUi().alert("Hello")
}

function onOpen(e) {
  var menu = DocumentApp.getUi().createAddonMenu()
  if (e && e.authMode == ScriptApp.AuthMode.NONE) {
    // Add a normal menu item (works in all authorization modes).
    menu.addItem('実行', 'execute');
  } else {
    // Add a menu item based on properties (doesn't work in AuthMode.NONE).
    var properties = PropertiesService.getDocumentProperties();
    var workflowStarted = properties.getProperty('workflowStarted');
    if (workflowStarted) {
      menu.addItem('Check workflow status', 'checkWorkflow');
    } else {
      menu.addItem('実行', 'execute');
    }
  }
  menu.addToUi();
}

function onInstall(e) {
  onOpen(e);
}
