const revealDate = new Date(Date.UTC(2021, 4, 30, 22));
const contentElement = document.getElementById('content');

const intervalId = setInterval(updateRemainingTime, 1000);

updateRemainingTime();

function updateRemainingTime() {
    contentElement.innerText = getRemainingTimeString();
}

function getRemainingTimeString() {
    const millis = revealDate.valueOf() - Date.now();

    if (millis <= 0) {
        if(intervalId != null) clearInterval(intervalId);
        return "GAMEJAM IS OVER";//getTheme();
    }

    const hours = (Math.floor(millis / (1000 * 60 * 60))).toString().padStart(2, '0');
    const minutes = (Math.floor(millis % (1000 * 60 * 60) / (1000 * 60))).toString().padStart(2, '0');
    const seconds = (Math.floor(millis % (1000 * 60) / (1000))).toString().padStart(2, '0');
    return `${hours}h ${minutes}m ${seconds}s`;

}

function getTheme() {
    let result = null;
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://132b8e9daefa.ngrok.io", false);
    xhttp.setRequestHeader('Content-type', 'text/plain');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
            result = this.responseText;
    };
    xhttp.send();

    return result;
}
