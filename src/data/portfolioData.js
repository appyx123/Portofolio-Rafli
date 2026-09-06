/**
 * Bilingual Portfolio Data Configuration (EN & ID)
 * Architecture: Data-Driven UI (Separation of Concerns)
 */

export const portfolioData = {
  en: {
    personalInfo: {
      name: "Muhammad Rafli",
      headline: "AI & IoT Engineer | Full-Stack Developer",
      email: "raflyofficial6122@gmail.com",
      phone: "+62 8224 6641 848",
      whatsapp: "https://wa.me/6282246641848",
      location: "Makassar, South Sulawesi, Indonesia",
      linkedin: "https://www.linkedin.com/in/muhammad-rafli-ai",
      instagram: "https://www.instagram.com/appy_6122/",
      github: "https://github.com/appyx123",
      availability: "Available for Projects & Research",
      summary: "Informatics Engineering student with a primary specialization in Artificial Intelligence (AI) and the Internet of Things (IoT). Experienced in designing Machine Learning models, Edge Computing architectures (TinyML), and smart hardware devices. Equipped with strong Full-Stack Web Development expertise to build production-grade systems, enabling me to deliver end-to-end engineering solutions from sensors and AI algorithms to interactive enterprise dashboards."
    },

    education: [
      {
        id: 1,
        institution: "Universitas Muslim Indonesia (UMI)",
        degree: "Bachelor Degree Candidate (S.Kom)",
        duration: "Jun 2023 - Mar 2027",
        gpa: "3.96 / 4.00",
        logo: "/images/UMI.png",
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
        title: "PULMO-SENSE — Smart Stethoscope Prototype (TinyML)",
        techStack: ["ESP32-S3", "TinyML", "C++", "MEMS Sensors", "Edge Computing"],
        duration: "Jan 2026 - Apr 2026",
        description: "Designed a hardware prototype utilizing ESP32-S3 and MEMS sensors for early detection of respiratory diseases. Deployed TinyML models directly onto the microcontroller for real-time, offline edge computing inference.",
        link: "#",
        image: "/images/projects/stethoscope.jpg"
      },
      {
        id: 2,
        title: "TB Care AI — Multimodal Screening",
        techStack: ["Python", "Deep Learning", "Streamlit", "CNN & LSTM", "Scikit-Learn", "Audio Processing"],
        duration: "2026",
        description: "An advanced multimodal medical screening prototype combining Deep Learning (CNN + LSTM) for cough audio analysis with rule-based clinical data evaluation to generate accurate health risk scores.",
        link: "https://github.com/appyx123/TB-Care-AI",
        github: "https://github.com/appyx123/TB-Care-AI",
        image: ""
      },
      {
        id: 3,
        title: "FoodLens – On-Device Food Recognition",
        techStack: ["Flutter", "TensorFlow Lite", "TheMealDB API", "Dart"],
        duration: "Jul 2026 - Present",
        description: "Developed a Flutter-based mobile application that performs on-device food recognition. Captures food images, preprocesses them, and classifies them locally without cloud inference. Automatically retrieves related recipes using TheMealDB API. Built using background isolates for responsive inference and Provider for state management.",
        link: "https://github.com/appyx123/FoodLens-Flutter",
        github: "https://github.com/appyx123/FoodLens-Flutter",
        image: "/images/projects/foodlens.jpg"
      },
      {
        id: 4,
        title: "Real-Time Thumb & Finger Detection",
        techStack: ["MediaPipe", "JavaScript", "HTML5 Canvas", "WebRTC", "Tailwind CSS", "Computer Vision"],
        duration: "2026",
        description: "A privacy-first, client-side browser application for real-time finger counting and hand landmark detection, built with MediaPipe AI and WebGL without any backend dependencies.",
        link: "https://github.com/appyx123/Thumb-Detection.Web",
        github: "https://github.com/appyx123/Thumb-Detection.Web",
        image: "/images/projects/thumb-detection.png"
      },
      {
        id: 5,
        title: "FIKOM Certification Center (FCC)",
        techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Midtrans API", "Vite"],
        duration: "2026",
        description: "An official institutional certification portal built with Laravel, featuring seamless OTP authentication, Midtrans payment gateway integration, QR-code attendance scanning, and automated digital certificate generation.",
        link: "https://github.com/lastWannn/FikomCertificationCenter",
        github: "https://github.com/lastWannn/FikomCertificationCenter",
        image: ""
      },
      {
        id: 6,
        title: "COGURA Coffee — Premium Arabica Storefront",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "i18n", "WhatsApp"],
        duration: "2026",
        description: "A modern multilingual coffee storefront built with Next.js and TypeScript, featuring static site generation, responsive UI, Indonesian/English localization, product catalog, and WhatsApp-based ordering.",
        link: "https://cogura.store/en",
        live: "https://cogura.store/en",
        github: "https://github.com/appyx123/cogura.web",
        image: "/images/projects/cogura.webp"
      },
      {
        id: 7,
        title: "NetManagement — ISP Management System",
        techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Vite", "System Architecture"],
        duration: "2026",
        description: "A comprehensive ISP operational platform featuring role-based access control, billing automation, marketing pipelines, technician task tracking, and customer self-service portals.",
        link: "https://github.com/Justrifkyy/NetManagement",
        github: "https://github.com/Justrifkyy/NetManagement",
        image: "/images/projects/netmanager.jpg"
      }
      /*
      ,
      {
        id: 8,
        title: "OurOffice — Linux-First Office Suite",
        techStack: ["Rust", "Qt 6 / QML", "Cargo", "CMake", "Desktop App", "Linux"],
        duration: "2026",
        description: "A high-performance, open-source desktop office suite engineered natively for Linux ecosystems, featuring a memory-safe Rust core, Qt/QML interfaces, and an AI-agent-first development architecture.",
        link: "https://github.com/appyx123/OurOffice-Linux",
        github: "https://github.com/appyx123/OurOffice-Linux",
        image: ""
      },
      {
        id: 9,
        title: "Monitoring Praktikum Laboratorium",
        techStack: ["PHP", "MySQL", "MVC Architecture", "JavaScript", "HTML5/CSS3", "Academic System"],
        duration: "2026",
        description: "A web-based academic monitoring system utilizing raw PHP and MVC architecture for managing laboratory schedules, teaching assistants, lecturers, and mentoring sessions.",
        link: "https://github.com/TUBES-CA-25/Monitoring-Praktikum-Kelompok-4",
        github: "https://github.com/TUBES-CA-25/Monitoring-Praktikum-Kelompok-4",
        image: ""
      }
      */
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
        phase: "Hardware & Acoustics",
        title: "Precision Signal Acquisition (Mechanical Retrofit & I2S)",
        summary: "Capturing respiratory acoustic vibrations using a pure digital omnidirectional MEMS INMP441 microphone (I2S). The plug-and-play mechanical retrofit design with a 3D resin acoustic chamber clamps onto standard stethoscope tubing without damaging the original instrument, isolated from ambient noise.",
        spec: "ESP32-S3 · MEMS INMP441 · I2S Audio · 3D Resin Chamber",
        badge: "Hardware & Acoustics",
      },
      {
        step: "02",
        phase: "Digital Signal Processing",
        title: "Lung Feature Extraction (MFCC)",
        summary: "Raw respiratory audio signals are processed directly inside the microcontroller (Edge Computing) to extract MFCC (Mel-Frequency Cepstral Coefficients) feature matrices. This on-device extraction accurately captures spectral characteristics of crackles and wheezes matching human auditory perception.",
        spec: "MFCC Extraction · 20x40 Matrix · 100% Offline Processing",
        badge: "Digital Signal Processing",
      },
      {
        step: "03",
        phase: "Edge AI Engine",
        title: "TinyML Inference (Lightweight 1D CNN)",
        summary: "Executes a Lightweight CNN architecture compressed via post-training quantization. Featuring Global Average Pooling (GAP) to prevent overfitting and minimize RAM overhead, enabling the deep learning model to operate autonomously without cloud computing.",
        spec: "TinyML · Lightweight CNN · INT8 Quantization · GAP",
        badge: "Edge AI Engine",
      },
      {
        step: "04",
        phase: "Clinical Feedback",
        title: "Real-Time Diagnostics & OLED Display",
        summary: "Pulmonary anomaly classification results are directly visualized via a mini OLED I2C display interface with sub-2-second latency. Delivering an objective 'second opinion' for healthcare workers in primary health centers (FKTP), overcoming diagnostic barriers in blank-spot regions.",
        spec: "OLED I2C · Accuracy >85% · Latency < 2s · Blank Spot Solution",
        badge: "Clinical Feedback",
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
        kicker: "",
        title: "Architecture Breakdown ·",
        titleHighlight: "PULMO-SENSE",
        desc: "From manual stethoscope to 100% offline intelligent diagnosis for Tuberculosis screening in blank-spot areas with limited infrastructure.",
        nodeHeader: "COMPUTE: ESP32-S3 (TinyML)",
        stagePrefix: "STAGE",
        stageSuffix: "OF 4 ACTIVE",
        signalTitle: "Respiratory Acoustic Signal (I2S)",
        statusRealtime: "STATUS: 100% OFFLINE",
        statStatus: "100% OFFLINE",
        statLatency: "< 2s",
        statCompute: "ESP32-S3 (TinyML)",
        statAccuracy: "> 85.0%"
      },
      projects: {
        kicker: "Featured Engineering Work",
        title: "Systems built to solve",
        titleHighlight: "real problems.",
        desc: ""
      },
      skills: {
        kicker: "Capabilities & Technical Stack",
        title: "Technical proficiencies",
        titleHighlight: "across hardware, AI, & software engineering.",
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
      headline: "AI & IoT Engineer | Full-Stack Developer",
      email: "raflyofficial6122@gmail.com",
      phone: "+62 8224 6641 848",
      whatsapp: "https://wa.me/6282246641848",
      location: "Makassar, Sulawesi Selatan, Indonesia",
      linkedin: "https://www.linkedin.com/in/muhammad-rafli-ai",
      instagram: "https://www.instagram.com/appy_6122/",
      github: "https://github.com/appyx123",
      availability: "Tersedia untuk Riset & Proyek Baru",
      summary: "Mahasiswa Teknik Informatika dengan spesialisasi utama pada Kecerdasan Buatan (AI) dan Internet of Things (IoT). Berpengalaman merancang model Machine Learning, arsitektur Edge Computing (TinyML), dan perangkat keras pintar. Dilengkapi dengan keahlian Full-Stack Web Development untuk membangun sistem berskala produksi, memungkinkan saya mengembangkan solusi teknologi end-to-end mulai dari sensor dan algoritma AI hingga dashboard interaktif perusahaan."
    },

    education: [
      {
        id: 1,
        institution: "Universitas Muslim Indonesia (UMI)",
        degree: "Kandidat Sarjana (S.Kom)",
        duration: "Jun 2023 - Mar 2027",
        gpa: "3.96 / 4.00",
        logo: "/images/UMI.png",
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
        title: "PULMO-SENSE — Prototipe Stetoskop Pintar (TinyML)",
        techStack: ["ESP32-S3", "TinyML", "C++", "MEMS Sensors", "Edge Computing"],
        duration: "Jan 2026 - Apr 2026",
        description: "Merancang prototipe perangkat keras menggunakan ESP32-S3 dan sensor MEMS untuk deteksi dini anomali pernapasan. Menjalankan model TinyML terkuantisasi langsung pada mikrokontroler untuk inferensi real-time tanpa ketergantungan internet.",
        link: "#",
        image: "/images/projects/stethoscope.jpg"
      },
      {
        id: 2,
        title: "TB Care AI — Multimodal Screening",
        techStack: ["Python", "Deep Learning", "Streamlit", "CNN & LSTM", "Scikit-Learn", "Audio Processing"],
        duration: "2026",
        description: "Prototipe skrining medis multimodal tingkat lanjut yang menggabungkan Deep Learning (CNN + LSTM) untuk analisis audio batuk dengan evaluasi data klinis berbasis aturan guna menghasilkan skor risiko kesehatan yang akurat.",
        link: "https://github.com/appyx123/TB-Care-AI",
        github: "https://github.com/appyx123/TB-Care-AI",
        image: ""
      },
      {
        id: 3,
        title: "FoodLens – Pengenalan Makanan On-Device",
        techStack: ["Flutter", "TensorFlow Lite", "TheMealDB API", "Dart"],
        duration: "Jul 2026 - Sekarang",
        description: "Mengembangkan aplikasi mobile berbasis Flutter untuk pengenalan makanan langsung di perangkat (on-device). Menangkap gambar makanan, memproses data lokal tanpa latensi cloud, dan secara otomatis mencocokkan resep via TheMealDB API. Menggunakan background isolates untuk inferensi responsif dan Provider untuk manajemen state.",
        link: "https://github.com/appyx123/FoodLens-Flutter",
        github: "https://github.com/appyx123/FoodLens-Flutter",
        image: "/images/projects/foodlens.jpg"
      },
      {
        id: 4,
        title: "Real-Time Thumb & Finger Detection",
        techStack: ["MediaPipe", "JavaScript", "HTML5 Canvas", "WebRTC", "Tailwind CSS", "Computer Vision"],
        duration: "2026",
        description: "Aplikasi web berbasis browser yang mengutamakan privasi untuk penghitungan jari dan deteksi landmark tangan secara real-time, dibangun dengan MediaPipe AI dan WebGL tanpa ketergantungan backend.",
        link: "https://github.com/appyx123/Thumb-Detection.Web",
        github: "https://github.com/appyx123/Thumb-Detection.Web",
        image: "/images/projects/thumb-detection.png"
      },
      {
        id: 5,
        title: "FIKOM Certification Center (FCC)",
        techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Midtrans API", "Vite"],
        duration: "2026",
        description: "Portal sertifikasi institusional resmi yang dibangun dengan Laravel, menghadirkan autentikasi OTP, integrasi payment gateway Midtrans, pemindaian kehadiran berbasis QR-code, dan penerbitan sertifikat digital otomatis.",
        link: "https://github.com/lastWannn/FikomCertificationCenter",
        github: "https://github.com/lastWannn/FikomCertificationCenter",
        image: ""
      },
      {
        id: 6,
        title: "COGURA Coffee — Premium Arabica Storefront",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "i18n", "WhatsApp"],
        duration: "2026",
        description: "Storefront kopi modern multibahasa yang dibangun dengan Next.js dan TypeScript, menghadirkan static site generation, UI responsif, lokalisasi Bahasa Indonesia/Inggris, katalog produk, dan pemesanan berbasis WhatsApp.",
        link: "https://cogura.store/en",
        live: "https://cogura.store/en",
        github: "https://github.com/appyx123/cogura.web",
        image: "/images/projects/cogura.webp"
      },
      {
        id: 7,
        title: "NetManagement — ISP Management System",
        techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Vite", "System Architecture"],
        duration: "2026",
        description: "Platform operasional ISP komprehensif yang dilengkapi kontrol akses berbasis peran (RBAC), otomasi penagihan, pipeline pemasaran, pelacakan tugas teknisi, dan portal mandiri pelanggan.",
        link: "https://github.com/Justrifkyy/NetManagement",
        github: "https://github.com/Justrifkyy/NetManagement",
        image: "/images/projects/netmanager.jpg"
      }
      /*
      ,
      {
        id: 8,
        title: "OurOffice — Linux-First Office Suite",
        techStack: ["Rust", "Qt 6 / QML", "Cargo", "CMake", "Desktop App", "Linux"],
        duration: "2026",
        description: "Office suite desktop sumber terbuka berperforma tinggi yang direkayasa secara native untuk ekosistem Linux, menampilkan core Rust memory-safe, antarmuka Qt/QML, dan arsitektur pengembangan AI-agent-first.",
        link: "https://github.com/appyx123/OurOffice-Linux",
        github: "https://github.com/appyx123/OurOffice-Linux",
        image: ""
      },
      {
        id: 9,
        title: "Monitoring Praktikum Laboratorium",
        techStack: ["PHP", "MySQL", "MVC Architecture", "JavaScript", "HTML5/CSS3", "Academic System"],
        duration: "2026",
        description: "Sistem monitoring akademik berbasis web menggunakan native PHP dan arsitektur MVC untuk pengelolaan jadwal laboratorium, asisten praktikum, dosen pengampu, dan sesi asistensi.",
        link: "https://github.com/TUBES-CA-25/Monitoring-Praktikum-Kelompok-4",
        github: "https://github.com/TUBES-CA-25/Monitoring-Praktikum-Kelompok-4",
        image: ""
      }
      */
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
        phase: "Perangkat Keras & Akustik",
        title: "Akuisisi Sinyal Presisi (Retrofit Mekanik & I2S)",
        summary: "Menangkap getaran akustik respirasi menggunakan mikrofon omnidirectional MEMS INMP441 murni digital (I2S). Desain mekanik retrofit 'plug-and-play' dengan acoustic chamber resin 3D memungkinkan alat dijepit pada selang stetoskop manual tanpa merusak instrumen asli dan bebas dari kebisingan luar.",
        spec: "ESP32-S3 · MEMS INMP441 · I2S Audio · 3D Resin Chamber",
        badge: "Perangkat Keras & Akustik",
      },
      {
        step: "02",
        phase: "Pemrosesan Sinyal Digital",
        title: "Ekstraksi Fitur Paru (MFCC)",
        summary: "Sinyal audio pernapasan mentah diproses langsung di dalam mikrokontroler (Edge Computing) untuk mengekstraksi matriks fitur MFCC (Mel-Frequency Cepstral Coefficients). Ekstraksi on-device ini secara presisi merepresentasikan karakteristik spektral suara crackles dan wheezes sesuai kepekaan pendengaran manusia.",
        spec: "MFCC Extraction · Matriks 20x40 · Pemrosesan 100% Luring",
        badge: "Pemrosesan Sinyal Digital",
      },
      {
        step: "03",
        phase: "Edge AI Engine",
        title: "Inferensi TinyML (Lightweight CNN 1D)",
        summary: "Mengeksekusi arsitektur Lightweight CNN yang telah dikompresi melalui post-training quantization. Dilengkapi lapisan Global Average Pooling (GAP) untuk mencegah overfitting dan meminimalkan beban RAM, memungkinkan model deep learning beroperasi mandiri tanpa komputasi cloud.",
        spec: "TinyML · Lightweight CNN · INT8 Quantization · GAP",
        badge: "Edge AI Engine",
      },
      {
        step: "04",
        phase: "Umpan Balik Klinis",
        title: "Diagnostik Real-Time & Layar OLED",
        summary: "Hasil klasifikasi anomali paru langsung divisualisasikan melalui layar antarmuka mini OLED I2C dengan latensi di bawah 2 detik. Menghadirkan 'second opinion' yang objektif bagi tenaga medis di Fasilitas Kesehatan Tingkat Pertama (FKTP), memecahkan kebuntuan diagnostik di area blank spot.",
        spec: "OLED I2C · Akurasi >85% · Latensi < 2 Detik · Solusi Blank Spot",
        badge: "Umpan Balik Klinis",
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
        kicker: "",
        title: "Bedah Arsitektur ·",
        titleHighlight: "PULMO-SENSE",
        desc: "Dari stetoskop manual menuju diagnosis cerdas 100% luring (offline) untuk deteksi Tuberkulosis di wilayah minim infrastruktur (blank spot).",
        nodeHeader: "COMPUTE: ESP32-S3 (TinyML)",
        stagePrefix: "TAHAP",
        stageSuffix: "DARI 4 AKTIF",
        signalTitle: "Sinyal Akustik Respirasi (I2S)",
        statusRealtime: "STATUS: 100% OFFLINE (LURING)",
        statStatus: "100% OFFLINE (LURING)",
        statLatency: "< 2 Detik",
        statCompute: "ESP32-S3 (TinyML)",
        statAccuracy: "> 85.0%"
      },
      projects: {
        kicker: "Karya Rekayasa Unggulan",
        title: "Sistem yang dibangun untuk menyelesaikan",
        titleHighlight: "masalah nyata.",
        desc: ""
      },
      skills: {
        kicker: "Kemampuan & Tech Stack",
        title: "Keahlian teknis",
        titleHighlight: "di bidang hardware, AI, & rekayasa perangkat lunak.",
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
