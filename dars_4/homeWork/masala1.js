function homel(num){
    if( num > 0 ){
        let r, q = 0
        while(num > 0){
            r = num % 10 
            q = q * 10 + r
            num = Math.floor(num/10)
        }
        return q
    }
    if( num < 0 ){
        let num1 = num*-1
        let p, b = 0
        while(num1 > 0){
            p = num1 % 10 
            b = b * 10 + p
            num1 = Math.floor(num1/10)
        }
        return -b
    }
}
console.log(homel(-0));
