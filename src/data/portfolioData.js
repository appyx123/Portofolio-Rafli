/**
 * Bilingual Portfolio Data Configuration (EN & ID)
 * Architecture: Data-Driven UI (Separation of Concerns)
 */

export const portfolioData = {
  en: {
    personalInfo: {
      name: "Muhammad Rafli",
      headline: "AI & IoT Developer | Machine Learning Engineer",
      email: "raflyofficial6122@gmail.com",
      phone: "+62 8224 6641 848",
      location: "Makassar, South Sulawesi, Indonesia",
      linkedin: "https://www.linkedin.com/in/muhammad-rafli-ai",
      instagram: "https://www.instagram.com/appy_6122/",
      github: "https://github.com/appyx123",
      availability: "Available for Projects & Research",
      summary: "Informatics Engineering student specializing in Artificial Intelligence (AI) and Internet of Things (IoT) integration. Experienced in leading applied research and end-to-end system development, from AI-driven financial risk modeling to TinyML-based medical device prototyping. Passionate about building scalable, data-driven solutions that drive digital transformation."
    },
    
    education: [
      {
        id: 1,
        institution: "Universitas Muslim Indonesia (UMI)",
        degree: "Bachelor of Informatics Engineering",
        duration: "Jun 2023 - Mar 2027",
        gpa: "3.96 / 4.00",
        description: "Specialization in Artificial Intelligence (AI) and Internet of Things (IoT)."
      }
    ],

    experience: [
      {
        id: 1,
        role: "Machine Learning Engineer",
        company: "FinTwin",
        duration: "Mar 2026 - Present",
        type: "Professional",
        highlights: [
          "Designed and developed an AI-based financial risk assessment system to simulate users' financial health projections.",
          "Conducted in-depth analysis and evaluation of bank loan datasets to model financial risk management scenarios.",
          "Developed data modeling algorithms to optimize financial projections and support fraud detection systems."
        ]
      },
      {
        id: 2,
        role: "Network System Developer",
        company: "NetManager",
        duration: "May 2026 - Present",
        type: "Professional",
        highlights: [
          "Developed an ISP (Internet Service Provider) management system using Laravel and Filament, fully integrated with the MikroTik API.",
          "Built network control automation features, including centralized router management and automatic customer isolation.",
          "Optimized network operational efficiency by centralizing and automating daily control systems."
        ]
      },
      {
        id: 3,
        role: "Lead Researcher",
        company: "Universitas Muslim Indonesia",
        duration: "Jan 2026 - Apr 2026",
        type: "Research",
        highlights: [
          "Led a research team in designing a smart stethoscope prototype using the ESP32-S3 microcontroller and MEMS sensors for the early detection of respiratory diseases.",
          "Integrated TinyML technology to run on-device data analysis (edge computing), designed for areas with limited digital infrastructure.",
          "Managed overall project operations, including team task delegation, scientific proposal writing, and budget allocation."
        ]
      },
      {
        id: 4,
        role: "Head of Human Resources Department",
        company: "UKM PERISAI UMI",
        duration: "Mar 2026 - Present",
        type: "Leadership",
        highlights: [
          "Led the HR Department in planning and executing member development programs.",
          "Managed recruitment, onboarding, and evaluation processes for new members.",
          "Coordinated training sessions, leadership development, and capacity-building activities."
        ]
      },
      {
        id: 5,
        role: "Laboratory Assistant & Media Staff",
        company: "Integrated Computer Labs (ICLabs) FIKOM UMI",
        duration: "Jan 2025 - Present",
        type: "Academic",
        highlights: [
          "Mentored students during programming practicum sessions and provided direct guidance on technical implementations.",
          "Designed visual content and managed publication media to support ICLabs branding.",
          "Provided technical support for laboratory software, hardware, and module preparation."
        ]
      },
      {
        id: 6,
        role: "Assistant Editor",
        company: "Jurnal Ilmu Komputer untuk Masyarakat (ILKOMAS)",
        duration: "Jan 2024 - Dec 2024",
        type: "Academic",
        highlights: [
          "Assisted in the editing and preliminary review of scientific manuscripts in computer science and IT.",
          "Verified article formatting, grammar, and administrative completeness to ensure adherence to academic guidelines."
        ]
      }
    ],

    projects: [
      {
        id: 1,
        title: "FoodLens – On-Device Food Recognition",
        techStack: ["Flutter", "TensorFlow Lite", "TheMealDB API", "Dart"],
        duration: "Jul 2026 - Present",
        description: "Developed a Flutter-based mobile application that performs on-device food recognition. Captures food images, preprocesses them, and classifies them locally without cloud inference. Automatically retrieves related recipes using TheMealDB API. Built using background isolates for responsive inference and Provider for state management.",
        link: "#",
        image: "/images/projects/foodlens.jpg"
      },
      {
        id: 2,
        title: "Smart Stethoscope Prototype (TinyML)",
        techStack: ["ESP32-S3", "TinyML", "C++", "MEMS Sensors", "Edge Computing"],
        duration: "Jan 2026 - Apr 2026",
        description: "Designed a hardware prototype utilizing ESP32-S3 and MEMS sensors for early detection of respiratory diseases. Deployed TinyML models directly onto the microcontroller for real-time, offline edge computing inference.",
        link: "#",
        image: "/images/projects/stethoscope.jpg"
      },
      {
        id: 3,
        title: "ISP Automated Management System",
        techStack: ["Laravel", "PHP", "Filament", "MikroTik API", "Networking"],
        duration: "May 2026 - Present",
        description: "A centralized dashboard for Internet Service Providers built with Laravel. Features include automatic customer isolation, centralized router management, and real-time network control via direct MikroTik API integration.",
        link: "#",
        image: "/images/projects/netmanager.jpg"
      }
    ],

    certifications: [
      {
        id: 1,
        name: "DIGDAYA Practitioner Phase (LLMs, RAG, PaaS)",
        issuer: "Bank Indonesia & PIDI",
        date: "Aug 2026"
      },
      {
        id: 2,
        name: "Machine Learning for Flutter",
        issuer: "Dicoding Indonesia",
        date: "Aug 2026"
      },
      {
        id: 3,
        name: "Generative AI & LLM Development",
        issuer: "Dicoding Indonesia",
        date: "Jul 2026"
      },
      {
        id: 4,
        name: "Fundamentals of Deep Learning",
        issuer: "NVIDIA",
        date: "Aug 2025"
      },
      {
        id: 5,
        name: "Junior Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Oct 2025"
      }
    ],

    skills: {
      ai_ml: [
        "Machine Learning", "Deep Learning", "Generative AI", "Large Language Models (LLMs)", 
        "Retrieval-Augmented Generation (RAG)", "Computer Vision", "TensorFlow", "TensorFlow Lite", "Prompt Engineering"
      ],
      software_dev: [
        "Python", "Dart", "Flutter", "PHP", "Laravel", "React", "HTML/CSS/JS", "Full-Stack Development"
      ],
      hardware_iot: [
        "Internet of Things (IoT)", "ESP32", "TinyML", "Edge/On-device Computing", "MEMS Sensors"
      ],
      infrastructure: [
        "Linux Server Management", "MikroTik API", "Network Configuration", "System Automation", "PaaS"
      ],
      research_soft_skills: [
        "Scientific Writing", "Academic Publishing (OJS)", "Project Management", "Leadership", "UI/UX Design"
      ]
    },

    scrollytellingChapters: [
      {
        step: "01",
        phase: "Signal Acquisition",
        title: "MEMS Acoustic Transduction (ESP32-S3)",
        summary: "Captured high-precision analog respiratory sounds via MEMS acoustic sensors directly integrated with an ESP32-S3 microcontroller, optimized for early detection of respiratory anomalies in edge conditions.",
        spec: "ESP32-S3 · MEMS Sensor · Low-Noise Preamp",
        badge: "Hardware & Edge",
      },
      {
        step: "02",
        phase: "On-Device Preprocessing",
        title: "Frequency Filtering & Spectrogram Generation",
        summary: "Converted raw respiratory vibration data into spectrogram representations using embedded digital signal processing algorithms directly on the microcontroller chip.",
        spec: "Fixed-Point DSP · 256-pt Windowing · Zero Cloud Latency",
        badge: "Embedded C++",
      },
      {
        step: "03",
        phase: "TinyML Inference",
        title: "Offline Neural Classification",
        summary: "Executed quantized TinyML neural network inference on-device without internet access, providing vital screening capabilities in areas with limited digital and medical infrastructure.",
        spec: "TinyML · INT8 Quantized · Sub-50ms Inference",
        badge: "Edge AI Engine",
      },
      {
        step: "04",
        phase: "Clinical Feedback",
        title: "Real-time Anomaly Indication",
        summary: "Instantly displayed diagnostic confidence and respiratory risk classifications, assisting community healthcare workers with immediate point-of-care feedback.",
        spec: "Real-Time Telemetry · Autonomous Operation",
        badge: "Field Healthcare",
      }
    ],

    ui: {
      nav: {
        about: "About",
        experience: "Experience",
        scrollytelling: "Deep Dive",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        talk: "Let's talk"
      },
      hero: {
        explore: "Explore Scrollytelling",
        viewProjects: "View Projects",
        stats: {
          academic: "Academic Standing",
          roles: "Engineering Roles",
          projects: "Featured Systems",
          domain: "Domain Focus"
        }
      },
      experience: {
        academicKicker: "Academic Background",
        workKicker: "Track Record & Experience",
        title: "Roles across",
        titleHighlight: "engineering & research.",
        subtitle: "End-to-end development, applied AI research, network automation, and departmental leadership."
      },
      scrollytelling: {
        kicker: "Architecture Deep Dive · Scrollytelling",
        title: "From acoustic vibration to",
        titleHighlight: "on-device clinical inference.",
        desc: "Scroll through the execution pipeline of the Smart Stethoscope Prototype. Notice how the hardware schematic stays pinned while each subsystem unfolds.",
        nodeHeader: "ESP32-S3 Edge Node",
        stagePrefix: "STAGE",
        stageSuffix: "OF 4 ACTIVE",
        signalTitle: "Signal PCG (Phonocardiogram)",
        statusRealtime: "STATUS: REAL-TIME"
      },
      projects: {
        kicker: "Featured Engineering Work",
        title: "Systems built to solve",
        titleHighlight: "real problems.",
        desc: "On-device TinyML inference, Flutter edge clients, and automated network infrastructures."
      },
      skills: {
        kicker: "Capabilities & Technical Stack",
        title: "Technical proficiencies",
        titleHighlight: "across hardware & AI.",
        certsKicker: "Verified Credentials",
        certsTitle: "Certifications."
      },
      contact: {
        badge: "Initiate Transmission",
        title: "Let's build something",
        titleHighlight: "intelligent and resilient.",
        desc: "Whether you are architecting an edge-AI hardware pipeline, developing deep learning systems, or need full-stack engineering expertise, feel free to reach out.",
        sendEmail: "Send Email Direct",
        copyAddress: "Copy Address",
        copied: "Copied!",
        footerNote: "Designed & Engineered with Separation of Concerns."
      }
    }
  },

  id: {
    personalInfo: {
      name: "Muhammad Rafli",
      headline: "Pengembang AI & IoT | Machine Learning Engineer",
      email: "raflyofficial6122@gmail.com",
      phone: "+62 8224 6641 848",
      location: "Makassar, Sulawesi Selatan, Indonesia",
      linkedin: "https://www.linkedin.com/in/muhammad-rafli-ai",
      instagram: "https://www.instagram.com/appy_6122/",
      github: "https://github.com/appyx123",
      availability: "Tersedia untuk Riset & Proyek Baru",
      summary: "Mahasiswa Teknik Informatika yang berspesialisasi dalam integrasi Artificial Intelligence (AI) dan Internet of Things (IoT). Berpengalaman dalam memimpin riset terapan dan pengembangan sistem end-to-end, mulai dari pemodelan risiko keuangan berbasis AI hingga pembuatan prototipe perangkat medis berbasis TinyML. Bersemangat dalam membangun solusi skalabel berbasis data untuk mendorong transformasi digital."
    },
    
    education: [
      {
        id: 1,
        institution: "Universitas Muslim Indonesia (UMI)",
        degree: "Sarjana Teknik Informatika (S.Kom)",
        duration: "Jun 2023 - Mar 2027",
        gpa: "3.96 / 4.00",
        description: "Spesialisasi dalam Kecerdasan Buatan (AI) dan Internet of Things (IoT)."
      }
    ],

    experience: [
      {
        id: 1,
        role: "Machine Learning Engineer",
        company: "FinTwin",
        duration: "Mar 2026 - Sekarang",
        type: "Profesional",
        highlights: [
          "Merancang dan mengembangkan sistem penilaian risiko keuangan berbasis AI untuk mensimulasikan proyeksi kesehatan finansial pengguna.",
          "Melakukan analisis mendalam dan evaluasi terhadap dataset pinjaman perbankan untuk memodelkan skenario manajemen risiko finansial.",
          "Mengembangkan algoritma pemodelan data guna mengoptimalkan proyeksi keuangan dan mendukung sistem deteksi penipuan (fraud detection)."
        ]
      },
      {
        id: 2,
        role: "Network System Developer",
        company: "NetManager",
        duration: "Mei 2026 - Sekarang",
        type: "Profesional",
        highlights: [
          "Mengembangkan sistem manajemen ISP (Internet Service Provider) menggunakan Laravel dan Filament, terintegrasi penuh dengan MikroTik API.",
          "Membangun fitur otomasi kontrol jaringan, termasuk manajemen router terpusat dan isolasi pelanggan otomatis.",
          "Mengoptimalkan efisiensi operasional jaringan dengan memusatkan dan mengotomatiskan sistem kontrol harian."
        ]
      },
      {
        id: 3,
        role: "Lead Researcher",
        company: "Universitas Muslim Indonesia",
        duration: "Jan 2026 - Apr 2026",
        type: "Riset",
        highlights: [
          "Memimpin tim riset dalam merancang prototipe stetoskop pintar berbasis mikrokontroler ESP32-S3 dan sensor MEMS untuk deteksi dini penyakit pernapasan.",
          "Mengintegrasikan teknologi TinyML untuk menjalankan analisis data langsung pada perangkat (edge computing), dirancang khusus untuk area dengan keterbatasan infrastruktur digital.",
          "Mengelola seluruh operasional proyek, mencakup pembagian tugas tim, penulisan proposal ilmiah, dan alokasi anggaran."
        ]
      },
      {
        id: 4,
        role: "Ketua Departemen Sumber Daya Manusia",
        company: "UKM PERISAI UMI",
        duration: "Mar 2026 - Sekarang",
        type: "Kepemimpinan",
        highlights: [
          "Memimpin Departemen SDM dalam merencanakan dan mengeksekusi program pengembangan anggota.",
          "Mengelola proses rekrutmen, orientasi (onboarding), dan evaluasi anggota baru.",
          "Mengkoordinasikan pelatihan, pembinaan kepemimpinan, dan kegiatan penguatan kapasitas organisasi."
        ]
      },
      {
        id: 5,
        role: "Asisten Laboratorium & Media Staff",
        company: "Laboratorium Komputer Terpadu (ICLabs) FIKOM UMI",
        duration: "Jan 2025 - Sekarang",
        type: "Akademik",
        highlights: [
          "Membimbing mahasiswa selama sesi praktikum pemrograman dan memberikan arahan teknis langsung.",
          "Merancang konten visual dan mengelola media publikasi untuk mendukung branding ICLabs.",
          "Menyediakan dukungan teknis untuk perangkat lunak, perangkat keras lab, dan penyusunan modul praktikum."
        ]
      },
      {
        id: 6,
        role: "Assistant Editor",
        company: "Jurnal Ilmu Komputer untuk Masyarakat (ILKOMAS)",
        duration: "Jan 2024 - Des 2024",
        type: "Akademik",
        highlights: [
          "Membantu proses penyuntingan dan penelaahan awal naskah ilmiah di bidang ilmu komputer dan IT.",
          "Memverifikasi format artikel, tata bahasa, dan kelengkapan administratif sesuai pedoman akademis."
        ]
      }
    ],

    projects: [
      {
        id: 1,
        title: "FoodLens – Pengenalan Makanan On-Device",
        techStack: ["Flutter", "TensorFlow Lite", "TheMealDB API", "Dart"],
        duration: "Jul 2026 - Sekarang",
        description: "Mengembangkan aplikasi mobile berbasis Flutter untuk pengenalan makanan langsung di perangkat (on-device). Menangkap gambar makanan, memproses data lokal tanpa latensi cloud, dan secara otomatis mencocokkan resep via TheMealDB API. Menggunakan background isolates untuk inferensi responsif dan Provider untuk manajemen state.",
        link: "#",
        image: "/images/projects/foodlens.jpg"
      },
      {
        id: 2,
        title: "Prototipe Stetoskop Pintar (TinyML)",
        techStack: ["ESP32-S3", "TinyML", "C++", "MEMS Sensors", "Edge Computing"],
        duration: "Jan 2026 - Apr 2026",
        description: "Merancang prototipe perangkat keras menggunakan ESP32-S3 dan sensor MEMS untuk deteksi dini anomali pernapasan. Menjalankan model TinyML terkuantisasi langsung pada mikrokontroler untuk inferensi real-time tanpa ketergantungan internet.",
        link: "#",
        image: "/images/projects/stethoscope.jpg"
      },
      {
        id: 3,
        title: "Sistem Otomasi Manajemen ISP",
        techStack: ["Laravel", "PHP", "Filament", "MikroTik API", "Networking"],
        duration: "Mei 2026 - Sekarang",
        description: "Dashboard terpusat untuk Internet Service Provider berbasis Laravel. Dilengkapi otomasi isolasi pelanggan, manajemen router terpusat, dan kendali jaringan real-time melalui integrasi langsung MikroTik API.",
        link: "#",
        image: "/images/projects/netmanager.jpg"
      }
    ],

    certifications: [
      {
        id: 1,
        name: "DIGDAYA Practitioner Phase (LLMs, RAG, PaaS)",
        issuer: "Bank Indonesia & PIDI",
        date: "Agu 2026"
      },
      {
        id: 2,
        name: "Machine Learning for Flutter",
        issuer: "Dicoding Indonesia",
        date: "Agu 2026"
      },
      {
        id: 3,
        name: "Pengembangan Generative AI & LLM",
        issuer: "Dicoding Indonesia",
        date: "Jul 2026"
      },
      {
        id: 4,
        name: "Fundamentals of Deep Learning",
        issuer: "NVIDIA",
        date: "Agu 2025"
      },
      {
        id: 5,
        name: "Junior Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Okt 2025"
      }
    ],

    skills: {
      ai_ml: [
        "Machine Learning", "Deep Learning", "Generative AI", "Large Language Models (LLMs)", 
        "Retrieval-Augmented Generation (RAG)", "Computer Vision", "TensorFlow", "TensorFlow Lite", "Prompt Engineering"
      ],
      software_dev: [
        "Python", "Dart", "Flutter", "PHP", "Laravel", "React", "HTML/CSS/JS", "Full-Stack Development"
      ],
      hardware_iot: [
        "Internet of Things (IoT)", "ESP32", "TinyML", "Edge/On-device Computing", "Sensor MEMS"
      ],
      infrastructure: [
        "Manajemen Linux Server", "MikroTik API", "Konfigurasi Jaringan", "Otomasi Sistem", "PaaS"
      ],
      research_soft_skills: [
        "Penulisan Ilmiah", "Publikasi Akademik (OJS)", "Manajemen Proyek", "Kepemimpinan", "Desain UI/UX"
      ]
    },

    scrollytellingChapters: [
      {
        step: "01",
        phase: "Akuisisi Sinyal",
        title: "Transduksi Akustik MEMS (ESP32-S3)",
        summary: "Menangkap getaran akustik respirasi berpresisi tinggi melalui sensor MEMS yang terhubung langsung ke mikrokontroler ESP32-S3, dioptimalkan untuk deteksi dini penyakit pernapasan pada perangkat edge.",
        spec: "ESP32-S3 · Sensor MEMS · Preamp Low-Noise",
        badge: "Perangkat Keras & Edge",
      },
      {
        step: "02",
        phase: "Pemrosesan On-Device",
        title: "Penyaringan Frekuensi & Spektrogram",
        summary: "Mengonversi sinyal getaran respirasi mentah menjadi representasi spektrogram menggunakan algoritma pemrosesan sinyal digital tertanam (DSP) langsung di chip mikrokontroler.",
        spec: "Fixed-Point DSP · 256-pt Windowing · Nol Latensi Cloud",
        badge: "Embedded C++",
      },
      {
        step: "03",
        phase: "Inferensi TinyML",
        title: "Klasifikasi Neural Offline",
        summary: "Mengeksekusi model neural network TinyML terkuantisasi secara offline tanpa internet, menghadirkan kemampuan skrining penting bagi wilayah dengan keterbatasan infrastruktur digital.",
        spec: "TinyML · Kuantisasi INT8 · Latensi <50ms",
        badge: "Edge AI Engine",
      },
      {
        step: "04",
        phase: "Umpan Balik Klinis",
        title: "Indikasi Anomali Real-Time",
        summary: "Secara instan menampilkan skor keyakinan diagnostik dan klasifikasi risiko pernapasan, membantu tenaga kesehatan komunitas dengan umpan balik point-of-care yang cepat.",
        spec: "Telemetri Real-Time · Operasi Otonom",
        badge: "Layanan Kesehatan Lapangan",
      }
    ],

    ui: {
      nav: {
        about: "Tentang",
        experience: "Pengalaman",
        scrollytelling: "Deep Dive",
        projects: "Proyek",
        skills: "Keahlian",
        contact: "Kontak",
        talk: "Hubungi Saya"
      },
      hero: {
        explore: "Jelajahi Scrollytelling",
        viewProjects: "Lihat Proyek",
        stats: {
          academic: "Prestasi Akademik",
          roles: "Peran Engineering",
          projects: "Sistem Unggulan",
          domain: "Fokus Domain"
        }
      },
      experience: {
        academicKicker: "Latar Belakang Akademik",
        workKicker: "Riwayat Pengalaman Kerja",
        title: "Peran dalam bidang",
        titleHighlight: "engineering & riset terapan.",
        subtitle: "Pengembangan end-to-end, riset AI terapan, otomasi jaringan, dan kepemimpinan departemen."
      },
      scrollytelling: {
        kicker: "Bedah Arsitektur · Scrollytelling",
        title: "Dari getaran akustik menuju",
        titleHighlight: "inferensi klinis di perangkat (edge).",
        desc: "Gulir untuk melihat alur eksekusi Prototipe Stetoskop Pintar. Perhatikan bagaimana skematik hardware tetap terkunci saat penjelasan setiap subsistem bergerak melintas.",
        nodeHeader: "Node Edge ESP32-S3",
        stagePrefix: "TAHAP",
        stageSuffix: "DARI 4 AKTIF",
        signalTitle: "Sinyal PCG (Phonocardiogram)",
        statusRealtime: "STATUS: REAL-TIME"
      },
      projects: {
        kicker: "Karya Rekayasa Unggulan",
        title: "Sistem yang dibangun untuk menyelesaikan",
        titleHighlight: "masalah nyata.",
        desc: "Inferensi TinyML di perangkat, aplikasi client edge Flutter, dan infrastruktur otomasi jaringan."
      },
      skills: {
        kicker: "Kemampuan & Tech Stack",
        title: "Keahlian teknis",
        titleHighlight: "di bidang hardware & AI.",
        certsKicker: "Kredensial Terverifikasi",
        certsTitle: "Sertifikasi."
      },
      contact: {
        badge: "Kirim Transmisi",
        title: "Mari bangun sesuatu yang",
        titleHighlight: "cerdas dan berdampak nyata.",
        desc: "Baik Anda sedang merancang alur hardware edge-AI, mengembangkan sistem deep learning, atau membutuhkan keahlian rekayasa full-stack, silakan hubungi saya.",
        sendEmail: "Kirim Email Langsung",
        copyAddress: "Salin Alamat",
        copied: "Tersalin!",
        footerNote: "Dirancang & Direkayasa dengan Prinsip Separation of Concerns."
      }
    }
  }
};

// Default export uses 'en' for backward compatibility
export const personalInfo = portfolioData.en.personalInfo;
export const education = portfolioData.en.education;
export const experience = portfolioData.en.experience;
export const experiences = portfolioData.en.experience;
export const projects = portfolioData.en.projects;
export const certifications = portfolioData.en.certifications;
export const skills = portfolioData.en.skills;
export const scrollytellingChapters = portfolioData.en.scrollytellingChapters;

export default portfolioData;
