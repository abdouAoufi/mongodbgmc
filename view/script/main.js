const menuBtn = document.getElementById("menu");
const menu = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
    if ((menu.style.display === "none")) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});