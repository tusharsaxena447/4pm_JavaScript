const arr = ["Apple","Banana","litchi","grappes"]

const para = document.createElement("p")
para.innerHTML = "this is a paragraph"
document.body.appendChild(para)

const ul = document.createElement("ul")
arr.map((e)=>{
    let li = document.createElement("li")
    li.innerHTML = e
    ul.appendChild(li)
})
document.body.appendChild(ul)
