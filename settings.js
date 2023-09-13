FReader = new FileReader();
FReader.onload = function(e) {
    document.querySelector(".img").style.backgroundImage = "url(" + e.target.result + ")";
};

function set_logo(){
    f = document.getElementById("image_uploads")
    FReader.readAsDataURL(f.files[0])
}

if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
    document.querySelector(".img").style.height = `225px`
    document.querySelector(".add_img label").style.fontSize = `30px`
    document.querySelector(".back").style.fontSize = `30px`
    document.querySelector("section h1").style.fontSize = `50px`
    let inp = document.querySelectorAll(".inp")
    for (let i = 0; i < inp.length; i++) {
        inp[i].style.fontSize = `35px`
        inp[i].style.width = `80%`
    }
    let h2 = document.querySelectorAll("h2")
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.fontSize = `40px`
    }
    let s = document.querySelectorAll("select")
    for (let i = 0; i < s.length; i++) {
        s[i].style.fontSize = `30px`
        s[i].style.marginRight = `10px`
    }
    document.querySelector(".card").style.width = `500px`
    document.querySelector(".title").style.fontSize = `35px`
    s = document.querySelectorAll(".title-number")
    for (let i = 0; i < s.length; i++) {
        s[i].style.fontSize = `30px`
    }
    s = document.querySelectorAll(".i")
    for (let i = 0; i < s.length; i++) {
        s[i].style.fontSize = `25px`
    }
    document.querySelector("span").style.fontSize = `30px`
    document.querySelector(".enter").style.fontSize = `38px`
}