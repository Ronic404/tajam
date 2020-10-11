import dataFeedback from './data/dataFeedback';
import feedbackSwitcher from './feedbackSwitcher';

function renderPhotos() {
  return dataFeedback.map((person) => {
    const active = person.show && 'feedback-page__persons-photos-item-icon_active';
    return `
      <li class="feedback-page__persons-photos-item mx-2">
        <img class="feedback-page__persons-photos-item-icon ${active}" src="${person.img}" alt="${person.name}" id="feedback-${person.id}">
      </li>
    `;
  });
}

export default function renderFeedback() {
  const FEEDBACK_TEXT = document.querySelector('.feedback-page__text');
  const FEEDBACK_NAME = document.querySelector('.feedback-page__persons-name');
  const FEEDBACK_POSITION = document.querySelector('.feedback-page__persons-position');
  const PHOTOS_LIST = document.querySelector('.feedback-page__persons-photos');

  PHOTOS_LIST.innerHTML = renderPhotos().join('');

  const id = document.querySelector('.feedback-page__persons-photos-item-icon_active').getAttribute('id').slice(-1) - 1;

  FEEDBACK_TEXT.innerText = dataFeedback[id].text;
  FEEDBACK_NAME.innerText = dataFeedback[id].name;
  FEEDBACK_POSITION.innerText = dataFeedback[id].position;

  feedbackSwitcher();
}
