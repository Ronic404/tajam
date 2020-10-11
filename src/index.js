import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/index.scss';

import burgerSwitcher from './assets/js/burgerSwitcher';
import feedbackSwitcher from './assets/js/feedbackSwitcher';
import renderTeam from './assets/js/renderTeam';
import renderFeedback from './assets/js/renderFeedback';
import './assets/js/stopVideo';

window.onload = () => {
  renderTeam();
  renderFeedback();
  burgerSwitcher();
  feedbackSwitcher();
};
