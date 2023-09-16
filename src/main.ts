import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { register } from 'swiper/element/bundle';
import Vue3Marquee from 'vue3-marquee'


// swiper
register();



import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, 
  faCircleExclamation, 
  faUniversalAccess, 
  faComments, 
  faSliders, 
  faHouseChimney,
  faStar,
  faGlobe,
  faHouse,
   } from '@fortawesome/free-solid-svg-icons';
import { faVk, faTelegram } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faCircleExclamation, faUniversalAccess, faComments, faSliders, faHouseChimney, faStar, faGlobe, faVk, faTelegram, faHouse)


createApp(App).use(router).use(Vue3Marquee).component('font-awesome-icon', FontAwesomeIcon).mount('#app');