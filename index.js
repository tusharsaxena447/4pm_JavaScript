const prompt = require("prompt-sync")()

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


// function camel(user){
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

// let a = [1,1,1,2,2,2,2,4,4,4,4,3,4]
// let b = [5,6,6,8,9,9]

// let newarr = a.concat(b).sort()
// final = []
// for(let i=0; i<= newarr.length; i++) {
//    if (newarr[i] == newarr[i+1]){
//      continue
//    }
//    else{
//       final.push(newarr[i])
//    }
// }
// newarr.sort()

// console.log(final)
// let num = 18
//  if(num < 0){
//     console.log("negative number")
//  }
//  else if (num == 0){
//     console.log("Zero")
//  }
//  else{
//     console.log("Positive number")
//  }

// const numbers = [0,1,2,3,4,5,6,7,8,9]

// newarr = numbers.map((x)=>{
//    return x+1
// })

// console.log(newarr)

// data = fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))

// console.log(data.title)
// // console.log(data)
// new_data = data.map((e)=>{
//    return e.title
// })

// console.log(new_data)

const tree = ()=>{
   let height = prompt("enter height  ")
   if (height>=1){
      let neck = prompt("short or long  ")
      if (neck == "short"){
         let nose = prompt("enter nose  ")
         if (nose == "short"){
            let habitat = prompt("land or water  ")
               if (habitat=="land") return "Might be a rhino"   
               else return "might be a hippo"        
         }
         else{
            return "might be an elephant"
         }
         
         }else{
            return "might be a giraffe"
      }
   }
   else{
      squeak = prompt("squeak or cannot  ")
      if (squeak == "cannot"){
         return "might be a squirrel"
      }
      else{
         return "might be a rat"
      }
   }
}

// console.log(tree())

// hoisting---------
// console.log(a)
var a = "tushar"
// In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.
// scope 
// closure

// objects-------------

const obj = {
   name: "tushar",
   last : "saxena",
   fullname : function(){
      return (this.name + this.last)
   }
}

// console.log(obj.fullname())
const obj1  = {"name":"tushar",
   "lastname":"saxena"}

// for(let x in obj1){
//    console.log(x)
// }

for (const iterator of Object.values(obj1)) {
   console.log(iterator)
}