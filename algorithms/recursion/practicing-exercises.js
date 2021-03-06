const funcs = {
  //1. Write a JavaScript program to get the integers in range (x, y)
  getIntegerInRange(begin, end) {
    if (end - begin < 2) return []
    if (end - begin === 2) return [begin + 1]

    return [begin + 1].concat(this.getIntegerInRange(begin + 1, end))
  },

  //2. Write a JavaScript program to compute the exponent of a number.
  calcExponent(base, exponent) {
    return exponent === 0 ? 1 : base * this.calcExponent(base, exponent - 1)
  },

  //3. Find the greatest common divisor of two positive numbers (USCLN)
  gcd(a, b) {
    return b === 0 ? a : this.gcd(b, a % b)
  },

  //4. Write a recursive function called reverse which accepts a string
  //   and returns a new string in reverse
  reverse(str) {
    return str.length === 0 ? '' : reverse(str.slice(1)) + str[0];
  },

  //5. Write a recursive function called isPalindrome which returns true if the
  //   string passed to it is a palindrome. Otherwise it returns false
  isPalindrome(str) {
    const reverse = (s) => s.length === 0 ? '' : reverse(s.slice(1)) + s[0];

    let reversed = reverse(str);
    return reversed === str;
  }
}

export default funcs
