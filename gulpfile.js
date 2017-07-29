(function() {
    'use strict';

    var gulp = require('gulp'),
        Builder = require('systemjs-builder');

    gulp.task('build', function(cb) {

        var builder = new Builder('./src', 'src/systemjs.config.js');

        builder.bundle('main', 'dist/bundle.ts', {
            format: 'register',
            minify: true,
            sourceMaps: false
        })
            .then(function(arg) {
                cb();
            })
            .catch(function(ex) {
                console.log(ex);
                new Error(ex);
            });
    });

})();