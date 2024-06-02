/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menuIcon'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
});

document.addEventListener('DOMContentLoaded', () => {
  const culturalData = {
    budra: [
      {
        name: 'Tari Muang Sangkal',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...',
        pictureId: '../images/muang sangkal.jpg',
      },
      {
        name: 'Tari Muang Sangkal',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...',
        pictureId: '../images/muang sangkal.jpg',
      },
      {
        name: 'Tari Muang Sangkal',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...',
        pictureId: '../images/muang sangkal.jpg',
      },
    ],
  };

  const culturalList = document.getElementById('cultural-list');

  culturalData.budra.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'cultural-card';

    card.innerHTML = `
          <img src="${item.pictureId}" alt="${item.name}">
          <div class="card-content">
              <h2>${item.name}</h2>
              <p>${item.description}</p>
          </div>
      `;

    culturalList.appendChild(card);
  });
});
