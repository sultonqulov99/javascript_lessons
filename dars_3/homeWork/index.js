Array.prototype.mySplice = function(start,n,...elements){
    let arr = []

    if(typeof start == 'number' && start >= 0){
        for (let i = 0; i < start; i++) {
            arr.push(this[i])
            if(elements && i == start-1){
                    arr.push(...elements)
            }
        }
        if(typeof n == 'number' && n >= 0){
            for (let j = start + n; j < this.length; j++) {
                arr.push(this[j])
            }
        }
    }
    if(typeof start == 'number' && start < 0){
        for (let i = 0; i < this.length-(start * -1); i++) {
            arr.push(this[i])
            if(elements && i == this.length-(start * -1)-1){
                arr.push(...elements)
        }
        }
        if(n > 0){
            for (let i = (start - n) *-1; i < this.length; i++) {
                arr.push(this[i])
            }
        }
    }
    console.log(arr);
}
let a = [1,2,3,4,5,6,7,8]
let b = [1,2,3,4,5,6,7,8]

a.mySplice(9)
b.splice(9)
console.log(b);








