function checkStatus() {
    var currentTime = new Date();
    var currentHour = currentTime.getUTCHours() - 7; // make pst
    var currentDay = currentTime.getUTCDay();
    // nor times
    var openingHours = [
        { start: 8, end: 8, minuteStart: 0, minuteEnd: 25 },
        { start: 9, end: 9, minuteStart: 25, minuteEnd: 50 },
        { start: 12, end: 12, minuteStart: 5, minuteEnd: 55 }
    ];
    //wed times
    if (currentDay === 3) {
        openingHours = [
            { start: 9, end: 9, minuteStart: 0, minuteEnd: 25 },
            { start: 11, end: 12, minuteStart: 35, minuteEnd: 25 }
        ];
    }
    var isOpen = openingHours.some(function (timeRange) {
        return (
            currentHour == timeRange.start &&
            currentTime.getUTCMinutes() >= timeRange.minuteStart &&
            (currentHour < timeRange.end || (currentHour == timeRange.end && currentTime.getUTCMinutes() <= timeRange.minuteEnd))
        );
    });
    // disp status message
    var statusMessage = document.getElementById("statusMessage");
    if (isOpen) {
        statusMessage.textContent = "Open";
    } else {
        statusMessage.textContent = "Closed";
    }
}
checkStatus();
setInterval(checkStatus, 60000);
function bellsfun() {
    var x = document.getElementById("bells");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function sjustfun() {
    var x = document.getElementById("sugetions");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function busTimesfun() {
    var x = document.getElementById("busTimes");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function settingfun() {
    var x = document.getElementById("settings");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//dark mode toogle
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Save user preference to a cookie
    var isDarkMode = element.classList.contains("dark-mode");
    setCookie("darkMode", isDarkMode.toString(), 365);
}

//save as cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

//get cokie vaule
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

//find saved vaule
var savedDarkMode = getCookie("darkMode");
if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
}