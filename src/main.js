import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUserSecret,
  faSpinner,
  faGlobe,
  faHeartbeat,
  faCaretDown,
  faCaretUp,
  faEnvelope,
  faMobilePhone,
} from '@fortawesome/free-solid-svg-icons';
import { faWeixin } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locales';

library.add(
  faUserSecret,
  faSpinner,
  faGlobe,
  faHeartbeat,
  faCaretDown,
  faCaretUp,
  faEnvelope,
  faMobilePhone,
  faWeixin,
);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');
