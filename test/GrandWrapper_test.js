'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.GrandWrapper = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    wrap_normal_file: function (test) {
        test.expect(1);

        var spec = grunt.file.read('tmp/testing');
        var expected = grunt.file.read('test/expected/default_option');

        test.equal(spec, expected, 'files should be similar');
        test.done();
    },

    wrap_spac: function(test)
    {
        test.expect(1);
        var spec = grunt.file.read('tmp/spec.js');
        var expected = grunt.file.read('test/expected/wrappedfile.js');

        test.equal(spec, expected, 'files should be similar');
        test.done();

    }

};
