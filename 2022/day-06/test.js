/* 
 settings for daily tests
 fileInput = data from https://adventofcode.com/2022/day/6/input
*/
const topic = '# Day 6: Tuning Trouble'
const partOneRaw = 5
const partOneFile = 1578
const partTwoRaw = ''
const partTwoFile = ''
const rawInput = 'bvwbjplbgvbhsrlpgdmjqwftvncz'


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

  // describe('@ part2', function () {
  //   it(`should return ${partTwoRaw} with raw input`, function () {
  //     assert.strictEqual(part2(rawInput), partTwoRaw)
  //   })

  //   it(`should return ${partTwoFile} with file input`, function () {
  //     assert.strictEqual(part2(fileInput), partTwoFile)
  //   })
  // })
})

