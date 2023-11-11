const hour = window.document.querySelector('span#hour');
const minute = window.document.querySelector('span#minutes')
const second = window.document.querySelector('span#seconds')

setInterval(() => {
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.innerText = `${formatTime(hours)}`;
    minute.innerText = `${formatTime(minutes)}`;
    second.innerText = `${formatTime(seconds)}`;
}, 1000)

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}