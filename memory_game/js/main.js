
var cards = [
{
rank: "queen" ,
suit: "Hearts" ,
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen" ,
suit: "diamonds" ,
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king" ,
suit: "hearts" ,
cardImage: "images/king-of-hearts.png"
},
{
rank: "king" ,
suit: "diamonds" ,
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
//cardsInPlay.push(cards[cardId].rank);
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		alert("You found a match!");
	} else {
		console.log("Sorry, try again.");
		alert("Sorry, try again!");
		}
	}
	
}
var flipCard = function() {
	var cardId = this.getAttribute('data-id', 'cardsInPlay');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	checkForMatch();
	this.setAttribute('src', cards[cardId].cardImage);
	console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
//		document.getElementsByClassName('cardElement')[0].addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
}

createBoard();

