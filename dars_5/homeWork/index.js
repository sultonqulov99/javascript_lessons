// Array.prototype.myReduce = function(callback,acc){
//     for (let i = 0; i < this.length; i++) {
//         acc = callback(acc,this[i])
//     }
//     return acc
// }
// let arr = [1,2,3,4,5]
// console.log(arr.reduce((acc,el)=> {
//     return acc += el
// },12));
// console.log(arr.myReduce((acc,el) => {
//     return acc += el
// },34));

////////////////////////////////////////////////////

// Array.prototype.myFind = function(callback){
//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i])){
//             return this[i]
//         }
//     }
// }
// let arr = [1,2,3,4,5]
// console.log(arr.myFind(el => el == 5))

/////////////////////////////////////////////////

// Array.prototype.myEvery = function(callback){
//     let k = 0
//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i])){
//             k++
//             if(k == this.length) return true
//         }
//         else return false
//     }
// }
// let arr = [1,2,3,4,5]
// console.log(arr.myEvery(el => el >= 1));

////////////////////////////////////////////////

// Array.prototype.myFindIndex = function(callback){
//     let k = 1
//     for (let i = 0; i < this.length; i++) {
//         if( callback(this[i]) ) {
//             return i
//         }
//         else if( k == this.length )
//         return -1
//         ++k
//     }
// }
// let arr = [1,2,3,4,5]
// console.log(arr.myFindIndex(el => el == 1));

//////////////////////////////////////////////////////

// Array.prototype.myForEach = function(callback){
//     let a = []
//     for (let i = 0; i < this.length; i++) {
//         a.push(callback(this[i],i,arr))
//     }
//     return a
// }
// let arr = [1,2,3,4,5]
// console.log(arr.myForEach((el,i,arr) => el*2));
