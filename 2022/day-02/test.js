const assert = require('assert')
const part1 = require('./part1')
const part2 = require('./part2')

// import raw data from https://adventofcode.com/2022/day/2/input
const { readFileSync } = require('node:fs')
const path = require('node:path')
const file = path.join(__dirname + '/input.txt')
const fileInput = readFileSync(file, 'utf8')
const rawInput =
  `A Y
B X
C Z`

describe('# Day2 - Rock Paper Scissors', function () {
  describe('@ part1', function () {
    it('should return 15 with raw input', function () {
      assert.strictEqual(part1(rawInput), 15)
    })

    it('should return 10941 with file input', function () {
      assert.strictEqual(part1(fileInput), 10941)
    })
  })

  describe('@ part2', function () {
    it('should return 12 with raw input', function () {
      assert.strictEqual(part2(rawInput), 12)
    })

    it('should return 13071 with file input', function () {
      assert.strictEqual(part2(fileInput), 13071)
    })
  })
})

