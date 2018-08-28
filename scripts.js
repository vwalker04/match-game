const cards = document.querySelectorAll('.memory-card'); 

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let numOfPairsFlipped = 0;
let wins = 0;
let audioClip = document.getElementById("hadouken");

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        numOfPairsFlipped++;
    } else {
        unFlipCards();
    }
    if (numOfPairsFlipped === 6) {
        setTimeout( () => {
            play();
            shuffle();        
            cards.forEach(card => card.addEventListener('click', flipCard));
            numOfPairsFlipped = 0;
            wins++;
            document.getElementById("wins").innerHTML = wins;
        }, 1000);
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unFlipCards() {
    lockBoard = true;

    setTimeout( () => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1100);
}

function resetBoard() {
    // ES6 Destructuring assignment example
    [hasFlippedCard, lockBoard] = [false, false]; 
    [firstCard, secondCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
        card.classList.remove('flip');
    });
}

function play() {
    audioClip.volume = 0.1;
    audioClip.play();
}

shuffle();
cards.forEach(card => card.addEventListener('click', flipCard));
