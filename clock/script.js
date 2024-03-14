// setInterval(sec, 1000);


setInterval(sec, 1000);
function sec(){
  const b = new Date()

  let sec1 = b.getSeconds()
  document.getElementById("sec1").innerHTML = sec1;
  let min1 = b.getMinutes()
  document.getElementById("min1").innerHTML = min1;
  let hour1 = b.getHours() 
  document.getElementById("hour1").innerHTML = hour1;
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let d = b.getDate()
let m = b.getMonth()
let y = b.getFullYear()
document.getElementById("Day").innerHTML = d;
document.getElementById("Month").innerHTML = month[m] ;
document.getElementById("Year").innerHTML = y;
}
  


 



