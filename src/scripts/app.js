/* Import vendor ************************** */
import './vendor.js';
import LazyLoad from "vanilla-lazyload";

/* Import common scripts ****************** */
import './scripts/setHeight.js';

/* Import main components ***************** */
// import { modal } from './components/modal.js';

/* Import additional components *********** */
// import swiper from './components/swiper.js';

/* Import header scripts ****************** */
import headerFixing from './header/headerFixing.js';
import headerMenu from './header/headerMenu.js';

/* Import additional scripts ************** */
// import script from './scripts/script.js';

/* Import validation ********************** */
// import validation from './validation.js';

/* Initialization main components ************* */
// modal.init();

/* Initialization additional components ******* */
// swiper();

/* Initialization header scripts ************** */
headerFixing();
headerMenu(991);

/* Initialization additional scripts ********** */
// script();

/* Validation ************************ */
// validation();

// Lazy Load
new LazyLoad({});
