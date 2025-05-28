import { FaTree } from 'react-icons/fa';
// src/data/mockSchoolData.js
// Pastikan Anda import path gambar dengan benar atau gunakan string path langsung
// Jika menggunakan Vite, path relatif dari folder public atau import langsung bisa bekerja.
import galleryImage1 from '../assets/images/1.png'; // Ganti dengan nama file Anda
import galleryImage2 from '../assets/images/2.jpg';
import galleryImage3 from '../assets/images/3.png';
import galleryImage4 from '../assets/images/1.png';
import galleryImage5 from '../assets/images/2.jpg';

export const schoolProfile = {
  name: 'SMP PLUS AT-THAHIRIN',
  headmasterWelcome:
    "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di website resmi SMP PLUS AT-THAHIRIN. Kami berkomitmen untuk memberikan pendidikan berkualitas yang berlandaskan nilai-nilai Islami dan teknologi terkini. Mari bergabung bersama kami untuk masa depan generasi yang cerdas dan berakhlak mulia.",
  featuredPrograms: [
    {
      id: 1,
      title: 'Pramuka',
      description:
        'Pramuka adalah program yang mengajarkan keterampilan dan kepemimpinan melalui kegiatan luar ruangan.',
      icon: '🥥', // Anda bisa ganti dengan icon atau path gambar nanti
    },
    {
      id: 2,
      title: 'Paskibra',
      description:
        'Paskibra adalah program yang mengembangkan keterampilan baris berbaris dan kedisiplinan diri.',
      icon: '👮‍♂️',
    },
    {
      id: 3,
      title: 'Silat',
      description:
        'Berbagai pilihan ekstrakurikuler untuk mengembangkan minat dan bakat siswa terutama dalam bela diri',
      icon: '🥋',
    },
  ],
  latestNews: [
    {
      id: 1,
      title: 'Pembukaan PPDB Tahun Ajaran 2024/2025',
      date: '15 Juli 2024',
      summary:
        'Pendaftaran Peserta Didik Baru untuk tahun ajaran 2024/2025 telah resmi dibuka. Segera daftarkan putra-putri Anda!',
      link: '/ppdb',
    },
    {
      id: 2,
      title: 'Prestasi Siswa di Lomba Sains Tingkat Kabupaten',
      date: '10 Juli 2024',
      summary:
        'Siswa kami berhasil meraih juara 1 dalam Lomba Sains tingkat kabupaten. Selamat!',
      link: '/berita/prestasi-sains-2024', // Contoh link berita detail
    },
  ],
  // TAMBAHKAN DATA UNTUK HALAMAN TENTANG KAMI DI SINI
  about: {
    history:
      'SMP PLUS AT-THAHIRIN didirikan pada tahun XXXX dengan semangat untuk memberikan pendidikan Islam yang modern dan berkualitas. Sejak awal berdirinya, kami telah berkomitmen untuk mencetak generasi penerus bangsa yang tidak hanya unggul dalam bidang akademis, tetapi juga memiliki akhlakul karimah. Kami terus berinovasi dalam metode pengajaran dan pengembangan kurikulum untuk menjawab tantangan zaman.',
    vision:
      'Menjadi lembaga pendidikan Islam unggulan yang menghasilkan generasi cerdas, mandiri, berakhlak mulia, dan mampu bersaing di tingkat global.',
    missions: [
      'Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai Islam dalam setiap aspek pembelajaran.',
      'Mengembangkan potensi peserta didik secara optimal melalui kurikulum yang adaptif dan inovatif.',
      'Menciptakan lingkungan belajar yang kondusif, aman, dan menyenangkan.',
      'Membangun kerjasama yang harmonis dengan orang tua, masyarakat, dan stakeholder pendidikan lainnya.',
      'Menanamkan jiwa kepemimpinan, kemandirian, dan tanggung jawab kepada peserta didik.',
    ],
    // Anda bisa tambahkan data lain di sini nanti, misal:
    // organizationalStructureImage: "/path/to/struktur-organisasi.jpg",
    // facilities: ["Ruang Kelas Nyaman", "Laboratorium Komputer", "Perpustakaan", "Masjid", "Lapangan Olahraga"]
  },

  // TAMBAHKAN DATA UNTUK HALAMAN PROGRAM DI SINI
  academic: {
    curriculum: {
      title: 'Kurikulum Nasional 2013 dengan Pengayaan Islami',
      description:
        'SMP PLUS AT-THAHIRIN menerapkan Kurikulum Nasional 2013 yang diperkaya dengan muatan nilai-nilai Islam dan program pengembangan diri khas sekolah. Kami fokus pada pembelajaran aktif, kreatif, inovatif, dan menyenangkan untuk mengembangkan kompetensi siswa secara holistik (sikap, pengetahuan, dan keterampilan).',
      subjectsIntegrated: [
        'Pendidikan Agama Islam dan Budi Pekerti (dengan penekanan pada praktek ibadah dan akhlak)',
        "Bahasa Arab (sebagai bahasa Al-Qur'an dan komunikasi global)",
        "Tahfidz Al-Qur'an (program hafalan reguler)",
      ],
    },
    // featuredPrograms sudah ada di root schoolProfile, kita bisa gunakan itu atau buat yang lebih detail di sini
    // Untuk contoh, kita gunakan yang sudah ada dan tambahkan detail ekstrakurikuler
    extracurriculars: [
      {
        id: 'eko-01',
        name: 'Pramuka',
        category: 'Kepemimpinan & Karakter',
        description:
          'Membentuk karakter, kemandirian, dan keterampilan bertahan hidup melalui kegiatan kepramukaan.',
        schedule: 'Setiap Sabtu, 14:00 - 16:00',
        // icon: "⚜️"
      },
      {
        id: 'eko-02',
        name: 'Paskibra',
        category: 'Kepemimpinan & Karakter',
        description:
          'Melatih kedisiplinan, kepemimpinan, dan cinta tanah air melalui baris-berbaris dan tata upacara.',
        schedule: 'Setiap Jumat, 15:00 - 17:00',
        // icon: "🇮🇩"
      },
      {
        id: 'eko-03',
        name: 'Klub Sains',
        category: 'Akademik & Ilmiah',
        description:
          'Mengembangkan minat dan bakat di bidang sains melalui eksperimen dan diskusi ilmiah.',
        schedule: 'Setiap Rabu, 15:00 - 16:30',
        // icon: "🔬"
      },
      {
        id: 'eko-04',
        name: 'Futsal',
        category: 'Olahraga',
        description:
          'Mengembangkan kemampuan fisik, kerjasama tim, dan sportivitas dalam olahraga futsal.',
        schedule: 'Setiap Selasa & Kamis, 15:30 - 17:00',
        // icon: "⚽"
      },
      {
        id: 'eko-05',
        name: 'Seni Kaligrafi Islam',
        category: 'Seni & Budaya',
        description:
          'Mempelajari dan mengembangkan seni menulis indah huruf Arab.',
        schedule: 'Setiap Senin, 15:00 - 16:30',
        // icon: "🖌️"
      },
      {
        id: 'eko-06',
        name: 'Marawis / Hadroh',
        category: 'Seni & Budaya',
        description:
          'Mempelajari seni musik Islam tradisional sebagai sarana syiar dan kreativitas.',
        schedule: 'Setiap Rabu, 15:00 - 17:00',
        // icon: "🥁"
      },
      // Tambahkan ekstrakurikuler lainnya
    ],
  },

  // TAMBAHKAN DATA UNTUK HALAMAN PPDB DI SINI
  ppdb: {
    title: 'Penerimaan Peserta Didik Baru Tahun Ajaran 2024/2025',
    introduction:
      'SMP PLUS AT-THAHIRIN membuka kesempatan bagi putra-putri terbaik untuk bergabung dan menjadi bagian dari keluarga besar kami. Kami berkomitmen memberikan pendidikan berkualitas untuk mencetak generasi unggul.',
    isOpen: true, // true jika pendaftaran sedang dibuka, false jika ditutup
    schedule: [
      { event: 'Pembukaan Pendaftaran', date: '1 Agustus - 30 September 2024' },
      { event: 'Tes Seleksi (Akademik & Wawancara)', date: '5 Oktober 2024' },
      { event: 'Pengumuman Hasil Seleksi', date: '12 Oktober 2024' },
      { event: 'Daftar Ulang', date: '14 - 18 Oktober 2024' },
      { event: 'Mulai Tahun Ajaran Baru', date: 'Juli 2025' },
    ],
    registrationFlow: [
      'Mengisi formulir pendaftaran online melalui link yang tersedia atau datang langsung ke sekolah.',
      'Melengkapi berkas persyaratan yang dibutuhkan.',
      'Mengikuti tes seleksi sesuai jadwal yang ditentukan.',
      'Melihat pengumuman hasil seleksi.',
      'Melakukan daftar ulang bagi yang dinyatakan lulus.',
    ],
    requirements: [
      'Fotokopi Akta Kelahiran (2 lembar).',
      'Fotokopi Kartu Keluarga (2 lembar).',
      'Fotokopi Ijazah SD/MI atau Surat Keterangan Lulus (SKL) legalisir (2 lembar).',
      'Pas foto berwarna ukuran 3x4 (4 lembar) dan 2x3 (2 lembar).',
      'Surat Keterangan Sehat dari dokter.',
      'Membayar biaya pendaftaran (jika ada).',
    ],
    contactInfo: {
      person: 'Panitia PPDB SMP PLUS AT-THAHIRIN',
      phone: '0812-xxxx-xxxx (Bapak Fulan) / 0857-xxxx-xxxx (Ibu Fulanah)',
      email: 'ppdb@smpattahirin.sch.id',
      registrationLink: 'https://forms.gle/contohlinkform', // Ganti dengan link formulir asli jika ada
      offlineLocation:
        'Sekretariat PPDB SMP PLUS AT-THAHIRIN, Jl. Sekolah No. 1, Kota Anda. Setiap hari kerja pukul 08:00 - 14:00.',
    },
    tuitionInfo:
      'Untuk informasi detail mengenai biaya pendidikan, silakan menghubungi panitia PPDB atau datang langsung ke sekolah.', // Bisa juga berupa tabel atau daftar
    faq: [
      {
        question: 'Apakah ada jalur prestasi?',
        answer:
          'Ya, kami menyediakan jalur prestasi bagi calon siswa yang memiliki pencapaian di bidang akademik maupun non-akademik. Silakan lampirkan sertifikat pendukung saat pendaftaran.',
      },
      {
        question: 'Kapan jam operasional pendaftaran offline?',
        answer:
          'Pendaftaran offline dilayani setiap hari kerja (Senin-Jumat) pukul 08:00 - 14:00 WIB di sekretariat sekolah.',
      },
    ],
  },

  gallery: {
    title: 'Galeri Kegiatan SMP PLUS AT-THAHIRIN',
    description:
      'Berikut adalah beberapa momen dan kegiatan yang telah kami laksanakan di sekolah. Ini adalah cerminan dari semangat belajar, kreativitas, dan kebersamaan keluarga besar SMP PLUS AT-THAHIRIN.',
    photos: [
      {
        id: 'p001',
        src: galleryImage1, // Gunakan variabel hasil import
        alt: 'Kegiatan Belajar Mengajar di Kelas',
        caption:
          'Suasana belajar yang interaktif dan menyenangkan di dalam kelas.',
      },
      {
        id: 'p002',
        src: galleryImage2,
        alt: 'Kegiatan Pramuka Mingguan',
        caption: 'Latihan baris-berbaris dan yel-yel dalam kegiatan Pramuka.',
      },
      {
        id: 'p003',
        src: galleryImage3,
        alt: 'Prestasi Siswa dalam Lomba Cerdas Cermat',
        caption:
          'Siswa SMP PLUS AT-THAHIRIN meraih juara dalam Lomba Cerdas Cermat tingkat kota.',
      },
      {
        id: 'p004',
        src: galleryImage4,
        alt: 'Fasilitas Laboratorium Komputer',
        caption:
          'Laboratorium komputer yang modern untuk mendukung pembelajaran berbasis IT.',
      },
      {
        id: 'p005',
        src: galleryImage5,
        alt: 'Perayaan Hari Besar Islam',
        caption:
          'Siswa-siswi antusias mengikuti kegiatan perayaan Maulid Nabi Muhammad SAW.',
      },
      // Tambahkan objek foto lainnya sesuai dengan gambar yang Anda siapkan
    ],
    // videos: [ // Untuk masa depan jika ingin menambahkan video
    //   { id: "v001", youtubeId: "dQw4w9WgXcQ", title: "Contoh Video Kegiatan" }
    // ]
  },

  // TAMBAHKAN DATA UNTUK HALAMAN KONTAK DI SINI
  contact: {
    title: 'Hubungi Kami',
    introduction:
      'Kami senang mendengar dari Anda! Silakan hubungi kami melalui informasi di bawah ini atau kunjungi kami langsung di sekolah.',
    address:
      'Jl. Pendidikan No. 123, Kelurahan Cerdas, Kecamatan Pintar, Kota Sukses, Provinsi Jaya 12345',
    phone: '(021) 123-4567',
    email: 'info@smpattahirin.sch.id',
    whatsapp: '0812-3456-7890 (Admin Sekolah)', // Opsional
    officeHours: 'Senin - Jumat : 07:30 - 15:00 WIB',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0152424012654!2d106.90266207329323!3d-6.6450282649564665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c818a73a258b%3A0x8ae5278a25b4cc22!2sSMP%20PLUS%20AT-THAHIRIN!5e0!3m2!1sid!2sid!4v1748456245204!5m2!1sid!2sid', // Ganti dengan URL embed Google Maps sekolah Anda
    // Jika tidak ada URL embed, bisa gunakan latitude dan longitude untuk library peta nantinya
    // latitude: -6.175392, // Contoh: Monas Latitude
    // longitude: 106.827153, // Contoh: Monas Longitude
  },
};
