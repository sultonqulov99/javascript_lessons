// class Person {
//     name
//     age
//     x = 10
//     #sir = 'Shaxlo'
//     constructor(name,age){
//         this.name = name 
//         this.age = age 
//     }
//     get sir (){
//         return this.#sir
//     }
// }
// class Boss extends Person{
//     isBoss = true 
//     constructor(name,age) {
//         super(name, age)
//     }
// }
// let boshliq = new Boss('Usmon', 30)
// console.log(boshliq.x);

class Main {
    name 
    age 
    x = 10 
    static y = ()=>{return 12} 
    static max(...array){
        let max = array[0]
        for (const el of array) {
            if(max < el){
                max = el
            }
        }
        return max
    }
}
let main = new Main()
// console.log(Main.max(1,2,3,9,23,2));
console.log(Main.y());