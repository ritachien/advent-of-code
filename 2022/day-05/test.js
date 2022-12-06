/* 
 settings for daily tests
 fileInput = data from https://adventofcode.com/2022/day/5/input
*/
const topic = '# Day 5: Supply Stacks'
const partOneRaw = 'CMZ'
const partOneFile = 'FJSRQCFTN'
const partTwoRaw = 0
const partTwoFile = 0
const rawInput =
  `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

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

