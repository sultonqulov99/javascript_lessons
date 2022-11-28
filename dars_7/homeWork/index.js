const inputText = document.querySelector('#inputText')
const button = document.querySelector('#button')

const todos = JSON.parse(window.localStorage.getItem('todos')) || []
button.addEventListener('click', () => {
	if(inputText.value.trim() != ''){
        todos.push(inputText.value)
        window.localStorage.setItem('todos', JSON.stringify(todos))
        inputText.value = ""
        renderTodos(todos)
    }

})

function renderTodos(todos){
    list.innerHTML = null
    for (const todo of todos) {
        let li = document.createElement('li')
        li.innerHTML = todo
        list.append(li)
        let span = document.createElement('span')
        let btn = document.createElement('button')
        btn.style.backgroundColor = 'red'
        btn.style.color = 'white'
        btn.style.borderColor = 'green'
        btn.innerHTML = 'X' 
        li.append(span,btn)
        btn.addEventListener('click', () => {
            let index = todos.indexOf(todo)
            todos.splice(index,1)
            window.localStorage.setItem('todos', JSON.stringify(todos))
            li.remove()
        })
    }
}
renderTodos(todos)
