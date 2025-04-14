AOS.init();

const form = document.getElementById('dukunganForm');
const daftarPesan = document.getElementById('daftarPesan');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan').value;

  if (nama && pesan) {
    const item = document.createElement('div');
    item.className = 'pesan-item';
    item.innerHTML = `<strong>${nama}</strong><br>${pesan}`;
    daftarPesan.prepend(item);

    form.reset();
  }
});

ddocument.getElementById('dukunganForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan').value;

  // Kirim data ke Google Sheet melalui Web App
  const url = 'URL_WEB_APP_ANDA'; // Ganti dengan URL Web App yang kamu dapat tadi
  
  const data = new FormData();
  data.append('nama', nama);
  data.append('pesan', pesan);

  fetch(url, {
    method: 'POST',
    body: data
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      alert('Dukunganmu berhasil terkirim!');
      const item = document.createElement('div');
      item.className = 'pesan-item';
      item.innerHTML = `<strong>${nama}</strong><br>${pesan}`;
      document.getElementById('daftarPesan').prepend(item);
      document.getElementById('dukunganForm').reset();
    }
  })
  .catch(error => {
    alert('Terjadi kesalahan, coba lagi!');
    console.error('Error:', error);
  });
});