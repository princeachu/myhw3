// variables declared 
var password_length;
var ifspecialCharacters = false;
var ifnumericCharacters = false;
var iflowerCasedCharacters = false;
var ifupperCasedCharacters = false;
var password = "";
var userinput = [];
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function yourFuncForUserInput() {
  password_length = prompt("How many characters do you want your password to be?");
  while(password_length < 8 || password_length > 128){
        alert("Password must be between 8 to 128 charcters");
        password_length = prompt("How many characters do you want your password to be?");
        }
  while(ifspecialCharacters === false && ifnumericCharacters === false && iflowerCasedCharacters === false && ifupperCasedCharacters === false){
  // 3. Variable to store boolean regarding the inclusion of special characters
       ifspecialCharacters = confirm("Click ok to include special characters");
  // 4. Variable to store boolean regarding the inclusion of numeric characters
       ifnumericCharacters = confirm("Click ok to include numeric characters");
  // 5. Variable to store boolean regarding the inclusion of lowercase characters
       iflowerCasedCharacters = confirm("Click ok to include lower case characters");
  // 6. Variable to store boolean regarding the inclusion of uppercase characters
        ifupperCasedCharacters = confirm("Click ok to include upper case characters");
  // 7. Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
        if (ifspecialCharacters === false && ifnumericCharacters === false && iflowerCasedCharacters === false && ifupperCasedCharacters === false){
            alert("Password must include at least one of these charcters");
            }
        }
    }    
 // Function for getting a random element from an array
function yourFuncForRandomChar() {
    if(ifspecialCharacters){
        userinput = userinput.concat(specialCharacters);
    }
    if(ifnumericCharacters){
       userinput = userinput.concat(numericCharacters);
    }
    if(iflowerCasedCharacters){
       userinput = userinput.concat(lowerCasedCharacters);
    }
    if(ifupperCasedCharacters){
        userinput = userinput.concat(upperCasedCharacters);
    } 
}
// Function to generate password with user input
function generatePassword() {
 for(var i = 0; i < password_length; i++){
   password += userinput[Math.floor(Math.random()*userinput.length)];
    }
}
 // Call back function to write password to the #password iuput
function writePassword() {
passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", function(event) {
  if (event.target.matches("button")){
    yourFuncForUserInput();
    yourFuncForRandomChar();
    generatePassword();
    writePassword();
}
})
