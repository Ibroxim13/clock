function displayTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.querySelector(".session");
    var day = dateTime.getDate();
    var month = dateTime.getUTCMonth() + 1;
    var year = dateTime.getFullYear();

    if (hours >= 12) {
        session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        }
        else {
            return num
        }
    }

    var currentDate = `${getZero(day)} / ${getZero(month)} / ${year}`;
    document.querySelector(".hours").innerHTML = getZero(hours);
    document.querySelector(".minutes").innerHTML = getZero(minutes);
    document.querySelector(".seconds").innerHTML = getZero(seconds);
    document.querySelector(".date").innerHTML = currentDate;
}

setInterval(displayTime, 1000)

