import type { Localized } from './i18n';

const l = (id: string, en: string): Localized => ({ id, en });

/** Companies we design and build for, shown on the business page with what we do for them. */
export interface Client {
  id: string;
  name: string;
  /** What the company is to us, in a few words. */
  role: Localized;
  /** What we make for them, in a sentence or two. */
  work: Localized;
}

export const clients: readonly Client[] = [
  {
    id: 'ezra',
    name: 'PT Ezra Robotics Teknologi',
    role: l('Penjual eksklusif Ciko dan Momo', 'Exclusive seller of Ciko and Momo'),
    work: l(
      'Kami merancang dan membuat Ciko dan Momo beserta jalur belajar dan simulatornya; Ezra Robotics memegang hak jual eksklusif keduanya.',
      'We design and build Ciko and Momo, with their learning paths and the simulator; Ezra Robotics holds the exclusive right to sell both.',
    ),
  },
];
