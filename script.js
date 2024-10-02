// JavaScript for Carousel
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

// Change item on click
document.querySelector('.carousel').addEventListener('click', showNextItem);
