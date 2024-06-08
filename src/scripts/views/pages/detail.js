import budaya from '../../data/budaya-source';

const Detail = {
  async render() {
    const url = window.location.hash.split('/');
    const id = url[url.length - 1];
    const culturalItem = budaya.find((item) => item.id === id);

    if (!culturalItem) {
      return `
        <main class="detail-container" id="maincontent">
          <p>Item tidak ditemukan!</p>
        </main>
      `;
    }

    return `
      <main class="detail-container" id="maincontent">
      <div class="cultural-detail">
       <h2>${culturalItem.name}</h2>
        <img src="${culturalItem.pictureId}" alt="${culturalItem.name}">
        <div class="detail-content">
         
          <p>${culturalItem.description}</p>
          ${culturalItem.ciriKhas ? `<h3>Ciri Khas</h3><p>${culturalItem.ciriKhas}</p>` : ''}
          ${culturalItem.simbolis ? `<h3>Simbolis</h3><p>${culturalItem.simbolis}</p>` : ''}
          ${culturalItem.fungsi ? `<h3>Fungsi</h3><p>${culturalItem.fungsi}</p>` : ''}
          ${culturalItem.makna ? `<h3>Makna</h3><p>${culturalItem.makna}</p>` : ''}
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
