// Assignment Code
var generateBtn = document.querySelector("#generate");
// Selects html file as an object and uses the CSS selector #generate

var passwordLength = 8; 

var randomCharacters = [];

var lowerCase = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z' ];

var upperCase = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z' ];

var specialCharacter = ['!' , '@' , '#' , '$' , '%' , '^' , '&' , '*' , '(' , ')' , '-' , '_' , '=' , '=' , '[' , '{' , ']' , '}' , '<' , '>' , '?' ];

var numbers = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' ];

// Write password to the #password input
// After button is clicked, I call the prompts function on line 42.
function writePassword() {
  var passwordCriteria = prompts();
  var passwordText = document.querySelector("#password");
  //After returning true, the newPassword var calls the generatePassword function on line 33.
  if (passwordCriteria) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = '';
  }
}
// In this function I set var password to an empty string, then a ran a For loop where if count is less than passwordLength, we increase count of the loop till it is almost more than passwordLength.
// I set randomIndex equal to a random whole integer using Math.floor(Math.random() then I multipled it by randomCharacters.length which was the value returned by the prompts function.
// Then password which is essentially 0 will add all the characters we have in out randomCharacters Array, which will have a value after the the prompts function, then I return the "new password".
function generatePassword() {
  var password = '';
  for (var count = 0; count < passwordLength; count++) {
    var randomIndex = Math.floor(Math.random() * randomCharacters.length);
    password = password + randomCharacters[randomIndex];
  }
  return password;
}
//Prompts function checks to see if password length is between 8 and 128 characters. then asks what specific characters you'd like.
function prompts() {
  randomCharacters = [];
  passwordLength = prompt('How many characters do you want your password to be? (8-128) '); 

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert ("Password length has to be between 8 and 128 digits.")
    return false;
  } 
  if (confirm('Do you want Lowercase letters in your password?"')) {
    randomCharacters += randomCharacters.concat(lowerCase);
  } 
  if (confirm('Do you want Uppercase letters in your password?"')) {
    randomCharacters += randomCharacters.concat(upperCase);
  } 
  if (confirm('Do you want Special characters in your password?"')) {
    randomCharacters += randomCharacters.concat(specialCharacter);
  } 
  if (confirm('Do you want Numbers in your password?"')) {
    randomCharacters += randomCharacters.concat(numbers);
  } 
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//click event runs writePassword function