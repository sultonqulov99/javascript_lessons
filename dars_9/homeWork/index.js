const todoList = document.querySelector('.todo-list')

input.onkeyup = (e)=>{
    let todoItem = document.createElement('div')
    let divChecker = document.createElement('div')
    let span1 = document.createElement('span')
    let inputCheckbox = document.createElement('input')
    let span2 = document.createElement('span')
    let button = document.createElement('button')

    button.style.marginLeft = '20px'
    button.style.marginRight = '17px'
    button.style.color = 'white'
    button.style.backgroundColor = 'red'
    button.style.fontSize = '11px'
    span2.style.color = 'blue'
    inputCheckbox.style.color = 'yellow'

    if(e.keyCode == 13){
        todoItem.className = "todo-item"
        divChecker.className = 'checker'
        inputCheckbox.type = "checkbox"
        button.textContent = 'X'
        span1.append(inputCheckbox)
        divChecker.append(span1)
        span2.textContent = "   " + input.value
        todoItem.append(divChecker,button,span2)
        todoList.append(todoItem)
    all.addEventListener('click', ()=>{
        todoItem.style.display = 'block'
    })
    active.addEventListener('click', ()=>{
        todoItem.style.display = 'none'
        if(!inputCheckbox.checked){
            todoItem.style.display = 'block'
        }
    })
    completed.addEventListener('click', ()=>{
        todoItem.style.display = 'none'
        if(inputCheckbox.checked){
            todoItem.style.display = 'block'
        }
    })
    button.addEventListener('click', ()=> todoItem.remove())
    input.value = ""
    
    }
        
}

