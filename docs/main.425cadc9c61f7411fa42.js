/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/reveal.js

const LoadReveal = function() {
    function reveal() {
        var reveals = document.querySelectorAll(".revealable");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 20;
            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            }
        }
    }
    reveal();
    window.addEventListener("scroll", reveal);
}


;// CONCATENATED MODULE: ./src/gallery.js


const LoadSlideGallery = function() {
    const slideList = document.querySelector('.slides');
    const slides = document.querySelectorAll(".slide");


    window.addEventListener("resize", () => {
    slideList.style.setProperty('width', `${getw() * 5}px`);
    slides.forEach(e => {
        e.style.setProperty('width', `${getw()}px`);
        e.style.setProperty('left', `${Number(e.getAttribute('data-index')) * getw() * -1}px`);
    });
    });

    slideList.style.setProperty('width', `${getw() * 5}px`);
    slides.forEach(e => {
        e.style.setProperty('width', `${getw()}px`);
        e.style.setProperty('left', `${Number(e.getAttribute('data-index')) * getw() * -1}px`);
    });

    let slideIndex = 0;
    let slideTimer;

    slideTimer = setTimeout(showSlides, 5000); 

   
    document.querySelector(".pause").addEventListener("click", () => {
    PauseSlides();
    });

    document.querySelector(".play").addEventListener("click", () => {
        document.querySelector('.play').style.display = "none";
        document.querySelector('.pause').style.display = "inline-block"
        slideTimer = setTimeout(showSlides, 5000); 
    });


    function getw() {
        let b = window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : 
        window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        return b;
    }

    function PauseSlides() {
        clearInterval(slideTimer);
        document.querySelector('.pause').style.display = "none";
        document.querySelector('.play').style.display = "inline-block";
    }

    function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.setProperty('opacity', '0');
        slides[i].style.setProperty('z-index', '998');
    }
    if (slideIndex > slides.length-1) {slideIndex = 0}
    slides[slideIndex].style.setProperty('opacity', '1');
    slides[slideIndex].style.setProperty('z-index', '999');
    slideIndex++;
    slideTimer = setTimeout(showSlides, 5000); 
    } 

    try {
        document.querySelector(".btn-left").addEventListener("click", () => {
            slideIndex = slideIndex - 2;
            if (slideIndex < 0) {slideIndex = slides.length - 1}
            clearInterval(slideTimer);
            showSlides();
            PauseSlides();
        });
        
        document.querySelector(".btn-right").addEventListener("click", () => {
            if (slideIndex > slides.length - 1) {slideIndex = 0};
            clearInterval(slideTimer);
            showSlides();
            PauseSlides();
        });
    } catch {
        
    }
    
}


;// CONCATENATED MODULE: ./src/home.js



const LoadHomePage = function() {
    document.querySelector('main').innerHTML = `
    <section id = "slides" class = "slide-gallery revealable">
            <div class="gallery">
                <button class="btn-right"></button>
                <button class="btn-left"></button>
                <div class = "list">
                    <ul class="slides">
                        <li data-index="0" class="slide" aria-hidden="true">
                            <div class="gallery-item"></div>
                        </li>
                        <li data-index="1" class="slide" aria-hidden="true">
                            <div class="gallery-item"></div>
                        </li>
                        <li data-index="2" class="slide" aria-hidden="true">
                            <div class="gallery-item"></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="control-elements">
                <button class="pause"></button>
                <button class="play"></button>
            </div>
        </section>
        <section class = "par letter-spacing-3 fs-600 content revealable">
            <h2>Adrasti's</h2>
            <p>Take a delight in exquisite cuisine</p>
            <p>served amid serene nature's ambiance</p>
        </section>
        <section class = "box-container fs-500 letter-spacing-4 revealable" style = "display: table;">
            <div class = "box small-box" >
                <div class="inner-container">
                    <h3>
                        Menus
                    </h3>
                    <p>
                        <span>Fresh ingredients used to prepare anything from</span><br>delicate dishes to a variety of comfort meals
                    </p>
                    <a class = "uppercase button" data-link = "menu">view menus</a>
                </div>
            </div>
            <div class = "box big-box">
                <div class="inner-image" id = "img1"></div>
            </div>
        </section>
        <section class = "content quote flex fs-400 revealable">
            <figure>
                <blockquote class = "fs-500">
                    <p>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.</p>
                </blockquote>
                <figcaption>—Aldous Huxley, <cite>ExampleFoodReview.com</cite></figcaption>
            </figure>
        </section>
        <section class = "box-container revealable" style = "margin-bottom: 3rem">
            <div class = "box big-box">
                <div class="inner-image"></div>

            </div>
            <div class = "box small-box revealable" >
                <div class="inner-container fs-500 letter-spacing-4">
                    <h3>
                        Hours & Location
                    </h3>
                    <p>
                        <span>Working hours may vary</span><br>depending on the season and workload levels
                    </p>
                    <a href="" class="uppercase button">view Hours & Location</a>
                </div>
            </div>
        </section>`;
        LoadReveal();
        LoadSlideGallery();
};


;// CONCATENATED MODULE: ./src/menu.js



const LoadMenu = function() {
    document.querySelector('main').innerHTML = `
    <section id = "slides" class = "slide-gallery revealable">
            <div class="gallery">
                <div class = "list">
                    <ul class="slides">
                        <li data-index="0" class="slide slide-menu" aria-hidden="true">
                            <div class="gallery-item"></div>
                        </li>
                        <li data-index="1" class="slide slide-menu" aria-hidden="true">
                            <div class="gallery-item"></div>
                        </li>
                        <li data-index="2" class="slide slide-menu" aria-hidden="true">
                            <div class="gallery-item"></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="control-elements" style="display: flex; justify-content: space-between;">
                <button class="pause"></button>
                <button class="play"></button>
                <h1 class = "uppercase fs-900" style = "margin-right: 3rem">Menu</h1>
            </div>
        </section>
        <section id="menu" class = "content revealable">
            <div class="tabs">
                <ul class="tab-nav" role="tablist">
                    <li><button class="menusection active" data-action="food">Food</button></li>
                    <li><button class="menusection" data-action="drinks">Drinks</button></li>
                </ul>
                <div class="tab-content">
                    <section id="food">
                        <div class="menu-cont">
                            <div class="row">
                                <div class="col">
                                    <section class="menu-section">
                                        <div class="menu-section-header">Italian</div>
                                        <ul>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Spaghetti al Pesto</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorea.</p>
                                                <p class = "menu_it-price"><strong>24.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Spaghetti Bolognese</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                                <p class = "menu_it-price"><strong>27.50</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Lasagna</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                                <p class = "menu_it-price"><strong>33.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Risotto</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <p class = "menu_it-price"><strong>37.50</strong></p>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="menu-section">
                                        <div class="menu-section-header">Seafood</div>
                                        <ul>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Whole Lobster</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                                <p class = "menu_it-price"><strong>Market Price</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Clam Zuppa</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                                <p class = "menu_it-price"><strong>14.50</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Stuffed Lobster Tail</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                                <p class = "menu_it-price"><strong>Market Price</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Crab Cake Dinner</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                                <p class = "menu_it-price"><strong>16.00</strong></p>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                                <div class = "col">
                                    <section class="menu-section">
                                        <div class="menu-section-header">Appetizers</div>
                                        <ul>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Shrimp Remoulade</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorea.</p>
                                                <p class = "menu_it-price"><strong>16.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Baked Escargot</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                <p class = "menu_it-price"><strong>16.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Seared Ahi Tuna</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                <p class = "menu_it-price"><strong>17.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Spicy Lobster</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                <p class = "menu_it-price"><strong>19.00</strong></p>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="menu-section">
                                        <div class="menu-section-header">Salads and soups</div>
                                        <ul>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Spinach Salad</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                                <p class = "menu_it-price"><strong>9.50</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Caprese Salad</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                <p class = "menu_it-price"><strong>7.50</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">French Onion Soup</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                                <p class = "menu_it-price"><strong>5.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Lobster Bisque</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                                <p class = "menu_it-price"><strong>8.00</strong></p>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="drinks">
                        <div class="menu-cont">
                            <div class="row">
                                <div class="col">
                                    <section class="menu-section">
                                        <div class="menu-section-header">Wine*</div>
                                        <ul>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Pinot Noir, Red</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorea.</p>
                                                <p class = "menu_it-price"><strong>32.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Lychgate</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                <p class = "menu_it-price"><strong>29.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Bolney Rosè</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                <p class = "menu_it-price"><strong>31.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">English Rosè</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                <p class = "menu_it-price"><strong>26.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Classic cuveè</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                <p class = "menu_it-price"><strong>65.00</strong></p>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="menu-section flex">
                                        *Price per bottle
                                    </section>
                                </div>
                                <div class="col">
                                    <section class="menu-section">
                                        <div class="menu-section-header">Coffee</div>
                                        <ul>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Expresso</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorea.</p>
                                                <p class = "menu_it-price"><strong>4.50</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Cappuccino</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                <p class = "menu_it-price"><strong>3.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Latte</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                <p class = "menu_it-price"><strong>4.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Cafe Mocha</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                <p class = "menu_it-price"><strong>10.00</strong></p>
                                            </li>
                                            <li class="menu-item">
                                                <p class="menu_it-header">Cafe Glace</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                <p class = "menu_it-price"><strong>7.00</strong></p>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>`;
        LoadReveal();
        LoadSlideGallery();

        document.querySelector('[data-action="food"]').addEventListener("click", () => {
            document.getElementById('drinks').style.display = 'none';
            document.getElementById('drinks').style.opacity = '0';
            document.getElementById('food').style.display = 'block';
            setTimeout(() => {
                document.getElementById('food').style.opacity = '1';
            }, 100);
            document.querySelector('.tab-content').style.minHeight = "240vh";
            document.querySelector('[data-action="drinks"]').classList.remove('active');
            document.querySelector('[data-action="food"]').classList.add('active');
        })

        document.querySelector('[data-action="drinks"]').addEventListener("click", () => {
            document.getElementById('food').style.opacity = '0';
            document.getElementById('food').style.display = 'none';
            document.getElementById('drinks').style.display = 'block';
            setTimeout(() => {
                document.getElementById('drinks').style.opacity = '1';
            }, 100);
            document.querySelector('.tab-content').style.minHeight = "160vh";
            document.querySelector('[data-action="food"]').classList.remove('active');
            document.querySelector('[data-action="drinks"]').classList.add('active');
        })

        window.scroll(0,0);
}


;// CONCATENATED MODULE: ./src/index.js





const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

const LoadNav = (function() {
  navToggle.addEventListener("click", Toggle);

  function Toggle() {
    const visibility = nav.getAttribute("data-visible");
    if(visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
  }
  let resizeTimer;

  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
})();



LoadHomePage();


const MenuLinks = function() {
  document.querySelectorAll('[data-link="menu"]').forEach(e => {
    e.addEventListener("click", () => {
      document.querySelector('main').innerHTML = '';
      LoadMenu();
      document.querySelectorAll('[data-link]').forEach(e => {
        e.classList.remove('active');
      })
      document.querySelector('a[data-link = "menu"]').classList.add('active');
      if(nav.getAttribute("data-visible") === "true"){
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
      }
    })
  });
};

MenuLinks();

document.querySelectorAll('[data-link="home"]').forEach(e => {
  e.addEventListener("click", () => {
    document.querySelector('main').innerHTML = '';
    LoadHomePage();
    MenuLinks();
    document.querySelectorAll('[data-link]').forEach(e => {
      e.classList.remove('active');
    })
    document.querySelector('a[data-link = "home"]').classList.add('active');
    if(nav.getAttribute("data-visible") === "true"){
      nav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  })
});
/******/ })()
;