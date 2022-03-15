const juzs = 'https://api.quran.com/api/v3/juzs'

function rotate(el) {
    el.classList.toggle('rotate')
    el.parentElement.parentElement.nextElementSibling.classList.toggle('hide')
}

fetch(juzs).then(data => { return data.json() }).then(jsonData => {
    jsonData.juzs.forEach(it => {
        
        function genHizb() {
            var index = Object.keys(it.verse_mapping).length
            var hizbList = ''
            for (i = 0; i < index; i++) {
                hizbList += `<div class="rows"><div class="hizb-head">HIZB ${i}</div>
                             <div class="hizb-part">1/4 HIZB</div>
                             <div class="hizb-part">1/2 HIZB</div>
                             <div class="hizb-part">3/4 HIZB</div></div>`
            }
            return hizbList
        }

        var card = `<div class="card" value="${it.id}"><div class="card-head">
                    <label>Juz ${it.juz_number}</label><div class="card-details">
                    <a href="#">جزء</a><a href="#" class="fa-solid fa-angle-down rotate" onclick="rotate(this)"></a>
                    </div></div><div class="card-body hide">${genHizb()}</div></div>`

        document.querySelector('.container .body').insertAdjacentHTML('beforeend', card)
    })

});



