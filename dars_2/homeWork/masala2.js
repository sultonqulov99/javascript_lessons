function isPalidrome(str){
    let a = String(str)
    let b = a.split("").reverse().join('')
    if(a == b) return true 
    else return false
}
console.log(isPalidrome("222"));