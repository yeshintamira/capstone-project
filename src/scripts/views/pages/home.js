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
    
  
    <div class="intro-container">
    <h1 class="intro-title">Selamat datang di Budaya Madura (BUDRA)</h1>
    <div class="intro">
      <div class="intro-text">
        <p>
          Budaya Madura adalah cerminan kekayaan sejarah dan identitas yang khas. Bahasa Madura yang digunakan secara luas oleh penduduknya, dengan beragam dialek yang mencerminkan keragaman budaya di pulau tersebut. Tradisi dan adat istiadat, seperti upacara pernikahan yang sarat makna simbolis dan prosesi adat lainnya, menjadi inti dari kehidupan sosial masyarakat Madura. Selain itu, tradisi Karapan Sapi yang menjadi ikon budaya Madura, menunjukkan kecintaan dan kebanggaan akan warisan leluhur yang diwariskan dari generasi ke generasi. Budaya Madura tidak hanya menjadi aspek penting dalam kehidupan sehari-hari masyarakatnya, tetapi juga menarik perhatian sebagai daya tarik wisata yang unik di Indonesia.
        </p>
      </div>
    </div>
    <div class="madura-image-container">
      <img src="../images/gambar-budra/suramadu.jpg" alt="Madura" class="madura-image" tabindex="0">
    </div>
  </div>
  
      
      <article class="article-container">
        <div class="article-header">
        <h1 tabindex="0">Popular Articles of BUDRA </h1>
        </div>

    <div class="rekom-card">
    <div class="card-item">
        <img src="../images/gambar-budra/muang-sangkal.jpg" alt="Tari Muang Sangkal" class="article-image" tabindex="0">
        <h1 tabindex="0">Tari Muang Sangkal</h1>
        <p tabindex="0">Tari Muang Sangkal berasal dari kata 'Muang' yang berarti 'mengusir' dan 'Sangkal' yang berarti 'kesialan'.</p>
    </div>
    <div class="card-item">
        <img src="../images/gambar-budra/karapansapi.jpg" alt="Karapan Sapi" class="article-image" tabindex="0">
        <h1 tabindex="0">Karapan Sapi</h1>
        <p tabindex="0">Karapan Sapi adalah balapan sapi yang sangat populer di Madura. </p>
    </div>
    <div class="card-item">
        <img src="../images/gambar-budra/sapisono.jpeg" alt="Sapi Sono'" class="article-image" tabindex="0">
        <h1 tabindex="0">Sapi Sono'</h1>
        <p tabindex="0">Tradisi Sapi Sono' adalah kontes kecantikan sapi.</p>
    </div>
    
</div>

      </article>

    <!-- Tombol "Lebih Lanjut" di paling bawah -->
    <button class="next-button" tabindex="0"><a href="#/budaya"> Lebih Lanjut</a></button>
    </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
