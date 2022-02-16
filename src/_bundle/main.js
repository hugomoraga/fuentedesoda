import "./main.pcss";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

let homeSlider = document.getElementById('home-slider');
if (typeof(homeSlider) != 'undefined' && homeSlider !=null)
{

let slider = tns({
    container: '.home-slider-container',
    items: 1,
    slideBy: 'page',
    navPosition: 'botton',
    swipeAngle: false,

    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: "#customize-controls",


  });

}

