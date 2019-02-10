var question = confirm("Do you want to play a game?");
var randomNumber;
var continueQuestion;
var count;
var finalPrize = 0;
var prize = 10;
var pool = 5;
var index = 1;

if (!question) {
    alert('You did not become a millionaire, but can.');
} else {
   while (question) {
      randomNumber = Math.floor((Math.random() * (index * pool)) + 1); 
      for(count = 3; count > 0; count--){
         var userNumber = +prompt("Guess a number from 0 to " + (index * pool) + 
         "\nAttempts left: " + count + "\nTotal prize: " + finalPrize + 
         "\nPossible prize on current attempt: " + prize);
         if (randomNumber === userNumber && userNumber !== '') {
            finalPrize += prize;
            alert ('Congratulation! Your prize is: ' + finalPrize + '$');
            continueQuestion = confirm('Do you want to continue?');
            prize *= 3;
            index *= 2;
            break;
         } else {
            prize /= 2;
            prize = Math.floor(prize);
         }
      } 
      if (count === 0 || !continueQuestion) {
         alert ('Thank you for a game. Your prize is: ' + finalPrize);
         prize = 10;
         pool = 5;
         index = 1;
         finalPrize = 0;
         question = confirm("Do you want to play again?");
      }
   }
}