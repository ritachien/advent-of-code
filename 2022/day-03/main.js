// create priority map of characters
const priorityMap = {}
for (const x of Array(26).keys()) {
  // a ~ z represent 1~ 26
  priorityMap[String.fromCharCode('a'.charCodeAt(0) + x)] = x + 1
  // A ~ Z represent 1~ 26
  priorityMap[String.fromCharCode('A'.charCodeAt(0) + x)] = x + 27
}

function part1(input) {
  const prioritySum = input.split(/\r?\n/).reduce((sum, rucksack) => {
    const middleIndex = rucksack.length / 2
    const front = rucksack.substring(0, middleIndex)
    const back = rucksack.substring(middleIndex)

    for (const char of front) {
      if (back.includes(char)) return sum += priorityMap[char]
    }
    return sum
  }, 0)
  return prioritySum
}

function part2(input) {

}

module.exports = {
  part1,
  part2
}
