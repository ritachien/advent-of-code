function markerFinder(input, numOfChar) {
  let marker = 0
  let visited = ''

  for (let i = 0; i < input.length - numOfChar; i++) {
    // reset visited to ''
    visited = ''
    // check duplicated char by char
    for (let j = i; j <= input.length; j++) {
      if (visited.includes(input[j])) {
        break
      } else {
        visited += input[j]
      }

      if (visited.length === numOfChar) return marker = j + 1
    }
  }
  return marker
}

function part1(input) {
  const charLength = 4
  return markerFinder(input, charLength)
}

function part2(input) {
  const charLength = 14
  return markerFinder(input, charLength)
}

module.exports = {
  part1,
  part2
}
