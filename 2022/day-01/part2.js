function part2(input) {
  // separate data for each Elves
  const caloriesByElves = input.split('\n\n')

  // transform type to number and sum
  const sumArray = caloriesByElves.map(dataOfEachElf => {
    return dataOfEachElf
      .split('\n')
      .map(str => Number(str))
      .reduce((pre, cur) => pre + cur, 0)

  }).sort((a, b) => b - a)

  // Find top 3 number
  const [top1, top2, top3] = sumArray
  return top1 + top2 + top3
}

module.exports = part2

console.log()
