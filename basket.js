function close_black(){
    document.querySelector(".black").style.display = `none`
    document.querySelector(".cash_card").style.display = `none`
}


function delete_basket(i){
    let d = document.querySelectorAll(".basket_card")
    document.querySelector(".basket").removeChild(d[i])
}

function make_basket(name, author, description, cost, i){
    let basket = "<div class=\"basket_card\" onclick=\"location.href='book.html'\">"
    basket = basket + "<div class=\"basket_book\"></div><div class=\"basket_about\">"
    basket = basket + "<h1 class=\"basket_name\">" + name + "</h1>"
    basket = basket + "<h4 class=\"basket_author\">" + author + "</h4>"
    basket = basket + "<h4 class=\"basket_description\">" + description + "</h4>"
    basket = basket + "<h3 class=\"basket_buy\">Купить: <button class=\"basket_price\" onclick='open_black(); event.cancelBubble=true'>" + cost + "₽</button><div></div><img src='Another/delete.png' onclick='delete_basket(" + i + "); event.cancelBubble=true'></h3>"
    basket = basket + "</div></div>"
    return basket
}
function make_order(name, author, description, status, cost){
    let order = "<div class=\"basket_card\" onclick=\"location.href='book.html'\">"
    order = order + "<div class=\"basket_book\"></div><div class=\"basket_about\">"
    order = order + "<h1 class=\"basket_name\">" + name + "</h1>"
    order = order + "<h4 class=\"basket_author\">" + author + "</h4>"
    order = order + "<h4 class=\"basket_description\">" + description + "</h4>"
    order = order + "<h4 class=\"basket_status\"><span>Статус: </span>" + status + "</h4>"
    order = order + "<h4 class=\"basket_status\"><span>Цена: </span>" + cost + "</h4>"
    order = order + "</div></div>"
    return order
}

function basket(){
    let names = ["Восхождение фениксов", "Управление вниманием", "Что будет дальше?", "Клин клином", "Сновидец. Грейуорен", "Яркие люди Древней Руси", "Испанский любовный обман"]
    let authors = ["Гуйюань Тянься", "Король Александр", "Махержи Робин", "Таль Онгель", "Стивотер Мэгги", "Акунин Борис", "Армас Елена"]
    let images = ["https://ndc.book24.ru/resize/820x1180/iblock/ba4/ba402c0e1de890005815c7c178edcd7f/1d9f7b02befaa3187bde390f800218e6.jpg", "https://ndc.book24.ru/resize/820x1180/iblock/1f9/1f98aa68e49e11fbd965ca77f135d401/5a5c8851991776373d0f00e23d8c246f.jpg", "https://ndc.book24.ru/resize/820x1180/iblock/0db/0db5b31c1686e3072d259c45236bad34/09d7ff00b7aae31058006eb7cb0919bb.jpg", "https://cdn.book24.ru/v2/ASE000000000865843/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ITD000000001306076/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ASE000000000864483/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ITD000000001252720/COVER/cover13d__w820.webp"]
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Lorem ipsum dolor sit amet."
    let kol = names.length
    let n = document.querySelector(".basket")
    n.innerHTML = ""
    for (let i = 0; i < kol; i++){
        c = 200 + parseInt(Math.random() * 800)
        n.innerHTML += make_basket(names[i], authors[i], description, c, i)
    }
    n = document.querySelectorAll(".basket_book")
    for (let i = 0; i < kol; i++){
        n[i].style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.45)), url(\"" + images[i] + "\")"
    }
    n = document.querySelectorAll(".order_text")
    n[0].style.color = `ghostwhite`
}

function order(){
    let names = ["Восхождение фениксов", "Управление вниманием", "Что будет дальше?", "Клин клином", "Сновидец. Грейуорен", "Яркие люди Древней Руси", "Испанский любовный обман"]
    let authors = ["Гуйюань Тянься", "Король Александр", "Махержи Робин", "Таль Онгель", "Стивотер Мэгги", "Акунин Борис", "Армас Елена"]
    let images = ["https://ndc.book24.ru/resize/820x1180/iblock/ba4/ba402c0e1de890005815c7c178edcd7f/1d9f7b02befaa3187bde390f800218e6.jpg", "https://ndc.book24.ru/resize/820x1180/iblock/1f9/1f98aa68e49e11fbd965ca77f135d401/5a5c8851991776373d0f00e23d8c246f.jpg", "https://ndc.book24.ru/resize/820x1180/iblock/0db/0db5b31c1686e3072d259c45236bad34/09d7ff00b7aae31058006eb7cb0919bb.jpg", "https://cdn.book24.ru/v2/ASE000000000865843/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ITD000000001306076/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ASE000000000864483/COVER/cover13d__w820.webp", "https://cdn.book24.ru/v2/ITD000000001252720/COVER/cover13d__w820.webp"]
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Lorem ipsum dolor sit amet."
    let statuses = ["Доставлено", "В пути"]
    let kol = names.length
    let n = document.querySelector(".basket")
    n.innerHTML = ""
    for (let i = 0; i < 3; i++){
        c = 200 + parseInt(Math.random() * 800)
        n.innerHTML += make_order(names[i], authors[i], description, statuses[i % 2], c)
    }
    n = document.querySelectorAll(".basket_book")
    for (let i = 0; i < 3; i++){
        n[i].style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.45)), url(\"" + images[i] + "\")"
    }
}


function change_basket(f){
    let n = document.querySelectorAll(".order_text")
    if (f){
        order()
        n[0].style.color = `lightskyblue`
        n[1].style.color = `ghostwhite`
    }else{
        basket()
        n[0].style.color = `ghostwhite`
        n[1].style.color = `lightskyblue`
    }
}

basket()