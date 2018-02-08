
// Capital letters for buttons
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
               "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Crypto word bank, also in capital letters
let words= ["BITCOIN","ETHEREUM","RIPPLE","LITECOIN","EOS","BITCOINCASH","NEO","ETHEREUMCLASSIC",
            "TRON","QTUM","ICON","ZCASH","HUOBITOKEN","VECHAIN","BINANCECOIN","STELLARLUMENS",
            "DASH","MONERO","IOTA","CARDANO","IOSTOKEN","BLUZELLE","HSHARE","OMISEGO","NEM",
            "NANO","LISK","NUBITS","INS","OFCOIN","BITCOINGOLD","BITSHARES","SWFTCOIN","FUNFAIR",
            "VERGE","AETERNITY","POWERLEDGER","LINKEYE","MEDISHARES","WALTON","QUANTSTAMP","NEBULAS",
            "ODYSSEY","CENTRA","THETATOKEN","STATUS","ZEROX","WAVES","GAS","TRUECHAIN","STK","SIACOIN",
            "VIBERATE","SUNCONTRACT","TOPCHAIN","IOTCHAIN","STRATIS","ACUTEANGELCLOUD","REQUEST","DENT",
            "DIGIXDAO","CINDICATOR","DOGECOIN","THEKEY","SIMPLETOKEN","SIRINLABS","INTERNETNODETOKEN",
            "SANTIMENT","AELF","ZILLIQA","TIMENEWBANK","SYSCOIN","QUNQUN","ENIGMA","SALT","DECENTRALAND",
            "TENX","ELECTRONICPKCHAIN","SMARTMESH","GXSHARES","RIPIO","POET","ADEX","BITCOINDIAMOND",
            "KYBER","STORJ","RUFF","TIERION","VIBE","ETHOS","MONACO","WAYKICHAIN","BREAD","HPB","FACTOM",
            "EXPERIENCEPOINTS","METAL","RAIDENNETWORK","STEEM","BIBOXTOKEN"];

//A group of variables that will be used throughout the game
    // this holds the word to guess
    let wordToFind = "";
    // number of guesses the user gets
    let numberOfGuesses=0;
    //how many wins the user has
    let wins = 0;
    // how many losses the user has
    let losses = 0;
    // number for how many blanks to display
    let letsWord = wordToFind.length;
    //displays blanks and letters on screen
    let displayedCharacters = [];


// this section is going to be where I work on the array for images to change





































//A group of functions that will perform the games logic

    // this reset starts the game over and starts the game in the beginning
    let reset = function(){
    // random number based on how many words there are
    let randNumb = Math.floor(Math.random()*words.length);
        numberOfGuesses = 10;
        wordToFind = words[randNumb];
        letsWord = wordToFind.length;
        displayedCharacters = [];
        $("#letters").empty();
    //creates buttons with a "value"
    for (let m = 0; m < letters.length;m++){
        let letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("value", letters[m]);
        letterBtn.text(letters[m]);
        $("#letters").append(letterBtn);
        }

    //creates the HTML for the word with blanks
    for (let l = 0; l < letsWord; l++){
        displayedCharacters.push("-");
        }

    // Reprints the guessesLeft to 10.
    document.getElementById("guessesLeft").innerHTML = numberOfGuesses;

    // Prints the blanks at the beginning of each round in the HTML.
    document.getElementById("word").innerHTML = displayedCharacters.join(" ");
    }

    //function that checks to see if letter is in word and takes appropriate actions
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
            $("#word").text(displayedCharacters.join(""));
            }
            }
            }
        if (locked) {
            numberOfGuesses--;
            $("#guessesLeft").text(numberOfGuesses);
            }
            }

    // function to decide if user wins or loses the game , adjusts the html accordingly and resets the game
    let winOrLose = function(){
        if (numberOfGuesses===0){
            // stuff goes here
            reset();
            // losses++;
            }
        if (wordToFind===displayedCharacters.join("")){
            //stuff goes here
            reset();
            }
            }

    // this reset function starts the game
    reset();

    // this ensures that the page loads completely to attach onClick functions
    $(document).ready(function() {
        $(document.body).on("click", ".letter", function() {
        $(this).hide();
        checked(this.value);
        winOrLose();
        console.log(displayedCharacters.join(""));
        })
        })
