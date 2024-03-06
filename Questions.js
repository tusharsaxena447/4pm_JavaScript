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

const yesterday_date = (d,m,y)=>{
   let m_arr = {1:31,2:28,32:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
   if (y%4 == 0 && y%100 != 0) m_arr[2] = 29
   if (y%400 == 0 && y%100 == 0) m_arr[2] = 29
    if (d==1 && m!=1){
        d = m_arr[m-1]
        m = m-1
    }else if (d == 1 && m == 1) {
        d = 31
        m = 12
        y = y-1
    }else{
        d = d-1
    }
    
 return [d,m,y]
}

console.log(yesterday_date(1,3,2000)) 