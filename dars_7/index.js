let mevalar = [ 'olma', 'behi', 'shaftoli', 'anor' ]

for (let i = 0; i < mevalar.length; i++) {
    let li = document.createElement('li')
    li.textContent = mevalar[i]
    list.append(li)
}