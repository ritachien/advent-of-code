function part1(input) {
  let marker = 0
  let visited = ''

  for (let i = 0; i < input.length - 4; i++) {
    // reset visited to ''
    visited = ''
    // check duplicated char by char
    for (let j = i; j <= input.length; j++) {
      if (visited.includes(input[j])) {
        break
      } else {
        visited += input[j]
      }

      if (visited.length === 4) return marker = j + 1
    }
  }
  return marker
}

function part2(input) {

  return
}

module.exports = {
  part1,
  part2
}
