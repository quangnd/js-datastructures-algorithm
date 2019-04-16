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
  }
}

export default funcs
