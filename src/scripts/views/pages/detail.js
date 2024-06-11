import budaya from '../../data/budaya-source';

const Detail = {
  async render() {
    const url = window.location.hash.split('/');
    const id = url[url.length - 1];
    const culturalItem = budaya.find((item) => item.id === id);

    if (!culturalItem) {
      return `
        <main class="detail-container" id="maincontent" tabindex="0">
          <p tabindex="0">Item tidak ditemukan!</p>
        </main>
      `;
    }

    return `
      <main class="detail-container" id="maincontent" tabindex="0">
        <div class="cultural-detail">
          <h2 tabindex="0">${culturalItem.name}</h2>
          <img src="${culturalItem.pictureId}" alt="${culturalItem.name}" tabindex="0">
          <div class="detail-content" tabindex="0">
            <p tabindex="0">${culturalItem.description}</p>
            ${culturalItem.ciriKhas ? `<h3 tabindex="0">Ciri Khas</h3><p tabindex="0">${culturalItem.ciriKhas}</p>` : ''}
            ${culturalItem.simbolis ? `<h3 tabindex="0">Simbolis</h3><p tabindex="0">${culturalItem.simbolis}</p>` : ''}
            ${culturalItem.fungsi ? `<h3 tabindex="0">Fungsi</h3><p tabindex="0">${culturalItem.fungsi}</p>` : ''}
            ${culturalItem.makna ? `<h3 tabindex="0">Makna</h3><p tabindex="0">${culturalItem.makna}</p>` : ''}
          </div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
