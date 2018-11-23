var gulp = require("gulp");

var gulpServer = require("gulp-webserver");

gulp.task("default", function(){
	return gulp.src("src")
		.pipe(gulpServer({
			port:9090,
			proxies:[
				{source:"/api/allData",target:"http://localhost:3000/api/allData"},
				{source:"/api/addUser",target:"http://localhost:3000/api/addUser"},
				{source:"/api/deleteData",target:"http://localhost:3000/api/deleteData"},
				{source:"/api/selectUser",target:"http://localhost:3000/api/selectUser"},
				{source:"/api/upData",target:"http://localhost:3000/api/upData"}
			]
		}))
})