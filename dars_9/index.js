
let todoList = document.querySelector('.todo-list')
input.onkeyup = (e) =>{
        let todoItem = document.createElement('div')
        let checker = document.createElement('div')
        let inputChek = document.createElement('input')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        // let a = document.createElement('a')
        // let i = document.createElement('i')
        todoItem.className = 'todo-item'
        checker.className = 'checker'
        span1.className = ''
        inputChek.type = 'checkbox'
    if(e.keyCode == 13){
        // a.className = 'float-right remove-todo-item'
        // i.className = 'icon-close'
        span1.append(inputChek)
        //a.append(i)
        span2.textContent = input.value
        checker.append(span1)
        todoItem.append(checker,span2)
        todoList.append(todoItem)
    }
    all.addEventListener('click', ()=>{
        todoItem.style.display = 'block'
    })
    active.addEventListener('click', ()=>{
        todoItem.style.display = 'none'
        if(!inputChek.checked){
            todoItem.style.display = 'block'
        }
    })
    completed.addEventListener('click', ()=>{
        todoItem.style.display = 'none'
        if(inputChek.checked){
            todoItem.style.display = 'block'
        }
    })
}
