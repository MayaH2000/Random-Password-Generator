// Assignment code here
//Arrays for each type of character
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ['"', " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

//Variables for user input
var addupperCase;
var addlowerCase;
var addnumbers;
var addspecialCharacters;
var passwordLength;

// Variable for password being generated
var generatePassword;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  
  

  
  passwordText.value = password;

}

function generatePassword () {
// promt ask user how long between 8 and 128 characters they would like their password
var characterLength = prompt ("How long do you want your password? It can only be between 8 and 128 characters!")
console.log (characterLength);
if (characterLength < 8) {
  
}
// promt user for lower case, upper case, numeric and special characters


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
