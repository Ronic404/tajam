import dataFeedback from './data/dataFeedback';

export default function feedbackSwitcher() {
  const AVATARS = document.querySelectorAll('.feedback-page__persons-photos-item-icon');

  AVATARS.forEach((avatar) => {
    avatar.addEventListener('mouseover', (event) => {
      AVATARS.forEach((el) => {
        el.classList.remove('feedback-page__persons-photos-item-icon_active');
      });
      event.target.classList.add('feedback-page__persons-photos-item-icon_active');
      const id = document.querySelector('.feedback-page__persons-photos-item-icon_active').getAttribute('id').slice(-1) - 1;

      const FEEDBACK_TEXT = document.querySelector('.feedback-page__text');
      const FEEDBACK_NAME = document.querySelector('.feedback-page__persons-name');
      const FEEDBACK_POSITION = document.querySelector('.feedback-page__persons-position');

      FEEDBACK_TEXT.innerText = dataFeedback[id].text;
      FEEDBACK_NAME.innerText = dataFeedback[id].name;
      FEEDBACK_POSITION.innerText = dataFeedback[id].position;
    });
  });
}
