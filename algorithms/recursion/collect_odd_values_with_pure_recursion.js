const collectOddValuesPure = (arr) => {
  let newArr = []

  if (arr.length === 0) return newArr

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  return newArr.concat(collectOddValuesPure(arr.slice(1)));
}

export default collectOddValuesPure
