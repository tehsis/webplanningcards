module.exports = function(grunt) {
    grunt.initConfig({
        paths: {
            src: {
                root: 'src/',
                js: 'src/javascripts/',
                styles: 'src/styles/',
                images: 'src/styles/images/',
                vendor: 'src/javascripts/vendor/',
                templates: 'src/javascripts/views/templates/'
            },
            dist: {
                root: 'dist/',
                styles: 'dist/styles/',
                images: 'dist/styles/images/',
                js: 'dist/javascripts/'
            },
            tests: {
                root: 'test/',
                junit: 'test/junit/'
            }
        },
        connect: {
            test: {
                options: {
                    port: 8080,
                    keepalive: true,
                }
            },
        },
        jshint: {
            app: { 
              files: {
                src: [
                  'gruntFile.js', 
                  '<%= paths.src.js %>**/*.js',
                  '!<%= paths.src.vendor %>**',
                  '!*.hbs.js'
                ]
              }
            }
        },
        less: {
          app: {
            files: {
              '<%= paths.dist.styles %>scrumcards.css' : [
                '<%= paths.src.vendor %>normalize-css/normalize.css',
                '<%= paths.src.styles %>main.less'
              ]
            }
          }
        },
        copy: {
          app: {
            files: {
              '<%= paths.dist.root %>index.html':  ['<%= paths.src.root %>index.html']
            }
          },
          images: {
            files: [{
              expand: true, 
              cwd: '<%= paths.src.root %>', 
              src: ['**/*.png'], 
              dest: '<%= paths.dist.root %>'
            }] 
          }
        },
        jasmine: {
            app: {
                files: {
                    src: [
                        'src/javascripts/**/*.js',
                        '!src/javascripts/vendor/**',
                    ],
                },
                options: {
                    specs: '<%= paths.tests.root %>*Spec.js',
                    keepRunner: true,
                    template: require('grunt-template-jasmine-requirejs'),
                    junit: '<%= paths.tests.junit %>',
                    templateOptions: {
                        requireConfigFile: '<%= paths.src.js %>init.js',
                        requireConfig: {
                            baseUrl: 'src/javascripts'
                        }
                    }
                }
            }
        },
        handlebars: {
            app: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.src.js %>',
                    src: ['**/*.hbs'],
                    dest: '<%= paths.src.js %>',
                    ext: '.hbs.js'
                }],
                options: {
                    processContent: function(content) {
                        content = content.replace(/(>\s+)/g, ">");
                        content = content.replace(/(\n<)/g, "<");
                        return content;
                    },
                    namespace: false,
                    amd: true
                }
            }
        },
        requirejs: {
            app: {
                options: {
                    mainConfigFile: '<%= paths.src.js %>init.js',
                    baseUrl: '<%= paths.src.js %>',
                    include: ['vendor/requirejs/require'],
                    optimize: 'none',
                    preserveLicenseComments: false,
                    name: 'init',
                    out: '<%= paths.dist.js %>app.js' 
                }
            }
        },
        clean: {
          dist: {
            src: '<%= paths.dist.js %>**/*'
          },
          templates: {
            src: '<%= paths.src.js %>**/*.hbs.js'
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('test', [
        'handlebars',
        'jasmine',
        'clean:templates'
    ]);

    grunt.registerTask('default', [
        'clean:templates',
        'clean:dist',
        'jshint',
        'test',
        'handlebars',
        'requirejs',
        'less',
        'copy',
        'clean:templates'
    ]);
};
