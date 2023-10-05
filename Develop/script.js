// PASSWORD GENERATOR CODE
//Arrays delcaring each type of character, with the options of alphabetical characters in upper and lower case, numerical and special characters.
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ['"', " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

//Variables to add special characters, numerical, alphabetical in upper and lower case.
var addupperCase;
var addlowerCase;
var addnumbers;
var addspecialCharacters;
var passwordLength;

// Variable for password being generated ** starter code
var generateNewPassword;

// generatePassword function string
// promt user for lower case, upper case, numeric and special characters
function generatePassword () {
// promt ask user how long between 8 and 128 characters they would like their password
var characterLength = prompt ("How long do you want your password? It can only be between 8 and 128 characters!")
console.log (characterLength);
if (characterLength >= 8 & characterLength <= 128) {


    //boolean true/false for password character types
    addlowerCase = confirm("Would you like to add lowercase letters to your password?");
    addupperCase = confirm("Would you like to add uppercase letters to your password?");
    addnumbers = confirm("Would you like to add numbers to your password?");
    addspecialCharacters = confirm("Would you like to add special characters to your password?");

      //delcaring that at least ONE option has to be chosen for generated password
      if (!addlowerCase && !addupperCase && !addnumbers && !addspecialCharacters) {
        //return to top of function if not at least one type is chosen
        alert("Please select at least one character type!");
        generatePassword(); 
      }

  } else {
    //goes back to top of function if input is invalid
    alert("Please enter a valid number between 8 and 128!");
    generatePassword();
  }

//array to store all selected characters in
var passCharacters = [];

//adding each set of characters to new array if selected
if (addlowerCase) {
  passCharacters = passCharacters.concat(lowerCase);
}
if (addupperCase) {
  passCharacters = passCharacters.concat(upperCase);
}

if (addspecialCharacters) {
  passCharacters = passCharacters.concat(specialCharacters);
}

if (addnumbers) {
  passCharacters = passCharacters.concat(numbers);
}

//setting password variable to blank in order to generate new password
generateNewPassword = "";

//for loop, selects a random character from passCharacters array and puts it in generateNewPassword until it reaches desired length
for (var i = 0; i < characterLength; i++) {
 generateNewPassword += passCharacters[Math.floor(Math.random() * passCharacters.length)];
}

//returns the newly generated password
return generateNewPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input *starter code*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button *starter code*
generateBtn.addEventListener("click", writePassword);
