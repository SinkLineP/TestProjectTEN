const fs = require("fs");
let rowsArray = [];

fs.readFile('./Data/02.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const content = data.replace('\r','').split('\n');
  for(let i = 0, il = content.length; i < il; ++i){
    rowsArray.push(content[i].split("\t"));
  }

  let difference = [];
  rowsArray.map((rows) => {
    difference.push(maxNumberOfArray(rows) - minNumberOfArray(rows))
  })

  let totalResult = sum(difference);

  console.log(totalResult);
});

function maxNumberOfArray(number) {
  return Math.max(...number);
}

function minNumberOfArray(number) {
  return Math.min(...number);
}

function sum(array) {
  let number = 0;

  for (let i = 0; i < array.length; i++) {
    number += array[i]
  }

  return number;
}