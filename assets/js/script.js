//start of the generatePassword function

var generatePassword = function() {

  var characterCount = window.prompt("Enter the count of characters betweek 8 and 128.");
  console.log(characterCount);

  if (characterCount >= 8 && characterCount <= 128) {

  var capitalLetterCheck = window.confirm("Would you like to include Capital letters?");
  console.log(capitalLetterCheck);

  var lowerCaseLetterCheck = window.confirm("Would you like to include Lower Case letters");
  console.log(lowerCaseLetterCheck);

  var specialCharacterCheck = window.confirm("Would you like to include Special characters?");
  console.log(specialCharacterCheck);

  var numberCheck = window.confirm("Would you like to include Numbers?");
  console.log(numberCheck);
    
  }
  else {
    window.alert("You did not select the correct number of characters. Try again!")
    generatePassword();
    //this needs to be further tuned also
  }


//constants

const capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","X","Y","Z"];
const lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","x","y","z"];
const specialCharacters = ["&","%","?","<",">","@","$","*","#","!"];
const numbers = ["1","2","3","4","5","6","7","8","9","0"];

//overall combinedArray definition

const combinedArray = capitalLetters.concat(lowercaseLetters).concat(specialCharacters).concat(numbers);
//test
console.log(combinedArray);

var password = "";


//Need to tune this section more to figure out how to do all the combinations of user selections --> will be handled in future releases

if(capitalLetterCheck && lowerCaseLetterCheck && specialCharacterCheck && numberCheck ) {
  const combinedAllArrays = capitalLetters.concat(lowercaseLetters).concat(specialCharacters).concat(numbers);
  console.log(combinedAllArrays);

  for(var i = 0; i < characterCount; i++) {
    password = password + combinedAllArrays[Math.floor(Math.random() * Math.floor(combinedAllArrays.length - 1))];
    console.log(password);
  }
}

if(!capitalLetterCheck && lowerCaseLetterCheck && specialCharacterCheck && numberCheck ) {
  const upperCaseLettersNotIncluded = lowercaseLetters.concat(specialCharacters).concat(numbers);
  console.log(upperCaseLettersNotIncluded);

  for(var i = 0; i < characterCount; i++) {
    password = password + upperCaseLettersNotIncluded[Math.floor(Math.random() * Math.floor(upperCaseLettersNotIncluded.length - 1))];
    console.log(password);
  }
}

if(capitalLetterCheck && !lowerCaseLetterCheck && specialCharacterCheck && numberCheck ) {
  const lowerCaseLettersNotIncluded = capitalLetters.concat(specialCharacters).concat(numbers);
  console.log(lowerCaseLettersNotIncluded);

  for(var i = 0; i < characterCount; i++) {
    password = password + lowerCaseLettersNotIncluded[Math.floor(Math.random() * Math.floor(lowerCaseLettersNotIncluded.length - 1))];
    console.log(password);
  }
}

if(capitalLetterCheck && lowerCaseLetterCheck && !specialCharacterCheck && numberCheck ) {
  const specialCharacterNotIncluded = capitalLetters.concat(lowercaseLetters).concat(numbers);
  console.log(specialCharacterNotIncluded);

  for(var i = 0; i < characterCount; i++) {
    password = password + specialCharacterNotIncluded[Math.floor(Math.random() * Math.floor(specialCharacterNotIncluded.length - 1))];
    console.log(password);
  }
}

if(capitalLetterCheck && lowerCaseLetterCheck && specialCharacterCheck && !numberCheck ) {
  const numbersNotIncluded = capitalLetters.concat(lowercaseLetters).concat(specialCharacters);
  console.log(numbersNotIncluded);

  for(var i = 0; i < characterCount; i++) {
    password = password + numbersNotIncluded[Math.floor(Math.random() * Math.floor(numbersNotIncluded.length - 1))];
    console.log(password);
  }
}


  document.getElementById("password").value = password;
  var generateBtn = document.querySelector("#generate");
  // generateBtn.addEventListener("click", writePassword);

}




    
