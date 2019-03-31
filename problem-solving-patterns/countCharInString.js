//Write a function which takes in a string and returns counts of each character in the string.
function countChar(str) {
  let obj = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      obj[char] = (obj[char] || 0) + 1
    }
  }
  return obj;
}

console.log(countChar('Hello I am Quang'));
//output: { H: 1, e: 1, l: 2, o: 1, I: 1, a: 2, m: 1, Q: 1, u: 1, n: 1, g: 1 }

//---------------------------------------------------------------
//Even better solution
//Base on function at https://jsperf.com/alphanumeric-charcode-vs-regexp

function countCharBetter(str) {
  let obj = {}
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1
    }
  }
  return obj;
}

function isAlphaNumeric(str) {
  var code;

  for (var i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

console.log(countCharBetter('Hello I am Quang'));
