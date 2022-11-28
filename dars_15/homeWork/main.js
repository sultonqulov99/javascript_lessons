inputElement.onkeyup = async (event) => {
    try {
        if(inputElement.value == "") throw new Error('Please enter surah number!')
        if(!(inputElement.value > 0 && inputElement.value < 115)) throw new Error('Please enter a valid number')
        if(event.keyCode == 13){

            let response = await fetch('https://api.quran.sutanlab.id/surah/' + inputElement.value)
            let tafsir = await fetch('https://quranenc.com/api/translation/sura/uzbek_mansour/' + inputElement.value)
            response = await response.json()
            tafsir = await tafsir.json()

            list.innerHTML = null
            for (let i = 0; i < response.data.verses.length; i++) {
                let li = document.createElement('li')
                let h2 = document.createElement('h2')
                let h3 = document.createElement('h3')

                h2.textContent = response.data.verses[i].text.arab
                h3.textContent = tafsir.result[i].translation
                li.append(h2,h3)
                list.append(li)
                surahName.textContent = response.data.name.transliteration.en

                li.onclick = ()=>{
                    audioWrapper.innerHTML = null
                    let audio = document.createElement('audio')
                    let source = document.createElement('source')
                    source.src = response.data.verses[i].audio.primary
                    audio.append(source)
                    audioWrapper.append(audio)
                    audio.play()
                    let actives = document.querySelectorAll('.activate')
                    actives.forEach(el => el.classList.remove('activate'))
                    li.classList.add('activate')
                }
            }
    }
    } catch (error) {
        alert(error.message)
    }
}