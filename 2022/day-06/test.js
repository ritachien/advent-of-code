/* 
 settings for daily tests
 fileInput = data from https://adventofcode.com/2022/day/6/input
*/
const topic = '# Day 6: Tuning Trouble'
const partOneRaw = 5
const partOneFile = 1578
const partTwoRaw = 19
const partTwoFile = 2178

const rawInput1_1 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
const rawInput1_2 = 'nppdvjthqldpwncqszvftbrmjlhg'
const rawInput1_3 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
const rawInput1_4 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'

const rawInput2_1 = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
const rawInput2_2 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
const rawInput2_3 = 'nppdvjthqldpwncqszvftbrmjlhg'
const rawInput2_4 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
const rawInput2_5 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'

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
      assert.strictEqual(part1(rawInput1_1), partOneRaw)
    })

    it(`should return 6 with raw input`, function () {
      assert.strictEqual(part1(rawInput1_2), 6)
    })

    it(`should return 10 with raw input`, function () {
      assert.strictEqual(part1(rawInput1_3), 10)
    })

    it(`should return 11 with raw input`, function () {
      assert.strictEqual(part1(rawInput1_4), 11)
    })
    it(`should return ${partOneFile} with file input`, function () {
      assert.strictEqual(part1(fileInput), partOneFile)
    })
  })

  describe('@ part2', function () {
    it(`should return ${partTwoRaw} with raw input`, function () {
      assert.strictEqual(part2(rawInput2_1), partTwoRaw)
    })

    it(`should return 23 with raw input`, function () {
      assert.strictEqual(part2(rawInput2_2), 23)
    })

    it(`should return 23 with raw input`, function () {
      assert.strictEqual(part2(rawInput2_3), 23)
    })

    it(`should return 29 with raw input`, function () {
      assert.strictEqual(part2(rawInput2_4), 29)
    })

    it(`should return 26 with raw input`, function () {
      assert.strictEqual(part2(rawInput2_5), 26)
    })

    it(`should return ${partTwoFile} with file input`, function () {
      assert.strictEqual(part2(fileInput), partTwoFile)
    })
  })
})

