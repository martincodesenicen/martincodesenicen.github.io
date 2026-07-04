console.log("Portfolio listo");

const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {

    const images = slider.querySelectorAll("img");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    let current = 0;

    function show(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextSlide() {
        current++;

        if (current >= images.length) {
            current = 0;
        }

        show(current);
    }

    function prevSlide() {
        current--;

        if (current < 0) {
            current = images.length - 1;
        }

        show(current);
    }

    show(current);

    let interval = setInterval(nextSlide, 5000);

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    slider.addEventListener("mouseenter", () => {
        clearInterval(interval);
    });

    slider.addEventListener("mouseleave", () => {
        interval = setInterval(nextSlide, 5000);
    });

});

lucide.createIcons();
