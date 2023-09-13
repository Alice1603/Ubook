var star = 5
function change_stars(s){
    star = s
    let stars = document.querySelectorAll(".stars1 img")
    for (let i = 0; i < 5; i++){
        if (i <= s){
            stars[i].style.opacity = `1`
        }else{
            stars[i].style.opacity = `0.6`
        }
    }
}

function make_book(name, author, description, cost){
    let book = "<div class=\"center\">"
    book = book + "<div class=\"book_name\">" + name + "</div>"
    book = book + "<div class=\"book_author\"><span>Автор: </span>" + author + "</div>"
    book = book + "<div class=\"stars\"><span>Оценка:</span><img src=\"Another/звезда.png\"><img src=\"Another/звезда.png\"><img src=\"Another/звезда.png\"><img src=\"Another/звезда.png\"><img src=\"Another/звезда.png\"></div>"
    book = book + "<div class=\"book_genres\"><span>Жанры: </span>" + "Романтика, Фэнтези" + "</div>"
    book = book + "<div class='row_book'><div class=\"book_description\"><span>Дата выхода: </span>" + "22.09.2022" + "</div><div class=\"book_description\"><span>Рейтинг: </span>" + "16+" + "</div></div>"
    book = book + "<div class=\"book_description\"><span>Описание: </span>" + description + "</div>"
    book = book + "<h3 class=\"book_buy\">Купить: <button class=\"book_price\" onclick='open_black(); event.cancelBubble=true'>" + cost + "₽</button></h3>"
    book = book + "</div>"
    return book
}

function make_review(name, text){
    let review = "<div class=\"review\">"
    review = review + "<div class=\"review_logo\"></div>"
    review = review + "<div class=\"rev\">"
    review = review + "<div class=\"review_name\">" + name + "</div>"
    review = review + "<div class=\"review_text\">" + text + "</div>"
    review = review + "</div>"
    return review
}

function add_review(){
    let logo = "Header/pictures/logo.png"
    let n = document.querySelector(".reviews")
    let name = "User" + (102 + parseInt(Math.random() * 2222))
    let text = document.querySelector("textarea")
    n.innerHTML += make_review(name, text.value)
    n = document.querySelectorAll(".review_logo")
    n[n.length - 1].style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.45)), url(\"" + logo + "\")"
    text.value = ""
}

function books(){
    let name = "Восхождение фениксов"
    let author = "Гуйюань Тянься"
    let image = "https://ndc.book24.ru/resize/820x1180/iblock/ba4/ba402c0e1de890005815c7c178edcd7f/1d9f7b02befaa3187bde390f800218e6.jpg"
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let n = document.querySelector(".about_book")
    c = 200 + parseInt(Math.random() * 800)
    n.innerHTML += make_book(name, author, description, c)
    n = document.querySelector(".book_img")
    n.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.45)), url(\"" + image + "\")"
}
books()

function reviews(){
    let name = "User"
    let logo = ["Header/pictures/logo.png", "Header/pictures/icon.png"]
    let texts = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    let kol = texts.length
    let n = document.querySelector(".reviews")
    for (let i = 0; i < kol; i++){
        name = name + (102 + parseInt(Math.random() * 2222))
        n.innerHTML += make_review(name, texts[i])
    }
    n = document.querySelectorAll(".review_logo")
    for (let i = 0; i < kol; i++){
        n[i].style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.45)), url(\"" + logo[i % 2] + "\")"
    }
    let s = parseInt(Math.random() * 5)
    let stars = document.querySelectorAll(".stars img")
    for (let i = 0; i < 5; i++){
        if (i <= s){
            stars[i].style.opacity = `1`
        }else{
            stars[i].style.opacity = `0.6`
        }
    }
}
reviews()


function make_author(name, author, cost){
    let card = "<div class=\"card\" onclick=\"location.href='book.html'\">"
    card = card + "<div class=\"img1\"></div>"
    card = card + "<h1 class=\"name\">" + name + "</h1>"
    card = card + "<h4 class=\"author\">" + author + "</h4>"
    card = card + "<h3 class=\"buy\">Купить: <button class=\"price\">" + cost + "₽</button></h3>"
    card = card + "</div>"
    return card
}

function make_card(name, author, cost){
    let card = "<div class=\"card\" onclick=\"location.href='book.html'\">"
    card = card + "<div class=\"img2\"></div>"
    card = card + "<h1 class=\"name\">" + name + "</h1>"
    card = card + "<h4 class=\"author\">" + author + "</h4>"
    card = card + "<h3 class=\"buy\">Купить: <button class=\"price\">" + cost + "₽</button></h3>"
    card = card + "</div>"
    return card
}

function cards(){
    let names = ["Восхождение фениксов", "Управление вниманием", "Что будет дальше?", "Клин клином", "Сновидец. Грейуорен", "Яркие люди Древней Руси", "Испанский любовный обман"]
    let author = "Гуйюань Тянься"
    let authors = ["Гуйюань Тянься", "Король Александр", "Махержи Робин", "Таль Онгель", "Стивотер Мэгги", "Акунин Борис", "Армас Елена"]
    let images = ["https://ndc.book24.ru/resize/820x1180/iblock/ba4/ba402c0e1de890005815c7c178edcd7f/1d9f7b02befaa3187bde390f800218e6.jpg", "https://ndc.book24.ru/resize/820x1180/iblock/1f9/1f98aa68e49e11fbd965ca77f135d401/5a5c8851991776373d0f00e23d8c246f.jpg", "https://ndc.book24.ru/resize/820x1180/iblock/0db/0db5b31c1686e3072d259c45236bad34/09d7ff00b7aae31058006eb7cb0919bb.jpg", "https://cdn.book24.ru/v2/ASE000000000865843/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ITD000000001306076/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ASE000000000864483/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ITD000000001252720/COVER/cover13d__w820.webp"]
    let kol = names.length
    let n1 = document.querySelector(".under")
    if (kol > 0) {
        n1.innerHTML += "<h1 class=\"heads\">Другие книги " + author + "</h1><div class=\"cards1\"></div>"
        let n = document.querySelector(".cards1")
        for (let i = 1; i < 5; i++) {
            c = 200 + parseInt(Math.random() * 800)
            n.innerHTML += make_author(names[i], authors[0], c)
        }
        let n2 = document.querySelectorAll(".img1")
        for (let i = 0; i < 4; i++) {
            n2[i].style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4)), url(\"" + images[i + 1] + "\")"
        }
    }
    n1.innerHTML += "<h1 class=\"heads\">Похожие произведения</h1><div class=\"cards2\"></div>"
    let n = document.querySelector(".cards2")
    for (let i = 1; i < kol; i++) {
        c = 200 + parseInt(Math.random() * 800)
        n.innerHTML += make_card(names[i], authors[i], c)
    }
    let n2 = document.querySelectorAll(".img2")
    for (let i = 0; i < kol - 1; i++) {
        n2[i].style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.45)), url(\"" + images[i + 1] + "\")"
    }
}
cards()

if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
    document.querySelector(".upper a").style.fontSize = `30px`
}