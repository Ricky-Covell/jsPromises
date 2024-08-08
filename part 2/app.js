                // PART 2
const cardsAPI = "https://deckofcardsapi.com/api/deck";
const $cardsContainer = $('#cardsContainer');

// Q1
$.getJSON(`${cardsAPI}/new/draw/`).then(res => {
  suit = res.cards[0].suit;
  value = res.cards[0].value;
  console.log(`Suit: ${suit}    Value: ${value}`);
})




// Q2
let firstCard;
$.getJSON(`${cardsAPI}/new/draw/`)

  .then(res => {
    firstCard = res.cards[0];
    let deckId = res.deck_id;
    return $.getJSON(`${cardsAPI}/${deckId}/draw/`);
  })

  .then(res => {
    let secondCard = res.cards[0];
    [firstCard, secondCard].forEach(card => {
      console.log(`Suit: ${card.suit}   Value: ${card.value}`);
    });
  });




// Q3
let deckId;
let $drawButton = $('button');

$.getJSON(`${cardsAPI}/new/shuffle/`).then(res => {
  deckId = res.deck_id;
});

$drawButton.on('click', function() {

  $.getJSON(`${cardsAPI}/${deckId}/draw/`).then(res => {
    let cardImg = res.cards[0].image;
    $cardsContainer.append(
      $('<img>', { src: cardImg, })
    );

    if (res.remaining === 0) {
      $drawButton.text('No More!');
    }
  });
});