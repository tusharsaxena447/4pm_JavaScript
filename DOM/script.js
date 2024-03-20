var a = document.createElement("div")
a.style.width="100px"
a.style.height="100px"
a.style.border="2px solid"
a.style.borderRadius="50%"
document.body.appendChild(a)
var btn = document.createElement("button")
btn.innerHTML = "ON"
btn.style.margin = "5px"
document.body.appendChild(btn)
let toggle = true

document.querySelector("button").addEventListener("click",()=>{
   if (toggle){
    a.style.backgroundColor = "yellow"
    toggle = false
    btn.innerHTML = "OFF"
   }else{
    a.style.backgroundColor = "white"
    toggle = true
    btn.innerHTML = "ON"
   }
})