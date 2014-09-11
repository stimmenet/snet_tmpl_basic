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
            options: {
                map: true
            },
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
        csswring: {
            options: {
                map: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'Resources/Public/Styles/css/',
                        src: ['**/*.css'],
                        dest: 'Resources/Public/Styles/css/',
                        ext: '.css'
                    }
                ]
            },
        },
        jshint: {
            options: {
                strict: false,
                browser: true,
                devel: true,
                multistr: true,
                evil: true,
                reporter: require('jshint-stylish')
            },
            dist: {
                src: ['Resources/Public/Scripts/JS/src/internal/**/*.js'],
            }
        },
        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                    mangle: false
                },
                files: [{
                    expand: true,
                    src: 'Resources/Public/Scripts/JS/src/**/*.js',
                    dest: 'Resources/Public/Scripts/JS/dist/',
                    flatten: true
                }]
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
                tasks: ['sass', 'autoprefixer', 'csswring']
            },
            markdown: {
				files: '**/*.md',
				tasks: ['newer:markdown:all']
			},
            imagemin: {
                files: 'Resources/Public/Images/src/**/*.{png,jpg,gif,ico}',
                tasks: ['newer:image:dynamic', 'delete_sync']
            },
            js: {
                files: 'Resources/Public/Scripts/JS/src/**/*.js',
                tasks: ['jshint', 'uglify']
            }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-csswring');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-delete-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch']);
}