import type { Localized } from './i18n';

const l = (id: string, en: string): Localized => ({ id, en });

export interface Question {
  id: string;
  question: Localized;
  answer: Localized;
}

/** What buyers ask before ordering. Policies here are a starting point; review before launch. */
export const faq: readonly Question[] = [
  {
    id: 'order',
    question: l('Bagaimana cara membeli?', 'How do I buy?'),
    answer: l(
      'Ciko dan Momo dijual eksklusif oleh PT Ezra Robotics Teknologi: tombol di halaman robotnya langsung menghubungi mereka untuk harga dan pemesanan. Produk lain dipesan langsung ke kami: masukkan ke keranjang, lalu kirim pesanan lewat WhatsApp atau email, dan kami balas dengan total, ongkos kirim, dan cara bayar.',
      'Ciko and Momo are sold exclusively by PT Ezra Robotics Teknologi: the button on each robot’s page contacts them for prices and orders. Everything else is ordered from us directly: add it to the cart, then send the order over WhatsApp or email, and we reply with the total, shipping, and how to pay.',
    ),
  },
  {
    id: 'seller',
    question: l('Kenapa Ciko dan Momo tidak ada harganya?', 'Why do Ciko and Momo show no price?'),
    answer: l(
      'Hak jual keduanya dipegang PT Ezra Robotics Teknologi sebagai penjual eksklusif, jadi harga, stok, dan pengiriman diatur langsung oleh mereka. Kami tetap menyiapkan jalur belajar dan simulatornya, gratis untuk semua.',
      'PT Ezra Robotics Teknologi holds the right to sell both as their exclusive seller, so prices, stock, and shipping come from them directly. We still make the learning paths and the simulator, free for everyone.',
    ),
  },
  {
    id: 'shipping',
    question: l('Bisa kirim ke luar Bali?', 'Do you ship outside Bali?'),
    answer: l(
      'Bisa, ke seluruh Indonesia. Ongkos kirim dan perkiraan waktunya kami hitung saat konfirmasi pesanan.',
      'Yes, anywhere in Indonesia. We work out the shipping cost and time when we confirm the order.',
    ),
  },
  {
    id: 'age',
    question: l('Usia di setiap robot itu wajib?', 'Is the age on each robot a rule?'),
    answer: l(
      'Itu saran. Ciko dirancang untuk mulai dari usia 7 tahun dan Momo dari 11. Anak yang lebih muda tetap bisa, dengan didampingi.',
      'It is a suggestion. Ciko is designed for ages 7 and up and Momo for 11 and up. Younger children can still join in with an adult.',
    ),
  },
  {
    id: 'learn',
    question: l('Apakah ada kelas?', 'Are there classes?'),
    answer: l(
      'Kami tidak membuka kelas. Setiap robot datang dengan jalur belajar online gratis: video, panduan langkah demi langkah, dan misi simulator yang bisa diikuti sendiri di rumah.',
      'We do not run classes. Every robot comes with a free online learning path: videos, step-by-step guides, and simulator missions you can follow at home.',
    ),
  },
  {
    id: 'simulator',
    question: l('Simulatornya berbayar?', 'Does the simulator cost anything?'),
    answer: l(
      'Gratis, berjalan di browser, tanpa daftar akun. Bisa dicoba sebelum membeli robot.',
      'It is free, runs in the browser, and needs no account. You can try it before you buy a robot.',
    ),
  },
  {
    id: 'solder',
    question: l('Perlu menyolder?', 'Do I need to solder?'),
    answer: l(
      'Tidak. Ciko datang sudah dirakit. Momo dirakit dari modul dengan konektor berkunci.',
      'No. Ciko arrives assembled. Momo is built from modules with keyed connectors.',
    ),
  },
  {
    id: 'battery',
    question: l('Baterainya aman untuk anak?', 'Is the battery safe for children?'),
    answer: l(
      'Baterai ada di dalam wadah tertutup dengan proteksi dan hanya diisi dengan charger yang disertakan. Sel baterai tidak pernah dipegang lepas.',
      'The battery sits in an enclosed, protected case and is only charged with the supplied charger. The cells are never handled loose.',
    ),
  },
  {
    id: 'broken',
    question: l('Kalau robot rusak saat tiba?', 'What if the robot arrives broken?'),
    answer: l(
      'Setiap robot diuji sebelum dikirim. Kalau ada yang tidak berfungsi saat tiba, hubungi kami dengan foto atau video, dan kami bantu perbaiki atau ganti.',
      'Every robot is tested before it ships. If something does not work when it arrives, send us a photo or video and we will help repair or replace it.',
    ),
  },
  {
    id: 'bulk',
    question: l(
      'Bisa beli banyak untuk sekolah atau kursus?',
      'Can I buy in bulk for a school or course?',
    ),
    answer: l(
      'Bisa. Pembelian banyak mendapat harga bertingkat dan bisa ditambah pelatihan untuk pengajar. Lihat halaman Bisnis.',
      'Yes. Bulk orders get tiered pricing and can include training for instructors. See the Business page.',
    ),
  },
];
