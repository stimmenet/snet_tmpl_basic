module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourcemap : true,
                loadPath: require('node-neat').includePaths
     		},
			dist: {
				files: [
                    {
                        expand: true,
                        cwd: 'Resources/Public/Styles/sass/',
                        src: ['_pages/**/*.scss', '_sections/**/*.scss', '_vendor/**/*.scss'],
                        dest: 'Resources/Public/Styles/css/',
                        ext: '.css',
                        rename: function(dest, src) {
                          src = src.replace(/^_/, '');
                          return dest + src;
                        }
                    }
                ]
			}
		},
        autoprefixer: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'Resources/Public/Styles/css/',
                        src: ['pages/**/*.css', 'sections/**/*.css', 'vendor/**/*.css'],
                        dest: 'Resources/Public/Styles/css/'
                    }
                ]
            }
        },
		cssmin : {
            minify: {
                expand: true,
                cwd: 'Resources/Public/Styles/css/',
                src: ['**/*.css'],
                dest: 'Resources/Public/Styles/min/',
                ext: '.css'
            }
        },
        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'Resources/Public/Images/src/',
                    src: ['**/*.{png,jpg,gif,ico}'],
                    dest: 'Resources/Public/Images/dist/'
                }]
            }
        },
        delete_sync: {
            dist: {
                cwd: 'Resources/Public/Images/dist/',
                src: ['**/*.{png,jpg,gif,ico}'],
                syncWith: 'Resources/Public/Images/src/'
            }
        },
        markdown: {
            all: {
                files: [{
                    expand: true,
                    src: 'README/src/*.md',
                    dest: 'README/',
                    flatten: true,
                    ext: '.html'
                }],
                options: {
                    template: 'README/src/template.html'
                }
            }
        },
		watch: {
			css: {
                files: '**/*.scss',
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            markdown: {
				files: '**/*.md',
				tasks: ['newer:markdown:all']
			},
            imagemin: {
                files: 'Resources/Public/Images/src/**/*.{png,jpg,gif,ico}',
                tasks: ['newer:image:dynamic', 'delete_sync']
            }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-delete-sync');
	grunt.registerTask('default',['watch']);
}