var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var concat = require('gulp-concat');
var rjs = require('gulp-requirejs-optimize');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var htmlreplace = require('gulp-html-replace');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var glob = require("glob");
var path = require("path");

var getAMDModule = function (globlist) {
    var list = [];

    globlist.forEach(function (item) {
        list = list.concat(glob.sync(item));
    });

    list = list.map(function (item) {
        return path.relative("./", item).replace(".js", "").replace(path.sep, "/");
    });

    return list;
}

gulp.task('css', function () {
    var processors = [
        autoprefixer({
            browsers: ['> 0.5%', 'IE 8']
        }),
        cssnano({
            safe: true,
            autoprefixer: false,
        }),
    ];
    return gulp.src(['./lib/normalize-css/normalize.css',
            './css/common.css',
            './component/*.css',
            './page/*.css'
        ])
        .pipe(sourcemaps.init({
            largeFile: true
        }))
        .pipe(postcss(processors))
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./css/'));
});

gulp.task("asset-img", function () {
    return gulp.src([
            './images/**/*'
        ])
        .pipe(gulp.dest('./dist/images/'));
});

gulp.task("asset-css", ['css'], function () {
    return gulp.src([
            './css/*'
        ])
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task("html", function () {
    return gulp.src(['./index.html'])
        .pipe(htmlreplace({
            'css': 'css/main.min.css',
            'js': 'js/main.min.js'
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task("rjs", function () {
    global.BASE_PATH = './';
    global.requirejs = {
        config: function (options) {
            rjsConfig = Object.assign({
                wrapShim: true,
                useStrict: true,
                baseUrl: BASE_PATH,
                generateSourceMaps: true,
                preserveLicenseComments: false,
                optimize: "uglify2",
                out: "modules.js"
            }, options);
        }
    };
    require("./config/config.js");
    global.requirejs = undefined;
    global.BASE_PATH = undefined;
    rjsConfig.include = getAMDModule([
        "./page/*.js",
        "./main.js"
    ]);
    rjsConfig.separateCSS = true
    //   rjsConfig.buildCSS = false
    rjsConfig.pragmasOnSave = {
        excludeRequireCss: true
    }
    return gulp.src(['./main.js'])
        .pipe(sourcemaps.init())
        .pipe(rjs(rjsConfig))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/js/'));;
});

gulp.task("js", ["rjs"], function () {
    return gulp.src(['./lib/requirejs/require.js',
            './config/config.js',
            './dist/js/modules.js'
        ])
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task("watch-css", function () {
    gulp.watch([
        './css/common.css',
        './component/*.css',
        './page/*.css'
    ], ["asset-css"]);
})

gulp.task("default", ["asset-img", "asset-css", "js", "html"]);