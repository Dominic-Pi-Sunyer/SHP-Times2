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
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
let saveFile = () => {

    // Get the data from each element on the form.
    const email = document.getElementById('txtEmail');
    const msg = document.getElementById('msg');

    // This variable stores all the data.
    let data =
        'Email: ' + email.value + ' \r\n ' +
        'Message: ' + msg.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}