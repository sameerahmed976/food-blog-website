const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close");

navLinks.classList.add("show-links");
hamburger.addEventListener("click", () => {
  console.log("click");
  navLinks.classList.remove("show-links");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.add("show-links");
});
