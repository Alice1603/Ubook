// Размер значка меню
if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
    document.querySelector(".panel_logo").style.fontSize = `${document.getElementById("head").offsetHeight - 50}px`
    document.querySelector(".panel_logo").style.height = `${document.getElementById("head").offsetHeight - 45}px`
    document.querySelector(".panel_user_logo").style.width = `170px`
    document.querySelector(".panel_user_name").style.fontSize = `40px`
    document.querySelector(".menu_listing").style.fontSize = `25px`
}else{
    document.querySelector(".panel_logo").style.fontSize = `${document.getElementById("head").offsetHeight - 35}px`
    document.querySelector(".panel_logo").style.height = `${document.getElementById("head").offsetHeight - 30}px`
}

console.log(document.styleSheets[2])

