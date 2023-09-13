function make_calender(){
    var days = document.querySelector(".entry_day")
    for(i = 1; i <= 31; i++){
        let day = '<option class="day_n">' + i + '</option>'
        days.innerHTML += day;
    }
    var months = document.querySelector(".entry_month")
    for(i = 1; i <= 12; i++){
        let month = '<option class="month_n">' + i + '</option>'
        months.innerHTML += month;
    }
    var years = document.querySelector(".entry_year")
    for(i = 2022; i >= 1940; i--){
        let year = '<option class="year_n">' + i + '</option>'
        years.innerHTML += year;
    }
}
make_calender()

if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
    document.querySelector(".entry").style.width = "max-content"
    document.querySelector(".registration").style.width = "max-content"
    document.querySelector(".entery_reg").style.width = "25px"
    let inp = document.querySelectorAll(".entry_inp")
    for (let i = 0; i < inp.length; i++) {
        inp[i].style.fontSize = `35px`
        inp[i].style.width = `80%`
    }
    let h2 = document.querySelectorAll("entry_text")
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.fontSize = `40px`
    }
    document.querySelector("entry_t").style.fontSize = `35px`
    let s = document.querySelectorAll("select")
    for (let i = 0; i < s.length; i++) {
        s[i].style.fontSize = `30px`
        s[i].style.marginRight = `10px`
    }
}



