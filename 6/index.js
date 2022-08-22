const fs = require("fs");

fs.readFile('./Data/06.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let oneLine = [];
  let twoLine = [];
  let threeLine = [];
  let foLine = [];
  let fiveLine = [];
  let sixLine = [];
  let sevenLine = [];
  let eightLine = [];

  const newData = {
    data: data.split("\n"),
  };

  newData.data.map((line) => {
    oneLine.push(line.charAt(0));
    twoLine.push(line.charAt(1));
    threeLine.push(line.charAt(2));
    foLine.push(line.charAt(3));
    fiveLine.push(line.charAt(4));
    sixLine.push(line.charAt(5));
    sevenLine.push(line.charAt(6));
    eightLine.push(line.charAt(7));
  })


  const result = eightLine.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  console.log(result)


});
