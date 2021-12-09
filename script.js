// const heroButton = document.querySelector('.hero-button')
// const heroTextAprende = document.querySelector('.hero-text-aprende')
// const heroTextLeyend = document.querySelector('.hero-text-leyend')
// const heroimageAnimation = document.querySelector('.hero-image-animation')
// const textsWithTextAnimation = document.querySelectorAll('.text-animation')
// const logos = document.querySelectorAll('.logo-img-escuela')
const hero = document.querySelector('.hero')

// HERO-ANIMATIONS//

const elementswithIdFadeInLoad = document.querySelectorAll('#fade-in-load')
const circlesDesktopVersion = document.querySelectorAll('#circle-desktop')
const circlesMobileVersion = document.querySelectorAll('#circle-hero')
const heroContainer = document.querySelector('.hero')


window.addEventListener('load', e => {


   elementswithIdFadeInLoad.forEach( function (element, index) {
    const NumberIndex = index
    element.classList.add('fade-in-bottom')
    element.style.animationDelay = '150 ' * NumberIndex + 'ms'
} )

    circlesDesktopVersion.forEach( function (circle, index) {
        const NumberIndex = index
        circle.classList.add('bounce-in-top')
        circle.style.animationDelay = '150 ' * NumberIndex + 'ms'
    } )


    circlesMobileVersion.forEach( function (circle, index) {
        const NumberIndex = index
        circle.classList.add('bounce-in-fwd')
        circle.style.animationDelay = '150 ' * NumberIndex + 'ms'
    } )

})




//WHATS APP FLOATING OPEN CLICK 




setTimeout(function(){
    const buttonComoFunciona = document.querySelector('.button-como-funciona')
    const whatsAppFloatingWindowChat = document.querySelector('.Window__WindowComponent-sc-1wwhwms-1')
    whatsAppFloatingWindowChat.style.transition = 'all 0.4s ease 0s'

    buttonComoFunciona.addEventListener('click', e => {
      const whatsMessage = document.querySelector('.WhatsappChat__Message-sc-1nhdht4-4')
      whatsAppFloatingWindowChat.classList.remove('cVAvjx')
      whatsAppFloatingWindowChat.classList.add('kURitX')
      whatsMessage.style.opacity = '1'
      console.log(whatsMessage);
        e.preventDefault()

         if(whatsAppFloatingWindowChat.className = 'kURitx') {
             const closeXImage = document.querySelector('.Close__Component-sc-9nuxpx-0')
             
             closeXImage.addEventListener('click', e => {
                whatsAppFloatingWindowChat.classList.remove('kURitX')
                whatsAppFloatingWindowChat.classList.add('cVAvjx')
             })
         }

        
    })
}, 1000);





//Instersection observers Scroll Animations


const elementswithFadeInId = document.querySelectorAll('#fade-in')

const observerFadeInOptions = {
    threshold: .5
}

observerFadeIn = new IntersectionObserver((entries, observerFadeIn) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("fade-in-bottom")
        }
    })
    
}, observerFadeInOptions)


elementswithFadeInId.forEach( element => {
    observerFadeIn.observe(element)
})





const elementswithClassTiltBottom = document.querySelectorAll('#tilt-in-bottom-2')
const observerTiltBottomOptions = {
    threshold: .5
}

observerScrollTiltBottom = new IntersectionObserver((entries, observerScrollTiltBottom) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("tilt-in-bottom-2")
        }
    })
    
}, observerTiltBottomOptions)


elementswithClassTiltBottom.forEach( element => {
    observerScrollTiltBottom.observe(element)
})







const imagesLogosEscuela = document.querySelectorAll('.logo-img')
const elementswithScaleinCenterId = document.querySelectorAll('#scale-in-center')
const elementswithScaleICenterComoFuncionaId = document.querySelectorAll('#scale-in-center-como-funciona')
const elementswithScaleInCenterReviewsId = document.querySelectorAll('#scale-in-center-reviews')

const ScaleInCenterOptions = {
    threshold: .5
}

observerScaleInCenter = new IntersectionObserver((entries, observerScaleInCenter) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("scale-in-center")
        }
    })
    
}, ScaleInCenterOptions)


imagesLogosEscuela.forEach( element => {
    observerScaleInCenter.observe(element)
})


elementswithScaleinCenterId.forEach(element => {
    observerScaleInCenter.observe(element)
} )


elementswithScaleICenterComoFuncionaId.forEach( function (element, index) {

    if(window.innerWidth > 644) {
    const NumberIndex = index
    observerScaleInCenter.observe(element)
    element.style.animationDelay = '100 ' * NumberIndex + 'ms'
    } else 

    observerScaleInCenter.observe(element)
} )


elementswithScaleInCenterReviewsId.forEach( function (element, index) {
    const NumberIndex = index
    observerScaleInCenter.observe(element)
    element.style.animationDelay = '350 ' * NumberIndex + 'ms'
} )







const elementsIdSlideBlurredBottom = document.querySelectorAll('#slide-in-blurred-bott')


const ScaleInBlurBottomOptions = {
    threshold: .5
}

observerScaleInBlurBottom = new IntersectionObserver((entries, observerScaleInBlurBottom) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("slide-in-blurred-bottom")
        }
    })
    
}, ScaleInBlurBottomOptions)

elementsIdSlideBlurredBottom.forEach(element => {
    observerScaleInBlurBottom.observe(element)
})



const elementsIdSlideBlurredBottomContacto = document.querySelectorAll('#slide-in-blurred-bott-contacto')

const ScaleInBlurBottomContactoOptions = {
    threshold: .1
}

observerScaleInBlurBottomContacto = new IntersectionObserver((entries, observerScaleInBlurBottomContacto) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("slide-in-blurred-bottom")
        }
    })
    
}, ScaleInBlurBottomContactoOptions)

elementsIdSlideBlurredBottomContacto.forEach(element => {
    observerScaleInBlurBottomContacto.observe(element)
})










const elementsIdSlideInRight = document.querySelectorAll('#slide-in-right01')

const SlideInRightOptions = {
    threshold: .5
}

observerSlideInRight = new IntersectionObserver((entries, observerSlideInRight) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("slide-in-right")
        }
    })
    
}, SlideInRightOptions)

elementsIdSlideInRight.forEach(element => {
    observerSlideInRight.observe(element)
})




//INTERSECTION OBSERVERS DESCUBRE SECTION

if(window.innerWidth < 901) {

const elementsIdSlideInLeftDescubre = document.querySelectorAll('#slide-in-left-descubre')
const elementsIdSlideInRightDescubre = document.querySelectorAll('#slide-in-right-descubre')

const SlideInLeftDescubreOptions = {
    threshold: .5
}

const SlideInRightDescubreOptions = {
    threshold: .5
}

observerSlideInLeftDescubre = new IntersectionObserver((entries, observerSlideInLeftDescubre) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("slide-in-left")
        }
    })
    
}, SlideInLeftDescubreOptions)


observerSlideInRightDescubre = new IntersectionObserver((entries, observerSlideInRightDescubre) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("slide-in-right")
        }
    })
    
}, SlideInRightDescubreOptions)

elementsIdSlideInLeftDescubre.forEach(element => {
    observerSlideInLeftDescubre.observe(element)
})


elementsIdSlideInRightDescubre.forEach(element => {
    observerSlideInRightDescubre.observe(element)
})


} else {
    const featureQueOfrecemosContainer = document.querySelectorAll('.feature-que-ofrecemos-container')

    const ScaleInCenterOptionsDescubre = {
        threshold: .5
    }
    
    observerScaleInCenterDescubre = new IntersectionObserver((entries, observerScaleInCenterDescubre) => {
       
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add("scale-in-center")
            }
        })
        
    }, ScaleInCenterOptionsDescubre)
    
    
    featureQueOfrecemosContainer.forEach( element => {
        observerScaleInCenterDescubre.observe(element)
    })
}





//INTERSECTION OBSERVERS CURSOS SECTION

if(window.innerWidth < 768) {

    const elementsIdSlideInLeftCursos = document.querySelectorAll('#slide-in-left-cursos')
    const elementsIdSlideInRightCursos = document.querySelectorAll('#slide-in-right-cursos')
    
    const SlideInLeftCursosOptions = {
        threshold: .5
    }
    
    const SlideInRightCursosOptions = {
        threshold: .5
    }
    
    observerSlideInLeftCursos = new IntersectionObserver((entries, observerSlideInLeftCursos) => {
       
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add("slide-in-left")
            }
        })
        
    }, SlideInLeftCursosOptions)
    
    
    observerSlideInRightCursos = new IntersectionObserver((entries, observerSlideInRightCursos) => {
       
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add("slide-in-right")
            }
        })
        
    }, SlideInRightCursosOptions)
    
    elementsIdSlideInLeftCursos.forEach(element => {
        observerSlideInLeftCursos.observe(element)
    })
    
    
    elementsIdSlideInRightCursos.forEach(element => {
        observerSlideInRightCursos.observe(element)
    })
    
    
    } else {

    const elementsIdSlideInLeftCursos = document.querySelectorAll('#slide-in-left-cursos')
    const elementsIdSlideInRightCursos = document.querySelectorAll('#slide-in-right-cursos')

    elementsIdSlideInRightCursos.forEach(element => {
        element.style.opacity = '1'
    })

    elementsIdSlideInLeftCursos.forEach(element => {
        element.style.opacity = '1'
    })
    

    }







const elementsIdTiltInBl = document.querySelectorAll('#tilt-in-bl')

const TiltInBlOptions = {
    threshold: .5
}

observerTiltInBl = new IntersectionObserver((entries, observerTiltInBl) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("tilt-in-bl")
        }
    })
    
}, TiltInBlOptions)

elementsIdTiltInBl.forEach(element => {
    observerTiltInBl.observe(element)
})







const elementsScaleBottomId = document.querySelectorAll('#scale-in-bottom')

const ScaleInBottomOptions = {
    threshold: .3
}

observerScaleInBottom = new IntersectionObserver((entries, observerScaleInBottom) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("scale-in-bottom")
        }
    })
    
}, ScaleInBottomOptions)




elementsScaleBottomId.forEach( function (element, index) {

    if(window.innerWidth > 999) {
    const NumberIndex = index
    observerScaleInBottom.observe(element)
    element.style.animationDelay = '350 ' * NumberIndex + 'ms'
    } else 

    observerScaleInCenter.observe(element)
} )






const elementsBounceInFwdIdFaq = document.querySelectorAll('#bounce-in-fwd-faq')


const BounceInFwdOptions = {
    threshold: .5
}

observerBounceInFwd = new IntersectionObserver((entries, observerBounceInFwd) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("bounce-in-fwd")
        }
    })
    
}, BounceInFwdOptions)



elementsBounceInFwdIdFaq.forEach(element => {
    observerBounceInFwd.observe(element)
})







const elementsFadeInBottomFaqId = document.querySelectorAll('#fade-in-bottom-faq')

const FadeInBottomOptions = {
    threshold: .5
}

observerFadeInBottom = new IntersectionObserver((entries, observerFadeInBottom) => {
   
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("fade-in-bottom")
        }
    })
    
}, FadeInBottomOptions)



elementsFadeInBottomFaqId.forEach(element => {
    observerFadeInBottom.observe(element)
})



elementsFadeInBottomFaqId.forEach( function (element, index) {
    const NumberIndex = index
    observerFadeInBottom.observe(element)
    element.style.animationDelay = '200 ' * NumberIndex + 'ms'
} )















window.addEventListener('load', e => {
    const amountToSlidenavContainerMobile = navContainerMobile.getBoundingClientRect().width
    navContainerMobile.style.transform = 'translateX(-' + amountToSlidenavContainerMobile + 'px)'
})



//SCRIPT REVIEWS CAROUSEL

const trackContainer = document.querySelector('.carousel-track-container')
const slides = Array.from(trackContainer.children) //seleccione los review-container
const nextButton = document.querySelector('.right-arrow')
const prevButton = document.querySelector('.left-arrow')
const slideWidth = slides[0].getBoundingClientRect().width //esto es para sacar el width de cada review-container
let counter = 1
trackContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)'


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
 slides.forEach(setSlidePosition);

//  const nextButtonAfterResize = document.querySelector('.right-arrow')
//  console.log(nextButtonAfterResize);

    
 






//Funcion para mover el carousel
const moveToSlide = (trackContainer, currentSlide, targetSlide) => {
    trackContainer.style.transition = 'transform 350ms ease'
    trackContainer.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}


//Evento para el boton de next carousel

const windowSizeOnLoad = window.innerWidth

console.log(windowSizeOnLoad);


nextButton.addEventListener('click', e => {
    const currentSlide = trackContainer.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    moveToSlide(trackContainer, currentSlide, nextSlide)
    counter++
    console.log(counter);
 })

//Evento para el boton de previous
prevButton.addEventListener('click', e => {
    
    const currentSlide = trackContainer.querySelector('.current-slide')
    const nextSlide = currentSlide.previousElementSibling
    console.log(nextSlide);
    moveToSlide(trackContainer, currentSlide, nextSlide)
    counter--
})


trackContainer.addEventListener('transitionend', () => {
    if(slides[counter].id === 'last-clone') {
    const slideWidth = slides[0].getBoundingClientRect().width
    trackContainer.style.transition = 'none'
    counter = slides.length -2 
    trackContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)'
    slides[0].classList.remove('current-slide')
    slides[4].classList.add('current-slide')
    }
    if(slides[counter].id === 'first-clone') {
        const slideWidth = slides[0].getBoundingClientRect().width
        trackContainer.style.transition = 'none'
        counter = slides.length - counter
        trackContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)'
        slides[4].classList.remove('current-slide')
        slides[1].classList.add('current-slide')
        }
})

window.addEventListener('resize' , e =>  {
   

    const currentSlide = trackContainer.querySelector('.current-slide')
    const sizeToMove = currentSlide.style.left
    sizeToMoveNumber = parseFloat(sizeToMove)
    const slideWidth = slides[0].getBoundingClientRect().width
    trackContainer.style.transform = 'translateX(' + (-sizeToMoveNumber) + 'px)'
    const setSlidePosition = (slide, index) => {
       slide.style.left = slideWidth * index + 'px';
   }
   
    slides.forEach(setSlidePosition);

     

})






//SCRIPT PARA LA SECCION FAQ

const plusImage = document.querySelectorAll('.plus-image')
const answers = document.querySelectorAll('.answer')
const minusButtons = document.querySelectorAll('.minus-image')
 


plusImage.forEach(image => {
    image.addEventListener('click', e => {
        const questionContainer = image.closest('.question-itself-container')
        const amountSlideDown = questionContainer.getBoundingClientRect().height
        const answer = questionContainer.querySelector('.answer')
        const minusButton = questionContainer.querySelector('.minus-image')
        image.style.display = 'none'
        minusButton.style.display = 'inline-block'
        questionContainer.style.transition = 'height 350ms ease'
        questionContainer.style.height = amountSlideDown * 2 + 'px'
        const heightAnswer = answer.getBoundingClientRect().height
        answer.style.transition = 'opacity 1s ease, transform 350ms ease'
        answer.style.opacity = '1'
        answer.style.transform = 'translateY(' + 20 + 'px)' //*******AQUI CAMBIAR LA ALTURA AUTOMATICA, SACAR ALTURA DEL ELEMENTO ANSWER */
        e.stopPropagation
    })
})

minusButtons.forEach(button => {
    button.addEventListener('click', e => {
        const questionContainer = button.closest('.question-itself-container')
        const amountSlideDown = questionContainer.getBoundingClientRect().height
        const answer = questionContainer.querySelector('.answer')
        const plusButton = questionContainer.querySelector('.plus-image')
        button.style.display = 'none'
        plusButton.style.display = 'inline-block'
        questionContainer.style.transition = 'height 350ms ease'
        questionContainer.style.height = amountSlideDown / 2 + 'px'
        answer.style.transition = 'opacity 150ms ease, transform 350ms ease'
        answer.style.opacity = '0'
    })
})

const questionItselfContainer = document.querySelectorAll('.question-itself-container')
window.addEventListener('resize', e => {
let windowWidthFaq = window.innerWidth
answers.forEach(answer => {
    answer.style.opacity = '0'
})
if(minusButtons) {
    minusButtons.forEach(button => {
        button.style.display ='none'
        plusImage.forEach(button => {
            button.style.display = 'inline-block'
        })
    })
}
if(window.innerWidth >= 210 && window.innerWidth <= 254) {
    questionItselfContainer.forEach(element => {
        element.style.height = '85px'
    }) 
}
if(window.innerWidth >= 255 && window.innerWidth <= 349) {
    questionItselfContainer.forEach(element => {
         element.style.height = '80px'
    }) 
}
if(window.innerWidth >= 350 && window.innerWidth <= 2000) {
    questionItselfContainer.forEach(element => {
         element.style.height = '70px'
    }) 
}
})


//SCRIPT PARA EL MENU HAMBURGUESA DE NAV

//Seleccionar la img de hamburger before click
//Seleccionar el nav menu before
//Seleccionar hero
const navMenuMobileBefore = document.querySelector('.nav-menu-mobile-before-click')
const buttonMenuHamburgerBefore = document.querySelector('.hamburger-menu-img-before-click')
const navContainerMobile = document.querySelector('.nav-container-mobile')
const buttonCloseMenu = navContainerMobile.querySelector('.hamburger-menu-img')
const circlesHero = document.querySelectorAll('#circle-hero')



buttonMenuHamburgerBefore.addEventListener('click', e => {
    navMenuMobileBefore.style.transition = 'opacity 250ms'
    navMenuMobileBefore.style.opacity = '0'
    circlesHero.forEach(circle => {
        circle.style.transition = 'opacity 250ms ease'
        circle.style.opacity = '0'
    })
    hero.style.transition = 'opacity 250ms ease'
    hero.style.opacity = '0'
    navContainerMobile.style.opacity = '1'
    navContainerMobile.style.display = 'flex'
    navContainerMobile.style.flexDirection = 'column'
    navContainerMobile.style.width = '100%'
    navContainerMobile.style.zIndex = '2'
    const amountToSlidenavContainerMobile = navContainerMobile.getBoundingClientRect().width
    navContainerMobile.style.right = amountToSlidenavContainerMobile + 'px'
    navContainerMobile.style.transition = 'transform 350ms ease'
    navContainerMobile.style.transform = 'translateX(' + amountToSlidenavContainerMobile + 'px)'
})


buttonCloseMenu.addEventListener('click', e => {
    const amountToSlidenavContainerMobile = navContainerMobile.getBoundingClientRect().width
    navContainerMobile.style.transition = 'transform 350ms ease,'
    navContainerMobile.style.transform = 'translateX(-' + amountToSlidenavContainerMobile + 'px)'
    navContainerMobile.style.display = 'none'
    hero.style.transition = 'opacity 350ms ease'
    hero.style.opacity ='1'
    circlesHero.forEach(circle => {
        circle.style.transition = 'opacity 350ms ease'
        circle.style.opacity = '1'
    })
    navMenuMobileBefore.style.transition = 'opacity 350ms ease, flex 250ms ease'
    navMenuMobileBefore.style.opacity='1'
    navMenuMobileBefore.style.display = 'flex'
    
})


//poner como position absolute el navcontainermobile para que quede encima de hero


