const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navlinks = document.querySelectorAll(".nav-links li");

const handleNav = () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
};
const navSlide = () => {
  burger.addEventListener("click", handleNav);
};
navSlide();
