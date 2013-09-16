define([
  'jquery',
  'models/cards/card',
  'models/cards/cards',
  'views/cards/card',
  'views/cards/deck'
], function($, CardModel, CardsCollection, CardItemView, DeckCollectionView) {
  describe('The Poker Scrum cards', function() {
      var card, cardItemView, deck, deckCollectionView, cardCollection, callbacks, raw_card;
      var cardMocks = [
        {
          value: 0
        },
        {
          value: 1/2
        },
        {
          value: 1
        },
        {
          value: 2
        },
        {
          value: 3
        },
        {
          value: 5
        },
        {
          value: 8
        },
        {
          value: 13
        },
        {
          value: 20
        },
        {
          value: 100
        },
        {
          value: "Infinity"
        },
        {
          value: "?"
        },
        {
          value: "Coffee"
        }
      ];

    beforeEach(function() {
      raw_card = cardMocks[0];
      callbacks = {
        test: function() {}
      };

      card = new CardModel(raw_card);
      deck = new CardsCollection(cardMocks);
      deckCollectionView = new DeckCollectionView({
        collection: deck
      });
      cardItemView = new CardItemView({model: new CardModel(raw_card)});

      cardItemView.render();
      deckCollectionView.render();
    });

    it('Should be represented by Backbone models', function() {
      spyOn(callbacks, 'test');
      card.on('change', callbacks.test);
      card.set('value', 8);
      expect(callbacks.test).toHaveBeenCalled();
    });

    it('Should be represented by an ItemView', function() {
      expect(cardItemView.$el.find('.value').text()).toBe(raw_card.value.toString());
      expect(cardItemView.$el.hasClass('card')).toBe(true);
    });

    it('Should be organized in decks', function() {
      spyOn(callbacks, 'test');
      expect(deck.models.length).toBe(cardMocks.length);

      deck.add(card);
      deck.on('change', callbacks.test);
      card.set('value', 8);

      expect(callbacks.test).toHaveBeenCalled();
    });

    it('Should be organized in a collectionView with the deck class', function() {
      expect(deckCollectionView.$el.hasClass('deck')).toBe(true);
    });

    it('Should be selected without being reveled', function() {
      deckCollectionView.children.each(function(view) {
        view.$el.click();
        expect(view.$el.hasClass('selected not-revealed')).toBe(true);
      });
    });

    it('Should mark the deck with a class when a card is selected', function() {
      deckCollectionView.children.each(function(view) {
        view.$el.click();
        expect(deckCollectionView.$el.hasClass('card-selected')).toBe(true);

        // Unselect the card
        view.$el.click();
        view.$el.click();
      });
      expect(deckCollectionView.$el.hasClass('card-selected')).toBe(false);
    });

    it('Should be selected and then reveal its value', function() {
      deckCollectionView.children.each(function(view) {
        view.$el.click();
        view.$el.click();
        expect(view.$el.hasClass('selected revealed')).toBe(true);
      });
    });

    it('Should be unselected if the card was already revealed', function() {
      deckCollectionView.children.each(function(view) {
        view.$el.click();
        view.$el.click();
        view.$el.click();

        expect(view.$el.hasClass('selected')).toBe(false);
        expect(view.$el.hasClass('not-revealed')).toBe(false);
        expect(view.$el.hasClass('revealed')).toBe(false);
      });
    });

    it('Should be selected just one card each time in the collection', function() {
      deckCollectionView.children.each(function(cv) {
        cv.$el.click();
      });

      expect(deckCollectionView.$el.find('.selected').length).toBe(1);
    })
  });
});
