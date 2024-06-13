const Donate = {
  async render() {
    return `
      <div class="donate-container">
        <h2 tabindex="0">Donasi</h2>
        <div class="qr-code">
          <img src="../images/gambar-budra/qr-code.jpg" alt="Logo BANK BRI" tabindex="0" />
          <p tabindex="0">Nama Penerima: Dwi Wahyu Kuncoro Hadi S.</p>
          <p tabindex="0">Nomor Dana: 0815 6337 3106</p>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Function to be called after the render method
  },
};

export default Donate;
