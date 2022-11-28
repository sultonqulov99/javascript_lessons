function www(arr){
    let a = []
    for (let i = 0; i < arr.length; i++) {
        if(!arr[i]){
            a.push(0)
            
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
            a.push(arr[i])
        }
    }
    return a
}
console.log(www([0,13,0,54,0,0]));



// let num1 = [0,'bir','ikki','uch','tort','besh','olti','yetti','sakkiz','toqqiz']
// let num2 = [0,'on','yigirma','ottiz','qirq','ellik','oltmish','yetmish','sakson','toqson']
// let num3 = [0,'yuz']

// function www(num){
//     if(num < 10){
//         return num1[num]
//     }
//     if(num >=10 && num < 100){
//         return num2[Math.floor(num / 10)] + " " + num1[num % 10]
//     }
//     if(num > 99){
//         return num3[num / 100]
//     }
// }
// console.log(www(91));















