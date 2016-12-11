// express-typescript - TypeScript View Engine for Express

"use strict";

var tsc     = require("typescript-compiler");
var fs      = require("fs");
var uglify  = require("uglify-js");

exports.renderFile = function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        
        if (err) return callback(new Error(err))
        var result = uglify.minify(tsc.compileString(fs), {fromString: true});
        return callback(null, result.code);
    })
}
