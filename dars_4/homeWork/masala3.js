function numbers(arr){
    let k = 0
    let a = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]){
            k = arr[i]
        }
        else if(arr[i] != arr[i+1]){
            a.push(arr[i])
        }
        else{
            a.push(k)
        }
    }
    return a
}
console.log(numbers([1,1,2,3,2,3,4,4,4,5]));