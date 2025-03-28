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

document.addEventListener("DOMContentLoaded", function () {
    const modalDevsOpen = document.querySelector("#abrir-modal-devs");
    const modalDevs = document.querySelector(".modalbg");
    const modalDevsClose = document.querySelector(".close_modal");

    if (!modalDevsOpen) {
        console.error("Erro: Botão #abrir-modal-devs não encontrado no DOM!");
        return;
    }

    // Abrir o modal
    modalDevsOpen.addEventListener("click", function () {
        modalDevs.style.display = "flex";
    });

    // Fechar o modal
    modalDevsClose.addEventListener("click", function () {
        modalDevs.style.display = "none";
        
    });

    // Fechar o modal ao clicar fora dele
    modalDevs.addEventListener("click", function (e) {
        if (e.target === modalDevs) {
            modalDevs.style.display = "none";
            
        }
    });
});
