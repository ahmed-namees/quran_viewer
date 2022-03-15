var id = localStorage.getItem("suraLink")
var currentPage = localStorage.getItem("suraPage")
const soura = 'http://api.quran.com/api/v3/chapters/' + id + '/verses?page=' + currentPage
const souraInfo = 'http://api.quran.com/api/v3/chapters/' + id
document.querySelector('.pageNumber').value = currentPage
document.querySelector('.viewerFrame').innerHTML = ''

var total_pages = 0

function loadSora() {

    fetch(soura).then(data => { return data.json() }).then(jsonData => {
        total_pages = jsonData.pagination.total_pages
        console.log(jsonData)
        var soraString = ''

        fetch(souraInfo).then(data => { return data.json() }).then(jsonInfo => {
            document.querySelector('.soraTitle').innerText = jsonInfo.chapter.name_arabic + ' : ' + jsonInfo.chapter.name_simple
        })

        jsonData.verses.forEach(it => {
            soraString = `<p class="vers">${it.text_indopak} ⟬<span class="numbering">${it.verse_number}</span>⟭</p>`
            document.querySelector('.viewerFrame').insertAdjacentHTML('beforeEnd', soraString)
        })
    });
}

loadSora()

function navPage(e) {
    var page2go = e.previousSibling.previousSibling.value
    if (total_pages < page2go) {
        document.querySelector('.pageNumber').style.outlineColor = 'red'
        document.querySelector('.nav').style.borderColor = 'red'
        document.querySelector('.nav').style.color = 'red'
        alert('page not available, the last page of sora is ' + total_pages)
    } else {

        localStorage.setItem("suraPage", e.previousSibling.previousSibling.value);
        window.location.reload()
    }
}

function nextPage(e) {
    var page2go = (parseInt(currentPage) + 1)
    if (total_pages < page2go) {
        document.querySelector('.pageNumber').style.outlineColor = 'red'
        document.querySelector('.nav').style.borderColor = 'red'
        document.querySelector('.nav').style.color = 'red'
        alert('page not available, the last page of sora is ' + total_pages)

    } else {

        localStorage.setItem("suraPage", page2go);
        window.location.reload()
    }
}

function prevPage(e) {
    var page2go = (parseInt(currentPage) - 1)
    if (total_pages < page2go) {
        document.querySelector('.pageNumber').style.outlineColor = 'red'
        document.querySelector('.nav').style.borderColor = 'red'
        document.querySelector('.nav').style.color = 'red'
        alert('page not available, the last page of sora is ' + total_pages)
    } else {
        localStorage.setItem("suraPage", page2go);
        window.location.reload()
    }
}