// game 
let game = document.querySelector(".game");
// 4 
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/e5c603db-1cde-4a58-a76a-";
let cards = [
   "f319c6fbbc36/card%201%20.jpg?v=1710435231166", 
"f319c6fbbc36/card2.jpg?v=1710435287789",
"f319c6fbbc36/card3.jpg?v=1710435317438",
"f319c6fbbc36/card4.jpg?v=1710435345320",
"f319c6fbbc36/card5.jpg?v=1710435367836",
"f319c6fbbc36/card6.jpg?v=1710435400942",
"f319c6fbbc36/car7.jpg?v=1710435434241",
"f319c6fbbc36/card8.jpg?v=1710435461380",



];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function () {
  console.log ("Deck has " + cards.lenght + " cards.");
for (let card of cards) {
 if (cards.length !==16) {
  cards.push(card);
 game.insertAdjacentHTML("beforeend",
 "<div style='background-image:url("+
 url + card +")'class='card'>"
);
}
}
console.log(" Now the deck has " + cards.length + " cards. ");
buttonDouble.style.color = "sliver";    
};
// Button to Shuffle Cards

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});
