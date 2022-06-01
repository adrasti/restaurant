import {LoadReveal} from './reveal.js';
import {LoadSlideGallery} from './gallery.js';

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
        <section class = "letter-spacing-3 fs-600 content revealable">
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

export {LoadHomePage};