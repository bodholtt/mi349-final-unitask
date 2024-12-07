const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    console.log(nav);
    nav.classList.toggle("hide-mobile");
});