const fs = require('fs')
const path = require('path')

let data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')

const array = data.split('\n');

let treeCount = 0;
let position = 0;
let moveRight = 3;
let tree = '#';

array.forEach((item, index) => {
  if (item.length === 0){
    return;
  }

  let newPosition = 0;
  if (item[position] == tree) {
    treeCount++;
  }

  newPosition = position + moveRight;

  if (newPosition > (item.length - 1)) {
    position = newPosition - item.length;
    console.log(`reset: ${position}`)
  } else {
    position = newPosition;
    console.log(`position: ${position}`)
  }
})

console.log(treeCount)
