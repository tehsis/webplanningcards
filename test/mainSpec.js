define([
  'app'
], 
function(app) {
    xdescribe('The JSCrumCards app', function() {
      app.start();
      it('Should have a deck', function() {
        expect(app.getRegion('cardSelector').$el).toBeDefined();
      });
    });
});
