function palindrome(str) {
    let newStr = str.toLowerCase();
    newStr = newStr.replaceAll(' ', '');
     newStr = newStr.replaceAll('.', '');
    newStr = newStr.replaceAll(',', '');
   newStr = newStr.replaceAll('_', '');
   newStr = newStr.replaceAll('-', '');
    newStr = newStr.replaceAll('(', '');
   newStr = newStr.replaceAll(')', '');
    let n = str.length;
    function reverse(str) {
      let newStr = str.toLowerCase();
      newStr = newStr.replaceAll(' ', '');
     newStr = newStr.replaceAll('.', '');
    newStr = newStr.replaceAll(',', '');
   newStr = newStr.replaceAll('_', '');
   newStr = newStr.replaceAll('-', '');
      newStr = newStr.replaceAll('(', '');
   newStr = newStr.replaceAll(')', '');
    let myArray = [];
    let n = str.length;
    for (let i = n-1; i >= 0; i--) {
      myArray.push(newStr[i]);
    }
    return myArray.join('');
  }
    for (let i = 0; i < n; i++) {
    if (newStr[i] !== reverse(str)[i]) {
      return false;
    }
      if (newStr[i] === reverse(str)[i]) {
        if (i < n-1) {
          continue;
        }
        if (i === n-1) {
          return true;
        }
      }
    }
  }