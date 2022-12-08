'use strick'

function analyzeLines(lines) {
  const root = {
    name: '/',
    parent: null,
    dirs: [],
    files: [],
    size: 0
  }

  let currentDir = ''

  lines.map(line => {
    const args = line.split(' ')
    // list contents in directory
    if (args[1] === 'ls') return

    // change directory
    if (args[1] === 'cd') {
      if (args[2] === '/') {
        return currentDir = root
      } else if (args[2] === '..') {
        return currentDir = currentDir.parent
      } else {
        return currentDir = currentDir.dirs.find(dir => dir.name === args[2])
      }
    }

    // list of dirs
    if (args[0] === 'dir') {
      const newDir = {
        name: args[1],
        parent: currentDir,
        dirs: [],
        files: [],
        size: 0
      }
      return currentDir.dirs.push(newDir)
    }

    // list of files
    if (!isNaN(Number(args[0]))) {
      const newFile = {
        name: args[1],
        parent: currentDir,
        size: Number(args[0])
      }
      currentDir.files.push(newFile)
      return updateDirSize(currentDir, newFile.size)
    }
  })
  return root
}

function updateDirSize(dir, size) {
  if (dir.parent !== null) {
    updateDirSize(dir.parent, size)
  }
  return dir.size += size
}

function getTotalSize(outerDir, maxSize) {
  let totalSize = outerDir.size <= maxSize ? outerDir.size : 0
  outerDir.dirs.map(dir => {
    totalSize += getTotalSize(dir, maxSize)
  })
  return totalSize
}

function part1(input) {
  const root = analyzeLines(input.split(/\r?\n/))
  return getTotalSize(root, 100000)
}

function part2(input) {

}



module.exports = {
  part1,
  part2
}
