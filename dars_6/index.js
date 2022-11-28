// let arr = [
//     { name: 'A', surname: 'B', age: 25},
//     { name: 'B', surname: 'B', age: 20},
//     { name: 'A', surname: 'B', age: 15},
//     { name: 'C', surname: 'C', age: 20},
//     { name: 'D', surname: 'A', age: 25},
//     { name: 'B', surname: 'B', age: 20},
// ]
// function myFilter(arr,search){
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (const el in arr[i]) {
//             if(search[el] == arr[i][el]){
//                 count++
//             }
//         }
//         if(Object.keys(search).length == count){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(myFilter(arr, {age: 20, name: 'B', surname: 'B'}));


// let person = new Map([
//     ['name','ali'],
//     ['surname','zairov'],
//     ['age',20],
//     ['email','ali@gmail.com'],
// ])
// function mapToObject(person){
//     let obj = {}
//         for (const [key,value] of person) {
//             obj[key] = value
//         }
//     return obj
// }
// console.log(mapToObject(person));


// function www(arr, num){
//     for (let i = 0; i < arr.length; i++) {
//         let a = "" + arr[i]
//         for (let j = 0; j < a.length; j++) {
//             if(a[j] == num) return true
//         }
//     }
//     return false
// }
// console.log(www([123,12,87],7));


// function www(words){
//     let a = []
//     for (let i = 0, j = words.length-1; i < (words.length-1) /2 | 0,
//     j >=(words.length-1)/2 |0; i++, j--) {
//             a.push(words[i])
//             a.push(words[j])
//     }
//     if(words.length % 2 != 0){
//         a.pop()
//         return a.join("")
//     }
//     return a.join("")
// }
// console.log(www('sde'));

// let a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// function www(words){
//     let result = ''
//     for (let i = 0; i < words.length; i++) {
//         let aa = +words[i]
//         if(aa){
//             let b = words[i-1]
//             result += a[a.indexOf(b) + aa]
//         }
//         else{
//             result += words[i]
//         }
//     }
//     return result
// }
// console.log(www('a3b4c5'));


// let x = {}
// let map = new Map([
//     [10, "hello"],
//     [10, "salom"],
//     ['10', 'bye'],
//     [ x , [1,2,3]],
//     [ {y:10}, false]
// ])
// console.log(map.get('10'));
// console.log(map.get(x));
// map.set('name', "Abdulla")
// map. clear()
// console.log(map.has(x));
// map.delete('name')
// console.log(map.size);

/*
    Set
*/
// let set = new Set([1,2,2,2,5])
// set.add(10)
// set.delete(2)
// console.log(set.has(5));
// set.clear()
// console.log(set.size);



