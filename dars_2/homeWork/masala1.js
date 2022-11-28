function towSum(arr,num){
    let a = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == num){
                a.push(i,j) 
            }
        }
    }
    return a
}
console.log(towSum([3,2,5],7));