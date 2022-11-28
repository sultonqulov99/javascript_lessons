const problemsHeader = document.querySelector('.problems-header')
const conditions = document.querySelector('.conditions')
const listExample = document.querySelector('#list-example')
const resultList = document.querySelector('#result-list')


const [select,option,option1,option2,h1,p,li,li1,li2] = createElements('select','option','option','option','h1','p','li','li1','li2') 
option.textContent = users[0].nameProblem 
option1.textContent = users[1].nameProblem
option2.textContent = users[2].nameProblem
select.append(option,option1,option2)
problemsHeader.append(select)

select.addEventListener('click',()=>{
    if(select.value == option.value){
        users[0].status = true
        users[1].status = false
        users[2].status = false
        p.className = 'condition-description'
        h1.className = 'condition-header'
        p.textContent = users[0].description
        li.textContent = users[0].example[0]
        li1.textContent = users[0].example[1]
        li2.textContent = users[0].example[2]
        h1.textContent = users[0].nameProblem

        listExample.append(li,li1,li2)
        conditions.append(h1,p)
    }
    if(select.value == option1.value){
        users[1].status = true
        users[0].status = false
        users[2].status = false
        p.className = 'condition-description'
        h1.className = 'condition-header'
        p.textContent = users[1].description
        li.textContent = users[1].example[0]
        li1.textContent = users[1].example[1]
        li2.textContent = users[1].example[2]
        h1.textContent = users[1].nameProblem

        listExample.append(li,li1,li2)
        conditions.append(h1,p)
    }
    if(select.value == option2.value){
        users[2].status = true
        users[1].status = false
        users[0].status = false
        p.className = 'condition-description'
        h1.className = 'condition-header'
        p.textContent = users[2].description
        li.textContent = users[2].example[0]
        li1.textContent = users[2].example[1]
        li2.textContent = users[2].example[2]
        h1.textContent = users[2].nameProblem

        listExample.append(li,li1,li2)
        conditions.append(h1,p)
    }
})

submitBtn.addEventListener('click',()=>{
    let a = exampleSolution.value
    if(users[0].status){
        let f = new Function('array','target',
        `
        ${a}
        `
        )
        let aa = f([2,7,11,15], 9)
        console.log(aa);
        if(aa[0] == 0 && aa[1] == 1){
            const [li,span,i] = createElements('li','span','i') 
            span.className = 'status'
            i.className = 'fas fa-check'
            span.textContent = 'Success'
            span.append(i)
            li.textContent = '1.'
            li.append(span)
            resultList.append(li)
        }
        else{
            const [li,span,i] = createElements('li','span','i') 
            span.className = 'status'
            i.className = 'fas fa-times'
            span.textContent = 'Fail'
            span.append(i)
            li.textContent = '2.'
            li.append(span)
            resultList.append(li)
        }
    }
    if(users[1].status){
        let f = new Function('arr',
        `
        ${a}
        `
        )
        let bb = f([2,2,1])
        console.log(bb);
        if(bb[0] == 1){
            const [li,span,i] = createElements('li','span','i') 
            span.className = 'status'
            i.className = 'fas fa-check'
            span.textContent = 'Success'
            span.append(i)
            li.textContent = '1.'
            li.append(span)
            resultList.append(li)
        }
        else{
            const [li,span,i] = createElements('li','span','i') 
            span.className = 'status'
            i.className = 'fas fa-times'
            span.textContent = 'Fail'
            span.append(i)
            li.textContent = '2.'
            li.append(span)
            resultList.append(li)
        }
    }
    if(users[2].status){
        let f = new Function('nums',
        `
        ${a}
        `
        )
        let ss = f([1,2,3,1])
        console.log(ss);
        if(ss){
            const [li,span,i] = createElements('li','span','i') 
            span.className = 'status'
            i.className = 'fas fa-check'
            span.textContent = 'Success'
            span.append(i)
            li.textContent = '1.'
            li.append(span)
            resultList.append(li)
        }
        else{
            const [li,span,i] = createElements('li','span','i') 
            span.className = 'status'
            i.className = 'fas fa-times'
            span.textContent = 'Fail'
            span.append(i)
            li.textContent = '2.'
            li.append(span)
            resultList.append(li)
        }
    }
})
// let z = []
// for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//         if(array[i] + array[j] == target){
//             z.push(i,j)
//         }
//     }    
// }
// return z

// let qwert = []
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] == arr[j] && i != j){
//             break
//         }
//         else if(j == arr.length-1){
//             qwert.push(arr[i])
//         }
//     }
// }
// return qwert 
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//        if(nums[i] == nums[j]){
//            return true
//        }
//     }
// }
// return false
