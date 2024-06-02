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

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/data/DATA.json');
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const culturalData = await response.json();

    const culturalList = document.getElementById('cultural-list');

    culturalData.budra.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'cultural-card';

      card.innerHTML = `
        <img src="${item.pictureId}" alt="${item.name}">
        <div class="card-content">
          <h2>${item.name}</h2>
        </div>
      `;

      culturalList.appendChild(card);
    });
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
});
