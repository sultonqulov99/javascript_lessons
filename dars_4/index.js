// function www(arr){
//     let array = []
//     let kk = []
//     for (let i = 0; i < arr.length; i++) {
//         let a = []
//         for (let j = arr[i].length-1; j >= 0; j--) {
//             a.push(arr[i][j])
//         }
//         array.push(a)
//     }
//     for (let k = array.length-1; k >= 0; k--) {
//         kk.push(array[k])
//     }
//     return kk
// }
// console.log(www([ ['A','B'] , ['K','O','Y'] , ['N','W'] ]));

// let obj = {
//     x : 20,
//     y : 50,
//     name : 'Halim'
// }
// let arr = []
// for (const key in obj) {
//     // arr.push([key,obj[key]])
//     arr[arr.length] = [key, obj[key]]
// }
// console.log(arr);


// let words = ['olm','sh','gw','bxxxx']
// let k = 0
// function www(words){
//     for (let i = 0; i < words.length-1; i++) {
//         if(words[i].length <= words[i+1].length){
//             k = words[i+1].length
//         }
//         else {
//             k = words[i].length
//         }
//     }
//     return k
// }
// console.log(www(words));

// let binaries = ['0001110101','111001','1101']
// let arr = []
// for (let i = 0; i < binaries.length; i++) {
//     let a = ''
//     for (let j = 0; j < binaries[i].length; j++) {
//         a += +!+binaries[i][j]
//     }
//     arr.push(a)
// }
// console.log(arr);

let array = [ {
    "a":1,
    
}]
let obj = {}
for (let i = 0; i < array.length; i++) {
    let key = array[i][0]
    let value = array[i][1]
    obj[key] = value
}
console.log(obj);




