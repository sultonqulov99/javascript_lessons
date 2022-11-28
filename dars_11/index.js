const box2 = document.querySelector('#box2')

function countSibling(box2) {
    let arr = [box2]
    let priventSibling = box2.previousElementSibling
    let nextSibling = box2.nextElementSibling 

    while(priventSibling){
        arr.unshift(priventSibling)
        priventSibling = priventSibling.previousElementSibling
    }
    while(nextSibling){
        arr.push(nextSibling)
        nextSibling = nextSibling.nextElementSibling
    }
    console.log(arr);
}
countSibling(box2)
