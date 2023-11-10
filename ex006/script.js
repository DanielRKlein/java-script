const num = window.document.querySelector('div#screen')

function add() {
    num.innerHTML = `${parseInt(num.innerText) + 1}`;
}

function take() {
    num.innerHTML = `${parseInt(num.innerText) - 1}`;
}