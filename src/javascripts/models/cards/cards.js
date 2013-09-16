define([
  'backbone',
  'models/cards/card'
],
function(Backbone, CardModel) {
  var CardsCollection = Backbone.Collection.extend({
    model: CardModel
  });

  return CardsCollection;
});

