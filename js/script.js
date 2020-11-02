/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// created 5 'full'-quote objects and 3 with missing elements
const quotes = [
  {
    quote:"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." ,
    source:"Charles Darwin",
    citation:"Origin of the Species",
    year: 1859,
    tags: "Science, Biology"
  },
  {
    quote:"Niemand hat die Absicht, eine Mauer zu errichten!" ,
    source:"Walter Ulbricht",
    citation:"press conference",
    year: 1961,
    tags: "Politics, History"
  },
  {
    quote:"It is better to offer no excuse than a bad one" ,
    source:"George Washington",
    citation:"Letter to his niece",
    year: 1791,
    tags: "History"
  },
  {
    quote:"Your time is limited, so don't waste it living someone else's life." ,
    source:"Steve Jobs",
    citation:"'Steve Jobs talks about the Library of Congress'",
    year: 1990,
    tags: "Motivation, Focus, Tech"
  },
  {
    quote:"So I express the Republicans are minority, so I have some sympathy towards them." ,
    source:"The Dalai Lama",
    citation:"Compassionate Ethics in Difficult Times",
    year: 2010,
    tags: "Ethics, Religion"
  },
  {
    quote: "Be yourself; everyone else is already taken." ,
    source:"Oscar Wilde "
  },
  {
    quote:"Be the change that you wish to see in the world." ,
    source:"Mahatma Gandhi",
    tags: "Motivation, Inspiration, Positivity"
  },
  {
    quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals." ,
    source:"J.K. Rowling",
    citation:"Harry Potter and the Goblet of Fire"
  }
]
;

/***
 * `getRandomQuote` function
***/


//building a function thats returns a random quote
function getRandomQuote () {
//random number(from 1 to 8, because 8 objects) is stored in variable randomNumber
 let randomNumber = Math.floor(Math.random() * 8);
 //variable finalRQ stores the random quote
 let finalRQ = quotes[randomNumber];
 //the random quote is returned
 return finalRQ
};

/***
 * `printQuote` function
***/
//creating the colorChange function
function colorChange() {

  //creating 3 variables with numbers from 1 to 256 within
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  
  //creating a variable that stores strings and number to get a useable rgb code (i.e. rgb(14,100,86) rgb)
  var backgroundCo = "rgb(" + r + "," + g + "," + b + ")";
  //return the variable with the rgb code
  return backgroundCo;
};



//creating a function that displays the object
function printQuote (){
//storing the function (that creats a random quote) in variable rQuote
const rQuote = getRandomQuote();
//creating a variable that stores a template literal,with placeholder that creates the quote and source paragraph
let displayHTMLItems =`<p class ="quote">${rQuote.quote}</p>
              <p class ="source">${rQuote.source}`;

//if the quote contains a citation, it will create a span
if (rQuote.citation) {
  displayHTMLItems +=`<span class="citation">${rQuote.citation}</span>`
}

//if the quote contains a year, it will create a span
if (rQuote.year) {
  displayHTMLItems +=`<span class="year">${rQuote.year}</span>`
}

//if the quote contains tags, it will create a span
if (rQuote.tags) {
  displayHTMLItems +=`<span class="tags"></br>${rQuote.tags}</span>`
}; //if loop ends

//create a variable that stores the element in the ID="quote-box"
let quoteDiv = document.getElementById("quote-box");

//set innerHTML property of quoteDiv to the string literal above 
quoteDiv.innerHTML = displayHTMLItems;

//setting the background color to the rgb code created by colorChange function
document.body.style.backgroundColor = colorChange();
};

//creating a function that runs the printQuote function
function refresher(){
  printQuote();
};

// the setinterval method calls the refresher function every 10 sec
setInterval(refresher, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);