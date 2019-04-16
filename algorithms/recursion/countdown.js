const countDown = (num) => {
  if (num < 0) {
    console.log('All done')
    return
  }
  num--
  countDown(num)
}

export default countDown
