console.log("Portfolio engine active.");

// Inicialización de Sliders nativos para los proyectos
const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
    const images = slider.querySelectorAll("img");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    if (images.length === 0) return;

    let current = 0;

    function show(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextSlide() {
        current = (current + 1) % images.length;
        show(current);
    }

    function prevSlide() {
        current = (current - 1 + images.length) % images.length;
        show(current);
    }

    // Inicializar primer slide
    show(current);

    // Auto-advance de slides seguro
    let interval = setInterval(nextSlide, 5000);

    next.addEventListener("click", () => {
        nextSlide();
    });

    prev.addEventListener("click", () => {
        prevSlide();
    });

    // Pausar reproducción automática al interactuar con el mouse
    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", () => {
        interval = setInterval(nextSlide, 5000);
    });
});

// Renderizado de iconos vectoriales de Lucide
// Esto reemplaza los emojis de la versión anterior por elementos limpios e idénticos en grosor.
lucide.createIcons();
