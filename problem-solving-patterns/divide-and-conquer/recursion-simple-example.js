const isEven = (num) => {
  if (num == 0) return true
  if (num == 1) return false
  return num > 0 ? isEven(num - 2) : isEven(num + 2)
}

export default isEven
