define(
[
  'marionette',
  'app',
  'providers/cards/fiboCards',
  'views/cards/deck'
],
function(Marionette, app, fiboCards, DeckView) {
  // app is returning undefined. So I
  // user a window.app util figures out the reason.
  var CardsController = Marionette.Controller.extend({
    initialize: function() {
      this.deckView = new DeckView({
        collection: fiboCards
      });
    },

    listCards: function() {
      window.app.cardSelector.show(this.deckView);
    },

    showCard: function() {
    }
  });

  return CardsController;
});
