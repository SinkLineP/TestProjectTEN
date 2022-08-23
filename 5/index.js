const fs = require("fs");

fs.readFile('./Data/05.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const newData = data.split("\n");
  const firstString = newData[0].split(" ");


  function compare (a, b) {
    let y = a.split("").sort().join(""), z = b.split("").sort().join("");
    console.log(z === y
      ? a + " and " + b + " are anagrams!"
      : a + " and " + b + " are not anagrams."
    );
  }

  compare("hello", "holle");

});