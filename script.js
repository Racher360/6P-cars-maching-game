// game 
let game = document.querySelector(".game");
// 4 
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];
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
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.lenght + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image:url(" +
                url + card + ")'class='card'>"
            );
        }
    }
    console.log(" Now the deck has " + cards.length + " cards. ");
    buttonDouble.style.color = "sliver";
};
// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("I'm shuffling the cards!");
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' id='" + i + "' class='card'>");
        i = i + 1;
    }
};

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
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};
// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    // if a card was cliked, show it, and add it to array.
    if (clickedId !== "") {
        document.getElementById(clickedId).style.backgroundImage =
            "url('" + url + cards[clickedId] + "')";
        // Also add the id to an array (and log it)
        clickedIds.push(clickedId);
        console.log(clickedIds);
        // If 1 card was clicked...
        if (clickedIds.length === 2) {
            // get both image URLs (and log them)
            let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            // if they are the same,just empty the array!
            if (card1picture === card2picture) {
                console.log("match");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
            }
            //if they are not the same ..
            // reset both background imagaes and empty the array
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);
        }
    }
});