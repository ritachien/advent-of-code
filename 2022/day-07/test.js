/* 
 settings for daily tests
 fileInput = data from https://adventofcode.com/2022/day/7/input
*/
const topic = '# Day 7: No Space Left On Device'
const partOneRaw = 95437
const partOneFile = 1490523
const partTwoRaw = ''
const partTwoFile = ''
const rawInput =
  `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

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

