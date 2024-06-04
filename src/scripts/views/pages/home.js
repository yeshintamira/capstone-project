import budaya from '../../data/budaya-source';

const Home = {
  async render() {
    const culturalItems = budaya.map((item) => `
      <div class="cultural-card">
        <img src="${item.pictureId}" alt="${item.name}">
        <div class="card-content">
          <h2>${item.name}</h2>
          <a href="#/detail/${item.id}" class="detail-link">Lihat Detail</a>
        </div>
      </div>
    `).join('');

    return `
      <main class="container" id="maincontent">
        <p>Selamat datang di website Budaya Madura!</p>
        <div id="cultural-list">
          ${culturalItems}
        </div>
      </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
