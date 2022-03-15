const soura = 'https://api.quran.com/api/v3/chapters'

fetch(soura).then(data => { return data.json() }).then(jsonData => {
    jsonData.chapters.forEach(it => {
        var card = `<div class="card"><div class="soura" value="${it.id}">
                    <a href="3" class="">${it.name_simple} </a>
                    <a href="#" class="fa-solid fa-sitemap hierarchyIcon"></a>
                    <a href="#">${it.name_arabic}</a></div></div>`
        document.querySelector('.container').insertAdjacentHTML('beforeend', card)

    })
});
