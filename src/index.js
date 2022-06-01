import "./main.css";
import {LoadHomePage} from './home.js';
import { LoadMenu } from "./menu.js";
import { LoadSlideGallery } from "./gallery";


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
  })
});