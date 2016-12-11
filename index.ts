// express-typescript - TypeScript View Engine for Express
/* tslint: enabled */

"use strict"

import * as tsc from "typescript-compiler"
import * as fs from "fs"
import * as uglify from "uglify-js"

export function renderFile (file, options, callback) {
    fs.readFile(file, function (err, content) {

        if (err) return callback(new Error(err))

        let result = uglify.minify(tsc.compileString(fs), {fromString: true})
        return callback(null, result.code)
    })
}
