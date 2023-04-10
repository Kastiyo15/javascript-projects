// Variables
const el_header = document.querySelector(".header");
const el_project1 = document.querySelector(".project-1");

function navbarTransition() {
  let distToProject = el_project1.getBoundingClientRect().top;
  let distPercentage = 0;
  let threshold = 50;

  if (distToProject <= threshold && distToProject >= -threshold) {
    distPercentage = Math.floor((distToProject / threshold) * 100);
  }

  let scaleOf1 = clamp((100 - distPercentage) / 100, 0, 1);

  if (distToProject <= threshold) {
    el_header.style.opacity = `${scaleOf1}`;
    el_header.style.transform = `scale(${scaleOf1})`;
  } else {
    el_header.style.opacity = 0;
    el_header.style.transform = "scale(0)";
  }
}

// Clamp a value between min and max
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

window.addEventListener("scroll", navbarTransition);
