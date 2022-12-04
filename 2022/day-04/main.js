function part1(input) {
  return input.split(/\r?\n/).reduce((count, pair) => {
    const [first, second] = pair.split(',')
    const firstStart = Number(first.split('-')[0])
    const firstEnd = Number(first.split('-')[1])
    const secondStart = Number(second.split('-')[0])
    const secondEnd = Number(second.split('-')[1])

    const fullyContains
      = (firstStart <= secondStart && firstEnd >= secondEnd)
      || (secondStart <= firstStart && secondEnd >= firstEnd)

    if (fullyContains) { count++ }
    return count
  }, 0)
}

function part2(input) {

  return count
}

module.exports = {
  part1,
  part2
}
