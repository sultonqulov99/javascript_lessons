// function main (str){
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         if(!obj[str[i]]) obj[str[i]] = 1
//         else obj[str[i]] += 1
//     }
//     return new  Set(Object.values(obj)).size == 1
// }
// console.log(main('ababc'));



//console.log(Number("") === Number([]));  //>>>> true



// if(Number([])){
//     console.log("Hello");
// }                               
// else console.log("Salom");   //Salom




// let a = [1,2,NaN,4,null]
// for (let i = 0; i < a.length; i++) {
//     if( 2 && a[i]){
//         console.log(5);
//         continue
//     }
//     else {
//         console.log("Null");     // 5 5 null 5 null
//     }
// }



// console.log(Number(NaN) != isNaN(NaN));  // true



// console.log(null ?? null ?? undefined);   // NaN



// if(0 ?? 23){
//     console.log("Hello");
// }
// if( 23 ?? 0){
//     if((undefined ?? 23) || 0){
//         console.log("Salom");      // Salom
//     }
// }


// console.log( Number('23 + 12') ==  isNaN(+' 23 + 12'));   //false



// if(parseInt('0+9')){
//     console.log('Hello');
// }
// else {
//     console.log("salom");    //salom
// }


// console.log(+[12] == [12]); // true



// if(+[12] === [12]){
//     console.log("Hello");
// }
// else {
//     console.log('Salom');    //Salom
// } 


