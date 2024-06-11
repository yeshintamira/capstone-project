const About = {
  async render() {
    return `
      <div id="about" tabindex="0">
        <div class="team-container" tabindex="0">
          <h2 tabindex="0">Our Team</h2>
          <div class="team-group" tabindex="0">
            ${this.groups.map((group, index) => `
              <div class="group" tabindex="${index + 1}">
                <div class="photo-frame" tabindex="0">
                  <img class="photo-image" src="${group.photo}" alt="${group.title}" tabindex="0">
                </div>
                <div class="description" tabindex="0">
                  <h3 tabindex="0">${group.title}</h3>
                  <p tabindex="0">${group.description}</p>
                  <div class="social-links" tabindex="0">
                    <a href="${group.linkedin}" target="_blank" tabindex="0">
                      <img src="../images/foto-sosial/linkedin.jpg" alt="LinkedIn" tabindex="0">
                    </a>
                    <a href="${group.github}" target="_blank" tabindex="0">
                      <img src="../images/foto-sosial/github.jpg" alt="Github" tabindex="0">
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },

  groups: [
    {
      title: 'Yeshinta Mira Yolanda',
      description: 'Front-End Developer',
      photo: '../images/foto-kelompok/foto-yeshinta.jpg',
      linkedin: 'https://www.linkedin.com/in/yeshinta-mira-yolanda-3840871b1/',
      github: 'https://github.com/yeshintamira',
    },
    {
      title: 'Dwi Wahyu Kuncoro Hadi S.',
      description: 'Back-End Developer',
      photo: '../images/foto-kelompok/foto-dwi.jpg',
      linkedin: 'https://www.linkedin.com/in/dwi-wahyu-kuncoro-h-s-576088221/',
      github: 'https://github.com/dwxonly',
    },
    {
      title: 'Rendy Adhinata Kusuma',
      description: 'Front-End Developer',
      photo: '../images/foto-kelompok/foto-rendy.jpg',
      linkedin: 'http://www.linkedin.com/in/rendy-adhinata-kusuma-647b56220',
      github: 'https://github.com/RendyAdhinata',
    },
  ],
};

export default About;
