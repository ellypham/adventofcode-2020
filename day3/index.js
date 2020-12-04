const fs = require('fs')
const path = require('path')

let data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')

const array = data.split('\n');

function countTrees(moveRight, down) {
  let treeCount = 0;
  let position = 0;
  let tree = '#';

  array.forEach((item, index) => {
    let newPosition = 0;
    //skip empty lines
    if (item.length === 0){
      return;
    }

    // skip any row when slope is two
    if (down === 2 && isOdd(index)) {
      // console.log(index)
      // console.log(item)
      // console.log(positio)
      return;
    }

    if (item[position] == tree) {
      treeCount++;
      // console.log(`position: ${position}`)
      // console.log(`lineValue: ${item}`)
      // console.log(`treecount: ${treeCount}`)
      // console.log(`line: ${index + 1}`)
    }

    newPosition = position + moveRight;

    if (newPosition > (item.length - 1)) {
      position = newPosition - item.length;
    } else {
      position = newPosition;
    }
  })
  // console.log(treeCount)

  return treeCount;
}

const total = countTrees(1, 1)*
  countTrees(3, 1)*
  countTrees(5, 1)*
  countTrees(7, 1)*
  countTrees(1, 2);

console.log(total)



function isOdd(num) { return num % 2; }
