// Assignment Code
var generateBtn = document.querySelector("#generate"); 

var passwordLength = 8;

var randomCharacters = [];

var lowerCase = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z' ];

var upperCase = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z' ];

var specialCharacter = ['!' , '@' , '#' , '$' , '%' , '^' , '&' , '*' , '(' , ')' , '-' , '_' , '=' , '=' , '[' , '{' , ']' , '}' , '<' , '>' , '?' ];

var numbers = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' ];

// Write password to the #password input
function writePassword() {
  var correctCriteria = prompts();
  var passwordText = document.querySelector("#password");

  if (correctCriteria) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = '';
  }
}

function generatePassword() {
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * randomCharacters.length);
    password = password + randomCharacters[randomIndex];
  }
  return password;
}

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