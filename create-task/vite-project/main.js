async function quote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const quotesdata = await response.json();
    if (response.status < 200 || response.status > 299) {
      console.log("good");
    }
    const quotes = quotesdata;
    console.log(quotes);
    displayquotes(quotes);
  } catch (error) {
    console.log(error);
    console.log("big poo");
  }
}

function displayquotes(quotes) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  quotes.forEach((quotes) => {
    let author = quotes.author;
    let quote = quotes.content;
    const card = container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>Quote: ${quote}</h2>
        <p>Author: ${author}</p>
        <p></p>
        </div>
      `
    );
  });
}

function shortquotes(quotes) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  quotes.forEach((quotes) => {
    let author = quotes.author;
    let quote = quotes.content.length < 60;
    const card = container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>Quote: ${quote}</h2>
        <p>Author: ${author}</p>
        <p></p>
        </div>
      `
    );
  });
}

function longquotes(quotes) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  quotes.forEach((quotes) => {
    let author = quotes.author;
    let quote = quotes.content.length > 60;
    const card = container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>Quote: ${quote}</h2>
        <p>Author: ${author}</p>
        <p></p>
        </div>
      `
    );
  });
}

quote();
