import dataTeam from './data/dataTeam';

export default function renderTeam() {
  const TEAM_PAGE = document.querySelector('.team-page-content-people');

  function getArrayTeammates() {
    return dataTeam.map((person) => `
    <div class="col-10 px-2 mx-auto mb-3"> 
      <div class="team-page-content-people__card" id="person-${person.id}">
        <img class="team-page-content-people__card-photo" src="${person.img}" alt="${person.name}"></img>
        <div class="team-page-content-people__card-name text-center">${person.name}</div>
        <div class="team-page-content-people__card-position text-center">${person.position}</div>
      </div>
    </div>
    `);
  }

  TEAM_PAGE.innerHTML = `<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 m-auto">${getArrayTeammates().join('')}</div>`;
}
