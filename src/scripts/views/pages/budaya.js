import budaya from '../../data/budaya-source';

const Budayas = {
  async render() {
    const culturalItems = budaya.map((item) => `
      <div class="cultural-card" tabindex="0">
        <img class="cultural-image" src="${item.pictureId}" alt="${item.name}" tabindex="0">
        <div class="card-content" tabindex="0">
          <h2 tabindex="0">${item.name}</h2>
          <p tabindex="0">${item.description.substring(0, 120)}...</p>
          <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
        </div>
      </div>
    `).join('');

    return `
      <main tabindex="0">
        <!-- Tambahkan elemen input pencarian -->
        <div class="search-container" tabindex="0">
          <input type="text" id="search-input" placeholder="Search..." tabindex="0">
          <button id="search-button" tabindex="0">Search</button>
        </div>
        <!-- Daftar budaya -->
        <div id="cultural-list" class="cultural-list" tabindex="0">
          ${culturalItems}
        </div>
      </main>
    `;
  },

  async afterRender() {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => this.searchBudaya());

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.searchBudaya();
      }
    });
  },

  searchBudaya() {
    const searchInput = document.getElementById('search-input');
    const keyword = searchInput.value.toLowerCase();

    const searchResults = budaya.filter((item) => item.name.toLowerCase().includes(keyword)
      || item.description.toLowerCase().includes(keyword));

    this.showSearchResults(searchResults);
  },

  showSearchResults(results) {
    const culturalList = document.getElementById('cultural-list');
    culturalList.innerHTML = '';

    if (results.length > 0) {
      const culturalItems = results.map((item) => `
        <div class="cultural-card" tabindex="0">
          <img class="cultural-image" src="${item.pictureId}" alt="${item.name}" tabindex="0">
          <div class="card-content" tabindex="0">
            <h2 tabindex="0">${item.name}</h2>
            <p tabindex="0">${item.description.substring(0, 120)}...</p>
            <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
          </div>
        </div>
      `).join('');

      culturalList.innerHTML = culturalItems;
    } else {
      culturalList.innerHTML = '<p tabindex="0">Tidak ditemukan.</p>';
    }
  },
};

export default Budayas;
