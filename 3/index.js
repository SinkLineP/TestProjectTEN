// const fs = require("fs");
//
// fs.readFile('./Data/03.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//
//
//
// });

let n = 100, m = 100;
let mas = [];

for (let i = 0; i < m; i++){
  mas[i] = [];
  for (let j = 0; j < n; j++){
    mas[i][j] = ".";
  }
}

let step = "^^<<v<<v><v^^<><>^^<v<v^>>^^^><^>v^>v><><><<vv^^<^>^^<v^>v>v^v>>>^<>v<^<v^><^>>>>><<v>>^>>^>v^>>";
const snake = "■";
const startPos = {
  posX: 49,
  posY: 99
};
let startScore = 0;
const arrSymbols = step.split("");

function setPosOnMap(Y, X) {
  mas[Y][X] = snake;
}

function arrayRotate(arr, count) {
  count -= arr.length * Math.floor(count / arr.length);
  arr.push.apply(arr, arr.splice(0, count));
  return arr;
}

setPosOnMap(startPos.posY, startPos.posX);

arrSymbols.map((item) => {
  if (item === "^") {
    startScore += 1;
    startPos.posY -= 1;
    setPosOnMap(startPos.posY, startPos.posX);
  }
  if (item === ">") {
    startScore += 1;
    startPos.posX += 1;
    setPosOnMap(startPos.posY, startPos.posX);
  }
  if (item === "v") {
    startScore += 1;
    startPos.posY += 1;
    setPosOnMap(startPos.posY, startPos.posX);
  }
  if (item === "<") {
    startPos.posX -= 1
    startScore += 1;
    setPosOnMap(startPos.posY, startPos.posX);
  }
})




console.log(mas);

// console.log(mas);