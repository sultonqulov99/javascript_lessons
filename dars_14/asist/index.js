cat_btn.onclick = async () => {
    let res = await fetch(`https://pixabay.com/api/?key=25570361-2831118e9efb3556d0258fa4f&q=cat&image_type=photo`)
    let data = await res.json()
    let random = Math.round(Math.random() * data.hits.length)
    cat_result.innerHTML = `<img src=${data.hits[random].largeImageURL} alt="cat" />`
}

dog_btn.onclick = async () => {
    let res = await fetch(`https://pixabay.com/api/?key=25570361-2831118e9efb3556d0258fa4f&q=dog&image_type=photo`)
    let data = await res.json()
    let random = Math.round(Math.random() * data.hits.length)
    dog_result.innerHTML = `<img src=${data.hits[random].largeImageURL} alt="dog" />`
}