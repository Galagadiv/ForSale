const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

const clean = require("gulp-clean");
const fileSys = require("fs");
const sourceMaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const error = require("console");

const fileIncludeSettings = {
	prefix: "@@",
	basepath: "@file",
};

const serverSettings = {
	server: {
		baseDir: "./dist",
	},
	port: 8000,
	open: true,
	notify: false,
};

const plumberSassConf = {
	errorHandler: notify.onError({
		title: "Styles",
		message: "Error <%= error.message %>",
		sound: false,
	}),
};

gulp.task("html", function () {
	return gulp
		.src("./src/html/**/*.html")
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(gulp.dest("./dist"));
});

gulp.task("js", function () {
	return gulp.src("./src/js/**/*.js").pipe(gulp.dest("./dist/js"));
});

gulp.task("css", function () {
	return gulp.src("./src/css/*.css").pipe(gulp.dest("./dist/css/"));
});

gulp.task("sass", function () {
	return gulp
		.src("./src/scss/**/*.scss")
		.pipe(plumber(plumberSassConf))
		.pipe(sourceMaps.init())
		.pipe(sass())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("img", function () {
	return gulp
		.src("./src/img/**/*", {encoding: false})
		.pipe(gulp.dest("./dist/img/"));
});

gulp.task("server", function () {
	browserSync.init(serverSettings);
	gulp.watch("./dist/**/*").on("change", browserSync.reload);
});

gulp.task("clean", function (done) {
	return fileSys.existsSync("./dist/")
		? gulp.src("./dist/", {read: false}).pipe(clean({force: true}))
		: done();
});

gulp.task("watch", function () {
	gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass"));
	gulp.watch("./src/html/**/*.html", gulp.parallel("html"));
	gulp.watch("./src/js/**/*.js", gulp.parallel("js"));
	gulp.watch("./src/img/**/*", gulp.parallel("img"));
});

gulp.task(
	"default",
	gulp.series(
		"clean",
		gulp.parallel("html", "sass", "css", "img", "js"),
		gulp.parallel("server", "watch")
	)
);
