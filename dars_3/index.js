// function ww (arr){
//     let k = 1
//     let aa = 0
//     let a = arr.sort(function(a,b){return a-b})
//     for (let i = 0; i < a.length; i++) {
//         if(a[i] == a[i+1]){
//             k++
//         }
//         else {
//            if(aa < k){
//                aa = k
//                if(i == a.length-1){
//                    return aa+1
//                }
//            }
//            if(aa>k){
//             k = aa
//             if(i == a.length-1){
//                 return k+1
//             }
//            }

//             k = 0
//         }
//     }
// }
// console.log(ww([1,2,4,4,4]));


function www(arr){
    let a = arr.sort(function(a,b){return a-b})
    for (let i = 0; i < a.length; i++) {
        if(a[i+1] - a[i] != 1){
            return arr[i]+1
        }
    }
}
console.log(www([0,4,2,3,7,5,1]));

// let data = {
//     product: [['name', "gilam"],['weight', 20]],
//     country: [['country', "Turkey"],['city', 'Istambul']],
//     laptop: [['name', "Lenovo"],['weight', '2kg']]
// }
// let obj = {}
// for (const key in data) {
//     obj[key] = {}
//     for (const [keyEl, value] of data[key]) {
//         obj[key][keyEl] = value
//     }
// }
// console.log(obj);

