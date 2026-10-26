PORTOFOLIO — KHIRANA DWICAHYO
==============================

CARA MENJALANKAN
1. Ekstrak file zip ini.
2. Buka folder "portfolio", lalu klik dua kali "index.html".
   Website langsung terbuka di browser (tidak perlu internet — font & logo sudah disertakan).

Opsional (server lokal):
   Buka terminal di folder ini, lalu jalankan:  python -m http.server 8000
   Kemudian buka http://localhost:8000 di browser.

STRUKTUR
- index.html            : struktur halaman
- style.css             : tampilan & layout
- script.js             : semua teks (ID & EN), data pengalaman, proyek, desain, tools, sertifikat
- assets/img            : foto profil
- assets/design         : karya desain
- assets/certs          : gambar sertifikat (untuk carousel)
- assets/docs           : PDF sertifikat & CV
- assets/icons          : logo tools
- assets/fonts          : font (Plus Jakarta Sans, JetBrains Mono)

CARA MENGUBAH ISI
- Semua teks ada di script.js, bagian I18N (id = Indonesia, en = English).
- Pengalaman  -> EXPERIENCE   | Proyek -> PROJECTS   | Desain -> DESIGNS
- Tools       -> TOOLS        | Sertifikat -> CERTS
- Untuk menambah karya desain: taruh gambar di assets/design, lalu tambahkan item di DESIGNS.
