import type { Localized } from './i18n';
import type { SimRobot } from './robots';

/** Catalogue entry for a simulator mission. Arenas and scoring live in apps/sim. */
export interface SimMissionInfo {
  id: string;
  robot: SimRobot;
  title: Localized;
  brief: Localized;
  /**
   * Missions off the learning path: extra robot challenges, or algorithm practice that only uses
   * the Serial Monitor. Left out for a step on the path.
   */
  group?: SimMissionGroup;
}

export type SimMissionGroup = 'extra' | 'algo';

const l = (id: string, en: string): Localized => ({ id, en });

/**
 * Path missions in the order each robot's learning path reaches them, then that robot's extra
 * challenges, then (for Momo) the algorithm practice.
 */
export const simMissions: readonly SimMissionInfo[] = [
  {
    id: 'ciko-kenalan',
    robot: 'ciko',
    title: l('Kenalan dengan robot', 'Meet the robot'),
    brief: l(
      'Tampilkan wajah senang, bunyikan bip, lalu maju sedikit.',
      'Show a happy face, beep, then move forward a little.',
    ),
  },
  {
    id: 'ciko-finish',
    robot: 'ciko',
    title: l('Berhenti di garis finis', 'Stop at the finish'),
    brief: l(
      'Atur lama maju agar robot berhenti di zona finis.',
      'Tune how long to drive so the robot stops in the finish zone.',
    ),
  },
  {
    id: 'ciko-belok',
    robot: 'ciko',
    title: l('Belok di tikungan', 'Turn at the corner'),
    brief: l(
      'Maju ke tikungan, belok kiri seperempat putaran, lalu berhenti di zona finis.',
      'Drive to the corner, turn left a quarter turn, then stop in the finish zone.',
    ),
  },
  {
    id: 'ciko-sein',
    robot: 'ciko',
    title: l('Sein sebelum belok', 'Signal before you turn'),
    brief: l(
      'Nyalakan sein kiri, tunggu sebentar, belok di tikungan, lalu matikan sein dan berhenti di finis.',
      'Switch the left signal on, wait a moment, turn at the corner, then switch it off and stop at the finish.',
    ),
  },
  {
    id: 'ciko-kotak',
    robot: 'ciko',
    title: l('Kotak dan kembali', 'Square and return'),
    brief: l(
      'Lewati keempat sudut lalu kembali ke awal. Coba pakai ulangi.',
      'Pass all four corners and come back. Try a repeat block.',
    ),
  },
  {
    id: 'ciko-rintangan',
    robot: 'ciko',
    title: l('Berhenti sebelum rintangan', 'Stop before the obstacle'),
    brief: l(
      'Maju sampai sensor jarak melihat kotak, lalu berhenti dengan wajah waspada.',
      'Drive until the distance sensor sees the box, then stop with an alert face.',
    ),
  },
  {
    id: 'ciko-hindar',
    robot: 'ciko',
    title: l('Putar balik di lorong buntu', 'Turn around in a dead end'),
    brief: l(
      'Robot masuk lorong yang buntu. Pakai jika-tidak: saat dinding dekat, mundur dan putar balik, lalu keluar.',
      'The robot drives into a dead end. Use if-else: when the wall is close, back up and turn around, then drive out.',
    ),
  },
  {
    id: 'ciko-garis',
    robot: 'ciko',
    title: l('Ikuti garis', 'Follow the line'),
    brief: l(
      'Pakai sensor garis kiri dan kanan untuk menyelesaikan lintasan.',
      'Use the left and right line sensors to finish the track.',
    ),
  },
  {
    id: 'ciko-persimpangan',
    robot: 'ciko',
    title: l('Berhenti di garis lebar', 'Stop at the wide line'),
    brief: l(
      'Ikuti garis sampai bertemu garis lebar yang melintang, lalu berhenti tepat di situ.',
      'Follow the line until it meets a wide line across the track, then stop right there.',
    ),
  },
  {
    id: 'ciko-misi-akhir',
    robot: 'ciko',
    title: l('Misi akhir: robot pintar', 'Final mission: smart robot'),
    brief: l(
      'Ikuti garis, berhenti saat ada halangan, tampilkan ekspresi, dan bunyikan bip.',
      'Follow the line, stop at the obstacle, show an expression, and beep.',
    ),
  },
  {
    id: 'ciko-arena',
    robot: 'ciko',
    title: l('Tantangan arena', 'Arena challenge'),
    brief: l(
      'Lintasan angka delapan dengan persimpangan, kantong sempit, dan chicane: satu putaran dalam 70 detik. Sama dengan banner arena Ciko.',
      'A figure-eight track with a crossing, a tight pocket, and a chicane: one lap in 70 seconds. The same as Ciko’s arena banner.',
    ),
  },
  {
    id: 'ciko-sapa',
    robot: 'ciko',
    group: 'extra',
    title: l('Robot penyambut', 'Greeter robot'),
    brief: l(
      'Saat tangan mendekat, Ciko tersenyum dan berbunyi bip. Saat tangannya pergi, wajahnya kembali biasa.',
      'When a hand comes close, Ciko smiles and beeps. When it leaves, the face goes back to normal.',
    ),
  },
  {
    id: 'ciko-parkir',
    robot: 'ciko',
    group: 'extra',
    title: l('Parkir mundur', 'Reverse parking'),
    brief: l(
      'Lewati tempat parkir, belok, lalu mundur masuk di antara dua kotak dengan lampu hazard menyala.',
      'Drive past the space, turn, then back in between two boxes with the hazard lights on.',
    ),
  },
  {
    id: 'ciko-patroli',
    robot: 'ciko',
    group: 'extra',
    title: l('Patroli lorong', 'Corridor patrol'),
    brief: l(
      'Jalan sampai dekat dinding, bip, lalu putar balik. Ulangi tiga kali tanpa menabrak.',
      'Drive up to the wall, beep, then turn around. Do it three times without touching the wall.',
    ),
  },
  {
    id: 'momo-sistem',
    robot: 'momo',
    title: l('Satu sensor, satu aksi', 'One sensor, one action'),
    brief: l(
      'Input, proses, output dalam satu program. Baca jarak tangan, tulis di OLED, lalu bunyikan nada saat tangan sudah dekat.',
      'Input, process, output in one program. Read how far the hand is, write it on the OLED, and play a tone once the hand is close.',
    ),
  },
  {
    id: 'momo-pwm',
    robot: 'momo',
    title: l('Kendali gerak PWM', 'PWM motion control'),
    brief: l(
      'Atur kecepatan motor kiri-kanan dan waktu agar berhenti di zona 1 meter.',
      'Set left and right motor speeds and timing to stop in the 1-metre zone.',
    ),
  },
  {
    id: 'momo-garis',
    robot: 'momo',
    title: l('Ikuti garis 5 sensor', '5-sensor line following'),
    brief: l(
      'Selesaikan satu putaran lintasan dengan koreksi berdasarkan posisi garis.',
      'Complete a lap using corrections from the line position.',
    ),
  },
  {
    id: 'momo-arena',
    robot: 'momo',
    title: l('Tantangan arena', 'Arena challenge'),
    brief: l(
      'Hairpin, dua zigzag, tangga, sudut tajam, dan persimpangan: satu putaran dalam 32 detik. Sama dengan banner arena Momo.',
      'A hairpin, two zigzags, steps, sharp corners, and a crossing: one lap in 32 seconds. The same as Momo’s arena banner.',
    ),
  },
  {
    id: 'momo-radar',
    robot: 'momo',
    title: l('Radar jarak', 'Distance radar'),
    brief: l(
      'Putar servo, bandingkan jarak kiri dan kanan, lalu pilih jalan yang terbuka.',
      'Sweep the servo, compare left and right distances, and take the open path.',
    ),
  },
  {
    id: 'momo-lingkungan',
    robot: 'momo',
    title: l('Stasiun lingkungan', 'Environment station'),
    brief: l(
      'Tampilkan suhu dan kelembapan di OLED dan ikuti perubahannya.',
      'Show temperature and humidity on the OLED and keep it updated.',
    ),
  },
  {
    id: 'momo-suara',
    robot: 'momo',
    title: l('Robot tepuk tangan', 'Clap-controlled robot'),
    brief: l(
      'Tepuk sekali robot jalan, tepuk lagi robot berhenti.',
      'Clap once to go, clap again to stop.',
    ),
  },
  {
    id: 'momo-telemetri',
    robot: 'momo',
    title: l('Dasbor dan mode luring', 'Dashboard and offline mode'),
    brief: l(
      'Kirim suhu ke dasbor lokal lewat Wi-Fi. Di tengah misi Wi-Fi putus: robot tetap menampilkan suhu di OLED dan menulis LURING sampai Wi-Fi kembali.',
      'Send the temperature to a local dashboard over Wi-Fi. Halfway through, the Wi-Fi drops: the robot keeps showing the temperature on its OLED and writes OFFLINE until the Wi-Fi is back.',
    ),
  },
  {
    id: 'momo-bebas',
    robot: 'momo',
    title: l('Proyek bebas', 'Free project'),
    brief: l(
      'Arena terbuka dengan garis dan rintangan untuk proyek akhir.',
      'An open arena with lines and obstacles for your final project.',
    ),
  },
  {
    id: 'momo-alarm',
    robot: 'momo',
    group: 'extra',
    title: l('Alarm suhu', 'Temperature alarm'),
    brief: l(
      'Tulis NORMAL selama suhu wajar. Begitu lewat 30 °C, tulis PANAS dan bunyikan nada.',
      'Write NORMAL while the temperature is fine. Once it passes 30 °C, write HOT and play a tone.',
    ),
  },
  {
    id: 'momo-tepuk',
    robot: 'momo',
    group: 'extra',
    title: l('Penghitung tepukan', 'Clap counter'),
    brief: l(
      'Hitung tiga tepukan dengan variabel dan tampilkan di OLED. Setelah tepukan ketiga, bunyikan nada.',
      'Count three claps with a variable and show the count on the OLED. After the third clap, play a tone.',
    ),
  },
  {
    id: 'momo-ikuti',
    robot: 'momo',
    group: 'extra',
    title: l('Ikuti tangan', 'Follow the hand'),
    brief: l(
      'Tangan bergerak maju lalu berhenti. Momo mengikutinya dengan jarak tetap, tanpa menyentuh.',
      'The hand moves ahead, then stops. Momo follows at a steady distance without touching it.',
    ),
  },
  {
    id: 'algo-halo',
    robot: 'momo',
    group: 'algo',
    title: l('Halo, Serial Monitor', 'Hello, Serial Monitor'),
    brief: l(
      'Cetak dua baris: "Halo, dunia!", lalu namamu.',
      'Print two lines: "Hello, world!", then your name.',
    ),
  },
  {
    id: 'algo-hitung',
    robot: 'momo',
    group: 'algo',
    title: l('Hitung 1 sampai 10', 'Count from 1 to 10'),
    brief: l(
      'Pakai blok hitung dengan i untuk mencetak 1 sampai 10, satu angka per baris.',
      'Use the count with i block to print 1 to 10, one number per line.',
    ),
  },
  {
    id: 'algo-mundur',
    robot: 'momo',
    group: 'algo',
    title: l('Hitung mundur', 'Countdown'),
    brief: l('Cetak 10 turun sampai 1, lalu "Meluncur!".', 'Print 10 down to 1, then "Lift off!".'),
  },
  {
    id: 'algo-genap',
    robot: 'momo',
    group: 'algo',
    title: l('Bilangan genap', 'Even numbers'),
    brief: l('Cetak bilangan genap dari 2 sampai 20.', 'Print the even numbers from 2 to 20.'),
  },
  {
    id: 'algo-jumlah',
    robot: 'momo',
    group: 'algo',
    title: l('Jumlah 1 sampai 100', 'Add up 1 to 100'),
    brief: l(
      'Jumlahkan 1 + 2 + … + 100 di sebuah variabel, lalu cetak hasilnya sekali.',
      'Add 1 + 2 + … + 100 in a variable, then print the result once.',
    ),
  },
  {
    id: 'algo-perkalian',
    robot: 'momo',
    group: 'algo',
    title: l('Tabel perkalian 7', 'The 7 times table'),
    brief: l(
      'Cetak 7 x 1 = 7 sampai 7 x 10 = 70, satu baris per perkalian.',
      'Print 7 x 1 = 7 through 7 x 10 = 70, one line each.',
    ),
  },
  {
    id: 'algo-fizzbuzz',
    robot: 'momo',
    group: 'algo',
    title: l('FizzBuzz', 'FizzBuzz'),
    brief: l(
      'Cetak 1 sampai 15. Kelipatan 3 jadi Fizz, kelipatan 5 jadi Buzz, kelipatan keduanya jadi FizzBuzz.',
      'Print 1 to 15. Multiples of 3 become Fizz, multiples of 5 Buzz, multiples of both FizzBuzz.',
    ),
  },
  {
    id: 'algo-fibonacci',
    robot: 'momo',
    group: 'algo',
    title: l('Deret Fibonacci', 'Fibonacci sequence'),
    brief: l(
      'Cetak 10 angka pertama. Setiap angka adalah jumlah dua angka sebelumnya.',
      'Print the first 10 numbers. Each one is the sum of the two before it.',
    ),
  },
  {
    id: 'algo-prima',
    robot: 'momo',
    group: 'algo',
    title: l('Bilangan prima', 'Prime numbers'),
    brief: l(
      'Cetak bilangan prima dari 2 sampai 30, yaitu bilangan yang hanya habis dibagi 1 dan dirinya sendiri.',
      'Print the primes from 2 to 30: numbers divisible only by 1 and themselves.',
    ),
  },
  {
    id: 'algo-rata',
    robot: 'momo',
    group: 'algo',
    title: l('Rata-rata suhu', 'Average temperature'),
    brief: l(
      'Baca suhu lima kali, sekali per detik. Cetak setiap bacaan, lalu rata-ratanya.',
      'Read the temperature five times, once a second. Print each reading, then the average.',
    ),
  },
];

export function getSimMission(id: string): SimMissionInfo | undefined {
  return simMissions.find((mission) => mission.id === id);
}
