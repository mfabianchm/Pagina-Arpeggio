const hero = document.querySelector(".hero");

import { applyAnimation } from "./modules/hero.js";
import { startObservers } from "./modules/observers-animations.js";
import { runClicksInformes } from "./modules/whatsApp_clicks.js";

//start observers animations

startObservers();

// HERO-ANIMATIONS//

const elementswithIdFadeInLoad = document.querySelectorAll("#fade-in-load");
const circlesDesktopVersion = document.querySelectorAll("#circle-desktop");
const circlesMobileVersion = document.querySelectorAll("#circle-hero");

window.addEventListener("DOMContentLoaded", (e) => {
  applyAnimation(elementswithIdFadeInLoad, "fade-in-bottom");
  applyAnimation(circlesDesktopVersion, "bounce-in-top");
  applyAnimation(circlesMobileVersion, "bounce-in-fwd");
});

//Funcionalidad para mostrar y ocultar container de informes

runClicksInformes();

//SCRIPT REVIEWS CAROUSEL

const trackContainer = document.querySelector(".carousel-track-container");
const slides = Array.from(trackContainer.children); //seleccione los review-container
const nextButton = document.querySelector(".right-arrow");
const prevButton = document.querySelector(".left-arrow");
const slideWidth = slides[0].getBoundingClientRect().width; //esto es para sacar el width de cada review-container
let counter = 1;
trackContainer.style.transform = "translateX(" + -slideWidth * counter + "px)";

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//Funcion para mover el carousel
const moveToSlide = (trackContainer, currentSlide, targetSlide) => {
  trackContainer.style.transition = "transform 350ms ease";
  trackContainer.style.transform =
    "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

//Evento para el boton de next carousel

nextButton.addEventListener("click", () => {
  const currentSlide = trackContainer.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(trackContainer, currentSlide, nextSlide);
  counter++;
});

//Evento para el boton de previous
prevButton.addEventListener("click", () => {
  const currentSlide = trackContainer.querySelector(".current-slide");
  const nextSlide = currentSlide.previousElementSibling;
  moveToSlide(trackContainer, currentSlide, nextSlide);
  counter--;
});

//Evento para reinciar el carousel

trackContainer.addEventListener("transitionend", () => {
  if (slides[counter].id === "last-clone") {
    const slideWidth = slides[0].getBoundingClientRect().width;
    trackContainer.style.transition = "none";
    counter = slides.length - 2;
    trackContainer.style.transform =
      "translateX(" + -slideWidth * counter + "px)";
    slides[0].classList.remove("current-slide");
    slides[4].classList.add("current-slide");
  }
  if (slides[counter].id === "first-clone") {
    const slideWidth = slides[0].getBoundingClientRect().width;
    trackContainer.style.transition = "none";
    counter = slides.length - counter;
    trackContainer.style.transform =
      "translateX(" + -slideWidth * counter + "px)";
    slides[4].classList.remove("current-slide");
    slides[1].classList.add("current-slide");
  }
});

window.addEventListener("resize", () => {
  const currentSlide = trackContainer.querySelector(".current-slide");
  const sizeToMove = currentSlide.style.left;
  let sizeToMoveNumber = parseFloat(sizeToMove);
  const slideWidth = slides[0].getBoundingClientRect().width;
  trackContainer.style.transform = "translateX(" + -sizeToMoveNumber + "px)";
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  };

  slides.forEach(setSlidePosition);
});

//SCRIPT PARA LA SECCION FAQ

import {
  addEventToPlusButtons,
  addEventToMinusButtons,
  resetFaqSection,
} from "./modules/faq-section-events.js";

const plusImage = document.querySelectorAll(".plus-image");
const answers = document.querySelectorAll(".answer");
const minusButtons = document.querySelectorAll(".minus-image");
const questionItselfContainer = document.querySelectorAll(
  ".question-itself-container"
);

addEventToPlusButtons(plusImage);
addEventToMinusButtons(minusButtons);

window.addEventListener("resize", () => {
  resetFaqSection(answers, minusButtons, plusImage, questionItselfContainer);
});

//SCRIPT PARA EL MENU HAMBURGUESA DE NAV

//Seleccionar la img de hamburger before click
//Seleccionar el nav menu before
//Seleccionar hero

window.addEventListener("load", (e) => {
  const amountToSlidenavContainerMobile =
    navContainerMobile.getBoundingClientRect().width;
  navContainerMobile.style.transform =
    "translateX(-" + amountToSlidenavContainerMobile + "px)";
});

const navMenuMobileBefore = document.querySelector(
  ".nav-menu-mobile-before-click"
);
const buttonMenuHamburgerBefore = document.querySelector(
  ".hamburger-menu-img-before-click"
);
const navContainerMobile = document.querySelector(".nav-container-mobile");
const buttonCloseMenu = navContainerMobile.querySelector(".hamburger-menu-img");
const circlesHero = document.querySelectorAll("#circle-hero");

buttonMenuHamburgerBefore.addEventListener("click", (e) => {
  navMenuMobileBefore.style.transition = "opacity 250ms";
  navMenuMobileBefore.style.opacity = "0";
  circlesHero.forEach((circle) => {
    circle.style.transition = "opacity 250ms ease";
    circle.style.opacity = "0";
  });
  hero.style.transition = "opacity 250ms ease";
  hero.style.opacity = "0";
  navContainerMobile.style.opacity = "1";
  navContainerMobile.style.display = "flex";
  navContainerMobile.style.flexDirection = "column";
  navContainerMobile.style.width = "100%";
  navContainerMobile.style.zIndex = "2";
  const amountToSlidenavContainerMobile =
    navContainerMobile.getBoundingClientRect().width;
  navContainerMobile.style.right = amountToSlidenavContainerMobile + "px";
  navContainerMobile.style.transition = "transform 350ms ease";
  navContainerMobile.style.transform =
    "translateX(" + amountToSlidenavContainerMobile + "px)";
});

buttonCloseMenu.addEventListener("click", (e) => {
  const amountToSlidenavContainerMobile =
    navContainerMobile.getBoundingClientRect().width;
  navContainerMobile.style.transition = "transform 350ms ease,";
  navContainerMobile.style.transform =
    "translateX(-" + amountToSlidenavContainerMobile + "px)";
  navContainerMobile.style.display = "none";
  hero.style.transition = "opacity 350ms ease";
  hero.style.opacity = "1";
  circlesHero.forEach((circle) => {
    circle.style.transition = "opacity 350ms ease";
    circle.style.opacity = "1";
  });
  navMenuMobileBefore.style.transition = "opacity 350ms ease, flex 250ms ease";
  navMenuMobileBefore.style.opacity = "1";
  navMenuMobileBefore.style.display = "flex";
});
