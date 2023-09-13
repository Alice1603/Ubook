function make_card(name, author, cost){
    let card = "<div class=\"card\" onclick=\"location.href='book.html'\">"
    card = card + "<div class=\"img\"></div>"
    card = card + "<h1 class=\"name\">" + name + "</h1>"
    card = card + "<h4 class=\"author\">" + author + "</h4>"
    card = card + "<h3 class=\"buy\">Купить: <button class=\"price\">" + cost + "₽</button></h3>"
    card = card + "</div>"
    return card
}


function cards(){
    let names = ["Восхождение фениксов", "Управление вниманием", "Что будет дальше?", "Клин клином", "Сновидец. Грейуорен", "Яркие люди Древней Руси", "Испанский любовный обман"]
    let authors = ["Гуйюань Тянься", "Король Александр", "Махержи Робин", "Таль Онгель", "Стивотер Мэгги", "Акунин Борис", "Армас Елена"]
    let images = ["https://ndc.book24.ru/resize/820x1180/iblock/ba4/ba402c0e1de890005815c7c178edcd7f/1d9f7b02befaa3187bde390f800218e6.jpg", "https://ndc.book24.ru/resize/820x1180/iblock/1f9/1f98aa68e49e11fbd965ca77f135d401/5a5c8851991776373d0f00e23d8c246f.jpg", "https://ndc.book24.ru/resize/820x1180/iblock/0db/0db5b31c1686e3072d259c45236bad34/09d7ff00b7aae31058006eb7cb0919bb.jpg", "https://cdn.book24.ru/v2/ASE000000000865843/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ITD000000001306076/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ASE000000000864483/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ITD000000001252720/COVER/cover13d__w820.webp"]
    let kol = names.length
    let n = document.querySelector(".catalog")
    for (let i = 1; i < kol; i++) {
        c = 200 + parseInt(Math.random() * 800)
        n.innerHTML += make_card(names[i], authors[i], c)
    }
    n = document.querySelectorAll(".img")
    for (let i = 0; i < kol - 1; i++) {
        n[i].style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.45)), url(\"" + images[i + 1] + "\")"
    }
}
cards()
