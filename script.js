// LOADER
window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
});

// MENU
function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});
