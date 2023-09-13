function make_header(entered = 1){
    let header = "<div class=\"lupa\" id=\"lupa\">"
    header = header + "<img src=\"Header/pictures/лупа.png\" onclick=\"lupa()\">"
    header = header + "<div class=\"search_by\" id=\"search_by\">"
    header = header + "<input id=\"upper_search\" placeholder=\"Поиск\">"
    header = header + "<select class=\"choose_g\" onchange=\"\" id=\"choose_g\">"
    header = header + "<option class=\"choose_by\">Поиск по названию</option>"
    header = header + "<option class=\"choose_by\">Поиск по автору</option>"
    header = header + "<option class=\"choose_by\">Поиск по издательству</option></select>"
    header = header + "<button class=\"x\" onclick=\"sea()\" id=\"x\">X</button>"
    header = header + "</div></div>"
    if (entered) {
        header = header + "<img src=\"Header/pictures/logo.png\" class=\"logo\" onclick=\"location.href='personal.html'\">"
    }else{
        header = header + "<div class='entred' onclick='login()'>Вход/Регистрация</div>"
    }
    return header
}

function change_entry(){
    document.getElementById("head").innerHTML = make_header(1)
}

function close_black(f){
    document.querySelector(".black").style.display = `none`
    document.querySelector(".entry").style.display = `none`
    document.querySelector(".registration").style.display = `none`
    if (f){
        change_entry()
    }
}

function change_reg(){
    document.querySelector(".black").style.display = `flex`
    document.querySelector(".entry").style.display = `none`
    document.querySelector(".registration").style.display = `initial`
}

function login(){
    document.querySelector(".black").style.display = `flex`
    document.querySelector(".entry").style.display = `initial`
}

document.getElementById("head").innerHTML = make_header(0)
if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
    document.querySelector(".entred").style.fontSize = `30px`
}