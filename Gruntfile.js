/**
 * Created by gaspergracner on 14/06/16.
 */

module.exports = function(grunt) {

    var babel = require('rollup-plugin-babel');

    grunt.initConfig({
        /*Copy bower files to build/js/vendor */
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            dev: {
                options: {
                    destPrefix: 'source/js/vendor'
                },
                files: {
                    'jquery/jquery.js': 'jquery/dist/jquery.js',
                    'react/react.js': 'react/react.js'
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
        /*transform from ES6*/
        babel: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    'source/js/scripts.js': 'source/js/scripts.js'
                }
            },
            prod: {
                files: {
                    'build/js/scripts.min.js': 'build/js/scripts.min.js'
                }
            }
        },
        /*Prepare files for browser*/
        browserify: {
            dev: {
                src: ['source/js/scripts.js'],
                dest: 'source/js/scripts.js'
                // Note: The entire `browserify-shim` config is inside `package.json`.
            },
            prod: {
                src: ['build/js/scripts.min.js'],
                dest: 'build/js/scripts.min.js'
                // Note: The entire `browserify-shim` config is inside `package.json`.
            }
        },
        /*concat files*/
        concat: {
            js_dev: {
                src: ['app/scripts/**/**.js'],
                dest: 'source/js/scripts.js',
            },
            css_dev: {
                src: ['app/styles/**/**.css'],
                dest: 'source/css/main.css',
            },
            js_prod: {
                src: ['app/scripts/**/**.js'],
                dest: 'build/js/scripts.min.js',
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

    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //minification
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //cleaning
    grunt.loadNpmTasks('grunt-contrib-clean');

    require("load-grunt-tasks")(grunt);

    var devel = [
        'clean:dev',
        'bowercopy:dev',
        'htmlmin:dev',
        'concat:css_dev',
        'concat:js_dev',
        'babel:dev',
        'browserify:dev'
    ];

    var prod = [
        'clean:prod',
        'bowercopy:prod',
        'htmlmin:prod',
        'concat:css_prod',
        'concat:js_prod',
        'babel:prod',
        'browserify:prod',
        'uglify',
        'cssmin'
    ]



    grunt.registerTask('default',devel );
    grunt.registerTask('prod',prod );

};