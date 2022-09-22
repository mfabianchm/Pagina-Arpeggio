const hero = document.querySelector(".hero");
const navContainerMobile = document.querySelector(".nav-container-mobile");
//nav de hasta arriba antes del click en el hero
const navMenuMobileBefore = document.querySelector(
  ".nav-menu-mobile-before-click"
);
//circulos de hero
const circlesHero = document.querySelectorAll("#circle-hero");

export const onClickEvent_MenuHamburguerBefore = () => {
  const amountToSlidenavContainerMobile =
    navMenuMobileBefore.getBoundingClientRect().width;
  navMenuMobileBefore.classList.remove("show-nav-menu-mobile-before");
  navMenuMobileBefore.classList.add("nav-mobile-animations");
  circlesHero.forEach((circle) => {
    circle.classList.remove("show-hero-mobile");
    circle.classList.add("nav-mobile-animations");
  });
  hero.classList.remove("show-hero-mobile");
  hero.classList.add("nav-mobile-animations");
  navContainerMobile.classList.remove("nav-container-mobile");
  navContainerMobile.classList.remove("hide-nav-container-mobile");
  navContainerMobile.classList.add("show-nav-mobile-container");
  //navContainerMobile.style.transition = "transform 350ms ease";
  navContainerMobile.style.right = amountToSlidenavContainerMobile + "px";
  navContainerMobile.style.transform =
    "translateX(" + amountToSlidenavContainerMobile + "px)";
};

export const closeNavMobileSection = () => {
  const amountToSlidenavContainerMobile =
    navContainerMobile.getBoundingClientRect().width;
  navContainerMobile.classList.remove("show-nav-mobile-container");
  navContainerMobile.classList.add("hide-nav-container-mobile");
  navContainerMobile.classList.add("nav-container-mobile");
  navContainerMobile.style.transform =
    "translateX(-" + amountToSlidenavContainerMobile + "px)";
  hero.classList.remove("nav-mobile-animations");
  hero.classList.add("show-hero-mobile");
  circlesHero.forEach((circle) => {
    circle.classList.remove("nav-mobile-animations");
    circle.classList.add("show-hero-mobile");
  });
  navMenuMobileBefore.classList.remove("nav-mobile-animations");
  navMenuMobileBefore.classList.add("show-nav-menu-mobile-before");
};
