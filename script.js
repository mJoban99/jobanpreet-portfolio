const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

const fadeElements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  fadeElements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if (elementPosition < screenPosition) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});