const gulp = require('gulp');

// instalacja pluginów:
// npm install --save-dev gulp-imagemin gulp-changed

const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

gulp.task('img', function() {
	return gulp.src('pliki_poczatkowe/**/*.{jpg,jpeg,png,gif}')
		.pipe(changed('pliki_zminifikowane'))
		.pipe(imagemin())
		.pipe(gulp.dest('pliki_zminifikowane'));
});