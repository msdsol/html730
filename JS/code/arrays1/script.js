// let arr = ["raj", "john", "vani", "batul"]
// console.log(arr[3])
// let arr2 = [5, 4, 2, 1, 3]
// console.log(arr2[0] * arr2[3]) //5*1=5
// console.log(arr2.length) //5
// console.log(arr[10]) //undefined
// arr[1000] = 25;
// console.log(arr.length)
// arr.length = 2;
// console.log(arr.length, arr) //2 ["raj","john"]
// arr.length = 3
// console.log(arr.length, arr)



let arr = [7, 6, 4, 8, 3];
console.log(arr.length)//5
// arr.length = 3;
arr.push(15,14,13,12,11)
console.log(arr)
arr.pop()
arr.shift()
console.log(arr)
arr.unshift(5,4)
console.log(arr)
arr.splice(2);
arr = [5, 4, 3, 2, 1]
arr.splice(2, 2);
console.log(arr) //[5 4 1]
arr.splice(2, 0, 1, 2, 3);
console.log(arr) // [5 4 1 2 3 1]

arr = ["raj", "jaya", "john"]
arr.splice(1,0,"x","y","z") //["raj", "x","y","z", "jaya", "john"]




















