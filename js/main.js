const contentCards = document.querySelector("#contentCards");
const numberCard = 12;
let cardNumberFind = 0;
let tries = 0;
let errors = 0;
const cardArray = [];
for (let i = 0; i < numberCard / 2; i++) {
  cardArray.push(i, i);
}
cardArray.sort(() => Math.random(1) - 0.5);
console.log(cardArray);
let firstCard = null;
let secondCard = null;

for (let i = 0; i < numberCard; i++) {
  const createCards = document.createElement("button");
  createCards.textContent = "?";
  createCards.classList.add("cards");
  contentCards.appendChild(createCards);
}

const cards = document.querySelectorAll(".cards");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    if (!firstCard || (firstCard !== cards[i] && !secondCard)) {
      cards[i].style.backgroundColor = "#0074d9";
      cards[i].textContent = cardArray[i];
      if (!firstCard) {
        firstCard = cards[i];
      } else if (!secondCard) {
        secondCard = cards[i];
        if (firstCard.textContent === secondCard.textContent) {
          setTimeout(() => {
            firstCard.style.backgroundColor = "#2ecc40";
            secondCard.style.backgroundColor = "#2ecc40";
            firstCard.disable = false;
            secondCard.disable = false;
            firstCard = null;
            secondCard = null;
            cardNumberFind = cardNumberFind + 2;
            tries++;
            if (cardNumberFind === numberCard) {
              setTimeout(() => {
                alert(
                  `Well done you succeeded in ${tries} tries with ${errors} errors!`
                );
              }, 1);
              location.reload();
            }
          }, 100);
        } else {
          setTimeout(() => {
            firstCard.style.backgroundColor = "#ff4136";
            secondCard.style.backgroundColor = "#ff4136";
            firstCard.textContent = "?";
            secondCard.textContent = "?";
            firstCard = null;
            secondCard = null;
            tries++;
            errors++;
          }, 700);
        }
      }
    }
  });
}
