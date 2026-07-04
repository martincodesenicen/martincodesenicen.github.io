console.log("Portfolio listo");
const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider=>{

    const images = slider.querySelectorAll("img");

    const next = slider.querySelector(".next");

    const prev = slider.querySelector(".prev");

    let current = 0;

    let interval = setInterval(nextSlide,5000);

    slider.addEventListener("mouseenter",()=>{
    
        clearInterval(interval);
    
    });
    
    slider.addEventListener("mouseleave",()=>{
    
        interval = setInterval(nextSlide,5000);
    
    });

    function show(index){

        images.forEach(img=>img.classList.remove("active"));

        images[index].classList.add("active");

    }

    next.addEventListener("click",()=>{

        current++;

        if(current>=images.length)
            current=0;

        show(current);

    });

    prev.addEventListener("click",()=>{

        current--;

        if(current<0)
            current=images.length-1;

        show(current);

    });

    setInterval(()=>{
    
        current++;
    
        if(current>=images.length)
            current=0;
    
        show(current);
    
    },5000);

});

lucide.createIcons();
