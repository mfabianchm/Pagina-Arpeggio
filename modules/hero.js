//hero - animations

export const applyAnimation = (arrayOfElements, className) => {
  arrayOfElements.forEach((element, index) => {
    element.classList.add(className);
    element.style.animationDelay = "150" * index + "ms";
    element.style.opacity = "1";
  });
};
