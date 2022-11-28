// function firstPalidrome (words){
//     let aa = []
//     for (let i = 0; i < words.length; i++) {
//         let a = ''
//         for (let j = words[i].length-1; j >= 0; j--) {
//             a += words[i][j]
//         }
//         aa.push(a)
//     }
//     for (let i = 0; i < aa.length; i++) {
//         if(aa[i] == words[i]){
//             return aa[i]
//         }
//     }
//     return aa
// }
// console.log(firstPalidrome(["abc","cac","ada","racecar","color"]));



// function www(num1,num2,num3){
//     num1 = [...new Set(num1)]
//     num2 = [...new Set(num2)]
//     num3 = [...new Set(num3)]
//     let result = [...num1,...num2,...num3]
//     for (let i = result.length-1; i >=0; i--) {
//         let b = result.splice(i,1)
//         if(result.includes(b[0])){
//             result.push(b[0])
//         }
//     }
//     return [...new Set(result)]
// }
// console.log(www([1,2,3],[1,2,4],[4,5,5]));

// function www(str){
//     let a = str.split(" ").filter(el => el != "")
//     return a[a.length-1].length
// }
// console.log(www("jsdbh iufhu isufhy kfjvk    "));


// Array.prototype.middle = function(){
//     let middle = this.length /2 | 0
//     let store = []
//     if(!(this.length % 2) && this.length){
//         store.push(this[middle - 1])
//         store.push(this[middle])
//     }
//     else {
//         store.push(this[middle])
//     }
//     return store
// }
// let arr = [20,30,40,23,3,2,34,45]
// console.log( arr.middle() );


