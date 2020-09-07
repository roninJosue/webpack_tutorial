function palindrome(str) {
    const onlyLetters = str.replace(/([^A-Za-z1-9])+/g, '').toLowerCase();
    console.log(onlyLetters);
    return onlyLetters === onlyLetters.split('').reverse().join('') ;
  }
  
  
  
  palindrome("1 eye for of 1 eye.");