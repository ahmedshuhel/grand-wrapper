/*
 * GrandWrapper
 * https://github.com/Shuhel Ahmed/grantwrapper
 *
 * Copyright (c) 2014 Shuhel Ahmed
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('GrandWrapper', 'This plugins wrap a javascript file with some function', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            punctuation: '.',
            separator: ', '
        });


        // Iterate over all specified file groups.
        this.files.forEach(function (f) {

            var destDir = path.dirname(f.dest);

            var files =  f.src.filter(function (filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });

            files.forEach(function(ifile){

                var template = 'define([\'dep\'], function(dep){ <%= code %> });';

                var src= grunt.file.read(ifile);

                var obj = {
                    code: src
                };

                var out = grunt.template.process(template, {data: obj});

                var fileName = path.basename(ifile);
                var filepath = path.join(destDir, fileName);

                grunt.file.write(filepath, out);
                grunt.log.writeln('File "' + filepath + '" created.');
            });

        });
    });

};
