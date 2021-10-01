AOS.init({
    offset: 250,
    duration: 1000,
    delay: 150,
    wait:0,
    once: true,
});
// Переменные
//Кнопки на главной
const mainButtonElem = document.querySelector('.main-buttons button');
const mainLinkElem = document.querySelector('.main-buttons a');
//Кружки на главной
const mainCirclesElems = document.querySelectorAll('.main-circles span');
//Акардеон
const featureLinkElems = document.querySelectorAll('.skill-service__item');
const featureSubElems = document.querySelectorAll('.skill-service-content');
const accordionArrowElems = document.querySelectorAll('.accordion-arrow');

const hoverMainButton = () => {
    mainButtonElem.addEventListener('mouseover', () => {
        mainLinkElem.classList.add('hover');
    });
    mainButtonElem.addEventListener('mouseout', () => {
        mainLinkElem.classList.remove('hover');
    });
}
// Подсветка кружков на главвной
const animationMainCircle = () => {
    mainCirclesElems[0].classList.add('active')
    setTimeout(() => mainCirclesElems[0].classList.remove('active'), 250);

    setTimeout(() => mainCirclesElems[1].classList.add('active'), 250);
    setTimeout(() => mainCirclesElems[1].classList.remove('active'), 500);

    setTimeout(() => mainCirclesElems[2].classList.add('active'), 500);
    setTimeout(() => mainCirclesElems[2].classList.remove('active'), 750);

    setTimeout(() => mainCirclesElems[3].classList.add('active'), 750);
    setTimeout(() => mainCirclesElems[3].classList.remove('active'), 1000);

    setInterval(() =>{
        mainCirclesElems[0].classList.add('active')
        setTimeout(() => mainCirclesElems[0].classList.remove('active'), 250);
    
        setTimeout(() => mainCirclesElems[1].classList.add('active'), 250);
        setTimeout(() => mainCirclesElems[1].classList.remove('active'), 500);
    
        setTimeout(() => mainCirclesElems[2].classList.add('active'), 500);
        setTimeout(() => mainCirclesElems[2].classList.remove('active'), 750);
    
        setTimeout(() => mainCirclesElems[3].classList.add('active'), 750);
        setTimeout(() => mainCirclesElems[3].classList.remove('active'), 1000);
    }, 5000);
}

//Акардеон
document.addEventListener('DOMContentLoaded', () => {

        for (let i = 0; i < featureLinkElems.length; i++) {
        featureLinkElems[i].addEventListener('click', () => {
            if(featureLinkElems[i].classList.contains('active')) {
                featureLinkElems[i].classList.remove('active')
                accordionArrowElems[i].classList.remove('rotate')
                featureSubElems[i].classList.add('hidden')
            } else {
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('active')
                })
                accordionArrowElems.forEach((accordionArrowElem) => {
                    accordionArrowElem.classList.remove('rotate')
                })
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden')
                })
                featureLinkElems[i].classList.add('active')
                featureSubElems[i].classList.remove('hidden')
                accordionArrowElems[i].classList.add('rotate')
            }
        })
    }
});
const swiperReviews = new Swiper('.reviews-video-block', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    //initialSlide: 0,
});

hoverMainButton();
animationMainCircle();
