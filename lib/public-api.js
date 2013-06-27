var lint = require("./lint.js");
var KAPI = require("./parsedocs.js").kendo_apidoc;
var FS = require("fs");

KAPI.initialize();

exports.lintJS = function(code, filename) {
    return lint.lint_javascript_file(code, filename);
};

exports.lintHTML = function(code, filename) {
    return lint.lint_html_file(code, filename);
};

exports.lintJSFile = function(filename, callback) {
    FS.readFile(filename, "utf8", function(err, code){
        if (err) return callback(err);
        callback(null, lint.lint_javascript_file(code, filename));
    });
};

exports.lintHTMLFile = function(filename, callback) {
    FS.readFile(filename, "utf8", function(err, code){
        if (err) return callback(err);
        callback(null, lint.lint_html_file(code, filename));
    });
};
