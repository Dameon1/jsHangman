
// Capital letters for buttons
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// Crypto word bank
let words= ["BITCOIN","ETHEREUM","RIPPLE","LITECOIN","EOS","BITCOINCASH","NEO","ETHEREUMCLASSIC","TRON","QTUM","ICON","ZCASH","HUOBITOKEN",
"VECHAIN","BINANCECOIN","STELLARLUMENS","DASH","MONERO","IOTA","CARDANO","IOSTOKEN","BLUZELLE",
"HSHARE","OMISEGO","NEM","NANO","LISK","NUBITS","INS","OFCOIN","BITCOINGOLD","BITSHARES","SWFTCOIN","FUNFAIR","VERGE",
"AETERNITY","POWERLEDGER","LINKEYE","MEDISHARES","WALTON","QUANTSTAMP","NEBULAS","ODYSSEY","CENTRA",
"THETATOKEN","STATUS","ZEROX","WAVES","GAS","TRUECHAIN","STK","SIACOIN","VIBERATE","SUNCONTRACT",
"TOPCHAIN","IOTCHAIN","STRATIS","ACUTEANGELCLOUD","REQUEST","DENT","DIGIXDAO","CINDICATOR","DOGECOIN",
"THEKEY","SIMPLETOKEN","SIRINLABS","INTERNETNODETOKEN","SANTIMENT","AELF","ZILLIQA",
"TIMENEWBANK","SYSCOIN","QUNQUN","ENIGMA","SALT","DECENTRALAND","TENX","ELECTRONICPKCHAIN","SMARTMESH",
"GXSHARES","RIPIO","POET","ADEX","BITCOINDIAMOND","KYBER","STORJ","RUFF","TIERION","VIBE","ETHOS",
"MONACO","WAYKICHAIN","BREAD","HPB","FACTOM","EXPERIENCEPOINTS","METAL","RAIDENNETWORK","STEEM","BIBOXTOKEN"];

// this holds the word to guess
let wordToFind = "";
// number of guesses the user gets
let numberOfGuesses = 10;
//how many wins the user has
let wins = 0;
// how many loses the user has
let loses = 0;
// random number based on how many words there are
let randNumb = Math.floor(Math.random()*words.length);
// number for how many blanks to display
let letsWord = wordToFind.length;
// displays letters already guessed
let letGuessed = "";
//displays blanks and letters on screen
let displayedCharacters = [];



let reset = function(){
    numbGuess = 10;
   
    letGuessed = "";
   
    wordToFind = words[randNumb];
    letsWord = wordToFind.length;
 displayedCharacters = [];
    
    for (let m = 0; m < letters.length;m++){
      let letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
      letterBtn.attr("value", letters[m]);
      letterBtn.text(letters[m]);
      $("#letters").append(letterBtn);
      }
    for (let l = 0; l < letsWord; l++){
     displayedCharacters.push("-");
        }

  // Reprints the guessesLeft to 10.
  document.getElementById("guessesLeft").innerHTML = numbGuess;

  // Prints the blanks at the beginning of each round in the HTML.
  document.getElementById("word").innerHTML = displayedCharacters.join(" ");

  // Clears the wrong guesses from the previous round.
//   document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

let checked = function(letter){
   
  
    let locked = true;
    console.log(wordToFind);
    for (let i = 0; i < letsWord; i++){
        if (wordToFind[i] === letter){
            locked = false;
        }
    };
    console.log(locked);
    if (!locked){
        for (let j = 0; j < letsWord; j++){
            if (wordToFind[j] === letter){
             displayedCharacters[j] = letter;
                $("#word").text displayedCharacters.join(""));
            }
        }
    }
     if (locked) {
    //    change html
       numberOfGuesses--;
       $("#guessesLeft").text(numberOfGuesses);
    }
    
}

let winOrLose = function(){
    // change HTML
    // if word === an array . toString . change Html and reset
    // if guesses === 0 , html reset
}

reset();

$(document).ready(function() {
    
    $(document.body).on("click", ".letter", function() {
    checked(this.value);
    $(this).hide();
       
    })
})
