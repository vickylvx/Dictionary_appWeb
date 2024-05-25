const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById('result');
const Sound = document.getElementById('sound');

const btn = document.getElementById('search_btn');

btn.addEventListener('click' , ()=> {
    let inpWord = document.getElementById('input_word').value;
    console.log(inpWord);
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `<div class="word">
        <h3>${inpWord}</h3>
        <button >
            <i class="ri-volume-up-line"></i>
        </button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word_meaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word_example">
        ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
    Sound.setAttribute("scr" ,`https:${data[0].phonetics[0].audio}`);
    });
})

