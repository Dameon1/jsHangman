




// alphabet, on clicks, comparisons, picture changes,
// game logic


// added letters//
let lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


let lettersLower = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
    //     1
    //     Bitcoin
    //     2		
    //     Ethereum
    //     3		
    //     Ripple
    //     4		
    //     Litecoin
    //     5		
    //     Eos
    //     6		
    //     Bitcoincash
    //     7		
    //     Neo
    //    8		
    //     Ethereumclassic
    //     9		
    //     Tron
    //     10		
    //     Qtum
    //     11		
    //     Icon
    //     12		
    //     Zcash
    //    13		
    //     Huobitoken
    //     14		
    //     Vechain
    //     15		
    //     Binancecoin
    //     16		
    //     Stellarlumens
    //     17		
    //     Dash
    //    18		
    //     Monero
    //     19		
    //     Iota
    //     20		
    //     Cardano
    //     21		
    //     Iostoken
    //     22		
    //     Bluzelle
    //    23		
    //     Hshare
    //     24		
    //     Omisego
    //    25		
    //     Nem
    //    26		
    //     Nano
    //    27		
    //     Lisk
    //     28		
    //     Nubits
    //    29		
    //     Ins
    //     30		
    //     Ofcoin
    //     31		
    //     Bitcoingold
    //     32		
    //     Bitshares
    //    33		
    //     Swftcoin
    //     34		
    //     Funfair
    //     35		
    //     Verge
    //     36		
    //     Aeternity
    //     37		
    //     Powerledger
    //    38		
    //     Linkeye
    //     39		
    //     Medishares
    //    40		
    //     Walton
    //     41		
    //     Quantstamp
    //     42		
    //     Nebulas
    //     43		
    //     Odyssey
    //     44		
    //     Centra
    //     45		
    //     Thetatoken
    //     46		
    //     Status
       
    //     47		
    //     zeroX
    //    48		
    //     Waves
    //    49		
    //     Gas
    //    50		
    //     Truechain
    //    51		
    //     Stk
    //    52		
    //     Siacoin
    //     53		
    //     Viberate
    //      54		
    //     Suncontract
    //     55		
    //     Topchain
    //     56		
    //     Iotchain
    //     57		
    //     Stratis
    //     58		
    //     Acuteangelcloud
    //     59		
    //     Request
    //    60		
    //     Dent
    //     61		
    //     Digixdao
    //    62		
    //     Cindicator
    //     63		
    //     Dogecoin
    //     64		
    //     Thekey
    //    65		
    //     Simpletoken
    //     66		
    //     Sirinlabs
    //     67		
    //     Internetnodetoken
    //     68		
    //     Santiment
    //     69		
    //     Aelf
    //     70		
    //     Zilliqa
    //     71		
    //     Timenewbank
    //     72		
    //     Syscoin
    //     73		
    //     Qunqun
    //     74		
    //     Enigma
    //    75		
    //     Salt
    //     76		
    //     Decentraland
    //     77		
    //     Tenx
    //     78		
    //     Electronicpkchain
    //    79		
    //     Smartmesh
    //     80		
    //     Gxshares
    //    81		
    //     Ripio
    //    82		
    //     Poet
    //    83		
    //     Adex
    //      84		
    //     Bitcoindiamond
    //    85		
    //     Kyber
    //     86		
    //     Storj
    //     87		
    //     Ruff
    //     88		
    //     Tierion
    //    89		
    //     Vibe
    //    90		
    //     Ethos
    //    91		
    //     Monaco
    //    92		
    //     Waykichain
    //     93		
    //     Bread
    //    94		
    //     Hpb
    //    95		
    //     Factom
    //     96		
    //     Qash
    //     97		
    //     Metal
    //   	98	
    //     Raidennetwork
    //     99	
    //     Steem
    //    100
    //     Biboxtoken
       





























let wordToFind = "";
let words = ["one","three","five"];
let numbGuess = 10;
let wins = 0;
let loses = 0;
let randNumb = Math.floor(Math.random()*words.length);
let letsWord = wordToFind.length
let lettersAlreadyGuessed = [];
let letGuessed = ""; //join to display an array of letters guesses
let wrongGuess = [];




let reset = function(){
    numbGuess = 10;
    lettersAlreadyGuessed = [];
    letGuessed = "";
    wrongGuess = [];
    wordToFind = words[randNumb];
    letsWord = wordToFind.length; 
}

let checked = function(letter){
    for (let k = 0; k < lettersAlreadyGuessed; k++){
        if (letter === lettersAlreadyGuessed[k]){
         return alert("tell player already guessed that")
        }
    }
    lettersAlreadyGuessed.push(letter);
    let locked = true;

    for (let i = 0; i < letsWord; i++){
        if (wordToFind[i] === letter){
            locked = false;
        }
    };
    if (!locked){
        for (let j = 0; j < letsWord; j++){
            if (wordToFind[j] === letter){
                wordToFind[j] = letter;
            }
        }
    }
    else if (locked) {
    //    change html
    //    guesses--
    }
    
}
















// let checked = function(letter){
//     // create boolean
//     // for loop to change if letter is in word to true
//     // if true , change letter by giving it a new value
//     // if false, push letter into array and change guesses left
// }

let winOrLose = function(){
    // change HTML
    // if word === an array . toString . change Html and reset
    // if guesses === 0 , html reset
}











// onClick functions for letters
// call game functionality with Document.onReady