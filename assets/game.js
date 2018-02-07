




// alphabet, on clicks, comparisons, picture changes,
// game logic


// added letters//
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


let numbGuess;
let wins;
let loses;
let randNumb;
let letsWord;
let letGuessed;
let wrongGuess;

let reset = function(){
    // resets all gameplay to zero ,. not wins and losses those are preset
}

let checked = function(letter){
    // create boolean
    // for loop to change if letter is in word to true
    // if true , change letter by giving it a new value
    // if false, push letter into array and change guesses left
}

let winOrLose = function(){
    // change HTML
    // if word === an array . toString . change Html and reset
    // if guesses === 0 , html reset
}

// onClick functions for letters
// call game functionality with Document.onReady