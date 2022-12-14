const navbar = document.querySelector('.navbar');
const logoLight = document.querySelector('.logo-light');
const logo = document.querySelector('.logo');

const mMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.mobile-menu');

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.style.display = "block";
  logoLight.style.display = "none";
}

const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.style.display = "none";
  logoLight.style.display = "block";
}

const openMenu = (event) => { //функция открывания меню
  menu.classList.add('is-open');//вешает классс is-open
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow="hidden"; //запрещаем прокрутку сайта под меню
  lightModeOn();
}

const closeMenu = (event) => { //функция закрывания меню
  menu.classList.remove('is-open');//удаляет классс is-open
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow=""; //возвращает прокрутку сайта под меню
  lightModeOff();
}

window.addEventListener('scroll', () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

const swiper = new Swiper('.swiper', {
  speed: 400,
  
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
    },
    breakpoints: {
      
      576: {
        slidesPerView: 2,
        /* centeredSlides: true, */
      },
      
      768: {
        slidesPerView: 3,
        
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,       
      },
      1200: {
        slidesPerView: 5,       
      },
    },
  });
  const swiperSteps = new Swiper('.swiper-steps', {
    speed: 400,
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider-button-steps-next',
      prevEl: '.slider-button-steps-prev',
      },
      breakpoints: {
      
      576: {
        slidesPerView: 1,
        /* centeredSlides: true, */
      },
      
      768: {
        slidesPerView: 2,
        
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,       
      },
      1200: {
        slidesPerView: 4,       
      },
    },
  });

  const swiperBlog = new Swiper('.blog-slider', {
    speed: 400,
    autoHeight: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.blog-button-next',
      prevEl: '.blog-button-prev',
      },
      breakpoints: {
      
        576: {
          slidesPerView: 1,
          /* centeredSlides: true, */
        },
        
        768: {
          slidesPerView: 1,
          
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 2,       
        },
        1200: {
          slidesPerView: 3,       
        },
      },
  });