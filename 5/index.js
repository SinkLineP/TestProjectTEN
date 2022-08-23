const fs = require("fs");

fs.readFile('./Data/05.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const newData = data.split("\n");

  const totalAnagrams = [];

  function removeDuplicates(arr) {
    const result = [];
    const duplicatesIndices = [];
    arr.forEach((current, index) => {
      if (duplicatesIndices.includes(index)) return;
      result.push(current);
      for (let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++) {
        const comparison = arr[comparisonIndex];
        const currentKeys = Object.keys(current);
        const comparisonKeys = Object.keys(comparison);
        if (currentKeys.length !== comparisonKeys.length) continue;
        const currentKeysString = currentKeys.sort().join("").toLowerCase();
        const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
        if (currentKeysString !== comparisonKeysString) continue;
        let valuesEqual = true;
        for (let i = 0; i < currentKeys.length; i++) {
          const key = currentKeys[i];
          if ( current[key] !== comparison[key] ) {
            valuesEqual = false;
            break;
          }
        }
        if (valuesEqual) duplicatesIndices.push(comparisonIndex);
      }
    });
    return result;
  }

  function render(title, content) {
    console.log(title + content);
  }

  function sum(x){
    let s = 0;
    for (let i = 0; i < x.length; i++){
      s += x[i]
    }
    render("Result Sum: ", (newData.length - s));
  }

  newData.map((fraza) => {
    const firstString = fraza.split(" ");
    let sortedString = [];

    firstString.map((words) => {
      sortedString.push(words.split("").sort().join(""));
    })

    if (sortedString.length !== removeDuplicates(sortedString).length) {
      totalAnagrams.push(1);
    }

    sortedString.length = 0;
  });



  sum(totalAnagrams);

  // console.log(totalAnagrams);
});