const fs = require('fs');

fs.readFile('./Data/01.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let startNumber = 0;
  const array = data.split("\n");
  array.map((item) => {
    const operator =  item[0];
    if (operator === "+") {
      startNumber += parseInt(item.split(operator)[1])
    } else if (operator === "-") {
      startNumber -= parseInt(item.split(operator)[1])
    }
    console.log(startNumber);
  })
});