// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = parseInt(prompt ("How many characters do you want your password to be? (please enter a value between 8 and 128)"));
  if (length < 8){
  alert("Please enter a value between 8 and 128");  
  }
  else if (length >128){
  alert("Please enter a value between 8 and 128");
  }
  else{
    function generatePassword(){
      userLetter = confirm("Do you want lowercase letters in your password?");
      userCapital = confirm("Do you want uppercase letters in your password?");
      userNumber = confirm("Do you want numbers in your password?");
      userSpecial = confirm("Do you want special characters in your password?");
      function getRandomCharacter(){
        function getRandomLetter(){
          var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
          var  randomLetter = letters[Math.floor(Math.random() * letters.length)]; 
          return randomLetter;
        }
        function getCapitalLetter(){
          return getRandomLetter().toUpperCase();
        }
        function getRandomNumber(){
          var numbers = ["0","1","2","3","4","5","6","7","8","9"];
          var  randomNumber = numbers[Math.floor(Math.random() * numbers.length)]; 
          return randomNumber;
        }
        function getRandomSpecial(){
          var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","/","?","~","`","<",">"]
          var randomSpecial = special[Math.floor(Math.random() * special.length)];
        return randomSpecial;
        }
        getRandomLetter();
        getCapitalLetter();
        getRandomNumber();
        getRandomSpecial();
        var character =[];
        if (userLetter === true){
          character.push(getRandomLetter());
        }
        if (userCapital === true){
          character.push(getCapitalLetter());
        }
        if (userNumber === true){
          character.push(getRandomNumber());
        }
        if (userLetter === true){
          character.push(getRandomSpecial());
        }
        var randomCharacter = character[Math.floor(Math.random() * character.length)];
        return randomCharacter;
      }
      var randomPassword = [];
        for(i=0; i < length; i++){
          getRandomCharacter();
          randomPassword.push(getRandomCharacter());
        }
      var finalPassword = randomPassword.join("");
      return finalPassword;
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


