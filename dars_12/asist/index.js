// let arr = ['A','B','C','D','E','C','B','A','B','E'] 

// class Pagination{
//     arr
//     limit
//     constructor(arr,limit){
//         this.arr = arr 
//         this.limit = limit
//     }
//     get pages(){
//         let a = Math.floor(arr.length / this.limit.limit)
//         if(arr.length % this.limit.limit == 0){
//             return a 
//         }
//         else{
//             return a+1
//         }
//     }
//     getPage(el){
//         let ar = []
//         for (let i = this.limit.limit * (el-1); i < this.limit.limit * el; i++) {
//             ar.push(arr[i])
//         }
//         return ar.filter(el => el != undefined)
//     }
//     set setLimit(el){
//         this.limit = el 
//         let a = Math.floor(arr.length / this.limit)
//         if(arr.length % this.limit == 0){
//             console.log(a);
//         }
//         else{
//             console.log(a+1);
//         }
//     }
//     filter = function(callback){
//         let a = []
//         for (let i = 0; i < arr.length; i++) {
//             if(callback(arr[i])){
//                 a.push(arr[i])
//             }
//         }
//         return a
//     }
// }
// let peg = new Pagination(arr,{limit:3})
// console.log(peg.pages);
// peg.getPage(2)
// console.log(peg.getPage(2));
// peg.getPage(4)
// console.log(peg.getPage(4));
// peg.setLimit = 2

// console.log(peg.filter((el,i,arr)=> el == 'B'));
