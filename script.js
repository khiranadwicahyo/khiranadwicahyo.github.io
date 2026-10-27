/* =========================================================
   Khirana Dwicahyo — Portfolio script
   - ID <-> EN translation
   - data-driven sections (timeline, projects, design, tools, certificates)
   - carousel, lightbox, scroll effects
   ========================================================= */

/* ---------------- 1. TRANSLATIONS (static text) ---------------- */
const I18N = {
  id: {
    "nav.about": "Profil", "nav.education": "Pendidikan", "nav.experience": "Pengalaman",
    "nav.projects": "Proyek", "nav.design": "Desain", "nav.skills": "Keahlian",
    "nav.certs": "Sertifikat", "nav.contact": "Kontak",

    "hero.role": "Lulusan Informatika", "hero.based": "Berbasis di",
    "hero.open": "Terbuka untuk peluang", "hero.openSub": "Full-time · Freelance · Kolaborasi",
    
    "hero.title": "Merangkai ide menjadi <span class='accent'>cerita.</span>",
    "hero.lead": "Lulusan Informatika yang senang mengurai hal rumit menjadi sesuatu yang jelas dan bermakna — lewat analisis, desain visual, maupun tulisan.",
    "hero.cta": "Hubungi saya", "hero.cv": "Lihat CV",
    "stat.gpa": "IPK · Cum Laude", "stat.intern": "Magang berbasis proyek",
    "stat.projects": "Proyek & studi kasus", "stat.certs": "Sertifikat pelatihan",
    "strip.1t": "Analisis Data", "strip.1p": "Mengolah data mentah menjadi temuan dan rekomendasi yang bisa ditindaklanjuti.",
    "strip.2t": "Business Intelligence", "strip.2p": "Membangun dashboard interaktif untuk membantu pengambilan keputusan.",
    "strip.3t": "Desain Visual", "strip.3p": "Merancang poster, kemasan, dan identitas visual yang berkarakter.",
    "strip.4t": "Menulis", "strip.4p": "Menuangkan gagasan dan pengalaman menjadi tulisan yang mudah dicerna.",

    "about.eyebrow": "Profil", "about.tag": "Tarakan, Kalimantan Utara", "about.caption": "Teknologi · Desain · Tulisan",
    "about.title": "Satu kepala, banyak minat.",
    "about.intro": "Saya Khirana Dwicahyo — biasa dipanggil Rana — lulusan Informatika yang percaya bahwa ide terbaik lahir ketika logika dan kreativitas bertemu.",
    "about.p1": "Saya menyelesaikan studi <strong>Informatika di Universitas Islam Indonesia</strong> dengan predikat <strong>Cum Laude</strong>. Selama dan setelah kuliah, saya mengasah diri lewat publikasi jurnal internasional, bootcamp, serta magang berbasis proyek bersama <strong>Bank Muamalat</strong> dan <strong>ID/X Partners</strong>. Dari sana saya terbiasa memecah masalah besar menjadi langkah-langkah kecil yang jelas, lalu menyampaikan hasilnya dengan cara yang mudah dipahami.",
    "about.p2": "Namun minat saya tidak berhenti di satu bidang. Selain teknologi dan data, saya punya ketertarikan besar pada <strong>desain</strong> dan <strong>menulis</strong> — dua hal yang membantu saya berpikir lebih jernih dan berkomunikasi lebih baik. Saat ini saya juga mengelola <strong>Kios Rambai</strong>, toko milik saya sendiri, yang mengajari saya banyak hal tentang bisnis, pelanggan, dan konsistensi.",
    "int.1t": "Teknologi & Data", "int.1p": "Informatika, analisis, dan dashboard.",
    "int.2t": "Desain", "int.2p": "Poster, kemasan, dan visual brand.",
    "int.3t": "Menulis", "int.3p": "Esai, catatan belajar, dan cerita di Medium.",
    "about.hobby": "Di waktu luang, hobi saya adalah menulis dan mendesain — dua cara favorit saya untuk menyampaikan ide dengan jernih dan berkesan.",

    "edu.eyebrow": "Pendidikan", "edu.title": "Tempat saya belajar.",
    "edu.sub": "Fondasi akademik di bidang Informatika, diperkuat dengan riset dan pendidikan non-formal di bidang data dan bisnis.",
    "edu.major": "Jurusan Informatika", "edu.grad": "Lulus November 2023", "edu.degree": "Sarjana Informatika (S.Kom)",
    "edu.honor": "Predikat Kelulusan", "edu.honorP": "Lulus dengan predikat Cum Laude dan IPK <b>3.58</b> dari 4.00.",
    "edu.pub": "Publikasi Jurnal Internasional", "edu.pubDate": "1 Oktober 2023",
    "edu.extEyebrow": "Pendidikan di Luar Kampus",
    "edu.extP": "Program bootcamp intensif dalam skema Kampus Merdeka yang membekali saya dengan analisis data dan bisnis secara menyeluruh — dari pengolahan data hingga penyusunan insight untuk pengambilan keputusan.",
    "edu.extGpa": "Final GPA 3.75",

    "exp.eyebrow": "Pengalaman", "exp.title": "Jejak perjalanan.",
    "exp.sub": "Dari magang berbasis proyek di industri finansial hingga mengelola usaha sendiri — setiap pengalaman menambah sudut pandang baru.",
    "exp.now": "Sekarang", "exp.view": "Lihat hasil kerja",

    "proj.eyebrow": "Proyek", "proj.title": "Karya terpilih.",
    "proj.sub": "Kumpulan proyek dan studi kasus dari magang maupun inisiatif pribadi. Klik kartu untuk membuka proyeknya.",
    "proj.intern": "Magang", "proj.personal": "Pribadi",

    "des.eyebrow": "Desain", "des.title": "Sisi kreatif.",
    "des.sub": "Beberapa karya desain yang saya buat — dari poster hingga kemasan produk. Arahkan kursor atau klik gambar untuk melihat lebih detail.",

    "sk.eyebrow": "Keahlian & Tools", "sk.title": "Perkakas andalan.",
    "sk.sub": "Kombinasi keahlian teknis dan kreatif yang saya gunakan untuk mengolah data, membangun model, dan merancang visual.",
    "sk.tools": "Tools", "sk.langs": "Bahasa:", "sk.langsList": "Indonesia (native) · Inggris · Korea",

    "cert.eyebrow": "Sertifikat", "cert.title": "Bukti belajar.",
    "cert.sub": "Gunakan tanda panah, geser, atau tombol ← → di keyboard untuk melihat sertifikat lainnya.",
    "cert.issuer": "Penerbit", "cert.date": "Tanggal", "cert.duration": "Durasi", "cert.result": "Hasil",
    "cert.zoom": "Perbesar", "cert.pdf": "Buka PDF",

    "ct.eyebrow": "Kontak", "ct.title": "Mari bekerja sama.",
    "ct.sub": "Punya peluang kerja, proyek, atau sekadar ingin berdiskusi tentang data, desain, atau tulisan? Saya senang mendengarnya.",
    "ct.cta": "Kirim email", "ct.copy": "Salin email", "ct.copied": "Email disalin ke clipboard",
    "ct.rights": "Hak cipta dilindungi.", "ct.top": "Kembali ke atas"
  },

  en: {
    "nav.about": "Profile", "nav.education": "Education", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.design": "Design", "nav.skills": "Skills",
    "nav.certs": "Certificates", "nav.contact": "Contact",

    "hero.role": "Informatics Graduate", "hero.based": "Based in",
    "hero.open": "Open to opportunities", "hero.openSub": "Full-time · Freelance · Collaboration",
    
    "hero.title": "Turning ideas into <span class='accent'>stories.</span>",
    "hero.lead": "An Informatics graduate who enjoys untangling complex things into something clear and meaningful — through analysis, visual design, and writing.",
    "hero.cta": "Get in touch", "hero.cv": "View CV",
    "stat.gpa": "GPA · Cum Laude", "stat.intern": "Project-based internships",
    "stat.projects": "Projects & case studies", "stat.certs": "Training certificates",
    "strip.1t": "Data Analysis", "strip.1p": "Turning raw data into findings and actionable recommendations.",
    "strip.2t": "Business Intelligence", "strip.2p": "Building interactive dashboards that support decision-making.",
    "strip.3t": "Visual Design", "strip.3p": "Crafting posters, packaging, and visual identities with character.",
    "strip.4t": "Writing", "strip.4p": "Turning ideas and experiences into writing that's easy to digest.",

    "about.eyebrow": "Profile", "about.tag": "Tarakan, North Kalimantan", "about.caption": "Technology · Design · Words",
    "about.title": "One mind, many interests.",
    "about.intro": "I'm Khirana Dwicahyo — Rana for short — an Informatics graduate who believes the best ideas are born where logic meets creativity.",
    "about.p1": "I graduated in <strong>Informatics from Universitas Islam Indonesia</strong> with <strong>Cum Laude</strong> honors. During and after university, I sharpened my skills through an international journal publication, bootcamps, and project-based internships with <strong>Bank Muamalat</strong> and <strong>ID/X Partners</strong>. Along the way I learned to break big problems into clear, small steps — and to communicate the results in a way people can easily understand.",
    "about.p2": "But my interests don't stop at one field. Beyond technology and data, I have a strong interest in <strong>design</strong> and <strong>writing</strong> — two things that help me think more clearly and communicate better. I currently also run my own store, <strong>Kios Rambai</strong>, which has taught me a lot about business, customers, and consistency.",
    "int.1t": "Tech & Data", "int.1p": "Informatics, analysis, and dashboards.",
    "int.2t": "Design", "int.2p": "Posters, packaging, and brand visuals.",
    "int.3t": "Writing", "int.3p": "Essays, learning notes, and stories on Medium.",
    "about.hobby": "In my free time, my hobbies are writing and designing — my two favorite ways to express ideas clearly and memorably.",

    "edu.eyebrow": "Education", "edu.title": "Where I learned.",
    "edu.sub": "An academic foundation in Informatics, strengthened by research and non-formal education in data and business.",
    "edu.major": "Informatics Major", "edu.grad": "Graduated November 2023", "edu.degree": "Bachelor of Informatics (S.Kom)",
    "edu.honor": "Graduation Honors", "edu.honorP": "Graduated Cum Laude with a GPA of <b>3.58</b> out of 4.00.",
    "edu.pub": "International Journal Publication", "edu.pubDate": "October 1, 2023",
    "edu.extEyebrow": "Education Outside Campus",
    "edu.extP": "An intensive bootcamp under the Kampus Merdeka program that equipped me with end-to-end data and business analytics — from data processing to building insights for decision-making.",
    "edu.extGpa": "Final GPA 3.75",

    "exp.eyebrow": "Experience", "exp.title": "The journey.",
    "exp.sub": "From project-based internships in the financial industry to running my own business — every experience added a new perspective.",
    "exp.now": "Present", "exp.view": "View the work",

    "proj.eyebrow": "Projects", "proj.title": "Selected work.",
    "proj.sub": "A collection of projects and case studies from internships and personal initiatives. Click a card to open the project.",
    "proj.intern": "Internship", "proj.personal": "Personal",

    "des.eyebrow": "Design", "des.title": "The creative side.",
    "des.sub": "A few design pieces I've made — from posters to product packaging. Hover or click an image to see it in detail.",

    "sk.eyebrow": "Skills & Tools", "sk.title": "My toolkit.",
    "sk.sub": "A mix of technical and creative skills I use to process data, build models, and craft visuals.",
    "sk.tools": "Tools", "sk.langs": "Languages:", "sk.langsList": "Indonesian (native) · English · Korean",

    "cert.eyebrow": "Certificates", "cert.title": "Proof of learning.",
    "cert.sub": "Use the arrows, swipe, or the ← → keys on your keyboard to browse the certificates.",
    "cert.issuer": "Issuer", "cert.date": "Date", "cert.duration": "Duration", "cert.result": "Result",
    "cert.zoom": "Zoom in", "cert.pdf": "Open PDF",

    "ct.eyebrow": "Contact", "ct.title": "Let's work together.",
    "ct.sub": "Have a job opportunity, a project, or just want to chat about data, design, or writing? I'd love to hear from you.",
    "ct.cta": "Send an email", "ct.copy": "Copy email", "ct.copied": "Email copied to clipboard",
    "ct.rights": "All rights reserved.", "ct.top": "Back to top"
  }
};

/* ---------------- 2. CONTENT DATA (bilingual) ---------------- */
const EXPERIENCE = [
  {
    current: true,
    date: { id: "Des 2025 — Sekarang", en: "Dec 2025 — Present" },
    sub: { id: "Wirausaha", en: "Self-employed" },
    company: { id: "Kios Rambai", en: "Kios Rambai" },
    role: { id: "Pemilik & Pengelola", en: "Owner & Manager" },
    tags: ["Business", "Operations"],
    points: {
      id: [
        "Merintis dan mengelola Kios Rambai secara mandiri, dari perencanaan hingga operasional harian.",
        "Mengatur ketersediaan stok, pencatatan penjualan, dan pelayanan pelanggan.",
        "Menerapkan kemampuan desain dan analisis untuk kebutuhan promosi serta evaluasi penjualan."
      ],
      en: [
        "Started and independently run Kios Rambai, my own store, from planning to day-to-day operations.",
        "Manage stock availability, sales records, and customer service.",
        "Apply design and analytical skills to promotional needs and sales evaluation."
      ]
    }
  },
  {
    date: { id: "Okt — Nov 2025", en: "Oct — Nov 2025" },
    sub: { id: "Remote · Rakamin Academy", en: "Remote · Rakamin Academy" },
    company: { id: "Bank Muamalat", en: "Bank Muamalat" },
    role: { id: "BI Analyst (Project-Based Internship)", en: "BI Analyst (Project-Based Internship)" },
    tags: ["PostgreSQL", "Looker", "Excel"],
    link: "https://canva.link/1m5pz6u3hd9iz5r",
    points: {
      id: [
        "Membangun master table di PostgreSQL dengan menggabungkan 4 tabel relasional (Orders, Products, Product Category, Customers), mengonsolidasikan data transaksi 2020–2021 dari 2.321 pengguna.",
        "Merancang dashboard penjualan interaktif di Looker untuk memantau pendapatan, kuantitas, serta rincian per kategori dan kota sebagai bahan pelaporan eksekutif.",
        "Mengidentifikasi penurunan penjualan 4% YoY akibat turunnya kategori Robots 29% di bulan Oktober, serta lonjakan 65% YoY di bulan Juni — lalu merumuskan 3 rekomendasi (promosi musiman, iklan tertarget, bundling produk)."
      ],
      en: [
        "Built a master table in PostgreSQL by joining 4 relational tables (Orders, Products, Product Category, Customers), consolidating 2020–2021 transactional data from 2,321 users.",
        "Designed an interactive sales dashboard in Looker tracking revenue, quantity, and category/city-level breakdowns for executive reporting.",
        "Identified a 4% YoY sales decline driven by a 29% drop in Robots in October, and a 65% YoY spike in June — translated into 3 recommendations (seasonal promotions, targeted ads, product bundling)."
      ]
    }
  },
  {
    date: { id: "Jan — Feb 2025", en: "Jan — Feb 2025" },
    sub: { id: "Remote · Rakamin Academy", en: "Remote · Rakamin Academy" },
    company: { id: "ID/X Partners", en: "ID/X Partners" },
    role: { id: "Data Scientist (Project-Based Internship)", en: "Data Scientist (Project-Based Internship)" },
    tags: ["Python", "XGBoost", "SHAP", "Streamlit"],
    link: "https://github.com/khiranadwicahyo/implementation-of-prediction-model-for-credit-risk",
    points: {
      id: [
        "Membangun model prediksi risiko gagal bayar dari data pinjaman Lending Club 2007–2014 (466.285 baris, 75 kolom) dengan Python.",
        "Mengaudit ulang model versi pertama (akurasi 99,3%) dan membuktikan lewat eksperimen ablation bahwa angka itu berasal dari data leakage — terutama fitur pasca-pencairan seperti “recoveries” dan SMOTE yang dijalankan sebelum train-test split.",
        "Membangun ulang pipeline dengan benar: hanya fitur yang tersedia saat pengajuan, split out-of-time, serta imputasi, encoding, dan SMOTE di dalam Pipeline; membandingkan 7 kandidat model lewat 5-fold cross-validation.",
        "Model XGBoost final mencapai ROC-AUC 0,656 (Gini 0,312, KS 0,231) pada data out-of-time, mengungguli baseline sub-grade, dengan bad rate decile tertinggi 25,2% vs. terendah 4,5%.",
        "Menganalisis dampak bisnis berbagai threshold (approval rate, bad rate, arus kas) dan menyajikannya dalam dashboard Streamlit interaktif dengan penjelasan SHAP per peminjam."
      ],
      en: [
        "Built a default-risk prediction model on Lending Club 2007–2014 loan data (466,285 rows, 75 columns) in Python.",
        "Audited the first version (99.3% accuracy) and proved through an ablation experiment that the score came from data leakage — mainly post-origination features such as “recoveries” and SMOTE applied before the train-test split.",
        "Rebuilt the pipeline correctly: application-time features only, an out-of-time split, and imputation, encoding, and SMOTE inside a Pipeline; compared 7 candidate models with 5-fold cross-validation.",
        "The final XGBoost model reached ROC-AUC 0.656 (Gini 0.312, KS 0.231) on out-of-time data, beating a sub-grade baseline, with a 25.2% bad rate in the top score decile vs. 4.5% in the bottom.",
        "Analyzed the business impact of different thresholds (approval rate, bad rate, cash flow) and presented it in an interactive Streamlit dashboard with per-borrower SHAP explanations."
      ]
    }
  }
];

const PROJECTS = [
  {
    kind: "personal", art: "telco",
    title: "TelcoX Study Case",
    desc: {
      id: "Studi kasus analitik telekomunikasi: mengintegrasikan 5 tabel via SQL untuk 2.000 pelanggan, menemukan 38% kelebihan pemakaian data, dan merumuskan 5 rekomendasi untuk menaikkan ARPU.",
      en: "A telecom analytics case study: integrated 5 tables via SQL for 2,000 customers, uncovered a 38% data overusage rate, and delivered 5 recommendations to grow ARPU."
    },
    tools: ["SQL", "Data Analysis", "ARPU"],
    links: [{ label: { id: "Lihat Presentasi", en: "View Presentation" }, url: "https://canva.link/wre2da1yy7gzqrk" }]
  },
  {
    kind: "personal", art: "globe",
    title: "Worldometers 2025 Analysis",
    desc: {
      id: "Crawler Scrapy dua tahap untuk mengambil data demografi 1955–2025 dari 200+ negara, lalu divisualisasikan di Looker untuk membaca tren populasi, fertilitas, dan urbanisasi.",
      en: "A two-stage Scrapy crawler collecting 1955–2025 demographic data across 200+ countries, visualized in Looker to read population, fertility, and urbanization trends."
    },
    tools: ["Scrapy", "Python", "Looker"],
    links: [
      { label: { id: "Lihat di Looker", en: "View on Looker" }, url: "https://datastudio.google.com/reporting/22c6ea29-2f8c-48d2-8e01-cf2a0e225b69" },
      { label: { id: "GitHub", en: "GitHub" }, url: "https://github.com/khiranadwicahyo" }
    ]
  },
  {
    kind: "personal", art: "pulse",
    title: "Pima Indians Diabetes Prediction",
    desc: {
      id: "Model machine learning untuk memprediksi risiko diabetes dari data klinis, dengan imputasi KNN, rekayasa fitur diagnostik, dan Random Forest sebagai model terbaik (75,1%).",
      en: "A machine learning model predicting diabetes risk from clinical data, with KNN imputation, diagnostic feature engineering, and Random Forest as the best model (75.1%)."
    },
    tools: ["Python", "scikit-learn", "Random Forest"],
    links: [{ label: { id: "Lihat di GitHub", en: "View on GitHub" }, url: "https://github.com/khiranadwicahyo/pima-indians-diabetes-prediction-model" }]
  },
  {
    kind: "intern", art: "scatter",
    title: "Credit Risk Prediction v2",
    org: "ID/X Partners",
    desc: {
      id: "Audit dan revisi model risiko kredit: membuktikan akurasi 99% versi pertama berasal dari data leakage, lalu membangun ulang pipeline yang benar — ROC-AUC 0,656 pada data out-of-time, lengkap dengan dashboard Streamlit.",
      en: "Audit and rebuild of a credit risk model: proved the first version's 99% accuracy came from data leakage, then rebuilt a sound pipeline — ROC-AUC 0.656 on out-of-time data, with a Streamlit dashboard."
    },
    tools: ["Python", "XGBoost", "SHAP", "Streamlit"],
    links: [
      { label: { id: "Coba Dashboard", en: "Try the Dashboard" }, url: "https://credit-risk-model-implementation-khirana.streamlit.app/" },
      { label: { id: "GitHub", en: "GitHub" }, url: "https://github.com/khiranadwicahyo/implementation-of-prediction-model-for-credit-risk" }
    ]
  },
  {
    kind: "intern", art: "bars",
    title: "Executive Sales Dashboard",
    org: "Bank Muamalat",
    desc: {
      id: "Master table PostgreSQL dan dashboard penjualan interaktif di Looker untuk menganalisis tren YoY serta merumuskan rekomendasi bisnis.",
      en: "A PostgreSQL master table and an interactive Looker sales dashboard to analyze YoY trends and shape business recommendations."
    },
    tools: ["PostgreSQL", "Looker", "BI"],
    links: [{ label: { id: "Lihat Presentasi", en: "View Presentation" }, url: "https://canva.link/1m5pz6u3hd9iz5r" }]
  }
];

const DESIGNS = [
  {
    cls: "d-kopsoy", img: "assets/design/kopsoy-label.jpg",
    label: { id: "Label Kemasan", en: "Packaging Label" },
    title: "KOP SOY — Latte Soymilk",
    desc: {
      id: "Desain label kemasan kopi susu kedelai khas Pulau Bangka, lengkap dengan cerita produk, tabel nilai gizi, dan komposisi dalam tipografi retro yang tegas.",
      en: "A packaging label for a soy-milk coffee rooted in Bangka Island heritage, with a product story, nutrition facts, and ingredients in bold retro type."
    }
  },
  {
    cls: "d-comfort", img: "assets/design/comfort-food.jpg",
    label: { id: "Poster · Media Sosial", en: "Poster · Social Media" },
    title: "Comfort Food, Always Warm",
    desc: {
      id: "Poster media sosial bergaya teka-teki silang: huruf-huruf disusun dalam kotak di atas foto semangkuk ramen dengan latar merah marun yang hangat.",
      en: "A crossword-inspired social media poster: letters set in grid tiles over a bowl of ramen on a warm maroon backdrop."
    }
  },
  {
    cls: "d-fusoy", img: "assets/design/fusoy-can.png",
    label: { id: "Mockup Kemasan", en: "Packaging Mockup" },
    title: "FU SOY — Bangka Soymilk",
    desc: {
      id: "Mockup kaleng minuman susu kedelai 200 ml dengan nuansa karamel, ilustrasi biji kedelai, dan tipografi kuas yang santai.",
      en: "A 200 ml soy-milk can mockup in caramel tones, featuring a soybean illustration and relaxed brush lettering."
    }
  },
  {
    cls: "d-flower", img: "assets/design/flower.jpg",
    label: { id: "Poster Eksperimental", en: "Experimental Poster" },
    title: "Flower",
    desc: {
      id: "Poster eksperimental bertekstur halftone: bunga sepatu merah di antara dedaunan hijau, dipadukan bidang merah berbintang dan tipografi serif besar.",
      en: "An experimental halftone poster: a red hibiscus among green leaves, paired with a starry red field and large serif type."
    }
  }
];

const SKILL_GROUPS = [
  { t: { id: "Pemrograman", en: "Programming" }, c: ["Python", "SQL / PostgreSQL", "R"] },
  { t: { id: "Machine Learning", en: "Machine Learning" }, c: ["scikit-learn", "XGBoost", "imbalanced-learn", "Classification", "Cross-validation", "Feature Engineering"] },
  { t: { id: "Visualisasi Data & BI", en: "Data Visualization & BI" }, c: ["Power BI", "Tableau", "Looker", "Dashboarding", "KPI Reporting"] },
  { t: { id: "Pengolahan & Rekayasa Data", en: "Data Processing & Engineering" }, c: ["Microsoft Excel", "Data Cleaning", "Web Scraping", "Data Warehousing"] },
  { t: { id: "Kreatif & Komunikasi", en: "Creative & Communication" }, c: { id: ["Desain Grafis", "Desain Kemasan", "Menulis", "Business Acumen", "Presentasi"], en: ["Graphic Design", "Packaging Design", "Writing", "Business Acumen", "Presenting"] } }
];

const TOOLS = [
  { n: "Python", i: "python", cat: "code", d: { id: "Pemrograman", en: "Programming" } },
  { n: "PostgreSQL", i: "postgresql", cat: "code", d: { id: "Database / SQL", en: "Database / SQL" } },
  { n: "R", i: "r", cat: "code", d: { id: "Statistik", en: "Statistics" } },
  { n: "scikit-learn", i: "scikitlearn", cat: "ml", d: { id: "Machine learning", en: "Machine learning" } },
  { n: "XGBoost", i: "xgboost", cat: "ml", d: { id: "Gradient boosting", en: "Gradient boosting" } },
  { n: "imbalanced-learn", i: "imbalanced", cat: "ml", d: { id: "Resampling (SMOTE)", en: "Resampling (SMOTE)" } },
  { n: "Power BI", i: "powerbi", cat: "viz", d: { id: "Dashboard BI", en: "BI dashboards" } },
  { n: "Tableau", i: "tableau", cat: "viz", d: { id: "Visualisasi data", en: "Data visualization" } },
  { n: "Looker", i: "looker", cat: "viz", d: { id: "Looker Studio", en: "Looker Studio" } },
  { n: "Excel", i: "excel", cat: "viz", d: { id: "Pengolahan data", en: "Data processing" } },
  { n: "Scrapy", i: "scrapy", cat: "code", d: { id: "Web scraping", en: "Web scraping" } },
  { n: "Selenium", i: "selenium", cat: "code", d: { id: "Web scraping", en: "Web scraping" } },
  { n: "GitHub", i: "github", cat: "code", d: { id: "Version control", en: "Version control" } },
  { n: "Figma", i: "figma", cat: "design", d: { id: "Desain UI & visual", en: "UI & visual design" } },
  { n: "Canva", i: "canva", cat: "design", d: { id: "Desain grafis", en: "Graphic design" } }
];
const TOOL_CATS = [
  { k: "all", t: { id: "Semua", en: "All" } },
  { k: "code", t: { id: "Kode", en: "Code" } },
  { k: "ml", t: { id: "ML", en: "ML" } },
  { k: "viz", t: { id: "BI & Viz", en: "BI & Viz" } },
  { k: "design", t: { id: "Desain", en: "Design" } }
];

const CERTS = [
  {
    img: "ruangguru", issuer: "Ruangguru Camp × Kampus Merdeka",
    title: "Data & Business Analytics Bootcamp",
    desc: { id: "Bootcamp akselerasi karier di bidang analisis data dan bisnis dalam program Kampus Merdeka.", en: "A career-acceleration bootcamp in data and business analytics under the Kampus Merdeka program." },
    meta: [["cert.result", { id: "Final GPA 3.75", en: "Final GPA 3.75" }]]
  },
  {
    img: "bank-muamalat", issuer: "Rakamin Academy × Bank Muamalat",
    title: "Business Intelligence Analyst PBI",
    desc: { id: "Sertifikat penyelesaian magang berbasis proyek — Business Acumen, Data Visualization, dan Excel Data Processing.", en: "Certificate of completion for a project-based internship — Business Acumen, Data Visualization, and Excel Data Processing." },
    meta: [["cert.date", { id: "6 Okt — 4 Nov 2025", en: "Oct 6 — Nov 4, 2025" }]]
  },
  {
    img: "idx-partners", issuer: "Rakamin Academy × ID/X Partners",
    title: "Data Scientist PBI",
    desc: { id: "Certificate of Competency sebagai peserta Qualified — Big Data, Deep Learning, dan Softskill.", en: "Certificate of Competency as a Qualified student — Big Data, Deep Learning, and Soft Skills." },
    meta: [["cert.date", { id: "6 Jan — 4 Feb 2025", en: "Jan 6 — Feb 4, 2025" }], ["cert.result", { id: "Qualified", en: "Qualified" }]]
  },
  {
    img: "dl-mastery", issuer: "Komdigi · Digital Talent Scholarship",
    title: "Mastery Deep Learning",
    desc: { id: "Fresh Graduate Academy — jaringan saraf pengenal gambar dan transfer learning.", en: "Fresh Graduate Academy — image recognition neural networks and transfer learning." },
    meta: [["cert.date", { id: "16 — 22 Sep 2025", en: "Sep 16 — 22, 2025" }], ["cert.duration", { id: "27 jam pelatihan", en: "27 training hours" }]]
  },
  {
    img: "dl-intermediate", issuer: "Komdigi · Digital Talent Scholarship",
    title: "Intermediate Deep Learning",
    desc: { id: "Fresh Graduate Academy — jaringan saraf tiruan, optimasi, dan regularisasi.", en: "Fresh Graduate Academy — artificial neural networks, optimization, and regularization." },
    meta: [["cert.date", { id: "3 — 9 Sep 2025", en: "Sep 3 — 9, 2025" }], ["cert.duration", { id: "22 jam pelatihan", en: "22 training hours" }]]
  },
  {
    img: "dl-fundamental", issuer: "Komdigi · Digital Talent Scholarship",
    title: "Fundamental Deep Learning",
    desc: { id: "Fresh Graduate Academy — konsep dasar machine learning, metrik klasifikasi, regresi linier & logistik.", en: "Fresh Graduate Academy — machine learning basics, classification metrics, linear & logistic regression." },
    meta: [["cert.date", { id: "14 — 27 Agu 2025", en: "Aug 14 — 27, 2025" }], ["cert.duration", { id: "44 jam pelatihan", en: "44 training hours" }]]
  },
  {
    img: "udemy-scraping", issuer: "Udemy · Frank Andrade",
    title: "Web Scraping in Python: Selenium, Scrapy + ChatGPT",
    desc: { id: "Kursus web scraping dengan Python menggunakan Selenium dan Scrapy.", en: "A web scraping course in Python using Selenium and Scrapy." },
    meta: [["cert.date", { id: "16 Jul 2025", en: "Jul 16, 2025" }], ["cert.duration", { id: "11 jam", en: "11 hours" }]]
  },
  {
    img: "ai-basics", issuer: "Komdigi · Digital Talent Scholarship",
    title: "Dasar-Dasar Implementasi Kecerdasan Artifisial",
    desc: { id: "Micro Skill — dasar-dasar implementasi kecerdasan artifisial.", en: "Micro Skill — fundamentals of implementing artificial intelligence." },
    meta: [["cert.date", { id: "13 Agu 2025", en: "Aug 13, 2025" }], ["cert.duration", { id: "1 jam pelatihan", en: "1 training hour" }]]
  }
];

/* ---------------- 3. PROJECT ARTWORK (generated SVG) ---------------- */
const ART = {
  telco() {
    let s = "";
    for (let i = 1; i <= 6; i++) s += `<path d="M300 210 m-${i * 34} 0 a${i * 34} ${i * 34} 0 0 1 ${i * 68} 0" fill="none" stroke="${i === 3 ? "#C8261D" : "rgba(255,255,255,.14)"}" stroke-width="${i === 3 ? 2.5 : 1}"/>`;
    const bars = [40, 62, 88, 70, 110, 96, 132];
    bars.forEach((h, i) => s += `<rect x="${430 + i * 22}" y="${200 - h}" width="12" height="${h}" rx="2" fill="${i === 6 ? "#C8261D" : "rgba(255,255,255,.18)"}"/>`);
    return s + `<circle cx="300" cy="210" r="7" fill="#C8261D"/>`;
  },
  globe() {
    let s = "";
    const cx = 300, cy = 128, R = 104;
    for (let lat = -72; lat <= 72; lat += 12) {
      for (let lon = -84; lon <= 84; lon += 12) {
        const la = lat * Math.PI / 180, lo = lon * Math.PI / 180;
        const x = cx + R * Math.cos(la) * Math.sin(lo), y = cy - R * Math.sin(la);
        const z = Math.cos(la) * Math.cos(lo);
        const hot = (lat === 24 && lon === 48) || (lat === 36 && lon === 72) || (lat === 0 && lon === -12) || (lat === -12 && lon === 12) || (lat === 12 && lon === 60);
        s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${hot ? 4 : (1 + z * 1.4).toFixed(2)}" fill="${hot ? "#C8261D" : `rgba(255,255,255,${(.12 + z * .32).toFixed(2)})`}"/>`;
      }
    }
    return `<circle cx="${cx}" cy="${cy}" r="${R + 8}" fill="none" stroke="rgba(255,255,255,.12)"/><ellipse cx="${cx}" cy="${cy}" rx="${R + 60}" ry="26" fill="none" stroke="rgba(200,38,29,.55)" transform="rotate(-14 ${cx} ${cy})"/>` + s;
  },
  pulse() {
    const pts = "0,130 120,130 150,130 170,92 190,170 210,40 235,190 255,130 330,130 350,112 370,130 600,130";
    let s = "";
    for (let i = 0; i < 12; i++) s += `<line x1="${i * 52}" y1="0" x2="${i * 52}" y2="260" stroke="rgba(255,255,255,.05)"/>`;
    return s + `<polyline points="${pts}" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="7" stroke-linejoin="round"/><polyline points="${pts}" fill="none" stroke="#C8261D" stroke-width="2.5" stroke-linejoin="round"/><circle cx="210" cy="40" r="5" fill="#fff"/>`;
  },
  scatter() {
    let s = `<line x1="60" y1="230" x2="560" y2="30" stroke="rgba(255,255,255,.45)" stroke-dasharray="5 6"/>`;
    let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 70; i++) {
      const x = 40 + rnd() * 520, y = 20 + rnd() * 200;
      const above = y < 230 - ((x - 60) / 500) * 200;
      s += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${above ? 3.4 : 2.6}" fill="${above ? "#C8261D" : "rgba(255,255,255,.3)"}"/>`;
    }
    return s;
  },
  bars() {
    const v = [70, 92, 64, 120, 104, 150, 132, 98, 140, 170, 118, 156];
    let s = "", line = "";
    v.forEach((h, i) => {
      const x = 60 + i * 42;
      s += `<rect x="${x}" y="${210 - h}" width="24" height="${h}" rx="3" fill="${i === 5 ? "#C8261D" : "rgba(255,255,255,.16)"}"/>`;
      line += `${x + 12},${200 - h * .9} `;
    });
    return s + `<polyline points="${line}" fill="none" stroke="#fff" stroke-width="1.6" opacity=".7"/><line x1="40" y1="210" x2="580" y2="210" stroke="rgba(255,255,255,.2)"/>`;
  }
};

/* ---------------- 4. STATE + HELPERS ---------------- */
let lang = "id";
try { const saved = localStorage.getItem("rana-lang"); if (saved === "en" || saved === "id") lang = saved; } catch (e) {}
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const t = (k) => I18N[lang][k] ?? k;
const L = (o) => (o && typeof o === "object" && !Array.isArray(o) ? o[lang] : o);
const pad = (n) => String(n).padStart(2, "0");
const ARROW = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17L17 7M8 7h9v9"/></svg>`;

/* ---------------- 5. RENDERERS ---------------- */
function renderStatic() {
  $$("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.documentElement.lang = lang;
}

function renderTimeline() {
  const html = EXPERIENCE.map(e => `
    <div class="tl-item reveal ${e.current ? "current" : ""}">
      <div class="tl-date"><b>${L(e.date)}</b><span>${L(e.sub)}</span></div>
      <span class="tl-dot"></span>
      <article class="tl-card">
        <div class="tl-card__top">
          <h3>${L(e.company)}</h3>
          <div class="tl-tags">${e.current ? `<span class="tag tag--red">${t("exp.now")}</span>` : ""}${e.tags.map(x => `<span class="tag">${x}</span>`).join("")}</div>
        </div>
        <p class="role">${L(e.role)}</p>
        <ul>${L(e.points).map(p => `<li>${p}</li>`).join("")}</ul>
        ${e.link ? `<a class="tl-link" href="${e.link}" target="_blank" rel="noopener">${t("exp.view")} ${ARROW}</a>` : ""}
      </article>
    </div>`).join("");
  $("#timeline").innerHTML = html;
}

function renderProjects() {
  $("#projectsGrid").innerHTML = PROJECTS.map((p, i) => `
    <article class="pcard reveal" data-d="${i % 3}">
      <a class="pcard__cover" href="${p.links[0].url}" target="_blank" rel="noopener" aria-label="${p.title}"></a>
      <div class="pcard__visual">
        <span class="pcard__num">(${pad(i + 1)})</span>
        <span class="pcard__kind ${p.kind === "intern" ? "intern" : ""}">${p.kind === "intern" ? t("proj.intern") + " · " + p.org : t("proj.personal")}</span>
        <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${ART[p.art]()}</svg>
      </div>
      <div class="pcard__body">
        <h3>${p.title}</h3>
        <p>${L(p.desc)}</p>
        <div class="pcard__tools">${p.tools.map(x => `<span>${x}</span>`).join("")}</div>
        <div class="pcard__links">${p.links.map((l, j) => `<a class="plink ${j === 0 ? "primary" : ""}" href="${l.url}" target="_blank" rel="noopener">${L(l.label)} ${ARROW}</a>`).join("")}</div>
      </div>
    </article>`).join("");
}

function renderDesign() {
  $("#designGrid").innerHTML = DESIGNS.map((d, i) => `
    <figure class="dcard ${d.cls} reveal" data-d="${i % 3}">
      <div class="dcard__media" tabindex="0" data-lightbox="${d.img}" data-lb-title="${d.title}" data-lb-sub="${L(d.desc)}">
        <img src="${d.img}" alt="${d.title}" loading="lazy">
      </div>
      <figcaption>
        <span class="dcard__label">${pad(i + 1)} · ${L(d.label)}</span>
        <h3>${d.title}</h3>
        <p>${L(d.desc)}</p>
      </figcaption>
    </figure>`).join("");
}

let toolCat = "all";
function renderSkills() {
  $("#skillGroups").innerHTML = SKILL_GROUPS.map((g, i) => `
    <div class="skill-group reveal" data-d="${i % 3}">
      <span class="n">${pad(i + 1)}</span>
      <div><h4>${L(g.t)}</h4><div class="chips">${(Array.isArray(g.c) ? g.c : L(g.c)).map(c => `<span class="chip">${c}</span>`).join("")}</div></div>
    </div>`).join("");
  $("#toolFilter").innerHTML = TOOL_CATS.map(c => `<button data-cat="${c.k}" class="${c.k === toolCat ? "on" : ""}">${L(c.t)}</button>`).join("");
  $("#tools").innerHTML = TOOLS.map(x => `
    <div class="tool ${toolCat !== "all" && x.cat !== toolCat ? "dim" : ""}" data-cat="${x.cat}">
      <img src="assets/icons/${x.i}.svg" alt="${x.n} logo" loading="lazy">
      <div><b>${x.n}</b><span>${L(x.d)}</span></div>
    </div>`).join("");
}

function renderCerts() {
  $("#certTrack").innerHTML = CERTS.map((c, i) => `
    <div class="cslide" aria-roledescription="slide" aria-label="${i + 1} / ${CERTS.length}">
      <div class="cslide__img" data-lightbox="assets/certs/${c.img}.jpg" data-lb-title="${c.title}" data-lb-sub="${c.issuer}">
        <img src="assets/certs/${c.img}.jpg" alt="${c.title}" loading="${i < 2 ? "eager" : "lazy"}" draggable="false">
      </div>
      <div class="cslide__info">
        <span class="cslide__issuer">${pad(i + 1)} — ${c.issuer}</span>
        <h3 class="cslide__title">${c.title}</h3>
        <p class="cslide__desc">${L(c.desc)}</p>
        <dl class="cslide__meta">
          <div><dt>${t("cert.issuer")}</dt><dd>${c.issuer}</dd></div>
          ${c.meta.map(([k, v]) => `<div><dt>${t(k)}</dt><dd>${L(v)}</dd></div>`).join("")}
        </dl>
        <div class="cslide__actions">
          <button class="btn" data-lightbox="assets/certs/${c.img}.jpg" data-lb-title="${c.title}" data-lb-sub="${c.issuer}"><span>${t("cert.zoom")}</span><span class="btn__ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg></span></button>
          <a class="btn btn--ghost" href="assets/docs/cert-${c.img}.pdf" target="_blank" rel="noopener">${t("cert.pdf")}</a>
        </div>
      </div>
    </div>`).join("");
  $("#certDots").innerHTML = CERTS.map((_, i) => `<button aria-label="${i + 1}" data-i="${i}"></button>`).join("");
  $("#certThumbs").innerHTML = CERTS.map((c, i) => `<button data-i="${i}" aria-label="${c.title}"><img src="assets/certs/${c.img}.jpg" alt="" loading="lazy"></button>`).join("");
  goCert(certIndex, false);
}

function renderAll() {
  renderStatic(); renderTimeline(); renderProjects(); renderDesign(); renderSkills(); renderCerts();
  observeReveals(); updateLangUI();
}

/* ---------------- 6. LANGUAGE TOGGLE ---------------- */
function updateLangUI() { $("#lang").dataset.lang = lang; }
function setLang(l) {
  if (l === lang) return;
  document.body.classList.add("switching");
  setTimeout(() => {
    lang = l;
    try { localStorage.setItem("rana-lang", l); } catch (e) {}
    renderAll();
    $$(".reveal").forEach(el => el.classList.add("in"));
    document.body.classList.remove("switching");
  }, 220);
}
$("#lang").addEventListener("click", e => { const b = e.target.closest("button"); if (b) setLang(b.dataset.set); });

/* ---------------- 7. CERTIFICATE CAROUSEL ---------------- */
let certIndex = 0;
function goCert(i, animate = true) {
  certIndex = (i + CERTS.length) % CERTS.length;
  const track = $("#certTrack");
  track.style.transition = animate ? "" : "none";
  track.style.transform = `translateX(-${certIndex * 100}%)`;
  $("#certCount").innerHTML = `${pad(certIndex + 1)} <span>/ ${pad(CERTS.length)}</span>`;
  $$("#certDots button").forEach((b, k) => b.classList.toggle("on", k === certIndex));
  $$("#certThumbs button").forEach((b, k) => b.classList.toggle("on", k === certIndex));
}
$("#certPrev").addEventListener("click", () => goCert(certIndex - 1));
$("#certNext").addEventListener("click", () => goCert(certIndex + 1));
$("#certDots").addEventListener("click", e => { const b = e.target.closest("button"); if (b) goCert(+b.dataset.i); });
$("#certThumbs").addEventListener("click", e => { const b = e.target.closest("button"); if (b) goCert(+b.dataset.i); });
document.addEventListener("keydown", e => {
  if ($("#lightbox").classList.contains("open")) { if (e.key === "Escape") closeLightbox(); return; }
  const r = $("#certificates").getBoundingClientRect();
  if (r.top < innerHeight * .6 && r.bottom > innerHeight * .3) {
    if (e.key === "ArrowRight") goCert(certIndex + 1);
    if (e.key === "ArrowLeft") goCert(certIndex - 1);
  }
});
// swipe / drag
(() => {
  const vp = $("#certViewport"); let x0 = null, moved = 0;
  vp.addEventListener("pointerdown", e => { x0 = e.clientX; moved = 0; });
  vp.addEventListener("pointermove", e => { if (x0 !== null) moved = e.clientX - x0; });
  const end = () => { if (x0 === null) return; if (Math.abs(moved) > 50) goCert(certIndex + (moved < 0 ? 1 : -1)); x0 = null; };
  vp.addEventListener("pointerup", end); vp.addEventListener("pointerleave", end);
  vp.addEventListener("click", e => { if (Math.abs(moved) > 10) { e.stopPropagation(); e.preventDefault(); } }, true);
})();

/* ---------------- 8. TOOL FILTER ---------------- */
$("#toolFilter").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  toolCat = b.dataset.cat;
  $$("#toolFilter button").forEach(x => x.classList.toggle("on", x === b));
  $$("#tools .tool").forEach(x => x.classList.toggle("dim", toolCat !== "all" && x.dataset.cat !== toolCat));
});

/* ---------------- 9. LIGHTBOX ---------------- */
function openLightbox(src, title, sub) {
  $("#lbImg").src = src; $("#lbImg").alt = title || "";
  $("#lbTitle").textContent = title || ""; $("#lbSub").textContent = sub || "";
  $("#lightbox").classList.add("open"); $("#lightbox").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  $("#lightbox").classList.remove("open"); $("#lightbox").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.addEventListener("click", e => {
  const el = e.target.closest("[data-lightbox]");
  if (el) { openLightbox(el.dataset.lightbox, el.dataset.lbTitle, el.dataset.lbSub); }
});
document.addEventListener("keydown", e => {
  const el = e.target.closest && e.target.closest("[data-lightbox]");
  if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLightbox(el.dataset.lightbox, el.dataset.lbTitle, el.dataset.lbSub); }
});
$("#lbClose").addEventListener("click", closeLightbox);
$("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });

/* ---------------- 10. COPY EMAIL ---------------- */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-copy]"); if (!b) return;
  e.preventDefault(); e.stopPropagation();
  const done = () => { const tt = $("#toast"); tt.textContent = t("ct.copied"); tt.classList.add("show"); setTimeout(() => tt.classList.remove("show"), 1800); };
  if (navigator.clipboard) navigator.clipboard.writeText(b.dataset.copy).then(done, done);
  else { const ta = document.createElement("textarea"); ta.value = b.dataset.copy; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (_) {} ta.remove(); done(); }
});

/* ---------------- 11. NAV, PROGRESS, REVEAL ---------------- */
$("#burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
$("#navLinks").addEventListener("click", e => { if (e.target.closest("a")) document.body.classList.remove("menu-open"); });

let io;
function observeReveals() {
  if (io) io.disconnect();
  io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal:not(.in)").forEach(el => io.observe(el));
}

const sections = ["about", "education", "experience", "projects", "design", "skills", "certificates", "contact"];
function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  const nav = $("#nav");
  nav.classList.toggle("scrolled", y > 20);
  // dark sections under the nav
  const probe = 40;
  const overDark = $$(".dark").some(s => { const r = s.getBoundingClientRect(); return r.top <= probe && r.bottom >= probe; });
  nav.classList.toggle("on-dark", overDark && y > 20);
  // active link
  let cur = "";
  sections.forEach(id => { const s = document.getElementById(id); if (s && s.getBoundingClientRect().top < innerHeight * .4) cur = id; });
  $$("#navLinks a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  // timeline progress
  const tl = $("#timeline"), bar = $("#tlProgress");
  if (tl && bar) {
    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * .6 - r.top) / r.height));
    bar.style.height = (p * (r.height - 12)) + "px";
  }
}
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", onScroll);

/* ---------------- INIT ---------------- */
$("#year").textContent = new Date().getFullYear();
renderAll();
onScroll();
