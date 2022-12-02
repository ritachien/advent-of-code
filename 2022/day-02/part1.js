/* score rules
  Rock (A, X) => 1 ponit
  Paper (B, Y) => 2 point
  Scissors (C, Z) => 3 point

  lost => 0 point
  draw => 3 point
  win => 6 point
*/

const part1 = (input) => {
  const scoreTable = {
    'A Y': 8,
    'B Z': 9,
    'C X': 7,
    'A Z': 3,
    'B X': 1,
    'C Y': 2,
    'A X': 4,
    'B Y': 5,
    'C Z': 6
  }

  let score = 0
  input.split('\n').map(round => {
    score += scoreTable[round]
  })

  return score
}

module.exports = part1
