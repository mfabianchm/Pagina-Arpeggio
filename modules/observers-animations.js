export const startObservers = () => {
  const createIntersectionObserver = (className, options) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add(className);
        }
      });
    }, options);
    return observer;
  };

  //Instersection observers Scroll Animations with fade-in class (many on document)

  const elementswithFadeInId = document.querySelectorAll("#fade-in");

  const observerFadeInOptions = {
    threshold: 0.5,
  };

  const observerFadeIn = createIntersectionObserver(
    "fade-in-bottom",
    observerFadeInOptions
  );

  elementswithFadeInId.forEach((element) => {
    observerFadeIn.observe(element);
  });

  //Instersection observers Scroll Animations with slide-in-blurred-bott class (many on document)

  const elementsIdSlideBlurredBottom = document.querySelectorAll(
    "#slide-in-blurred-bott"
  );

  const ScaleInBlurBottomOptions = {
    threshold: 0.5,
  };

  const observerScaleInBlurBottom = createIntersectionObserver(
    "slide-in-blurred-bottom",
    ScaleInBlurBottomOptions
  );

  elementsIdSlideBlurredBottom.forEach((element) => {
    observerScaleInBlurBottom.observe(element);
  });

  //Instersection observers Scroll Animations Nosotros Section

  const elementswithClassTiltBottom =
    document.querySelectorAll("#tilt-in-bottom-2");

  const observerTiltBottomOptions = {
    threshold: 0.5,
  };

  const observerScrollTiltBottom = createIntersectionObserver(
    "tilt-in-bottom-2",
    observerTiltBottomOptions
  );

  elementswithClassTiltBottom.forEach((element) => {
    observerScrollTiltBottom.observe(element);
  });

  // Intersections observers with scale-in-center class (many on document)

  const elementswithScaleinCenterId =
    document.querySelectorAll("#scale-in-center");

  const imagesLogosEscuela = document.querySelectorAll(".logo-img");

  const elementswithScaleICenterComoFuncionaId = document.querySelectorAll(
    "#scale-in-center-como-funciona"
  );
  const elementswithScaleInCenterReviewsId = document.querySelectorAll(
    "#scale-in-center-reviews"
  );
  const ScaleInCenterOptions = {
    threshold: 0.5,
  };

  const observerScaleInCenter = createIntersectionObserver(
    "scale-in-center",
    ScaleInCenterOptions
  );

  imagesLogosEscuela.forEach((element) => {
    observerScaleInCenter.observe(element);
  });

  elementswithScaleinCenterId.forEach((element) => {
    observerScaleInCenter.observe(element);
  });

  elementswithScaleICenterComoFuncionaId.forEach(function (element, index) {
    if (window.innerWidth > 644) {
      const NumberIndex = index;
      observerScaleInCenter.observe(element);
      element.style.animationDelay = "100 " * NumberIndex + "ms";
    } else observerScaleInCenter.observe(element);
  });

  elementswithScaleInCenterReviewsId.forEach(function (element, index) {
    const NumberIndex = index;
    observerScaleInCenter.observe(element);
    element.style.animationDelay = "350 " * NumberIndex + "ms";
  });

  //INTERSECTION OBSERVERS CONTACTO SECTION

  const elementsIdSlideBlurredBottomContacto = document.querySelectorAll(
    "#slide-in-blurred-bott-contacto"
  );

  const ScaleInBlurBottomContactoOptions = {
    threshold: 0.1,
  };

  const observerScaleInBlurBottomContacto = createIntersectionObserver(
    "slide-in-blurred-bottom",
    ScaleInBlurBottomContactoOptions
  );

  elementsIdSlideBlurredBottomContacto.forEach((element) => {
    observerScaleInBlurBottomContacto.observe(element);
  });

  //INTERSECTION OBSERVERS DESCUBRE SECTION

  const elementsIdTiltInBl = document.querySelectorAll("#tilt-in-bl");

  const elementsIdSlideInLeftDescubre = document.querySelectorAll(
    "#slide-in-left-descubre"
  );
  const elementsIdSlideInRightDescubre = document.querySelectorAll(
    "#slide-in-right-descubre"
  );

  const featureQueOfrecemosContainer = document.querySelectorAll(
    ".feature-que-ofrecemos-container"
  );

  const elementsIdSlideInRight = document.querySelectorAll("#slide-in-right01");

  const SlideInLeftDescubreOptions = {
    threshold: 0.5,
  };

  const SlideInRightDescubreOptions = {
    threshold: 0.5,
  };

  const ScaleInCenterOptionsDescubre = {
    threshold: 0.5,
  };

  const SlideInRightOptions = {
    threshold: 0.5,
  };

  const TiltInBlOptions = {
    threshold: 0.5,
  };

  const observerTiltInBl = createIntersectionObserver(
    "tilt-in-bl",
    TiltInBlOptions
  );

  const observerSlideInRight = createIntersectionObserver(
    "slide-in-right",
    SlideInRightOptions
  );

  elementsIdSlideInRight.forEach((element) => {
    observerSlideInRight.observe(element);
  });

  elementsIdTiltInBl.forEach((element) => {
    observerTiltInBl.observe(element);
  });

  if (window.innerWidth < 901) {
    const observerSlideInLeftDescubre = createIntersectionObserver(
      "slide-in-left",
      SlideInLeftDescubreOptions
    );

    const observerSlideInRightDescubre = createIntersectionObserver(
      "slide-in-right",
      SlideInRightDescubreOptions
    );

    elementsIdSlideInLeftDescubre.forEach((element) => {
      observerSlideInLeftDescubre.observe(element);
    });

    elementsIdSlideInRightDescubre.forEach((element) => {
      observerSlideInRightDescubre.observe(element);
    });
  } else {
    const observerScaleInCenterDescubre = createIntersectionObserver(
      "scale-in-center",
      ScaleInCenterOptionsDescubre
    );

    featureQueOfrecemosContainer.forEach((element) => {
      observerScaleInCenterDescubre.observe(element);
    });
  }

  //INTERSECTION OBSERVERS CURSOS SECTION

  const elementsIdSlideInLeftCursos = document.querySelectorAll(
    "#slide-in-left-cursos"
  );
  const elementsIdSlideInRightCursos = document.querySelectorAll(
    "#slide-in-right-cursos"
  );

  const SlideInLeftCursosOptions = {
    threshold: 0.5,
  };

  const SlideInRightCursosOptions = {
    threshold: 0.5,
  };

  if (window.innerWidth < 768) {
    const observerSlideInLeftCursos = createIntersectionObserver(
      "slide-in-left",
      SlideInLeftCursosOptions
    );

    const observerSlideInRightCursos = createIntersectionObserver(
      "slide-in-right",
      SlideInRightCursosOptions
    );

    elementsIdSlideInLeftCursos.forEach((element) => {
      observerSlideInLeftCursos.observe(element);
    });

    elementsIdSlideInRightCursos.forEach((element) => {
      observerSlideInRightCursos.observe(element);
    });
  } else {
    elementsIdSlideInRightCursos.forEach((element) => {
      element.style.opacity = "1";
    });

    elementsIdSlideInLeftCursos.forEach((element) => {
      element.style.opacity = "1";
    });
  }

  //INTERSECTION OBSERVERS PRINCING SECTION

  const elementsScaleBottomId = document.querySelectorAll("#scale-in-bottom");

  const ScaleInBottomOptions = {
    threshold: 0.3,
  };

  const observerScaleInBottom = createIntersectionObserver(
    "scale-in-bottom",
    ScaleInBottomOptions
  );

  elementsScaleBottomId.forEach(function (element, index) {
    if (window.innerWidth > 999) {
      const NumberIndex = index;
      observerScaleInBottom.observe(element);
      element.style.animationDelay = "350 " * NumberIndex + "ms";
    } else observerScaleInCenter.observe(element);
  });

  //INTERSECTION OBSERVERS FAQ SECTION

  const elementsBounceInFwdIdFaq =
    document.querySelectorAll("#bounce-in-fwd-faq");

  const elementsFadeInBottomFaqId = document.querySelectorAll(
    "#fade-in-bottom-faq"
  );

  const BounceInFwdOptions = {
    threshold: 0.5,
  };

  const FadeInBottomOptions = {
    threshold: 0.5,
  };

  const observerBounceInFwd = createIntersectionObserver(
    "bounce-in-fwd",
    BounceInFwdOptions
  );

  const observerFadeInBottom = createIntersectionObserver(
    "fade-in-bottom",
    FadeInBottomOptions
  );

  elementsBounceInFwdIdFaq.forEach((element) => {
    observerBounceInFwd.observe(element);
  });

  elementsFadeInBottomFaqId.forEach((element) => {
    observerFadeInBottom.observe(element);
  });

  elementsFadeInBottomFaqId.forEach(function (element, index) {
    const NumberIndex = index;
    observerFadeInBottom.observe(element);
    element.style.animationDelay = "200 " * NumberIndex + "ms";
  });
};
