define([
  'jquery',
  'marionette',
  'views/cards/card',
  'shake'
],
function($, Marionette, CardView) {
  var DeckView = Marionette.CollectionView.extend({
    tagName: 'ul',

    className: 'deck',

    itemView: CardView,

    initialize: function() {
      this.on('itemview:selected', this.selectCard);
    },

    selectCard: function(cardView) {
      if (cardView.isSelected && cardView.isRevealed()) {
        cardView.unSelect();
        this.$el.removeClass('card-selected');
        this.selectedCard = null;
      } else if  (cardView.isSelected()) {
        cardView.reveal();
      } else {
        this.children.each(function(cv) {
          cv.unSelect();
        });
        cardView.select();
        this.$el.addClass('card-selected');
        cardView.unReveal();
        this.selectedCard = cardView;
      }
    },

    onRender: function() {
      var that = this;
      $(window).on('shake', function() {
        if (that.selectedCard) {
          that.selectedCard.trigger('selected');
        }
      });
    }
  });

  return DeckView;
});
