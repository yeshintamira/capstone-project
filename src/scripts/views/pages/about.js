const About = {
  async render() {
    return `
            <div id="about">
                <div class="team-container">
                    <h2>Our Team</h2>
                    <div class="team-group">
                        ${this.groups.map((group) => `
                            <div class="group">
                                <div class="photo-frame">
                                    <img class="photo-image" src="${group.photo}" alt="${group.title}">
                                </div>
                                <div class="description">
                                    <h3>${group.title}</h3>
                                    <p>${group.description}</p>
                                    <div class="social-links">
                                        <a href="${group.linkedin}" target="_blank">
                                            <img src="../images/foto-sosial/linkedin.jpg" alt="LinkedIn" >
                                        </a>
                                        <a href="${group.github}" target="_blank">
                                          <img src="../images/foto-sosial/github.jpg" alt="Github" >
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
    // Function to be called after the render method
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
      photo: '../images/',
      linkedin: 'https://www.linkedin.com/in/dwi/',
      github: 'https://github.com/dwi',
    },
    {
      title: 'Rendy Adhinata Kusuma',
      description: 'Front-End Developer',
      photo: '../',
      linkedin: 'https://www.linkedin.com/in/rendyj/',
      github: 'https://github.com/rendyj',
    },
  ],
};

export default About;
