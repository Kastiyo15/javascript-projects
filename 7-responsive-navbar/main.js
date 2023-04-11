// Variables
const el_header = document.querySelector(".header");
const el_burger = document.querySelector(".nav-toggle");
const el_navLinks = document.querySelector(".links");

el_burger.addEventListener("click", function () {
  el_navLinks.classList.toggle("show-links");
});
