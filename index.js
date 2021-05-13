let date = document.querySelector(".date");
let time = document.querySelector(".time");
let session = document.querySelector(".isam");

function startTime() {

    let now = new Date();
    let year = now.getFullYear();
    let d = now.getDate();
    let day = now.getDay();
    let h = now.getHours();
    let m = now.getMonth();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let anotation = "AM";
    if (h > 12) {
        h = h % 12 || 12;
        anotation = "PM"
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    let days = new Array("Sun", "Mon", "Tue", "Wen", "Thur", "Fri", "Sat");
    let months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

    date.innerHTML = days[day] + " ," + d + "/ " + months[m] + "/" + year;

    time.innerHTML = h + ":" + min + ":" + sec;
    sessionStorage.innerHTML = anotation;
}

startTime();

setInterval(startTime, 1000);