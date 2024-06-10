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
        <!-- Tambahkan elemen input pencarian -->
        <div class="search-container">
          <input type="text" id="search-input" placeholder="Search...">
          <button id="search-button">Search</button>
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
          <img class="cultural-image" src="${item.pictureId}" alt="${item.name}">
          <div class="card-content">
            <h2>${item.name}</h2>
            <p>${item.description.substring(0, 120)}...</p>
            <a href="#/detail/${item.id}" class="detail-link">Lihat Detail</a>
          </div>
        </div>
      `).join('');

      culturalList.innerHTML = culturalItems;
    } else {
      culturalList.innerHTML = '<p>No results found.</p>';
    }
  },
};

export default Budayas;
