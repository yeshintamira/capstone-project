import budaya from '../../data/budaya-source';

const Detail = {
  async render() {
    const url = window.location.hash.split('/');
    const id = url[url.length - 1];
    const culturalItem = budaya.find((item) => item.id === id);

    if (!culturalItem) {
      return `
        <main class="detail-container" id="maincontent" tabindex="0">
          <p tabindex="0">Item tidak ditemukan!</p>
        </main>
      `;
    }

    return `
      <main class="detail-container" id="maincontent" tabindex="0">
        <div class="cultural-detail">
          <h2 tabindex="0">${culturalItem.name}</h2>
          <img src="${culturalItem.pictureId}" alt="${culturalItem.name}" tabindex="0">
          <div class="detail-content" tabindex="0">
            <p tabindex="0">${culturalItem.description}</p>
            ${culturalItem.ciriKhas ? `<h3 tabindex="0">Ciri Khas</h3><p tabindex="0">${culturalItem.ciriKhas}</p>` : ''}
            ${culturalItem.simbolis ? `<h3 tabindex="0">Simbolis</h3><p tabindex="0">${culturalItem.simbolis}</p>` : ''}
            ${culturalItem.fungsi ? `<h3 tabindex="0">Fungsi</h3><p tabindex="0">${culturalItem.fungsi}</p>` : ''}
            ${culturalItem.makna ? `<h3 tabindex="0">Makna</h3><p tabindex="0">${culturalItem.makna}</p>` : ''}
          </div>
        </div>
        <button id="addReviewBtn" tabindex="0">Add Review</button>
        <div id="reviewForm" style="display:none;">
          <h2>Tambahkan Review untuk Artikel ${culturalItem.name}</h2>
          <form id="reviewFormElement">
            <textarea id="reviewText" placeholder="Write your review here..." tabindex="0"></textarea>
            <button type="button" id="submitReviewBtn" tabindex="0">Submit</button>
          </form>
        </div>
      </main>
    `;
  },

  async afterRender() {
    document.getElementById('addReviewBtn').addEventListener('click', () => {
      document.getElementById('reviewForm').style.display = 'block';
    });

    document.getElementById('submitReviewBtn').addEventListener('click', async () => {
      const reviewText = document.getElementById('reviewText').value;
      if (reviewText) {
        const response = await fetch('http://localhost:3000/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ review: reviewText }), // Kirim hanya ulasan
        });

        if (response.ok) {
          alert('Review submitted successfully!');
          document.getElementById('reviewText').value = '';
          document.getElementById('reviewForm').style.display = 'none';
        } else {
          alert('Failed to submit review. Please try again.');
        }
      } else {
        alert('Review cannot be empty.');
      }
    });
  },
};

export default Detail;
