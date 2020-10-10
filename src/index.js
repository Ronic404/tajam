import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/index.scss';

import burgerSwitcher from './assets/js/burgerSwitcher';
import './assets/js/stopVideo';

window.onload = () => {
  burgerSwitcher();
};
