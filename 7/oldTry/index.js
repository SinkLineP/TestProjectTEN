const fs = require("fs");

fs.readFile('./Data/07.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const newData = data.split("\n");

  let newArrayNoBrackets;
  // const newArrayTwoSymbols = [];


  function splitBrackets(array) {
    newArrayNoBrackets = [];
    const noOneBracket = array.split("[");
    const noTwoBracket = noOneBracket[1].split("]");
    newArrayNoBrackets.push(noOneBracket[0]);
    noTwoBracket.map((items) => {
      newArrayNoBrackets.push(items)
    })
  }

  splitBrackets(newData[0]);


  console.log(newArrayNoBrackets);







  //
  // function splitTwoSymbols(string) {
  //   newArrayTwoSymbols.push(string.match(/.{1,2}/g));
  // }
  //
  // newArrayNoBrackets.map((e) => {
  //   splitTwoSymbols(e);
  // })
  //
  // let oneArray = newArrayTwoSymbols[0];
  // let twoArray = newArrayTwoSymbols[1];
  // let threeArray = newArrayTwoSymbols[2];
  //
  // console.log(oneArray);
  // console.log("===================")
  // console.log(twoArray);
  // console.log("===================")
  // console.log(threeArray);
  //
  // if (oneArray === twoArray) {
  //   console.log("true")
  // }
  //
  //
  // // console.log(newData[0]);
  // // console.log("=============================")
  // // console.log(newArrayNoBrackets);


});
