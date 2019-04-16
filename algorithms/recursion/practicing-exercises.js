const funcs = {
  //2. Write a JavaScript program to compute the exponent of a number.
  calcExponent(base, exponent) {
    if (exponent == 0) return 1

    return base * this.calcExponent(base, exponent - 1)
  },
  //1. Write a JavaScript program to get the integers in range (x, y)
  getIntegerInRange(begin, end) {
    if (end - begin < 2) return []
    if (end - begin === 2) return [begin + 1]
    
    return [begin + 1].concat(this.getIntegerInRange(begin + 1, end))
  }
  //3. 
}

export default funcs
