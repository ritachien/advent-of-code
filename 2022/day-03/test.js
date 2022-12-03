const assert = require('assert')
const { part1, part2 } = require('./main')

// import raw data from https://adventofcode.com/2022/day/2/input
const { readFileSync } = require('node:fs')
const path = require('node:path')
const file = path.join(__dirname + '/input.txt')
const fileInput = readFileSync(file, 'utf8')
const rawInput =
  `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

describe('# Day 3: Rucksack Reorganization', function () {
  describe('@ part1', function () {
    it('should return 157 with raw input', function () {
      assert.strictEqual(part1(rawInput), 157)
    })

    it('should return 7903 with file input', function () {
      assert.strictEqual(part1(fileInput), 7903)
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

