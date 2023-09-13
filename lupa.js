var vis = document.getElementById("search_by")
var lup = document.getElementById("lupa")

// Открытие поля поиска
function lupa(){
    vis.style.display = "flex"
    lup.style.border = "2px solid deepskyblue"
    lup.style.borderRadius = `${lup.offsetHeight / 2}px`
    lup.style.width = "max-content"
    document.getElementById("choose_g").style.borderRadius = `${document.getElementById("choose_g").offsetHeight / 2}px`
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        document.getElementById("choose_g").style.fontSize = `30px`
        document.getElementById("choose_g").style.width = `border-box`
        document.getElementById("upper_search").style.fontSize = `30px`
        document.getElementById("upper_search").style.width = `200px`
        document.getElementById("x").style.fontSize = `30px`
    }
}

// Закрытие поля поиска
function sea(){
    lup.style.minWidth = "initial"
    lup.style.width = "auto"
    vis.style.display = "none"
    lup.style.border = "0"
}