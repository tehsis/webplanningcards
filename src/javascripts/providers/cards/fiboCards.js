define([
  'models/cards/cards'
], 
function(CardsCollection) {
  var cards = [
    {
      name: "zero",
      value: 0
    },
    {
      name: "half",
      value: "1/2"
    },
    {
      name: "one",
      value: 1
    },
    {
      name: "two",
      value: 2
    },
    {
      name: "three",
      value: 3
    },
    {
      name: "five",
      value: 5
    },
    {
      name: "eight",
      value: 8
    },
    {
      name: "thirteen",
      value: 13
    },
    {
      name: "twenty",
      value: 20
    },
    {
      name: "hundred",
      value: 100
    },
    {
      name: "infinity",
      value: "&infin;"
    },
    {
      name: "question",
      value: "?"
    },
    {
      name: "coffee",
      value: "Coffee"
    }];

  return new CardsCollection(cards);

});
