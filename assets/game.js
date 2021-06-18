
        // Capital letters for buttons
            let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        // Crypto word bank, also in capital letters for ease of coding
            let words= ["ARWEAVE","ETHEREUM","RIPPLE","LITECOIN","EOS","BITCOINCASH","NEO","ETHEREUMCLASSIC",
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
        // these variable are for changing the images in the HTML
            let numberForImages = 0;
            let images = ["assets/images/start.png","assets/images/pic1.png","assets/images/pic2.png","assets/images/pic3.png",
                          "assets/images/pic4.png","assets/images/lose.png","assets/images/win.png"];


        //A group of functions that will perform the games logic

        // this reset starts the game over and starts the game in the beginning
            let reset = function(){
                //resets the image
                numberForImages = 0;
                //creates random number for the words array to use
                let randNumb = Math.floor(Math.random()*words.length);
                //number of guesses
                numberOfGuesses = 5;
                //random word generated for the user to guess
                wordToFind = words[randNumb];
                //number of letters in the word
                letsWord = wordToFind.length;
                //empty array to start , to be filled by a loop
                displayedCharacters = [];
                //clears out the previous game
                $("#letters").empty();
                //creates buttons with a "value"
                for (let m = 0; m < letters.length;m++){
                    let letterBtn = $("<button>");
                    letterBtn.addClass("letter-button letter letter-button-color");
                    letterBtn.attr("value", letters[m]);
                    letterBtn.text(letters[m]);
                    $("#letters").append(letterBtn);
                    };
                //creates the HTML for the word with blanks
                for (let l = 0; l < letsWord; l++){
                    displayedCharacters.push("-");
                    }
                // Reprints the guessesLeft to 10.
                document.getElementById("guessesLeft").innerHTML = numberOfGuesses;
                // Prints the blanks at the beginning of each round in the HTML.
                document.getElementById("word").innerHTML = displayedCharacters.join(" ");
                //changes the image back to the starting image
                $("#img").attr("src",images[0]);
                };

        //function that checks to see if letter is in word and takes appropriate actions
            let checked = function(letter){
                //creates a variable to toggle
                let locked = true;
                //loop to find if the letter chosen is in the word, if it is then changes locked boolean
                for (let i = 0; i < letsWord; i++){
                    if (wordToFind[i] === letter){
                    locked = false;
                    }
                    }

                //if letter is in the word
                if (!locked){
                    //plays the audio "right"
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/sounds/right.mp3");
                    audioElement.play();
                    //loops through the word to find and replaces the HTML with the correct letter
                    for (let j = 0; j < letsWord; j++){
                        if (wordToFind[j] === letter){
                        displayedCharacters[j] = letter;
                        $("#word").text(displayedCharacters.join(""));
                        }
                        }
                        }

                //if letter is not in the word        
                if (locked) {
                    //plays the audio "wrong"
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/sounds/wrong.mp3");
                    audioElement.play();
                    //changes the number of guesses           
                    numberOfGuesses--;
                    $("#guessesLeft").text(numberOfGuesses);
                    //changes the images
                    numberForImages++;
                    $("#img").attr("src",images[numberForImages]);
                    }
            //closes out the checked function
            };

        // function to decide if user wins or loses the game , adjusts the html accordingly and resets the game
            let winOrLose = function(){
                
                //if the user has lost
                if (numberOfGuesses===0){
                    //changes the image in the HTML
                    $("#img").attr("src",images[5]);
                    //plays audio indicating the user lost
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/sounds/loser.mp3");
                    audioElement.play();
                    //clears the letters div to prepare for new game
                    $("#letters").empty();
                    $("#newGame").text("Play Again?")
                    //creates variables for Yes/No buttons
                    let letterBtnYes = $("<button>");
                    let letterBtnNo = $("<button>");
                    //adds class and text to the YES button then attaches to letters div
                    letterBtnYes.addClass("letter-button yes letter-button-color");
                    
                    letterBtnYes.text("Yes");
                    $("#letters").append(letterBtnYes);
                    //adds class and text to the NO button then attaches to letters div
                    letterBtnNo.addClass("letter-button no letter-button-color");
                    
                    letterBtnNo.text("No");
                    $("#letters").append(letterBtnNo);
                    //changes losses on the HTML
                    losses++;
                    $("#losses").text(losses);
                    }
                
                //if the user has won the game
                if (wordToFind===displayedCharacters.join("")){
                    //changes the image
                    $("#img").attr("src",images[6]);
                    //plays the audio for winning                    
                    var audioElement = document.createElement("audio");
                    audioElement.setAttribute("src", "assets/sounds/winner.mp3");
                    audioElement.play();
                    //empties out the letters div to prepare for a new game                    
                    $("#letters").empty();
                    //creates variables for new buttons
                    let letterBtnYes = $("<button>");
                    let letterBtnNo = $("<button>");
                    //adds class and text to the YES button then attaches to letters div
                    letterBtnYes.addClass("letter-button yes letter-button-color");
                    letterBtnYes.text("Yes");
                    $("#letters").append(letterBtnYes);
                    //adds class and text to the YES button then attaches to letters div
                    letterBtnNo.addClass("letter-button no letter-button-color");
                    letterBtnNo.text("No");
                    $("#letters").append(letterBtnNo);
                    //changes the wins and updates the HTML
                    wins++;
                    $("#score").text(wins);
                    }
                    };

        // this reset function starts the games
            reset();

        // this ensures that the page loads completely to attach onClick functions
            $(document).ready(function() {
                $(document.body).on("click", ".letter", function() {
                $(this).hide();
                checked(this.value);
                winOrLose();
                console.log(displayedCharacters.join(""));
                });
        //on click functionality for the YES button to restart
            $(document.body).on("click", ".yes", function() {
                $("#newGame").empty();
                reset();
                });

        //on click functionality for the NO button to restart              
            $(document.body).on("click", ".no", function() {
                $("#letters").empty();
                $("#letters").text("Maybe some other time.");
                });
            //closes out the document.ready    
            });