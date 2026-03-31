// ===== CONFIG (TINGGAL UBAH DI SINI SAJA) =====
const config = {
    hero: "images/haywaylogo.png",
    tshirt: "images/mockup10.png",
    pants: "images/mockup4.png",
    galleryTotal: 10 // jumlah foto
};

// ===== HERO BACKGROUND =====
const hero = document.getElementById("hero");
hero.style.background = `url('${config.hero}') center/cover no-repeat`;

// ===== PRODUCT IMAGES =====
const tshirt = document.getElementById("tshirt");
const pants = document.getElementById("pants");

tshirt.src = config.tshirt;
pants.src = config.pants;

// fallback kalau error
tshirt.onerror = () => tshirt.src = "https://via.placeholder.com/500";
pants.onerror = () => pants.src = "https://via.placeholder.com/500";

// ===== AUTO GALLERY =====
const gallery = document.getElementById("gallery");

for(let i = 1; i <= config.galleryTotal; i++){
    const img = document.createElement("img");

    img.src = `images/img${i}.jpg`;

    img.onerror = () => {
        img.src = "https://via.placeholder.com/400";
    };

    gallery.appendChild(img);
}

// ===== LOADER =====
window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
});

// ===== SCROLL ANIMATION =====
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    fades.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});
