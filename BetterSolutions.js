function camel(str){
    return str.replace(/\b\w/g,l=> l.toUpperCase())
}
// console.log(camel("my name is tushar saxena")) 

function power4(num){
    if (num == 1) return true
    if (num == 0) return false
    if (num%4 != 0) return false

    return power4(num/4)
}

// console.log(power4(24))