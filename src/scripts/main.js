document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let index = 0;

    function updateCarousel() {
        const carouselimgWidth = images[0].getBoundingClientRect().width; // Calcula a largura da imagem
        carousel.style.transform = `translateX(${-index * carouselimgWidth}px)`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % images.length; // Avança para a próxima imagem
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length; // Volta para a imagem anterior
        updateCarousel();
    });

    window.addEventListener("resize", function () {
        // Recalcula a posição do carrossel ao redimensionar a janela
        updateCarousel();
    });

    setInterval(() => {
        index = (index + 1) % images.length; // Avança automaticamente a cada 5 segundos
        updateCarousel();
    }, 5000);

    // Inicializa o carrossel na posição correta
    updateCarousel();
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

document.addEventListener("DOMContentLoaded", function () {
    const modalProfsOpen = document.querySelector("#abrir-modal-profs");
    const modalProfs = document.querySelector(".modalbg-profs");
    const modalProfsClose = document.querySelector(".close_modal_profs");

    // Abrir o modal das professoras
    modalProfsOpen.addEventListener("click", function () {
        modalProfs.style.display = "flex";
    });

    // Fechar o modal das professoras
    modalProfsClose.addEventListener("click", function () {
        modalProfs.style.display = "none";
    });

    // Fechar o modal ao clicar fora dele
    modalProfs.addEventListener("click", function (e) {
        if (e.target === modalProfs) {
            modalProfs.style.display = "none";
        }
    });
});