window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(introduction);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a seção passou da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTOpReachorPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionHeight + sectionTop;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTOpReachorPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(
    `nav .menu ul a[href*=${sectionId}]`
  );
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  } else {
    menuElement.classList.remove("active");
  }
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
