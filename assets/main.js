window.addEventListener("scroll", onScroll);

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 500,
}).reveal(`
  #introduction,
  #introduction .cont-img img,
  #introduction .stats,
  #services,
  #services .title,
  #services .cards .card,
  #about,
  #about .title,
  #about .content p,
  #about .content img,
  #contact,
  #contact .title,
  #contact .content,
  footer
  `);
