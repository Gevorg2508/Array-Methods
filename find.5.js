let arr = [1,2,3,4,4,5,56,6];
let newArr = arr.find(elem => typeof(elem) === "string");
let anotherArr = arr.find(elem => typeof(elem) === 'number');
console.log(anotherArr);
console.log(newArr);