export const addEventToPlusButtons = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const questionContainer = button.closest(".question-itself-container");
      const amountSlideDown = questionContainer.getBoundingClientRect().height;
      const answer = questionContainer.querySelector(".answer");
      const minusButton = questionContainer.querySelector(".minus-image");
      button.style.display = "none";
      minusButton.style.display = "inline-block";
      questionContainer.style.transition = "height 350ms ease";
      questionContainer.style.height = amountSlideDown * 2 + "px";
      answer.style.transition = "opacity 1s ease, transform 350ms ease";
      answer.style.opacity = "1";
      answer.style.transform = "translateY(" + 20 + "px)"; //*******AQUI CAMBIAR LA ALTURA AUTOMATICA, SACAR ALTURA DEL ELEMENTO ANSWER */
      e.stopPropagation;
    });
  });
};

export const addEventToMinusButtons = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
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
};

export const resetFaqSection = (
  answers,
  minusButtons,
  plusImage,
  questionItselfContainer
) => {
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
};
