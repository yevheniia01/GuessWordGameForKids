var wordsArr = ['APPLE', 'UNICORN', 'POPCORN', 
'JUICE', 'CAT', 'DOG', 'ORANGE', 'GRAPES', 'SUN', 'MOON',
'BED']

var maxGuess = 15;
var storeArr = [];
var guessedLetters = [];
var remainingGuesses = 0;
var winsCount = 0;
var losseCount = 0;
var gameOver = false;
var randomWord;

function start() {
    randomWord = wordsArr[Math.floor(Math.random()* wordsArr.length)];
    storeArr = [];

    for (var i = 0; i < randomWord.length; i++){
        storeArr[i] = "_";
    }

    remainingGuesses = maxGuess;
    guessedLetters = [];

    /*if(randomWord === 'APPLE'){
        document.getElementById("image").src = "../assets/images/apple.jpg"
    }*/

    document.getElementById("image").src = "";
    document.getElementById('numberOfGuesses').style.color = "";
    updateFunc();
    updateFunc2();

};

function updateFunc(){
    document.getElementById("numberWins").innerHTML = winsCount;
    document.getElementById("numberLosses").innerHTML = losseCount;
    document.getElementById("numberOfGuesses").innerHTML = remainingGuesses;
    document.getElementById("answerWord").innerHTML = storeArr.join("");
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
}
function updateFunc2(){
    if(randomWord === 'APPLE'){
        document.getElementById('image').src = "../GuessWordGameForKids/assets/images/apple.jpg"
    }else if (randomWord === "JUICE"){
        document.getElementById('image').src = "../GuessWordGameForKids/assets/images/juice.png"
    }else if (randomWord === "MOON"){
    document.getElementById('image').src = "../GuessWordGameForKids/assets/images/moon.jpg"
}else if (randomWord === "GRAPES"){
document.getElementById('image').src = "../GuessWordGameForKids/assets/images/grape.jpg";
}else if (randomWord === "DOG"){
    document.getElementById('image').src = "../GuessWordGameForKids/assets/images/dog.jpg"
}else if (randomWord === "CAT"){
    document.getElementById('image').src = "../GuessWordGameForKids/assets/images/cat.jpg"
}else if (randomWord === "UNICORN"){
    document.getElementById('image').src = "../GuessWordGameForKids/assets/images/unicorn.png"
}else if (randomWord === "POPCORN"){
    document.getElementById('image').src = "../GuessWordGameForKids/assets/images/popcorn.jpg"
}else if (randomWord === "SUN"){
    document.getElementById('image').src = "../GuessWordGameForKids/assets/images/sun.jpg"
}else if (randomWord === "ORANGE"){
    document.getElementById('image').src = "../GuessWordGameForKids/assets/images/orange.jpg"
}else if (randomWord === "BED"){
    document.getElementById('image').src = "../GuessWordGameForKids/assets/images/bed.jpg"
}
}
function checkfunc(letter) {
    if (guessedLetters.indexOf(letter)=== -1){
        guessedLetters.push(letter);

        if (randomWord.indexOf(letter) === -1){
            remainingGuesses--;
            if (remainingGuesses <=3) {
                document.getElementById("numberOfGuesses").style.color = "#e12d2e";
            }
        }else{
            for (var i = 0; i < randomWord.length; i++){
                if (letter === randomWord[i]){
                    storeArr[i] = letter;
                }
            }
        }
    }
};

function winFunc(){
    if (storeArr.indexOf("_")=== -1){
        winsCount++;
        gameOver = true;

        
        
        }
   };
 

function losseFunc(){
    if (remainingGuesses <=0){
        losseCount++;
        gameOver = true;
        alert("oh no.......try again!");
    }
};

document.onkeyup = function(event) {

    if (gameOver){
        start();
        gameOver = false;
    }else{
        if(event.keyCode >= 65 && event.keyCode <=90){
            checkfunc(event.key.toUpperCase());
            updateFunc();
            winFunc();
            losseFunc();
        }
    }
};

start();
updateFunc();

console.log(randomWord);



