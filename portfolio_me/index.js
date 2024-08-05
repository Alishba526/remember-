// menuicon navbar
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuicon.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll setion active link
let setion = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  setion.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]");
        classList.add("active");
      });
    }
  });
  //heder sticky
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
};
//(swiper)
var swiper = new swiper(".myswiper", {
  slidesPerveiw: 1,
  spaceBetween: 50,
  loop: true,
  grapcursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    pextEl: ".swiper-button-next",
  },
});
