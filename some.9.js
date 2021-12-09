let arr = [1,2,3,4,5,6,6,7];
arr.some(elem => elem>7);
// console.log(arr);
let newArr = arr.some(elem => elem > 7);
console.log(newArr);
console.log(arr.some(elem => elem < 7));
