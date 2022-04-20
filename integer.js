// let arr =[
//     [1, 1, 1, 1], 
//      [5, 2, 2, 100],
//      [9, 4, 2, 1]

// ]


// for(let i=1; i<arr[0].length; i++) {
//   arr[0][i] += arr[0][i-1]
// }
// for(let i=1; i<arr.length; i++) {
//     arr[i][0] += arr[i-1][0]
//   }
//   for(let i=1; i<arr.length; i++) {
//       for(let j=1; j<arr[i].length; j++) {
//         let top = arr[i-1][j];
//         let left = arr[i][j-1]
//         arr [i][j] += top>left? left: top
//       }
//   }
// console.table(arr);
// console.log(arr[arr.length-1][arr[0].length-1]);


// let i = 0;
// const f = () => {
//   i++;
//   f();
// };
// try {
//   f();
// } catch (e) {
//   i++;
//   console.log(i);
// }
console.log(this);
arr ="salom"
console.log(arr.split(""));