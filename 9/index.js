const fs = require("fs");

fs.readFile('./Data/09.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const newData = data;
});
