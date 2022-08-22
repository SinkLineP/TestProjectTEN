const eke = "EKE[KEK]AAA";

//=======
function ravenstvo(array) {
  if (array[0] === array[2]) {
    return array;
  }
}
//=======

//=======
let arrayFlat;
function splitBracket(string) {
  const splitOne = string.split("[");
  const splitTwo = splitOne[1].split("]");
  const array = [splitOne[0], splitTwo];
  arrayFlat = array.flat();
}
splitBracket(eke);
//=======

//=======
arrayFlat.map((item) => {
  ravenstvo(item);
})
//=======





