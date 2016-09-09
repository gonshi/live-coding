gulp = require 'gulp'
config = require '../config'
$ = (require 'gulp-load-plugins')()
root = require( 'path' ).join( __dirname, '../../' ) + config.path.jade

gulp.task 'jade', () ->
    return gulp.src([
        config.path.jade + '**/!(_)*.jade'
    ])
        .pipe($.plumber())
        .pipe($.jade({
            pretty: true
            basedir: config.path.jade
        }))
        .pipe(gulp.dest(config.path.htdocs))
        .pipe($.size({ title: 'jade' }))
