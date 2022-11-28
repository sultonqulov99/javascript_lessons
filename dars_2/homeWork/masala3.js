function mod(num,n,calc = 0){
    if(num < n) return num
    calc = num - n
    return mod(num-n,n,calc)
}
console.log(mod(1,3));