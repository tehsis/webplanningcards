define([
  'models/cards/cards'
], 
function(CardsCollection) {
  var cards = [
    {
      value: 0
    },
    {
      value: "1/2"
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
      value: "&infin;"
    },
    {
      value: "?"
    },
    {
      value: "Coffee"
    }];

  return new CardsCollection(cards);

});
