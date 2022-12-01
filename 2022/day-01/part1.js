const part1 = (input) => {
  // separate data for each Elves
  const caloriesByElves = input.split('\n\n')

  // transform type to number and sum
  const sumArray = caloriesByElves.map(dataOfEachElf => {
    return dataOfEachElf
      .split('\n')
      .map(str => Number(str))
      .reduce((pre, cur) => pre + cur, 0)
  })

  // Find bigist number
  return Math.max(...sumArray)
}

module.exports = part1
