const slide = window.document.querySelector('img.slide');
const time = 2000;

let img = [
    'imagens/cute-dog-with-empty-speech-bubble-jack-russell-terrier-T0GW83.jpg',
    'imagens/dog-with-speech-bubble-1474824714jw5.jpg',
    'imagens/png-clipart-white-high-definition-video-display-resolution-ground-crack-background-cracked-illustration-angle-furniture.png'
]
let count = 0;

function moveSlide() {
    slide.src = img[count];

    if(count < img.length) {
        count++;
    }
    else {
        count = 0;
    }

    setTimeout("moveSlide()", time);
}

window.onload = moveSlide();
