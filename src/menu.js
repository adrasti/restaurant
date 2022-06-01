import {LoadReveal} from './reveal.js';
import {LoadSlideGallery} from './gallery.js';

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

export {LoadMenu};