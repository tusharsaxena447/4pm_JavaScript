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

let user = "hello my name is tushar"




function camel(users){
   let arr = user.split(" ")
   var arr2 = Array()
   for (const key of arr) {
      
      let camel = key.split("")
      
      camel[0] = camel[0].toUpperCase() 
      let word = camel.join("")
      
      
      arr2.push(word)
   }
   return arr2.join(" ")
}
console.log(camel(user))