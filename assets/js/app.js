const carousel = document.getElementById('carousel');
const right = document.getElementById('right');
const left = document.getElementById('left');

let arrayImage = [
    'image/image1.jpg',
    'image/image2.jpg',
    'image/image3.jpg',
    'image/image4.jpg',
    'image/image5.jpg',
    'image/image2.jpg',
    'image/image3.jpg',
    'image/image4.jpg',
    'image/image5.jpg',
    'image/image6.jpg',
    'image/image7.jpg',
    'image/image8.jpg',
    'image/image9.jpg',
    'image/image10.jpg',
];

carousel.src = arrayImage[0];
let position = 0;

function moveRight() {
    setInterval(function () {
        if (position >= arrayImage.length - 1) {
            position = 0;
            carousel.src = carousel[position];
            return;
        }
        carousel.src = arrayImage[position + 1];
        position++;
        console.log(position)
        if (position === arrayImage.length -1) {
            position = 0;
        }
    }, 2000);
}

function moveLeft() {
    setInterval(function () {
        if (position < 1) {
            position = arrayImage.length - 1;
            carousel.src = arrayImage[position];
            return;
        }
        carousel.src = arrayImage[position - 1];
        position--;
    }, 2000);
}

right.addEventListener("click", function () {
    moveRight();
})

left.addEventListener("click", function () {
    moveLeft();
})























