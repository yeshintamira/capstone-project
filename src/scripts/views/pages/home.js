/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import budaya from '../../data/budaya-source';

const Home = {
  async render() {
    const culturalItems = budaya.slice(0, 3).map((item) => `
      <div class="card-item" tabindex="0">
        <img src="${item.pictureId}" alt="${item.name}" class="article-image" tabindex="0">
        <h1 tabindex="0">${item.name}</h1>
        <p tabindex="0">${item.description.substring(0, 120)}...</p>
        <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
      </div>
    `).join('');

    return `
      <div class="intro-container" tabindex="0">
        <h1 class="intro-title" tabindex="0">Selamat datang di Budaya Madura (BUDRA)</h1>
        <div class="intro" tabindex="0">
          <div class="madura-image-container" tabindex="0">
            <img src="../images/gambar-budra/suramadu.jpg" alt="Madura" class="madura-image" tabindex="0">
          </div>
        </div>
        <div class="intro-text" tabindex="0">
          <p tabindex="0">
            Budaya Madura adalah cerminan kekayaan sejarah dan identitas yang khas. Bahasa Madura yang digunakan secara luas oleh penduduknya, dengan beragam dialek yang mencerminkan keragaman budaya di pulau tersebut. Tradisi dan adat istiadat, seperti upacara pernikahan yang sarat makna simbolis dan prosesi adat lainnya, menjadi inti dari kehidupan sosial masyarakat Madura. Selain itu, tradisi Karapan Sapi yang menjadi ikon budaya Madura, menunjukkan kecintaan dan kebanggaan akan warisan leluhur yang diwariskan dari generasi ke generasi. Budaya Madura tidak hanya menjadi aspek penting dalam kehidupan sehari-hari masyarakatnya, tetapi juga menarik perhatian sebagai daya tarik wisata yang unik di Indonesia.
          </p>
        </div>
      </div>
      <article class="article-container" tabindex="0">
        <div class="article-header" tabindex="0">
          <h1 tabindex="0">Artikel Populer BUDRA</h1>
        </div>
        <div class="rekom-card" tabindex="0">
          ${culturalItems}
        </div>
      </article>
      <!-- Tombol "Lebih Lanjut" di paling bawah -->
      <button class="next-button" tabindex="0">
        <a href="#/budaya" tabindex="0"> Lebih Lanjut</a>
      </button>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
