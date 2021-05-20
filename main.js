const revealDate = new Date(Date.UTC(2021, 4, 23, 22));
const contentElement = document.getElementById('content');

updateRemainingTime();

const intervalId = setInterval(updateRemainingTime, 1000);

function updateRemainingTime() {
    contentElement.innerText = getRemainingTimeString();
}

function getRemainingTimeString() {
    const millis = revealDate.valueOf() - Date.now();

    if (millis <= 0) {
        return getTheme();
    } else {
        const hours = Math.floor(millis / (1000 * 60 * 60))
        const minutes = Math.floor(millis % (1000 * 60 * 60) / (1000 * 60))
        const seconds = Math.floor(millis % (1000 * 60) / (1000))
        return `${hours}h ${minutes}m ${seconds}s`;
    }
}

function getTheme() {
    return 'Theme:\nSuper Nice Theme';
}