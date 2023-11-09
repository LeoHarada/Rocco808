const collapsibleMenu = document.querySelector(".collapsible-menu");
const flower = document.querySelector(".flower");

collapsibleMenu.addEventListener("click", function () {
    collapsibleMenu.classList.toggle("collapsible-menu-expanded");
    flower.classList.toggle("flower-expanded");
});
