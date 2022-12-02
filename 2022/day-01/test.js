const assert = require('assert')
const part1 = require('./part1')
const part2 = require('./part2')

// import raw data from https://adventofcode.com/2022/day/1/input
const { readFileSync } = require('node:fs')
const path = require('node:path')
const file = path.join(__dirname + '/input.txt')
const fileInput = readFileSync(file, 'utf8')
const rawInput = `
  1000
  2000
  3000

  4000

  5000
  6000

  7000
  8000
  9000

  10000
`

describe('# Day1 - Calorie Counting', function () {
  describe('@ part1', function () {
    it('should return 24000 with raw input', function () {
      assert.strictEqual(part1(rawInput), 24000)
    })

    it('should return 68442 with file input', function () {
      assert.strictEqual(part1(fileInput), 68442)
    })
  })

  describe('@ part2', function () {
    it('should return 45000 with raw input', function () {
      assert.strictEqual(part2(rawInput), 45000)
    })

    it('should return 204837 with file input', function () {
      assert.strictEqual(part2(fileInput), 204837)
    })
  })
})

