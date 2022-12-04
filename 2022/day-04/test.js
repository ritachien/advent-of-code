/* 
 settings for daily tests
 import raw data from https://adventofcode.com/2022/day/4/input
*/
const topic = '# Day 4: Camp Cleanup'
const partOneRaw = 2
const partOneFile = 471
const partTwoRaw = 0
const partTwoFile = 0
const rawInput =
  `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

// tests
const assert = require('assert')
const { part1, part2 } = require('./main')


const { readFileSync } = require('node:fs')
const path = require('node:path')
const file = path.join(__dirname + '/input.txt')
const fileInput = readFileSync(file, 'utf8')

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

