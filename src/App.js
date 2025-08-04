export function createApp() {
  const businessInfo = {
    name: "Kafe Kopi Nusantara",
    description: "Kafe kopi specialty dengan biji kopi pilihan dari seluruh Nusantara, menyajikan kopi berkualitas tinggi dengan suasana nyaman untuk bekerja dan bersantai.",
    address: "Jl. Raya Kuta, No. 123, Kuta, Bali",
    phone: "+62 812-3456-7890",
    whatsapp: "https://wa.me/+6281234567890",
    hours: "Senin - Minggu: 07:00 - 22:00",
    socialMedia: {
      instagram: "https://instagram.com/kafekopinusantara",
      facebook: "https://facebook.com/kafekopinusantara"
    }
  };

  return `
    <!DOCTYPE html>
    <html lang="id" class="scroll-smooth">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${businessInfo.name}</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
      <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script> </head>
    <body class="font-poppins bg-gray-100">
      <header class="bg-white shadow-lg fixed w-full z-50">
        <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" class="text-xl font-bold text-blue-600">${businessInfo.name}</a>
          <ul class="flex space-x-6">
            <li><a href="#about" class="hover:text-blue-600">Tentang Kami</a></li>
            <li><a href="#menu" class="hover:text-blue-600">Menu</a></li>
            <li><a href="#testimonials" class="hover:text-blue-600">Testimoni</a></li>
            <li><a href="#contact" class="hover:text-blue-600">Kontak</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">Nikmati Cita Rasa Kopi Nusantara</h1>
          <p class="text-lg mb-8">Kopi berkualitas tinggi dengan suasana nyaman untuk bekerja dan bersantai.</p>
          <a href="#menu" class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg">Lihat Menu</a>
        </div>
      </section>

      <section id="about" class="py-16 bg-gray-50">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-4 text-center">Tentang Kafe Kopi Nusantara</h2>
          <p class="text-lg text-center mb-8">${businessInfo.description} Kami menggunakan biji kopi pilihan dari berbagai daerah di Indonesia, diolah dengan teknik modern, dan disajikan dengan penuh keahlian. </p>
          <img src="https://via.placeholder.com/600x400" alt="Kafe Kopi Nusantara" class="rounded-lg shadow-lg mx-auto w-full md:w-2/3">
        </div>
      </section>

      <section id="menu" class="py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-4 text-center">Menu Favorit Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold mb-2">Kopi Tubruk Aceh Gayo</h3>
              <p class="text-gray-600">Kopi dengan cita rasa khas Aceh yang bold dan aromatik.</p>
              <p class="text-lg font-bold">Rp 25.000</p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold mb-2">Kopi Susu Flores Bajawa</h3>
              <p class="text-gray-600">Paduan kopi Flores yang lembut dan susu segar, menghasilkan rasa yang balance.</p>
              <p class="text-lg font-bold">Rp 30.000</p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold mb-2">Kopi Vietnam Drip</h3>
              <p class="text-gray-600">Kopi Vietnam yang kuat dan manis, cocok untuk pecinta kopi yang bold.</p>
              <p class="text-lg font-bold">Rp 35.000</p>
            </div>
            </div> </div>
      </section>

      <section id="testimonials" class="py-16 bg-gray-50">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-4 text-center">Apa Kata Mereka?</h2>
          <div class="carousel">
            <div class="testimonial">
              <p class="text-lg">"Kopi nya enak banget! Suasananya juga nyaman banget untuk kerja.  Bakal balik lagi!" - Budi</p>
            </div>
            <div class="testimonial">
              <p class="text-lg">"Tempatnya aesthetic dan pelayanannya ramah banget.  Pilihan kopinya juga banyak!" - Ani</p>
            </div>
            </div>
        </div>
      </section>

      <section id="contact" class="py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-4 text-center">Hubungi Kami</h2>
          <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div class="w-full md:w-1/2">
              <p class="mb-4">Alamat: ${businessInfo.address}</p>
              <p class="mb-4">Jam Buka: ${businessInfo.hours}</p>
              <p class="mb-4">Telepon: <a href="tel:+6281234567890">${businessInfo.phone}</a></p>
              <a href="${businessInfo.whatsapp}" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg" target="_blank">Hubungi via WhatsApp</a>
            </div>
            <div class="w-full md:w-1/2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.317895502067!2d115.1578726147728!3d-8.685670182613877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24832a4e4197b%3A0x363b70b00f75ff0!2sJl.%20Raya%20Kuta%2C%20Kuta%2C%20Kabupaten%20Badung%2C%20Bali%2080361!5e0!3m2!1sid!2sid!4v1687824456171!5m2!1sid!2sid" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto text-center">
          <p>&copy; ${new Date().getFullYear()} Kafe Kopi Nusantara. All rights reserved.</p>
          <div class="flex justify-center mt-4 space-x-4">
            <a href="${businessInfo.socialMedia.instagram}" target="_blank" class="text-white hover:text-gray-300"><i class="fab fa-instagram"></i></a>
            <a href="${businessInfo.socialMedia.facebook}" target="_blank" class="text-white hover:text-gray-300"><i class="fab fa-facebook"></i></a>
          </div>
        </div>
      </footer>

      <script>
        // Add interactive JavaScript here (e.g., smooth scrolling, carousel)
      </script>
    </body>
    </html>
  `;
}
