document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let index = 0;
    const totalImages = images.length;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * 500}px)`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % totalImages;
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarousel();
    }, 5000);
});
