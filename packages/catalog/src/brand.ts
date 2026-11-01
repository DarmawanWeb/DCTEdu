import type { Localized } from './i18n';

const l = (id: string, en: string): Localized => ({ id, en });

/**
 * The brand. Every site and the simulator read the name from here, so renaming is a one-line
 * change plus `python3 packages/ui/scripts/wordmark.py <name>` for the logo.
 */
export const brand = {
  name: 'DCT Edu',
  /** The company behind the brand, for copyright, legal lines and search results. DCT stands for its name. */
  company: 'PT Dharma Cipta Teknologi',
  /** Other names people search for, for structured data. */
  alternateNames: ['Dharma Cipta Teknologi', 'DCT', 'DCTEdu'],
  tagline: l('Belajar robotika sejak dini.', 'Learn robotics from an early age.'),
  promise: l(
    'Robot edukasi untuk anak, remaja, dan tim lomba, lengkap dengan jalur belajar online gratis.',
    'Education robots for kids, teens, and competition teams, each with a free online learning path.',
  ),
  story: l(
    'DCT Edu adalah lini robot edukasi PT Dharma Cipta Teknologi, dirancang dan dirakit di Tangerang, Banten. Kami percaya robotika paling mudah dipelajari sejak dini: lewat robot sungguhan yang bisa dipegang, diprogram, dan dibawa ke lomba. Setiap robot punya nama, nomor, dan jalur belajarnya sendiri, dari buka kotak sampai kode Arduino C++. Kami melayani pembelian satuan, sekolah dan kursus, serta OEM dengan merek Anda.',
    'DCT Edu is the education robot line of PT Dharma Cipta Teknologi, designed and built in Tangerang, Banten, Indonesia. We believe robotics is easiest to learn early: with a real robot you can hold, program, and take to a competition. Every robot has a name, a number, and its own learning path, from opening the box to Arduino C++. We serve single buyers, schools and courses, and OEM partners under their own brand.',
  ),
  location: l('Tangerang, Indonesia', 'Tangerang, Indonesia'),
  locality: 'Tangerang',
  region: 'Banten',
  country: 'ID',
  contact: {
    person: 'Darmawan',
    email: 'darmawandeveloper@gmail.com',
  },
} as const;
