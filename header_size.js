// Размер хэдера
if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
    document.getElementById("head").style.height = `120px`
    document.querySelector("body").style.paddingTop = `120px`
}else{
    document.getElementById("head").style.height = `60px`
    document.querySelector("body").style.paddingTop = `60px`
}
