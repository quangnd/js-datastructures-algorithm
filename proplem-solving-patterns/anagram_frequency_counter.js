/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
 * formed from iceman.
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
function checkAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(checkAnagram('', '')) // true
console.log(checkAnagram('aaz', 'zza')) // false
console.log(checkAnagram('anagram', 'nagaram')) // true
console.log(checkAnagram("rat", "car")) // false) // false
console.log(checkAnagram('awesome', 'awesom')) // false
console.log(checkAnagram('qwerty', 'qeywrt')) // true
console.log(checkAnagram('texttwisttime', 'timetwisttext')) // true

