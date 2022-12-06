function parsedRawData(raw) {
  const [stackPart, instructionPart] = raw.split(/\r?\n\r?\n/)
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

  const moves = []
  instructionPart
    .split(/\r?\n/)
    .map(row => {
      const movedNum = Number(row.split(' ')[1])
      const moveFromIndex = Number(row.split(' ')[3])
      const moveToIndex = Number(row.split(' ')[5])
      moves.push([movedNum, moveFromIndex, moveToIndex])
    })

  return [stacks, stackNames, moves]
}

function part1(input) {
  [stacks, stackNames, moves] = parsedRawData(input)

  moves.map(move => {
    const [movedNum, moveFromIndex, moveToIndex] = move
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
  [stacks, stackNames, moves] = parsedRawData(input)

  moves.map(move => {
    const [movedNum, moveFromIndex, moveToIndex] = move
    const cratesMoved = stacks[moveFromIndex].splice(-movedNum)
    stacks[moveToIndex].push(...cratesMoved)
  })

  let tops = ''
  for (let i = 1; i <= stackNames.length; i++) {
    tops += stacks[i].pop()
  }
  return tops
}

module.exports = {
  part1,
  part2
}
