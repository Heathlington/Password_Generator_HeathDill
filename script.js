// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ['!','"','#','$','%','&','\'','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // this acts as a temp data holder or storage
  var tempPassword = "";
  var selectedChar = []; 
  //var tempPassword = [];

  // We need to prompt the USER for data
    // alert()
    // confirm()
    // prompt()
  var userLength = prompt("How long would you like your password to be? (password should be between 8 and 128 characters)");
  console.log("Length: ", userLength);
  console.log("Type: ", typeof userLength);
  // We need to do some validation..
  if(userLength < 8 || userLength > 128) {
    alert("Password should be between 8 and 128 characters!");
    generatePassword();
    //return null;
  }
  
  /*
  if(userLength > 128) {
    alert("Password should be between 8 and 128 characters!");
    generatePassword();
    //return null;
  }
  */

  // We need to filter in / out our datasets
  var userUppercase = confirm("Would you like to include uppercase characters in your password?");
  console.log("User Choice: ", userUppercase)
  console.log("User type: ", typeof userUppercase)
  if(userUppercase == true) {
    // we want to add a character from this dataset to our temp dataset
    selectedChar = selectedChar.concat (upperChar)
  }

  var userLowercase = confirm("Would you like to include lowercase characters in your password?");
  console.log("User Choice: ", userLowercase)
  console.log("User type: ", typeof userLowercase)
  if(userLowercase == true) {
    // we want to add a character from this dataset to our temp dataset
    selectedChar = selectedChar.concat (lowerChar)
  }

  var userNumber = confirm("Would you like to include numbers in your password?");
  console.log("User Choice: ", userNumber)
  console.log("User type: ", typeof userNumber)
  if(userNumber == true) {
    // we want to add a character from this dataset to our temp dataset
    selectedChar = selectedChar.concat (numberChar)
  }

  var userSpecialChar = confirm("Would you like to include special characters in your password?");
  console.log("User Choice: ", userSpecialChar)
  console.log("User type: ", typeof userSpecialChar)
  if(userSpecialChar == true) {
    // we want to add a character from this dataset to our temp dataset
    selectedChar = selectedChar.concat (specialChar)
  }

  console.log("Temp Pass: ", selectedChar) 

  for (var i=0; i<userLength; i++) {
    var charIndex= Math.floor(Math.random()*selectedChar.length)
    var randomChar= selectedChar[charIndex]
    tempPassword = tempPassword + randomChar
  }
  return tempPassword;
}