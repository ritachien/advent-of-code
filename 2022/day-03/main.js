function part1(input) {
  // separate every line from input
  const rucksack = input.split(/\r?\n/)
  const numArray = rucksack.map(rucksack => {
    const middleIndex = rucksack.length / 2
    const front = rucksack.slice(0, middleIndex)
    const back = rucksack.slice(middleIndex)

    let num = 0
    for (let char of front) {
      if (back.includes(char)) {
        // convert from Unicode code points
        const charCode = char.charCodeAt()
        if (charCode >= 65 && charCode <= 90) return num = charCode - 38
        if (charCode >= 97 && charCode <= 122) return num = charCode - 96
      }
    }
    return num
  })
  // sum all numbers in array
  return numArray.reduce((acc, cur) => acc + cur, 0)
}

function part2(input) {

}

module.exports = {
  part1,
  part2
}
