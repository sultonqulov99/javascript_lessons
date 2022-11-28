function www(son){
    for (let i = son.length -1; i >= 0; i--) {
        if(son[i] == son[i+1] && son[i] == son[i+2]){
            son.push('_')
            son.splice(i,1)
        }
    }
    return son
}
console.log(www([2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,8,8,8,8]));