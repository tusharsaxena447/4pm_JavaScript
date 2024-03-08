const prompt = require("prompt-sync")()
const arr = [60,3,30,45,8,99,47]

// let value = parseInt(prompt("Enter value  "))
let index = parseInt(prompt("Enter index  "))
let arr1 = []
let arr2 = []
// for(let i =0; i<=index; i++){
//      arr1.push(arr[i])
// }
// for(let i = index; i<arr.length; i++){
//     arr2.push(arr[i])
// }
// arr1[index] = value
// let final = [...arr1,...arr2]
// console.log(final)

for(let i=0; i<index; i++){
    arr1.push(arr[i])
}

for(let i=index+1;i<arr.length;i++){
    arr2.push(arr[i])
}

let final = [...arr1,...arr2]
console.log(final)