// const { reject } = require("lodash")

btn = document.createElement("button")
btn.innerHTML = "Resolve"
document.body.appendChild(btn)
btn2 = document.createElement("button")
btn2.innerHTML = "Reject"
document.body.appendChild(btn2)

const resolve = new Promise((res,rej)=>{
    btn.addEventListener("click" ,()=>{
        res("promise resolved")
        // console.log("promise resolved")
    })
    btn2.addEventListener("click" ,()=>{
        rej("promise rejected")
        // console.log("promise resolved")
    })
})

resolve.then(res => console.log(res)).catch(rej => console.log(rej))