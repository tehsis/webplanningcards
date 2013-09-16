define([
    'marionette',
    'routers/cards',
    'controllers/cards'
], function(Marionette, CardRouter, CardsController) {
    var app = new Marionette.Application();

    app.addRegions({
      cardSelector: '#card-selector'
    });

    app.addInitializer(function() {
      var router = new CardRouter({
        controller: new CardsController()
      });
    });

    app.on('initialize:after', function() {
      Backbone.history.start();
    });

    // For some reason, requiring app on controllers
    // is returning 'undefined'. So I use this
    // until I can figure out why.
    window.app = app;
    return app;
});
