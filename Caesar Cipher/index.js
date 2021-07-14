//to encrypt whole sentence
function sencrypt(string, n) {
    let me = [];
    let h = string.length;
    let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    //to encrypt alphabets
    function encrypt(x, n) {
    let l = alphabets.indexOf(x)+n;
    if (l < 26) {
      return alphabets[l];
    }
      if (l >= 26) {
        return alphabets[l - 26];
      }
  }
    for (let i = 0; i < h; i++) {
      me.push(encrypt(string[i], n));
    }
    return me.join('');
  }
  sencrypt('ABC', 1); //it returns BCD
  
  //to decrypt whole sentence so listen saqib you gotta write code like this if there is anything except alphabets and blank space return nothing which is simple just at the end => else {return ''}
  function sdecrypt(string, n) {
    let me = [];
    let h = string.length;
    let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    //to decrypt alphabets
    function decrypt(x, n) {
    let l = alphabets.indexOf(x)-n;
    if (l < 0) {
      if (x === ' ') {
      return ' ';
    }
      if (x === '.' || x === '?' || x === '!') {
        return '';
      }
      else {return alphabets[l + 26];}
    }
      if (l >= 0) {
        if (x === ' ') {
      return ' ';
    }
        if (x === '.' || x === '?' || x === '!') {
        return '';
      }
        else {return alphabets[l];}
      }
  }
    for (let i = 0; i < h; i++) {
      me.push(decrypt(string[i], n));
    }
    return me.join('');
  }
  sdecrypt('BCD', 1); //it returns ABC