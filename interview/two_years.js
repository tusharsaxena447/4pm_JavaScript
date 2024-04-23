// const { reject } = require("lodash")

// btn = document.createElement("button")
// btn.innerHTML = "Resolve"
// document.body.appendChild(btn)
// btn2 = document.createElement("button")
// btn2.innerHTML = "Reject"
// document.body.appendChild(btn2)

// const resolve = new Promise((res,rej)=>{
//     btn.addEventListener("click" ,()=>{
//         res("promise resolved")
//         // console.log("promise resolved")
//     })
//     btn2.addEventListener("click" ,()=>{
//         rej("promise rejected")
//         // console.log("promise resolved")
//     })
// })

// resolve.then(res => console.log(res)).catch(rej => console.log(rej))

let counter = 0;
let centre = []
let radiuses = []
function circle(x,y) {
  let radius = Math.floor(Math.random() * 100 + 10);
  // console.log(radius)
  radiuses.push(radius/2)
  let btn = document.createElement("div");
  btn.style.width = `${radius}px`;
  btn.style.height = `${radius}px`;
  btn.style.border = "2px solid black";
  btn.style.borderRadius = "50%";
  btn.style.position = "fixed"
  btn.style.top = `${y-(radius/2)}px`
  btn.style.left = `${x-(radius/2)}px`
  document.body.appendChild(btn);
}
window.addEventListener("click", (e) => {
   let x = e.clientX
   let y = e.clientY
    centre.push(x)
    centre.push(y)
  //  console.log("x",x)
  //  console.log("y",y)
    counter++;
  if (counter === 2 ){
    circle(x,y)
    // console.log(centre)
    let distance = Math.sqrt(((centre[3]-centre[1])**2)+((centre[2]-centre[0])**2))
    // console.log(distance)
    // console.log(radiuses)
    let inter = (radiuses[0]+radiuses[1])-distance
    if(inter > 0){
      console.log("intersects")
    }
    centre = []
    radiuses = []
  }
  else if (counter > 2) {
    document.body.innerHTML = "";
    
    
    
    counter = 1;
    circle(x,y);
    
    // console.log(counter);
  } else {
    circle(x,y);
    // console.log(counter);
  }
});
