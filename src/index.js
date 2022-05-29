import "./main.css";


(function LoadNav() {
  const nav = document.querySelector(".primary-navigation");
  const navToggle = document.querySelector(".mobile-nav-toggle");

  navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if(visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
  });

  let resizeTimer;

  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
})();


const slideList = document.querySelector('.slides');
const slides = document.querySelectorAll(".slide");


window.addEventListener("resize", () => {
  slideList.style.setProperty('width', `${getw() * 5}px`);
  slides.forEach(e => {
    e.style.setProperty('width', `${getw()}px`);
    e.style.setProperty('left', `${Number(e.getAttribute('data-index')) * getw() * -1}px`);
  });
});

window.onload = () => {
  slideList.style.setProperty('width', `${getw() * 5}px`);
  slides.forEach(e => {
    e.style.setProperty('width', `${getw()}px`);
    e.style.setProperty('left', `${Number(e.getAttribute('data-index')) * getw() * -1}px`);
  });
}

let slideIndex = 0;
let slideTimer;

slideTimer = setTimeout(showSlides, 5000); 

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
    document.querySelector('.play').style.display = "inline-block"
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

window.addEventListener("scroll", reveal);
reveal();