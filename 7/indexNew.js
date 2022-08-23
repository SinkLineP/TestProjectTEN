const testString = "xdsqxnovprgovwzkus[fmadbfsbqwzzrzrgdg]aeqornszgvbizdm";
const test = "aba[bab]exe";
const regTemplate = (/\[|\]/g)
const cutBrackets = test.split(regTemplate);

// function charCheck(str) {
//   for ( let i = 0; i < str.length; i++) {
//     if (str.split(str[i]).length -1 > 1) {
//       console.log(str[i]);
//       return true;
//     }
//   }
//   return false;
// }
// console.log(charCheck(test));

// const abc = "abcabc";
// const templateABC = (/(.)(?!\1)(.)(?!\1|\3)./)

// console.log(abc.split(templateABC));

console.log(cutBrackets);

if (cutBrackets[0].charAt(0) === cutBrackets[0].charAt(2)) {
  console.log(cutBrackets[0].charAt(0) + " | " + cutBrackets[0].charAt(2))
  console.log("true")
}