// const prompt = require("prompt-sync")()

// let age = prompt("Enter age")

//  if(age < 0){
//     console.log("negative number")
//  }
//  else if (age == 0){
//     console.log("Zero")
//  }
//  else{
//     console.log("Positive number")
//  }

// let user = "hello my name is tushar"


// function camel(users){
//    let arr = user.split(" ")
//    var arr2 = Array()
//    for (const key of arr) {
      
//       let camel = key.split("")
      
//       camel[0] = camel[0].toUpperCase() 
//       let word = camel.join("")
      
      
//       arr2.push(word)
//    }
//    return arr2.join(" ")
// }
// // console.log(camel(user))

// // x = 20
// // x = 10
// // function foo() {
   
// //    console.log(x+2)
// // }
// // foo()
// // console.log(x)

// const numbers = [0,1,2,3,4,5]

// let newarr = numbers.filter((x)=>{
//    if (x%2==0){
//       return true
//    }
// })
// console.log(newarr)

// console.log(["hey"] == ["hey"])

let a = [1,1,1,2,2,2,2,4,4,4,4,3,4]
let b = [5,6,6,8,9,9]

let newarr = a.concat(b).sort()
final = []
for(let i=0; i<= newarr.length; i++) {
   if (newarr[i] == newarr[i+1]){
     continue
   }
   else{
      final.push(newarr[i])
   }
}
// newarr.sort()

console.log(final)