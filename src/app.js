document
  .getElementById("generate-card")
  .addEventListener("click", generateCard);

function generateCard() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.getElementById("top-left").innerText = randomValue + randomSuit;
  document.getElementById("card-suit").innerText = randomSuit;
  document.getElementById("bottom-right").innerText = randomValue + randomSuit;
}
