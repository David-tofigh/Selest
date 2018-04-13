/**********VARIABLES FIXES - NE JAMAIS MODIFIER**********/

// PAQUETS REQUIS
const autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    eslint = require('gulp-eslint'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    stylelint = require('gulp-stylelint'),
    sourcemaps = require('gulp-sourcemaps'),

// VARIABLES DU SITE
    src = './';
watch_paths  = [
    src + 'templates/*.html',
    src + 'js/*.js',
    src + 'php/*.php',
    src + 'img/**/*',
    src + 'index.php',
    src + 'page_demande.php',
    src + 'page_offre.php',
    src + 'gulpfile.js'
];


// INITIALISATION BROWSERSYNC
browserSync.init({
    injectChanges: true,
    proxy: 'localhost:8888/htdocs/selest/index.php'
});

// RAFRAICHISSEMENT NAVIGATEUR
gulp.task('reload', function () {
    gulp
        .src(src + watch_paths)
        // .pipe(gulp.dest(dest))
        .pipe(browserSync.stream());
});

// LINTER JAVASCRIPTS
gulp.task('js:lint', function () {
    gulp
        .src(src + 'js/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
    // .pipe(eslint.failAfterError())
});

// COMPILATION SCSS
const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function () {
    gulp
        .src(src + 'scss/global.scss')
        // .pipe(stylelint({
        //     failAfterError: false,
        //     reporters: [
        //         {formatter: 'verbose', console: true}
        //     ],
        //     debug: true
        // }))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions', 'ie 11']}))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(src + 'css'))
        .pipe(browserSync.stream())
});

// SURVEILLANCE DES FICHIERS
gulp.task('watch', function() {
    gulp.watch(watch_paths, gulp.parallel('reload', 'watch'));
    gulp.watch(src + 'js/*.js', gulp.parallel('js:lint', 'reload', 'watch'));
    gulp.watch(src + 'scss/**/*.scss', gulp.parallel('sass', 'watch'));
});

gulp.task('default',
    gulp.series('watch')
);
