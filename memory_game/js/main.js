

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png",
	}	
];

function flipCard() {
	var cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();
}

function createBoard() {
	var board = document.getElementById("game-board");

	for (let i = 0; i < cards.length; i += 1) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		board.appendChild(cardElement);
	}
}

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else 
		{
			alert("Sorry, try again.");
		}
	}
}

function resetBoard() {
	var cardElements = document.getElementsByTagName("img");

	for (let i = 0; i < cardElements.length; i += 1) {
		cardElements[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay.length = 0;
}

createBoard();
document.getElementById('reset-button').addEventListener('click', resetBoard);
