function open_black(){
    document.querySelector(".black").style.display = `flex`
    document.querySelector(".cash_card").style.display = `initial`
}


if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
    document.querySelector(".cash_card").style.width = "max-content"
    let inp = document.querySelectorAll(".entry_inp")
    for (let i = 0; i < inp.length; i++) {
        inp[i].style.fontSize = `35px`
        inp[i].style.width = `80%`
    }
    let h2 = document.querySelectorAll("entry_text")
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.fontSize = `40px`
    }
    document.querySelector(".credit_card").style.width = `500px`
    document.querySelector(".title").style.fontSize = `35px`
    s = document.querySelectorAll(".title-number")
    for (let i = 0; i < s.length; i++) {
        s[i].style.fontSize = `25px`
    }
    s = document.querySelectorAll(".i")
    for (let i = 0; i < s.length; i++) {
        s[i].style.fontSize = `20px`
    }
}
