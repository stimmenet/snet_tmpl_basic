module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourcemap : true
     		},
			dist: {
				files: {
					'Resources/Public/Styles/css/main.css' : 'Resources/Public/Styles/sass/main.scss'
				}
			}
		},
		cssmin : {
            css:{
                src: 'css/main.css',
                dest: 'css/main.min.css'
            }
        },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['watch']);
}