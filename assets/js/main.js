// Menu Show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
// Active And Remove Menu
const navLink = document.querySelectorAll("nav__link");

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // Remove Menu Mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
// Scroll Reveal Animation
const sr = ScrollReveal({
  // origin: 'top',
  // distance: '80px',
  duration: 2000,
  reset: "false",
});
// Scroll Home
sr.reveal(".home__title, .home__perkenalan, .home__description", {
  delay: 100,
});
sr.reveal(".button", {
  delay: 200,
  reset: false,
});
sr.reveal(".home__img", {
  delay: 100,
});
sr.reveal(".home__social-icon", {
  interval: 200,
});
// Scroll About
sr.reveal(".about__img", {
  delay: 100,
  reset: false,
});
sr.reveal(".about__subtitle", {
  delay: 100,
});
sr.reveal(".about__text", {
  delay: 200,
});
// Scroll Skills
sr.reveal(".skills__subtitle", {
  delay: 100,
});
sr.reveal(".project__subtitle", {
  delay: 100,
});
sr.reveal(".skills__text", {
  delay: 200,
});
sr.reveal("skills__data", {
  interval: 200,
});
sr.reveal("skills__img", {
  delay: 200,
});
// Scroll Work
sr.reveal(".work__img", {
  interval: 200,
});
// Scroll Project
sr.reveal(".Project__input", {
  delay: 200,
});
// Sweet Alert
$("#sumbit").click(function () {
  alert("Anjay");
});
