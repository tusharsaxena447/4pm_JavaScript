const max_num_array = (arr)=>{
const numbers = [1,2,3,4,5,6,7,8,9]

return Math.max(...numbers)
}

// console.log(max_num_array([1,2,3,4,5,6,7,8])) 

const palind = (str)=>{
    return str == str.split("").reverse().join("")
}

// console.log(palind("tit"))

const even_array = (arr)=>{
    return arr.filter((e)=>{
        return e%2==0
    })
}
const numbers = [1,2,3,4,5,6,7,8,9]
// console.log(even_array(numbers)) 

const fact = (num)=>{
    if (num == 0){
        return 1
    }
    return num * fact(num-1)
}
// console.log(fact(4))

const prime = (num)=>{
    if (num == 2) return "prime"
    for(let i=2; i<num; i++){
        if (num % i == 0) return "Not prime" 
        continue
    }
    return "prime"
}

// console.log(prime(5))

const fibbo = (num)=>{
    let arr = [0,1]
    let a = 0
    let b = 1
    for (let i =0; i<num; i++ ){
        let c = a+b
        arr.push(c)
        a = b
        b = c
    }
    return arr
}
// console.log(fibbo(10))

const power4 = (num)=>{
    if(num%4!=0){
        
        return false
    }else {
        let flag = true
        let i = 0
        while(flag){
            if (num < Math.pow(4,i)) {
                
                return false
            }
            if(Math.pow(4,i) == num && num<=Math.pow(4,i)){
                return true
                flag = false
            }
            else{
                i+=1
                
            }
        }
    }
}
// console.log(power4(10))

