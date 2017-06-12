/**
 * Created by mkahn on 12/29/16.
 */
var gulp = require( 'gulp' );
var templateCache = require( 'gulp-angular-templatecache' );

gulp.task( 'uibcache', function () {
    return gulp.src( '*.html' )
        .pipe( templateCache() )
        .pipe( gulp.dest( '.' ) );
} );