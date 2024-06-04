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
        <a href="#" class="detail-link">Lihat Detail</a>
    </div>
`;

      // Setelah elemen-elemen HTML telah ditambahkan ke DOM, kita dapat menambahkan event listener.
      const detailLinks = document.querySelectorAll('.detail-link'); // Ambil semua elemen dengan kelas .detail-link
      detailLinks.forEach((detailLink) => { // Loop melalui setiap elemen .detail-link
        detailLink.addEventListener('click', (event) => { // Tambahkan event listener untuk setiap elemen
          event.preventDefault(); // Cegah perilaku default dari tautan
          window.location.href = `detail.html?id=${item.id}`; // Arahkan pengguna ke halaman detail dengan menggunakan id item
        });
      });

      culturalList.appendChild(card);
    });
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
});
