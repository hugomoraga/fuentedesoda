import "./main.pcss";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

  var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    navPosition: 'botton',
    swipeAngle: false,

    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: "#customize-controls",


  });
