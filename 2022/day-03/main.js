// create priority map of characters
const priorityMap = {}
for (const x of Array(26).keys()) {
  // a ~ z represent 1~ 26
  priorityMap[String.fromCharCode('a'.charCodeAt(0) + x)] = x + 1
  // A ~ Z represent 27~ 52
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
  const elves = input.split(/\r?\n/)

  let prioritySum = 0
  for (let i = 0; i < elves.length; i += 3) {
    const first = elves[i]
    const second = elves[i + 1]
    const third = elves[i + 2]
    const checked = {}

    for (const item of first) {
      if (checked[item]) continue

      checked[item] = true
      if (second.includes(item) && third.includes(item)) {
        prioritySum += priorityMap[item]
      }
    }
  }
  return prioritySum
}

module.exports = {
  part1,
  part2
}
