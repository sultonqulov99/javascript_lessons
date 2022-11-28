///////mySetFilter///////////////////////////////////
/*

let set = new Set([6,1,2,5,NaN])
let result = []
Set.prototype.myFilter = function(callback){
    for (let key of this) {
        if(callback(key)){
            result.push(key)
        }
    }
    return new Set(result)
}
console.log(set.myFilter(key => key >= 5));

*/

/////////mySetReduce///////////

// let set = new Set([6,1,2,5,6])
// Set.prototype.myReduce = function(callback,acc=0){ 
//     for (let i of this) {
//         acc = callback(acc, i)
//     }
//     return acc
// }
// console.log(set.myReduce((acc,el)=> {
//     return acc += el
// }));



