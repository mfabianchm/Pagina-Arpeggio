//Funcionalidad para mostrar y ocultar el botón de informes

export const runClicksInformes = () => {
  const informesButton_WhatsApp = Array.from(
    document.querySelectorAll(".informes-button")
  );

  const click_informes_container = document.querySelector(
    "#click-informes-main-container"
  );

  const exitButton = document.getElementById("exit-button-informes");

  const removeInformesContainer = () => {
    click_informes_container.classList.remove("agendar-clase-main-container");
    click_informes_container.classList.add("no-display");
  };

  const showInformesContainer = () => {
    click_informes_container.classList.remove("no-display");
    click_informes_container.classList.add(
      "agendar-clase-main-container",
      "scale-in-center"
    );
  };

  exitButton.addEventListener("click", removeInformesContainer);

  informesButton_WhatsApp.forEach((button) => {
    button.addEventListener("click", showInformesContainer);
  });
};
