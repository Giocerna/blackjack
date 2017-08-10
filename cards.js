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
  if (deck.length < 6 || counter(cards) <= 21){
    deck.push(draw());
  else {
    text('You Busted')
  }
    }
  }
}
// function printDeck(){
//   for (var i = 0; i < 52; i++){
//     console.log(deck[i]);
//   }
// }

function counter(deck){
  for(k = 0; k < deck.length;k++){
    if (deck[k] == '2h' || deck[k] == '2s' || deck[k] == '2c' || deck[k] == '2d')
    score += 2

    else if (deck[k] == '3h' || deck[k] == '3s' || deck[k] == '3c' || deck[k] == '3d')
    score += 3

    else if (deck[k] == '4h' || deck[k] == '4s' || deck[k] =='4c' || deck[k] == '4d')

    score += 4
    else if (deck[k] == '5h' || deck[k] == '5s' || deck[k] =='5c' || deck[k] == '5d')
    score += 5

    else if (deck[k] == '6h' || deck[k] == '6s' || deck[k] == '6c' || deck[k] == '6d')
    score += 6

    else if (deck[k] == '7h' || deck[k] == '7s' || deck[k] == '7c' || deck[k] == '7d')
    score += 7

    else if (deck[k] == '8h' || deck[k] == '8s' || deck[k] == '8c' || deck[k] == '8d')
    score += 8

    else if (deck[k] == '9h' || deck[k] == '9s' || deck[k] == '9c' || deck[k] == '9d')
    score += 9

    else if (deck[k] == '10h' || deck[k] == '10s' || deck[k] == '10c' || deck[k] == '10d')
    score += 10

    else if (deck[k] == 'jh' || deck[k] == 'js' || deck[k] == 'jc' || deck[k] == 'jd')
    score += 10

    else if (deck[k] == 'qh' || deck[k] == 'qs' || deck[k] == 'qc' || deck[k] == 'qd')
    score += 10

    else if (deck[k] == 'kh' || deck[k] == 'ks' || deck[k] == 'kc' || deck[k] == 'kd')
    score += 10

    else if (deck[k] == 'ah' || deck[k]== 'as' || deck[k] == 'ac' || deck [k] == 'ad'){
    if (score >=11) {score += 1}
    else score += 11

    }
    return score;
  }
}
  counter();

function dealersCounter(deck){
  for(k = 0; k < deck.length;k++){
    if (deck[k] == '2h' || deck[k] == '2s' || deck[k] == '2c' || deck[k] == '2d')
      dealersScore += 2

    else if (deck[k] == '3h' || deck[k] == '3s' || deck[k] == '3c' || deck[k] == '3d')
      dealersScore += 3

    else if (deck[k] == '4h' || deck[k] == '4s' || deck[k] =='4c' || deck[k] == '4d')
      dealersScore += 4

    else if (deck[k] == '5h' || deck[k] == '5s' || deck[k] =='5c' || deck[k] == '5d')
      dealersScore += 5

    else if (deck[k] == '6h' || deck[k] == '6s' || deck[k] == '6c' || deck[k] == '6d')
      dealersScore += 6

    else if (deck[k] == '7h' || deck[k] == '7s' || deck[k] == '7c' || deck[k] == '7d')
      dealersScore += 7

    else if (deck[k] == '8h' || deck[k] == '8s' || deck[k] == '8c' || deck[k] == '8d')
      dealersScore += 8

    else if (deck[k] == '9h' || deck[k] == '9s' || deck[k] == '9c' || deck[k] == '9d')
      dealersScore += 9

    else if (deck[k] == '10h' || deck[k] == '10s' || deck[k] == '10c' || deck[k] == '10d')
      dealersScore += 10

    else if (deck[k] == 'jh' || deck[k] == 'js' || deck[k] == 'jc' || deck[k] == 'jd')
      dealersScore += 10

    else if (deck[k] == 'qh' || deck[k] == 'qs' || deck[k] == 'qc' || deck[k] == 'qd')
      dealersScore += 10

    else if (deck[k] == 'kh' || deck[k] == 'ks' || deck[k] == 'kc' || deck[k] == 'kd')
      dealersScore += 10

    else if (deck[k] == 'ah' || deck[k]== 'as' || deck[k] == 'ac' || deck [k] == 'ad'){
      if (dealersScore >=11) {dealersScore += 1}
      else dealersScore += 11

      }
      return dealersScore;
    }
  }

    function dealerStands(dealersCounter(deck)) {
      if dealersCounter(deck) >= 17{
         text('Dealer Stands')
      else
        shuffle()
      }
      
    }
