// let order = {
//     orderId: 1,
//     orderOwen : {
//         firstName: 'Ali',
//         lastName: 'Zairov'
//     },
//     products: [
//         {
//             productId: 1,
//             productName: 'Gilam'
//         },
//         {
//             productId: 2,
//             productName: 'Sholcha'
//         }

//     ]
// }

// let {orderOwen:{firstName}} = order
// let {products: [{productName:Gilam }]} = order
// let {products: [,{productName:Sholcha }]} = order
// console.log(firstName);
// console.log(Gilam);
// console.log(Sholcha);


// Array.prototype.myReduce = function(callback,acc){
//     let b = acc
//     for (let i = 0; i < this.length; i++) {
//         b = callback(b,this[i])
//     }
//     return b
// }

// let a = [1,2,3,4,5]
// console.log(a.myReduce((acc,el) => {
//     return acc += el
// },20));

// function product(...rest){
//     let x = 0
//     return function (...rest1){
//         return function (...rest2){
//             for (let i = 0; i < rest.length; i++) {
//                 x += rest[i] * rest1[i] * rest2[i]
//             }
//             return x
//         }
//     }
// }
// console.log(product(1,2,3,4)(2,3,4,4)(3,4,4,3));

// let obj = {
//     x : 10,
//     y: 20
// }
// Object.defineProperties(obj, {
//     x: {
//         writable: false,
//         enumerable: true,
//         configurable: false
//     },
//     y: {
//         writable: false,
//         enumerable: true,
//         configurable: false
//     }
// })
// obj.x = 32
// obj.y = 100
// delete obj.x
// delete obj.y
// console.log(obj);

// let obj = {
//     name: 'Abdulla',
//     age: 23
// }

// Object.defineProperties(obj, {
//     name: {
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     age: {
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })
// obj.name = 'Ahror'
// delete obj.name
// obj.age = 20
// delete obj.age
// console.log(obj);

// Object.preventExtensions(obj) // bu faqat qo'sholmaydi, O'zgartiradi va O'chiradi.
// Object.seal(obj)  // o'chirolmaydi va qo'sholmaydi, lekin o'zgartiradi.
// Object.freeze(obj) // O'chirolmaydi, qo'sholmaydi, o'zgartirolmaydi.
// obj.name = 'Abduhoshim'
// obj.surname = 'Sultonqulov'
// delete obj.age
// console.log(obj);

// let person = {
//     name: "Abdulloh",
//     set setName (arg){
//         if(typeof arg != 'string') return 
//         this.name = arg
//     },
//     get getName(){
//         return this.name
//     }
// }
// person.setName = 'Ali'
// console.log(person.getName);

// let obj = {
//     orderId: 2,
//     Order: {
//         OrderId: 1,
//         name: "SAlim"
//     },
//     products: [
//         {
//             productId: 1,
//             productname: "Gilam"
//         },
//         {
//             productId: 2,
//             productname: "sholcha"
//         }
//     ]
// }

// let { Order : { name } } = obj 
// let { products : [ { productname : Gilam } ] } = obj
// let { products : [ , { productname : sholcha } ] } = obj
// console.log( name );
// console.log( Gilam );
// console.log( sholcha );


