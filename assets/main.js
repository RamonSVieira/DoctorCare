function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
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
  reset: true,
}).reveal(`
  #introduction,
  #introduction img,
  #introduction .stats,
  #services,
  #services .title,
  #services .cards .card 
  `);
