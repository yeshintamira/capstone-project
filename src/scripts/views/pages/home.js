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
    <div class="madura-image-container">
      <img src="../images/gambar-budra/suramadu.jpg" alt="Madura" class="madura-image" tabindex="0">
    </div>
  </div>
      <div class="intro-text">
        <p>
          Budaya Madura adalah cerminan kekayaan sejarah dan identitas yang khas. Bahasa Madura yang digunakan secara luas oleh penduduknya, dengan beragam dialek yang mencerminkan keragaman budaya di pulau tersebut. Tradisi dan adat istiadat, seperti upacara pernikahan yang sarat makna simbolis dan prosesi adat lainnya, menjadi inti dari kehidupan sosial masyarakat Madura. Selain itu, tradisi Karapan Sapi yang menjadi ikon budaya Madura, menunjukkan kecintaan dan kebanggaan akan warisan leluhur yang diwariskan dari generasi ke generasi. Budaya Madura tidak hanya menjadi aspek penting dalam kehidupan sehari-hari masyarakatnya, tetapi juga menarik perhatian sebagai daya tarik wisata yang unik di Indonesia.
        </p>
      </div>
    </div>
 
  
      
      <article class="article-container">
        <div class="article-header">
        <h1 tabindex="0">Artikel Populer BUDRA </h1>
        </div>

    <div class="rekom-card">
    <div class="card-item">
        <img src="../images/gambar-budra/muang-sangkal.jpg" alt="Tari Muang Sangkal" class="article-image" tabindex="0">
        <h1 tabindex="0">Tari Muang Sangkal</h1>
        <p tabindex="0">Tari Muang Sangkal adalah tarian tradisional khas Madura yang memiliki makna simbolis dan sakral, sering dipentaskan dalam upacara adat dan acara kebudayaan.</p>
    </div>
    <div class="card-item">
        <img src="../images/gambar-budra/karapansapi.jpg" alt="Karapan Sapi" class="article-image" tabindex="0">
        <h1 tabindex="0">Karapan Sapi</h1>
        <p tabindex="0">Karapan sapi adalah sebuah tradisi unik yang berasal dari Pulau Madura, Indonesia, yang melibatkan perlombaan antara kerbau yang ditarik oleh sekeranjang di atas tanah berlumpur. </p>
    </div>
    <div class="card-item">
        <img src="../images/gambar-budra/sapisono.jpeg" alt="Sapi Sono'" class="article-image" tabindex="0">
        <h1 tabindex="0">Sapi Sonok</h1>
        <p tabindex="0">Sapi Sonok adalah jenis sapi yang khas dari Madura, Indonesia, dikenal karena penampilan fisiknya yang menarik dan kelincahannya.</p>
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
