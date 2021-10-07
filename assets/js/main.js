AOS.init({
    offset: 200,
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
const skillServiceItemElems = document.querySelectorAll('.skill-service__item');
const skillServiceContentElems = document.querySelectorAll('.skill-service-content');
const accordionArrowElems = document.querySelectorAll('.accordion-arrow');
//Видео на отзывах
const reviewsVideoPosterElems = document.querySelectorAll('.reviews-video__poster');
const reviewsVideoElems = document.querySelectorAll('.reviews-video video');


const reviewVideoPlay = () => {
    for (let i = 0; i < reviewsVideoPosterElems.length; i++) {
        reviewsVideoPosterElems[i].addEventListener('click', () => {
            if(reviewsVideoPosterElems[i].classList.contains('opacity')) {
                reviewsVideoPosterElems[i].classList.remove('opacity')
                reviewsVideoElems[i].play();
            } else {
                reviewsVideoPosterElems.forEach((reviewsVideoPosterElem) => {
                    reviewsVideoPosterElem.classList.remove('opacity')
                })
                reviewsVideoElems.forEach((reviewsVideoElem) => {
                    reviewsVideoElem.pause()
                })
                reviewsVideoPosterElems[i].classList.add('opacity')
                reviewsVideoElems[i].play();
            }
        })
    }
}

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
const accordion = () => {
    for (let i = 0; i < skillServiceItemElems.length; i++) {
        skillServiceItemElems[i].addEventListener('click', () => {
            if(skillServiceItemElems[i].classList.contains('active')) {
                skillServiceItemElems[i].classList.remove('active')
                accordionArrowElems[i].classList.remove('rotate')
                skillServiceContentElems[i].classList.add('hidden')
            } else {
                skillServiceItemElems.forEach((skillServiceItemElem) => {
                    skillServiceItemElem.classList.remove('active')
                })
                accordionArrowElems.forEach((accordionArrowElem) => {
                    accordionArrowElem.classList.remove('rotate')
                })
                skillServiceContentElems.forEach((skillServiceContentElem) => {
                    skillServiceContentElem.classList.add('hidden')
                })
                skillServiceItemElems[i].classList.add('active')
                skillServiceContentElems[i].classList.remove('hidden')
                accordionArrowElems[i].classList.add('rotate')
            }
        })
    }
}
const swiperReviews = new Swiper('.reviews-video-block', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-slider-next',
      prevEl: '.reviews-slider-prev',
    },
});
accordion();
hoverMainButton();
reviewVideoPlay();
animationMainCircle();
