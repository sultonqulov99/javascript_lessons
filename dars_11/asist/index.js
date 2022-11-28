class Charlist{
    array
    constructor(...array){
        this.array = array
    }
    get array(){
        return this.array
    }
    get first(){
        return this.array[0]
    }
    get last(){
        return this.array[this.array.length-1]
    }
    get count(){
        let str = ''
        for (const i of this.array) {
            str += i
        }
        return str
    }
    get charCodes(){
        let a = []
        for (const i of this.array) {
            a.push(i.charCodeAt().toString())
        }
        return a
    }
    set push(el){
        this.array[this.array.length] = el
    }
    pop(){
        return this.array.splice(this.array.length-1,1)
    }
    set unshift(el){
        for (let i = this.array.length-1; i >=0; i--) {
            this.array[i+1] = this.array[i]
        }
        this.array[0] = el
    }
    shift(){
        this.array.splice(this.array[0],1)
    }
    map = function (callback) {
        let aa = []
        for (let i = 0; i < this.array.length; i++) {
            aa.push(callback(this.array[i]))
        }
        return aa
    }
}
let list = new Charlist('a','b','c','d','e')

