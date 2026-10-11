// lightbox function 
const lightbox = document.createElement("div") 
lightbox.id = "lightbox"
document.body.appendChild(lightbox) 
const images = document.querySelectorAll(".gallery-grid img")
images.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("active")
        const img = document.createElement("img")
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})
lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active")

})
// lightbox schlißen Escape
const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = ""; 
    };

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });


// Burger Dings Function 
document.addEventListener("DOMContentLoaded", () => {
    const DreiZElle = document.getElementById("3_zelle"); 
    const nave = document.querySelector(".nav-links");

    if (DreiZElle && nave) {
        
        DreiZElle.addEventListener("click", () => {
            nave.classList.toggle("active");
        });

    
        document.querySelectorAll(".nav-links a ").forEach(link => {
            link.addEventListener("click", () => {
                nave.classList.remove("active"); 
            });
        });
    } else {
        console.error("Элемент #3_zelle или .nav-links не найден в DOM!");
    }
    
});
// button back to top
const backToTopButton = document.getElementById("back-to-top");
if (backToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// Logo spin animation
const logo = document.querySelector(".logo img");
if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
        logo.classList.add("spin-animation");
        logo.addEventListener("animationend", () => {
            logo.classList.remove("spin-animation");
        }, { once: true });
    });
}