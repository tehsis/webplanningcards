define([
  'marionette',
], function(Marionette) {
  var MainLayout = new Marionette.Layout.extend({
    regions: {
      cards: '.cards',
      selected_card: '.selected_card'
    }
  });

  return MainLayout;
});
