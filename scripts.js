const cards = document.querySelectorAll('.memory-card'); 

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let numOfPairsFlipped = 0;

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
    console.log({numOfPairsFlipped})
    if (numOfPairsFlipped === 6) {
        setTimeout( () => {
            alert("Victory!");
        }, 500);
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

(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})(); //Immediately invoked expression. Executed right after it's definition

cards.forEach(card => card.addEventListener('click', flipCard));
