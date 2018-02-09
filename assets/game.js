
// Capital letters for buttons
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
               "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Crypto word bank, also in capital letters for ease of coding
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

let numberForImages = 0;
let images = ["assets/images/start.png","assets/images/pic1.png","assets/images/pic2.png",
              "assets/images/pic3.png","assets/images/pic4.png","assets/images/lose.png","assets/images/win.png"]


//A group of functions that will perform the games logic

    // this reset starts the game over and starts the game in the beginning
    let reset = function(){
    // random number based on how many words there are
    numberForImages = 0;
    
    let randNumb = Math.floor(Math.random()*words.length);
        numberOfGuesses = 5;
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
    
    $("#img").attr("src",images[0]);


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


            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/sounds/right.mp3");
            audioElement.play();








            for (let j = 0; j < letsWord; j++){
            if (wordToFind[j] === letter){
            displayedCharacters[j] = letter;
            $("#word").text(displayedCharacters.join(""));
            }
            }
            }
        if (locked) {
            
            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/sounds/wrong.mp3");
            audioElement.play();
            
            
            
            
            
            numberOfGuesses--;
            $("#guessesLeft").text(numberOfGuesses);
            numberForImages++;
            $("#img").attr("src",images[numberForImages]);
            }
            }

 
 
 
 
    // function to decide if user wins or loses the game , adjusts the html accordingly and resets the game
    let winOrLose = function(){
        if (numberOfGuesses===0){
            // stuff goes here
           
            $("#img").attr("src",images[5]);
           



            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/sounds/loser.mp3");
            audioElement.play();











           
            $("#letters").empty();
           $("#newGame").text("Play Again?")
            let letterBtnYes = $("<button>");
            let letterBtnNo = $("<button>");
           
            letterBtnYes.addClass("letter-button yes letter-button-color");
            letterBtnYes.attr("value", "yes");
            letterBtnYes.text("Yes");
            $("#letters").append(letterBtnYes);
           
            letterBtnNo.addClass("letter-button no letter-button-color");
            letterBtnNo.attr("value", "no");
            letterBtnNo.text("No");
            $("#letters").append(letterBtnNo);







           // reset();
            losses++;
            $("#losses").text(losses);
            }
        if (wordToFind===displayedCharacters.join("")){
            //stuff goes here
            $("#img").attr("src",images[6]);
            
            
            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/sounds/winner.mp3");
            audioElement.play();
            
            
            $("#letters").empty();
           
            let letterBtnYes = $("<button>");
            let letterBtnNo = $("<button>");
           
            letterBtnYes.addClass("letter-button yes letter-button-color");
           
            letterBtnYes.text("Yes");
            $("#letters").append(letterBtnYes);
           
            letterBtnNo.addClass("letter-button no letter-button-color");
           
            letterBtnNo.text("No");
            $("#letters").append(letterBtnNo);
            
            
            
            
            
            
            
            
            
            
            
            
            wins++;
            $("#score").text(wins);
          
            }
            }

    // this reset function starts the games
    reset();










    // this ensures that the page loads completely to attach onClick functions
    $(document).ready(function() {
        $(document.body).on("click", ".letter", function() {
        $(this).hide();
        checked(this.value);
        winOrLose();
        console.log(displayedCharacters.join(""));

        })
        $(document.body).on("click", ".yes", function() {
            $("#newGame").empty();
            
            reset();});
        $(document.body).on("click", ".no", function() {
            //stuff goes here
            $("#letters").empty();
            $("#letters").text("Maybe some other time.")
        });
        })















