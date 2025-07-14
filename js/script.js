function aplicarFondoAleatorio() {
    const imagenes = [
        { url: "img/fondos/1.webp", position: "center 30%" },
        { url: "img/fondos/2.webp", position: "center 90%" },
        { url: "img/fondos/3.webp", position: "center 60%" },
        { url: "img/fondos/4.webp", position: "center 60%" },
        { url: "img/fondos/5.webp", position: "center 80%" },
        { url: "img/fondos/6.webp", position: "50% 85%" }
    ];
    const aleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    document.body.style.backgroundImage = `url("${aleatoria.url}")`;
    document.body.style.backgroundPosition = aleatoria.position;
}
aplicarFondoAleatorio();