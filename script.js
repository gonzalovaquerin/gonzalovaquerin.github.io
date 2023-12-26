document.addEventListener("DOMContentLoaded", function () {
    // Configuración de los carruseles
    const carousels = [
        { id: 'carousel1', interval: 3000 },
        { id: 'carousel2', interval: 3000 },
        { id: 'carousel3', interval: 3000 },
        { id: 'carousel4', interval: 3000 },
        { id: 'carousel5', interval: 3000 },
        { id: 'carousel6', interval: 3000 },
        { id: 'carousel7', interval: 3000 },
        { id: 'carousel8', interval: 3000 },
        { id: 'carousel9', interval: 3000 },

        // Agrega más objetos de configuración según sea necesario
    ];

    // Inicializar cada carrusel
    carousels.forEach(configureCarousel);

    function configureCarousel(carousel) {
        let currentIndex = 0;
        const images = document.querySelectorAll(`#${carousel.id} .slider img`);
        const totalImages = images.length;

        function showImage(index) {
            images.forEach((image, i) => {
                if (i === index) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }

        setInterval(nextImage, carousel.interval);
    }
});