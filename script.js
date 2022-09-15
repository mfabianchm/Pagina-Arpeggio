const hero = document.querySelector(".hero");

import { applyAnimation } from "./modules/hero.js";
import { startObservers } from "./modules/observers-animations.js";

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

//WHATS APP FLOATING OPEN CLICK

setTimeout(function () {
  const buttonComoFunciona = document.querySelector(".button-como-funciona");
  const whatsAppFloatingWindowChat = document.querySelector(
    ".Window__WindowComponent-sc-1wwhwms-1"
  );

  buttonComoFunciona.addEventListener("click", (e) => {
    console.log(whatsAppFloatingWindowChat);
    const whatsMessage = document.querySelector(
      ".WhatsappChat__Message-sc-1nhdht4-4"
    );
    whatsAppFloatingWindowChat.classList.remove("ccKqxu");
    whatsAppFloatingWindowChat.classList.add("kgJdyM");
    whatsMessage.style.opacity = "1";
    console.log("hola");
    e.preventDefault();

    if ((whatsAppFloatingWindowChat.className = "kgJdyM")) {
      const closeXImage = document.querySelector(
        ".Close__Component-sc-9nuxpx-0"
      );

      closeXImage.addEventListener("click", (e) => {
        whatsAppFloatingWindowChat.classList.remove("kgJdyM");
        whatsAppFloatingWindowChat.classList.add("ccKqxu");
        console.log(whatsAppFloatingWindowChat);
      });
    }
  });
}, 4000);

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

nextButton.addEventListener("click", (e) => {
  const currentSlide = trackContainer.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(trackContainer, currentSlide, nextSlide);
  counter++;
  console.log(counter);
});

//Evento para el boton de previous
prevButton.addEventListener("click", (e) => {
  const currentSlide = trackContainer.querySelector(".current-slide");
  const nextSlide = currentSlide.previousElementSibling;
  console.log(nextSlide);
  moveToSlide(trackContainer, currentSlide, nextSlide);
  counter--;
});

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

window.addEventListener("resize", (e) => {
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

const plusImage = document.querySelectorAll(".plus-image");
const answers = document.querySelectorAll(".answer");
const minusButtons = document.querySelectorAll(".minus-image");

plusImage.forEach((image) => {
  image.addEventListener("click", (e) => {
    const questionContainer = image.closest(".question-itself-container");
    const amountSlideDown = questionContainer.getBoundingClientRect().height;
    const answer = questionContainer.querySelector(".answer");
    const minusButton = questionContainer.querySelector(".minus-image");
    image.style.display = "none";
    minusButton.style.display = "inline-block";
    questionContainer.style.transition = "height 350ms ease";
    questionContainer.style.height = amountSlideDown * 2 + "px";
    const heightAnswer = answer.getBoundingClientRect().height;
    answer.style.transition = "opacity 1s ease, transform 350ms ease";
    answer.style.opacity = "1";
    answer.style.transform = "translateY(" + 20 + "px)"; //*******AQUI CAMBIAR LA ALTURA AUTOMATICA, SACAR ALTURA DEL ELEMENTO ANSWER */
    e.stopPropagation;
  });
});

minusButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const questionContainer = button.closest(".question-itself-container");
    const amountSlideDown = questionContainer.getBoundingClientRect().height;
    const answer = questionContainer.querySelector(".answer");
    const plusButton = questionContainer.querySelector(".plus-image");
    button.style.display = "none";
    plusButton.style.display = "inline-block";
    questionContainer.style.transition = "height 350ms ease";
    questionContainer.style.height = amountSlideDown / 2 + "px";
    answer.style.transition = "opacity 150ms ease, transform 350ms ease";
    answer.style.opacity = "0";
  });
});

const questionItselfContainer = document.querySelectorAll(
  ".question-itself-container"
);
window.addEventListener("resize", (e) => {
  let windowWidthFaq = window.innerWidth;
  answers.forEach((answer) => {
    answer.style.opacity = "0";
  });
  if (minusButtons) {
    minusButtons.forEach((button) => {
      button.style.display = "none";
      plusImage.forEach((button) => {
        button.style.display = "inline-block";
      });
    });
  }
  if (window.innerWidth >= 210 && window.innerWidth <= 254) {
    questionItselfContainer.forEach((element) => {
      element.style.height = "85px";
    });
  }
  if (window.innerWidth >= 255 && window.innerWidth <= 349) {
    questionItselfContainer.forEach((element) => {
      element.style.height = "80px";
    });
  }
  if (window.innerWidth >= 350 && window.innerWidth <= 2000) {
    questionItselfContainer.forEach((element) => {
      element.style.height = "70px";
    });
  }
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
