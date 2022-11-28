function numberSum(num, sum = 0, count = 0){
    num = "" + num 
    if(!num[count]) return sum 
    sum += +num[count]
    return numberSum(num, sum, count+1)
}
console.log(numberSum(1234));