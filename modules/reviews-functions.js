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
