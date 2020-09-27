// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // add code to get user input on the length of thier password. Use parseInt to conver their answer into an int datatype. 
  var length = parseInt(prompt ("How many characters do you want your password to be? (please enter a value between 8 and 128)"));
  // use if-else logic to run the code only when user inputs valid data.
  if (length >= 8 && length <= 128){
    function generatePassword(){
      // create variables to store user preferences. Use confirm() to get the answers.
      userLetter = confirm("Do you want lowercase letters in your password?");
      userCapital = confirm("Do you want uppercase letters in your password?");
      userNumber = confirm("Do you want numbers in your password?");
      userSpecial = confirm("Do you want special characters in your password?");
      // create a function to get a random character.
      function getRandomCharacter(){
        // create functions to generate random letters. capital letters, numbers, and special characters.
        function getRandomLetter(){
          var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
          // pull a random letter from the array.
          var  randomLetter = letters[Math.floor(Math.random() * letters.length)]; 
          return randomLetter;
        }
        function getCapitalLetter(){
          // call the letter function and convert it to uppercase.
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
        // run the functions.
        getRandomLetter();
        getCapitalLetter();
        getRandomNumber();
        getRandomSpecial();

        // create an array to store user character preferences. 
        var character =[];
        // use if logic to push user character preferences into the array.
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
        // create a variable that stores the random character. 
        var randomCharacter = character[Math.floor(Math.random() * character.length)];
        return randomCharacter;
      }
      // create an array that holds the random characters of the password
      var randomPassword = [];
        // use a for-loop to get the amount of random characters the user chose.
        for(i=0; i < length; i++){
          //run the random character function to get a random character.
          getRandomCharacter();
          //push the character to the array.
          randomPassword.push(getRandomCharacter());
        }
      // convert the random password array intona string and store it in a new variable. 
      var finalPassword = randomPassword.join("");
      // return the final password.
      return finalPassword;
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // issue alert asking user to input valid data
  else {
    alert("please enter a value between 8 and 128");
    }
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


