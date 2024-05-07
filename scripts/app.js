const navBtn = document.querySelector(".nav__btn");
const navMobile = document.querySelector(".nav-mobile");

let navOpen = false;
navBtn.addEventListener("click", function () {
  if (navOpen) {
    navBtn.classList.remove("nav__btn--open");
    navMobile.classList.remove("nav-menu--open");
    navOpen = false;
  } else {
    navBtn.classList.add("nav__btn--open");
    navMobile.classList.add("nav-menu--open");
    navOpen = true;
  }
});

console.log(navBtn)