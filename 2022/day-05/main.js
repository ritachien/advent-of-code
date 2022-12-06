function part1(input) {
  const [stackPart, instructionPart] = input.split(/\r?\n\r?\n/)
  const stackMatrix = stackPart
    .split(/\r?\n/)
    .map(row => {
      return [...row].filter((_, i) => i % 4 === 1)
    })

  const stacks = {}
  const stackNames = stackMatrix.pop()
  for (const row of stackMatrix) {
    for (let i = 0; i < row.length; i++) {
      // create each stack into stacks object
      if (!stacks[stackNames[i]]) {
        stacks[stackNames[i]] = []
      }
      // put crates into stacks{} from the begining
      if (row[i] !== ' ') {
        stacks[stackNames[i]].unshift(row[i])
      }
    }
  }

  const moves = instructionPart.split(/\r?\n/)
  moves.map(row => {
    const movedNum = Number(row.split(' ')[1])
    const moveFromIndex = Number(row.split(' ')[3])
    const moveToIndex = Number(row.split(' ')[5])

    const cratesMoved = stacks[moveFromIndex].splice(-movedNum)
    stacks[moveToIndex].push(...cratesMoved.reverse())
  })

  let tops = ''
  for (let i = 1; i <= stackNames.length; i++) {
    tops += stacks[i].pop()
  }
  return tops
}

function part2(input) {
  return
}

module.exports = {
  part1,
  part2
}
