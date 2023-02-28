const quoteApiUrl = "https://api.quotable.io/random";
let previousQuotes = [];

const getQuote = async (maxLength) => {
  let quote = null;
  let author = null;
  while (!quote) {
    const response = await fetch(quoteApiUrl);
    const data = await response.json();
    if (
      data.content.length <= maxLength &&
      !previousQuotes.includes(data.content)
    ) {
      quote = data.content;
      author = data.author;
    }
  }
  displayQuote(quote, author);
};

const displayQuote = (quote, author) => {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = quote;
  const authorElement = document.getElementById("author");
  authorElement.innerText = author;
  const quoteList = document.getElementById("quote-list");
  const listItem = document.createElement("li");
  listItem.innerText = `${quote} - ${author}`;
  quoteList.appendChild(listItem);
};

document.getElementById("short-button").addEventListener("click", () => {
  getQuote(60);
});

document.getElementById("long-button").addEventListener("click", () => {
  getQuote(1000);
});

document.getElementById("search").addEventListener("input", () => {
  const query = document.getElementById("search").value.toLowerCase();
  const quoteList = document.getElementById("quote-list");
  const quotes = quoteList.getElementsByTagName("li");
  for (let i = 0; i < quotes.length; i++) {
    const quote = quotes[i].innerText.toLowerCase();
    if (quote.includes(query)) {
      quotes[i].style.display = "";
    } else {
      quotes[i].style.display = "none";
    }
  }
});
