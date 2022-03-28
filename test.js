const sect = document.querySelector('section');

const getImages = () => [
	{ imgSrc: './img/angel.png', id: 'angel' },
	{ imgSrc: './img/sad.png', id: 'sad' },
	{ imgSrc: './img/pirate.png', id: 'pirate' },
	{ imgSrc: './img/blink.png', id: 'blink' },
	{ imgSrc: './img/angel.png', id: 'angel' },
	{ imgSrc: './img/sad.png', id: 'sad' },
	{ imgSrc: './img/pirate.png', id: 'pirate' },
	{ imgSrc: './img/blink.png', id: 'blink' }
];

const chooseRandom = () => {
	const cardData = getImages();
	cardData.sort(() => Math.random() - 0.5);
	return cardData;
};

const generateCard = () => {
	const cardData = chooseRandom();

	cardData.forEach((item) => {
		const card = document.createElement('div');
		const front = document.createElement('img');
		const back = document.createElement('div');
		card.classList = 'card';
		front.classList = 'front';
		back.classList = 'back';

		front.src = item.imgSrc;
		card.setAttribute('id', item.id);

		sect.appendChild(card);
		card.appendChild(front);
		card.appendChild(back);

		card.addEventListener('click', (e) => {
			card.classList.toggle('toggleCard');
			isMatching(e);
		});
	});
};

const isMatching = (e) => {
	console.log(e);
	const clickedCard = e.target;
	clickedCard.classList.add('flipped');
	const flippedCards = document.querySelectorAll('.flipped');

	if (flippedCards.length === 2) {
		const newLocal = 'id';
		if (flippedCards[0].getAttribute(newLocal) === flippedCards[1].getAttribute(newLocal)) {
			console.log('just matched');
			flippedCards.forEach((card) => {
				card.classList.remove('flipped');
				card.style.pointerEvents = 'none';
			});
		} else {
			console.log('wrong');
			flippedCards.forEach((card) => {
				card.classList.remove('flipped');
				setTimeout(() => card.classList.remove('toggleCard'), 400);
			});
		}
	}
};

generateCard();

$(document).ready(function() {
	let memo1 = new Card(1, 3);
	let memo2 = new Card(2, 4);
	let memo3 = new Card(3, 1);
	let memo4 = new Card(4, 2);

	let memoArray = [];
	memoArray.push(memo1, memo2, memo3, memo4);
	memoArray.sort(() => Math.random() - 0.5);
	memoArray.forEach((elem) => {
		console.log(elem.pairTo);
	});
});

class Card {
	constructor(id, pair) {
		this.cardId = id;
		this.cardPair = pair;
		this.pairTo = id + '->' + pair;
	}
}
