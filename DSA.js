// const prompt = require("prompt-sync")()
// const arr = [60,3,30,45,8,99,47]

// // let value = parseInt(prompt("Enter value  "))
// let index = parseInt(prompt("Enter index  "))
// let arr1 = []
// let arr2 = []
// for(let i =0; i<=index; i++){
//      arr1.push(arr[i])
// }
// for(let i = index; i<arr.length; i++){
//     arr2.push(arr[i])
// }
// arr1[index] = value
// let final = [...arr1,...arr2]
// console.log(final)

// for(let i=0; i<index; i++){
//     arr1.push(arr[i])
// }

// for(let i=index+1;i<arr.length;i++){
//     arr2.push(arr[i])
// }

// let final = [...arr1,...arr2]
// console.log(final)

const linear_search=(array,t)=>{
    for (let index = 0; index < array.length; index++) {
        if(array[index]===t) return index
    }
     return -1    
    
}

// console.log(linear_search([-5,2,10,4,6],6)) 

const binary_search=(arr,t)=>{
    let left = 0
    let right = arr.length-1
    arr.sort()
    // console.log(half)
    while (left <= right) {
        let half = Math.floor((left + right)/2)
        if(arr[half] === t) return half
        if(t < arr[half] ) right = half-1
        else left = half + 1 
    }
    return -1
}
// console.log(binary_search([-5,2,10,4,6],6))

function bubblesort(arr){
    
    let swap = true
    while(swap){
        swap = false
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swap = true
        }
    }
}
    return arr
}
console.log(bubblesort([-5,4,5,6,1,2]))