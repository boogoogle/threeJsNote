var gulp = require('gulp');
var connect = require('gulp-connect');


// 配置connect服务器
gulp.task('connect', function(){
	connect.server({
		livereload: true
	});
})


// 监听js文件变化,触发connect的reload
gulp.task('watch', function(){
	gulp.watch('./docsCn/*.js', ['js'])
})

// 配置reload源文件
gulp.task('js', function(){
	gulp.src('./docsCn/*.js')
		.pipe(connect.reload())
})


// 执行任务
gulp.task('default',['connect', 'watch'])
