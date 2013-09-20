require.config({
    baseUrl: '../javascripts',
    paths: {
        jquery: 'vendor/jquery/jquery',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/backbone.marionette/lib/backbone.marionette',
        handlebars: 'vendor/handlebars/handlebars.runtime',
        webinstaller: 'vendor/webinstaller/webinstaller',
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
        },
        webinstaller: {
          exports: 'Webinstaller'
        }
    }
});

require(['webinstaller', 'app'], function(WebInstaller, app) {
  var installer = new WebInstaller('http:localhost:9555/scrum.webapp');
  installer.install();
  app.start();
});


