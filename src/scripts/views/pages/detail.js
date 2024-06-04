import budaya from '../../data/budaya-source';

const Detail = {
  async render() {
    const url = window.location.hash.split('/');
    const id = url[url.length - 1];
    const culturalItem = budaya.find(item => item.id === id);

    if (!culturalItem) {
      return `
        <main class="container" id="maincontent">
          <p>Item tidak ditemukan!</p>
        </main>
      `;
    }

    return `
      <main class="container" id="maincontent">
        <div class="cultural-detail">
          <img src="${culturalItem.pictureId}" alt="${culturalItem.name}">
          <div class="detail-content">
            <h2>${culturalItem.name}</h2>
            <p>${culturalItem.description}</p>
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
