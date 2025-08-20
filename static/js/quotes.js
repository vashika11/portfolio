const quotes = [
  "Design is intelligence made visible.",
  "Code is poetry.",
  "Creativity is contagious—pass it on.",
  "Simplicity is the ultimate sophistication."
];

const quoteCard = document.getElementById("quote-card");
quoteCard.innerText = quotes[Math.floor(Math.random() * quotes.length)];