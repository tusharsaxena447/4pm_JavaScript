// const arr = ["tushar","nidhi","Pinki","Prachi"]
// let counter = 0
// document.addEventListener('click', ()=>{
//    let h1 =  document.querySelector("h1")  
//    h1.innerHTML = arr[counter]
//    counter++
//    counter >= arr.length ? counter=0:""
//    console.log(counter)
// })

// const Numbers = [1,2,3,4,5,6,7,8,9]

// const newnum = Numbers.filter((e)=>{
//     return (e<3)
// }).map((e)=>{
//     return e+5
// })

// console.log(newnum)

let str = "hi i am tushar saxena"
const arr = str.split(" ")
const newarr = arr.map((e)=>{
    let camel = e.split("")
    camel[0] = camel[0].toUpperCase()
    return camel.join("")
})
console.log(newarr.join(" "))

// console.log(str.replace(/\b\w/g,l => l.toUpperCase()))