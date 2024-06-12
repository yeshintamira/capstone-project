import budaya from '../../data/budaya-source';

const Budayas = {
  async render() {
    const culturalItems = budaya.map((item) => `
      <div class="cultural-card">
        <img class="cultural-image" src="${item.pictureId}" alt="${item.name}" tabindex="0">
        <div class="card-content">
          <h2 tabindex="0">${item.name}</h2>
          <p tabindex="0">${item.description.substring(0, 120)}...</p>
          <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
        </div>
      </div>
    `).join('');

    return `
      <main>
       <div class="cultural-info">
          <h2 tabindex="0">Temukan informasi yang ingin Anda ketahui tentang Budaya Madura di bawah ini!</h2>
        </div>
        <!-- Tambahkan elemen input pencarian -->
        <div class="search-container">
          <input type="text" id="search-input" placeholder="Search..." tabindex="0">
          <button id="search-button" tabindex="0">Search</button>
        </div>
        <!-- Daftar budaya -->
        <div id="cultural-list" class="cultural-list">
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
        <div class="cultural-card">
          <img class="cultural-image" src="${item.pictureId}" alt="${item.name}" tabindex="0">
          <div class="card-content">
            <h2 tabindex="0">${item.name}</h2>
            <p tabindex="0">${item.description.substring(0, 120)}...</p>
            <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
          </div>
        </div>
      `).join('');

      culturalList.innerHTML = culturalItems;
    } else {
      culturalList.innerHTML = '<p class="no-results" tabindex="0">Tidak ditemukan.</p>';
    }
  },
};

export default Budayas;
