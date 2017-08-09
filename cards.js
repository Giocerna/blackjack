var cards = [
'2h','3h','4h','5h','6h','7h','8h','9h','10h','jh','qh','kh', 'ah',
'2s','3s','4s','5s','6s','7s','8s','9s','10s','js','qs','ks', 'as',
'2c','3c','4c','5c','6c','7c','8c','9c','10c','jc','qc','kc', 'ac',
'2d','3d','4d','5d','6d','7d','8d','9d','10d','jd','qd','kd', 'ad',
];

var deck = []; //should be a shuffled deck

//returns true is the card drawn is in the deck, false if it's not
function alreadyThere(value){
  if (deck.length == 0) return false;

  for (var i = 0; i < deck.length; i++){
    if (deck[i] == value) return true;
  }

  return false;
}

//this draw a random card and returns a unique card
function draw(){
  var card = cards[Math.floor(Math.random() * cards.length)];

  //until we find a card that's unique
  while (alreadyThere(card)){
    card = cards[Math.floor(Math.random() * cards.length)];
  }

  return card;
}

//in this function: get random cards and put them into deck
function shuffle(){
  while (deck.length != 52){
    deck.push(draw());
  }
}

// function printDeck(){
//   for (var i = 0; i < 52; i++){
//     console.log(deck[i]);
//   }
// }
