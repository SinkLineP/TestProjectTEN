const fs = require("fs");

fs.readFile('./Data/04.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  function deleteNumbersOfString(string) {
    return string.replace(/[^a-z]/g, '');
  }

  function repeatItemsOnArray(array) {
    return array.reduce(function (acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  }

  function sortByBigValue(arr) {
    arr.sort((a, b) => a.value > b.value ? -1 : 1);
  }

  function showAllValueObj(obj, array) {
    for (let key in obj) {
      array.push(
        {
          key: key,
          value: obj[key]
        }
      )
    }
    sortByBigValue(array);
  }

  function sumAllItemsArray(array) {
    const sumOfNumbers = array.reduce((acc, number) => acc + number, 0);
    console.log(sumOfNumbers);
  }

  const newData = data.split("\n");
  let arrayIDRoom = [];

  newData.map((Item) => {
    let arrayObjects = [];

    const array = Item.split("-");
    const lastItem = deleteNumbersOfString(array.pop());
    const repeatLitters = repeatItemsOnArray(array.join("").split("").sort())
    showAllValueObj(repeatLitters, arrayObjects);

    const newArrayObjects = arrayObjects.slice(0, 5);
    const arrayLastItem = lastItem.split("");
    const timedVariableObjectKey = [];
    const timedVariableLastItem = [];


    for (let i = 0; i < newArrayObjects.length; i++) {
      const itemObject = newArrayObjects[i];
      timedVariableObjectKey.push(itemObject.key);
    }

    for (let j = 0; j < arrayLastItem.length; j++) {
      const itemLastItem = arrayLastItem[j];
      timedVariableLastItem.push(itemLastItem);
    }

    const joinTimedVariableObjectKey = timedVariableObjectKey.join("");
    const joinTimedVariableLastItem = timedVariableLastItem.join("");

    if (joinTimedVariableObjectKey === joinTimedVariableLastItem) {
      const num = parseInt(Item.replace(/\D+/g,""));
      arrayIDRoom.push(num);
    }
  })

  console.log(arrayIDRoom);
  sumAllItemsArray(arrayIDRoom);
});