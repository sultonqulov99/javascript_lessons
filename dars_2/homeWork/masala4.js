console.time()
function func(arr){
    for (let i = arr.length-1; i >= 0; i--) {
        if(!arr[i]){
            let b = arr.splice(i,1)
            arr.push(b[0])
        }
    }
    return arr
}
// console.log(func([1,0,2,0,2,3]));
console.log(func([0,9,1,0,0,3]));
console.timeEnd()