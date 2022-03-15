const soura = 'https://api.quran.com/api/v3/chapters'

fetch(soura).then(data => { return data.json() }).then(jsonData => {
    jsonData.chapters.forEach(it => {
        var card = `<div class="card"><div class="soura" value="${it.id}" onclick="goSora(this)" >
                    <a href="3" class="">${it.name_simple} </a>
                    <a href="#" class="fa-solid fa-sitemap hierarchyIcon"></a>
                    <a href="#">${it.name_arabic}</a></div></div>`
        document.querySelector('.container').insertAdjacentHTML('beforeend', card)

    })
});

function goSora(e) {
    localStorage.clear()
    localStorage.setItem("suraPage", 1);
    localStorage.setItem("suraLink", e.getAttribute('value'));
    window.location.replace('/viewer.html')
}