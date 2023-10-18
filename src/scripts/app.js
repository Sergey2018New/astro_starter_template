/* Import vendor ************************** */
import './vendor.js';
import LazyLoad from "vanilla-lazyload";

/* Import common scripts ****************** */
import setVariables from './scripts/setVariables.js';

/* Import main components ***************** */
// import { modal } from './components/modal.js';

/* Import additional components *********** */
// import initSwiper from './components/swiper.js';

/* Import header scripts ****************** */
import headerMenu from './header/headerMenu.js';
// import headerFixing from './header/headerFixing.js';

/* Import additional scripts ************** */
// import script from './scripts/script.js';

/* Import validation ********************** */
// import validation from './validation.js';

/* Initialization main components ************* */
// modal.init();

/* Initialization additional components ******* */
// initSwiper();

/* Initialization header scripts ************** */
headerMenu(991);
// headerFixing();

/* Initialization additional scripts ********** */
setVariables();

/* Validation ************************ */
// validation();

// Lazy Load
new LazyLoad({});
