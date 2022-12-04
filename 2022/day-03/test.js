// settings for daily tests
const topic = '# Day 3: Rucksack Reorganization'
const partOneRaw = 157
const partOneFile = 7903
const partTwoRaw = 70
const partTwoFile = 2548

// tests
const assert = require('assert')
const { part1, part2 } = require('./main')

// import raw data from https://adventofcode.com/2022/day/3/input
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

describe(topic, function () {
  describe('@ part1', function () {
    it(`should return ${partOneRaw} with raw input`, function () {
      assert.strictEqual(part1(rawInput), partOneRaw)
    })

    it(`should return ${partOneFile} with file input`, function () {
      assert.strictEqual(part1(fileInput), partOneFile)
    })
  })

  describe('@ part2', function () {
    it(`should return ${partTwoRaw} with raw input`, function () {
      assert.strictEqual(part2(rawInput), partTwoRaw)
    })

    it(`should return ${partTwoFile} with file input`, function () {
      assert.strictEqual(part2(fileInput), partTwoFile)
    })
  })
})

