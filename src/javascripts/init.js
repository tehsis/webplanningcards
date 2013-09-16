require.config({
    baseUrl: '../javascripts',
    paths: {
        jquery: 'vendor/jquery/jquery',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/backbone.marionette/lib/backbone.marionette',
        handlebars: 'vendor/handlebars/handlebars.runtime',
        webinstaller: 'vendor/webinstaller/webinstaller.js',
        shake: 'vendor/shake.js/shake'
    },
    shim: {
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

require(['app'], function(app) {
  app.start();
});


