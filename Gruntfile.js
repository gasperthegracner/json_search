/**
 * Created by gaspergracner on 14/06/16.
 */

module.exports = function(grunt) {


    grunt.initConfig({
        /*Copy bower files to build/js/vendor */
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            dev: {
                options: {
                    destPrefix: 'source'
                },
                files: {
                    'js/vendor/jquery/jquery.js': 'jquery/dist/jquery.js',
                }
            },
            prod: {
                options: {
                    destPrefix: 'build/js/vendor'
                },
                files: {
                    'jquery/jquery.js': 'jquery/dist/jquery.js',
                    'react/react.js': 'react/react.js'
                }
            }
        },
        /*Prepare files for browser*/
        browserify: {
            dev: {
                files: {
                    'source/js/scripts.js': ['app/scripts/app.js']
                },
                options: {
                    transform: [
                        'babelify'
                    ]
                },
            },
            prod: {
                files: {
                    'build/js/scripts.min.js': ['app/scripts/app.js']
                },
                options: {
                    transform: [
                        'babelify'
                    ]
                },
            }
        },
        /*concat files*/
        concat: {
            css_dev: {
                src: ['app/styles/**/**.css'],
                dest: 'source/css/main.css',
            },
            css_prod: {
                src: ['app/styles/**/**.css'],
                dest: 'build/css/main.min.css',
            }

        },
        htmlmin: {
            prod: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'app/index.html'
                }
            },
            dev: {
                files: {
                    'source/index.html': 'app/index.html',
                }
            }
        },
        uglify: {
            scripts: {
                files: {
                    'build/js/scripts.min.js': ['build/js/scripts.min.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'build/css',
                    src: ['*.min.css'],
                    dest: 'build/css',
                    ext: '.min.css'
                }]
            }
        },
        clean: {
            dev: ["source/"],
            prod: ["build/"]
        },
        watch: {
            src: {
                files: ['app/**/*.css', 'app/**/*.js', '!source/build/app.js'],
                tasks: ['browserify:dev','concat:css_dev'],
                options: {
                    livereload: true
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //minification
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //cleaning
    grunt.loadNpmTasks('grunt-contrib-clean');


    var devel = [
        'clean:dev',
        //'bowercopy:dev',
        'htmlmin:dev',
        'concat:css_dev',
        'browserify:dev',
        'watch'
    ];

    var prod = [
        'clean:prod',
        //'bowercopy:prod',
        'htmlmin:prod',
        'concat:css_prod',
        'browserify:prod',
        'uglify',
        'cssmin'
    ]



    grunt.registerTask('default',devel );
    grunt.registerTask('prod',prod );

};