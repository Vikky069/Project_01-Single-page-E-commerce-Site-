const navbg = document.querySelector(".navbar");
const navcolor = document.getElementsByClassName("nav-link");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    navbg.classList.add("addBg");
    for (let i = 0; i < navcolor.length; i++) {
      navcolor[i].classList.add("addtext");
    }
  } else {
    navbg.classList.remove("addBg");
    for (let i = 0; i < navcolor.length; i++)
      navcolor[i].classList.remove("addtext");
  }
});

const Hamburger = document.querySelector(".navbar-toggler");

Hamburger.addEventListener("click", function () {
  navbg.classList.add("addBg");
});

