define([
  'marionette',
  'controllers/cards'
], 
function(Marionette, CardsController) {
  var CardRouter = Marionette.AppRouter.extend({
    controller: CardsController,

    appRoutes: {
      '': 'listCards',
    }
  });

  return CardRouter;
});
