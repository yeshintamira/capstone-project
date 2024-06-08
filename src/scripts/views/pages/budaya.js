import budaya from '../../data/budaya-source';

const Budayas = {
  async render() {
    const culturalItems = budaya.map((item) => `
      <div class="cultural-card">
        <img class="cultural-image" src="${item.pictureId}" alt="${item.name}">
        <div class="card-content">
          <h2>${item.name}</h2>
          <p>${item.description.substring(0, 120)}...</p>
          <a href="#/detail/${item.id}" class="detail-link">Lihat Detail</a>
        </div>
      </div>
    `).join('');

    return `
      <main>
        <div id="cultural-list" class="cultural-list">
          ${culturalItems}
        </div>
      </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Budayas;
