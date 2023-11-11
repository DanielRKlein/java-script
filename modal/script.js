let hidden = window.document.querySelector('div#invisible')
let backbutton = window.document.querySelector('div#back')

function modal() {
    hidden.style.display = 'block';
}

function back() {
    hidden.style.display = 'none';
}