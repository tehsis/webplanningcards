define([
  'jquery',
  'marionette',
  'models/cards/card',
  'views/cards/templates/card.hbs'
], function($, Marionette, CardsModel, cardTemplate) {   
  var CardItemView = Marionette.ItemView.extend({
    tagName: 'li',

    className: 'card',

    template: cardTemplate,

    triggers: {
      'click':  'selected',
      'shake': 'selected'
    },

    isSelected: function() {
      return this.$el.hasClass('selected');
    },

    isRevealed: function() {
      return this.$el.hasClass('revealed');
    },

    reveal: function() {
      this.$el.removeClass('not-revealed').addClass('revealed');
    },

    unReveal: function() {
      this.$el.addClass('not-revealed').removeClass('revealed');
    },

    select: function() {
      this.$el.addClass('selected');
    },

    unSelect: function() {
      this.$el.removeClass('selected not-revealed revealed');
    }
  });

  return CardItemView;
});
