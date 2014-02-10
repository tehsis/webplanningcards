require.config({
    baseUrl: '../javascripts',
    paths: {
        jquery: 'vendor/jquery/jquery',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/backbone.marionette/lib/backbone.marionette',
        handlebars: 'vendor/handlebars/handlebars.runtime',
        shake: 'vendor/shake.js/shake',
        fastclick: 'vendor/fastclick/lib/fastclick'
    },
    shim: {
        fastclick: {
          exports: 'Fastclick'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    }
});

require(['app'], function(app, WebInstaller) {
  app.start();
});


