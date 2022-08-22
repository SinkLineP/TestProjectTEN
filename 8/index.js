const fs = require("fs");
fs.readFile('./Data/08.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }


  let n = 50, m = 6;
  let mas = [];
  for (let i = 0; i < m; i++){
    mas[i] = [];
    for (let j = 0; j < n; j++){
      mas[i][j] = ".";
    }
  }

  const newData = data.split("\n");


  function arrayRotate(arr, count) {
    count -= arr.length * Math.floor(count / arr.length);
    arr.push.apply(arr, arr.splice(0, count));
    return arr;
  }

  const columns = [];
  newData.map((item) => {
    const arraySplit = item.split(" ");
    const countPixels = Number(arraySplit[4]);



    if (arraySplit[0] === "rect") {
      const sizeCube = arraySplit[1].split("x");
      const X = Number(sizeCube[0]);
      const Y = Number(sizeCube[1]);
      for (let i = 0; i < X; i++) {
        for (let j = 0; j < Y; j++) {
          mas[j][i] = "#";
        }
      }
    }

    if (arraySplit[0] === "rotate") {
      if (arraySplit[1] === "row") {
        const coordinate = Number(arraySplit[2].split("=")[1]);
        arrayRotate(mas[coordinate], -countPixels);
      }

      if (arraySplit[1] === "column") {
        const coordinate = Number(arraySplit[2].split("=")[1]); //x

        for (let j = 0; j < mas.length; j++) {
          if (mas[j][coordinate] === "#") {
            columns.push(mas[j][coordinate]);
          }
          if (mas[j][coordinate] === ".") {
            columns.push(mas[j][coordinate]);
          }
        }

        arrayRotate(columns, -countPixels);

        for (let j = 0; j < mas.length; j++) {
          mas[j][coordinate] = columns[j];
        }

        columns.length = 0;
      }
    }
  })


  for (let i = 0; i < mas.length; i++) {
    const result = mas[i].reduce(function(acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

    console.log(result)
  }

  console.log(mas)

});

