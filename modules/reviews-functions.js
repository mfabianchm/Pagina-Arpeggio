const trackContainer = document.querySelector(".carousel-track-container");
const slides = Array.from(trackContainer.children);
const slideWidth = slides[0].getBoundingClientRect().width;

export const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

//Funcion para mover el carousel
export const moveToSlide = (trackContainer, currentSlide, targetSlide) => {
  trackContainer.style.transition = "transform 350ms ease";
  trackContainer.style.transform =
    "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

export const resetCarousel = (counter, slides, trackContainer) => {
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
};
