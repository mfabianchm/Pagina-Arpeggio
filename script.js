//start observers animations
import { applyAnimation } from "./modules/hero.js";
import { startObservers } from "./modules/observers-animations.js";
import { runClicksInformes } from "./modules/whatsApp_clicks.js";

//Funcion para iniciar las animaciones

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

//Funcionalidad para mostrar y ocultar el menu nav versión mobile
//Funciones de los eventos

import {
  onClickEvent_MenuHamburguerBefore,
  closeNavMobileSection,
} from "./modules/nav-mobile-functions.js";

const buttonMenuHamburgerBefore = document.querySelector(
  ".hamburger-menu-img-before-click"
);
const navContainerMobile = document.querySelector(".nav-container-mobile");
const buttonCloseMenu = navContainerMobile.querySelector(".hamburger-menu-img");

buttonMenuHamburgerBefore.addEventListener(
  "click",
  onClickEvent_MenuHamburguerBefore
);

buttonCloseMenu.addEventListener("click", closeNavMobileSection);

//Funcionalidad para mostrar y ocultar container de informes

runClicksInformes();

//SCRIPT REVIEWS CAROUSEL

import {
  setSlidePosition,
  moveToSlide,
  resetCarousel,
} from "./modules/reviews-functions.js";

const trackContainer = document.querySelector(".carousel-track-container");
const slides = Array.from(trackContainer.children);
const nextButton = document.querySelector(".right-arrow");
const prevButton = document.querySelector(".left-arrow");
const slideWidth = slides[0].getBoundingClientRect().width;
let counter = 1;
trackContainer.style.transform = "translateX(" + -slideWidth * counter + "px)";

slides.forEach(setSlidePosition);

//Evento para el boton de next carousel

nextButton.addEventListener("click", () => {
  const currentSlide = trackContainer.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(trackContainer, currentSlide, nextSlide);
  counter++;
});

//Evento para el boton de previous carousel
prevButton.addEventListener("click", async () => {
  const currentSlide = trackContainer.querySelector(".current-slide");
  const nextSlide = currentSlide.previousElementSibling;
  moveToSlide(trackContainer, currentSlide, nextSlide);
  counter--;
});

trackContainer.addEventListener("transitionend", () => {
  //Evento para reiniciar el carousel
  resetCarousel(counter, slides, trackContainer);
  if (counter == 5) {
    counter = 1;
  }
  if (counter == 0) {
    counter = 4;
  }
});

window.addEventListener("resize", () => {
  const currentSlide = trackContainer.querySelector(".current-slide");
  const sizeToMove = parseFloat(currentSlide.style.left);
  const slideWidth = slides[0].getBoundingClientRect().width;
  trackContainer.style.transform = "translateX(" + -sizeToMove + "px)";
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
