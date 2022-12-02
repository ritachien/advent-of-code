/* score rules
  Rock (A) => 1 ponit
  Paper (B) => 2 point
  Scissors (C) => 3 point

  lost(X) => 0 point
  draw(Y) => 3 point
  win(Z) => 6 point
*/

const part2 = (input) => {
  const scoreTable = {
    'A X': 3, // scissors
    'B X': 1, // rock
    'C X': 2, //paper
    'A Y': 4, // rock
    'B Y': 5, //paper
    'C Y': 6, //scissors
    'A Z': 8, // paper
    'B Z': 9, //scissors
    'C Z': 7 //rock
  }

  let score = 0
  input.split('\n').map(round => {
    score += scoreTable[round]
  })

  return score
}

module.exports = part2
