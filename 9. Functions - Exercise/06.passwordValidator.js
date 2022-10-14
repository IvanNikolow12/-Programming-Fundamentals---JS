function passwordValidator(pass) {
  // check for Length
  // check for only letters and diggits
  // check for at least 2 diggits
  // Print if is valid conditions

  function checkForLength() {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      return `Password must be between 6 and 10 characters`;
    }
  }

  function checkForLettersAndDiggits(pass) {
    let isValidPass = true;
    for (let i = 0; i < pass.length; i++) {
      let isValid = true;
      let code = pass[i].charCodeAt(0);
      if (
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122) ||
        (code >= 48 && code <= 57)
      ) {
        isValid = true;
      } else {
        isValid = false;
        isValidPass = false;
        break;
      }
    }
    return isValidPass
      ? true
      : `Password must consist only of letters and digits`;
  }

  function checkFor2Diggits(pass) {
    //code >= 48 && code <= 57
    let diggitCount = 0;
    for (let i = 0; i < pass.length; i++) {
      let code = pass[i].charCodeAt(0);
      if (code >= 48 && code <= 57) {
        diggitCount++;
      }
    }
    return diggitCount >= 2 ? true : `Password must have at least 2 digits`;
  }
  
  let result = [];
  if (checkForLength(pass) !== true) {
    result.push(checkForLength(pass));
  }
   if (checkForLettersAndDiggits(pass) !== true) {
    result.push(checkForLettersAndDiggits(pass));
  }
   if (checkFor2Diggits(pass) !== true) {
    result.push(checkFor2Diggits(pass));
  } 
  if (checkForLength(pass) === true && checkForLettersAndDiggits(pass) === true && checkFor2Diggits(pass) === true) {
    result.push(`Password is valid`);
  }
  return result.join("\n");
}
//console.log(passwordValidator("login"));
//console.log(passwordValidator('MyPass123'));
console.log(passwordValidator('Pa$s$s'));
