const arr = ["Apple","Banana","litchi","grappes"]

// const para = document.createElement("p")
// para.innerHTML = "this is a paragraph"
// document.body.appendChild(para)

// const ul = document.createElement("ul")
// arr.map((e)=>{
//     let li = document.createElement("li")
//     li.innerHTML = e
//     ul.appendChild(li)
// })
// document.body.appendChild(ul)
let str = "The Quick brown Fox Jumps Over The Lazy Dog brown BROWN";
// let new_arr = arr.slice(0)
// console.log(new_arr)

// console.log(str.charAt(5)) 
// let match = str.match("own");
// console.log(match)

// arr.unshift("mango")
let str1 = "racecar"
console.log(str1.split("").reverse().join("")===str1)

arr.splice(0,0,"anaar")
console.log(arr)

let a = 5
let b = "5"
let c = a===b

// console.log(a==b)
// console.log(typeof(a))
// console.log(typeof(typeof(a))) 

const myArray = [10, 20, 30, 40, 50];
for(let i=0; i< myArray.length; i++){
    console.log(myArray[i])
}

const number = (num)=>{
        if (num === 0) return "Zero"
        if (num > 0) return "Positive"
        if (num < 0) return "Negative"
}

console.log(number(5))

function outer() {
    let x = 20;
    function inner(y) {
    return x + y;
    }
    return inner;
   }
   const closureFunction = outer();
   console.log(closureFunction(5));