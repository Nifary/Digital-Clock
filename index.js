// DIGITAL CLOCK PROGRAM

function digitalwatch() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const hoursStr = hours < 10 ? "0" + hours : hours;
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    const secondsStr = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hoursStr}:${minutesStr}:${secondsStr} ${meridian}`;

    document.getElementById("digital-watch").textContent = timeString;
}

digitalwatch();

setInterval(digitalwatch, 1000);