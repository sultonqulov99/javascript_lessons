const input = document.querySelector('#input')
const button = document.querySelector('#btn')

button.addEventListener('click', ()=>{
    const li = document.createElement('li')
    li.textContent = input.value 
    console.log(li);
    list.append(li)
})