const prompt = require("prompt-sync")()

let marks = prompt("enter marks")

if (marks>=90 && marks<100){
    console.log("9.0 CGPA")
}
else if(marks>=80 && marks <90){
    console.log("8.0 CGPA")
}
else if(marks>=70 && marks <80){
    console.log("7.0 CGPA")
}
else if(marks>=60 && marks <70){
    console.log("6.0 CGPA")
}
else if(marks>=50 && marks <60){
    console.log("5.0 CGPA")
}
else if(marks>=40 && marks <50){
    console.log("4.0 CGPA")
}
else if(marks>=30 && marks <40){
    console.log("3.0 CGPA")
}
else{
    console.log("you are a failure")
}
