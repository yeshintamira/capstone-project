import budaya from '../../data/budaya-source';

const Home = {
  async render() {
    // eslint-disable-next-line no-unused-vars
    const culturalItems = budaya.map((item) => `
      <div class="cultural-card">
        <img class="cultural-image" src="${item.pictureId}" alt="${item.name}">
        <div class="card-content">
          <h2>${item.name}</h2>
          <p>${item.description.substring(0, 100)}...</p>
          <a href="#/detail/${item.id}" class="detail-link">Lihat Detail</a>
        </div>
      </div>
    `).join('');

    return `
      <header class="header">
      </header>
      <main class="container" id="maincontent">
      <div class="intro">
      <h1 class="intro-title">Selamat datang di Budaya Madura (BUDRA)!</h1>
      <div class="intro-text">
        <p>Budaya Madura mencerminkan identitas lokal melalui tradisi dan kesenian seperti Tari Muang Sangkal, Karapan Sapi, Sapi Sono', dan Tanean Lanjhang. Upacara Rokat Tase' dan seni pertunjukan seperti Topeng Dalang serta musik Saronen memperkaya ekspresi budaya, membentuk budaya Madura yang dinamis dan berwarna.</p>
        <button class="explore-button" tabindex="0"><a href="#/budaya">Baca Lebih Lanjut</a></button>
      </div>
    </div>
      </main>
      <article class="article-container">
        <div class="article-header">
        <h1 tabindex="0">Eksplorasi Budaya Madura</h1>
        <h2 tabindex="0">Berikut kami rekomendasikan artikel tentang BUDRA</h2>
          
        </div>
       
      </article>
    </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
