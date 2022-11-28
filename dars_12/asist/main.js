function www(words,maxWidth){
    let str = 0
    let a = []
    let b = []
    for (let i = 0; i < words.length; i++) {
        str += words[i].length
        if(maxWidth >= str ){
            a.push(words[i])
        }
        else{
            b.push(a.join(" "))
            a = []
            str = 0
            --i
        }
    }
    let aa = []
    let c = 0
    for (let i = 0; i < b.length; i++) {
        c = b[i]
        if(b[i].length < 16){
            b[i].padEnd(20," ")
        }
        aa.push(b[i])
    }
    return aa
}

let words = ['What','must','be','acknowledgment','shall','be','acknowledgment']
let maxWidth = 16

console.log(www(words,maxWidth));