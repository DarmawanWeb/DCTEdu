import type { Localized } from './i18n';
import type { SimRobot } from './robots';

/** A robot's own missions, or the general algorithm practice that only needs a board. */
export type SimTrack = SimRobot | 'algo';
/** School level of an algorithm exercise: SD (primary) or SMP (junior high). */
export type SimLevel = 'sd' | 'smp';

/** Catalogue entry for a simulator mission. Arenas and scoring live in apps/simulator. */
export interface SimMissionInfo {
  id: string;
  track: SimTrack;
  title: Localized;
  brief: Localized;
  /** Algorithm practice only: which school level it is written for. */
  level?: SimLevel;
  /** A robot challenge after the learning path; not a step on the path. */
  group?: 'extra';
  /** The modules to plug in first, for projects that add a sensor. */
  parts?: Localized[];
}

const l = (id: string, en: string): Localized => ({ id, en });

/**
 * The general algorithm practice comes first (SD, then SMP). Then each robot: its path missions in
 * the order the learning path reaches them, then its extra challenges.
 */
export const simMissions: readonly SimMissionInfo[] = [
  {
    id: 'algo-halo',
    track: 'algo',
    level: 'sd',
    title: l('Halo, Serial Monitor', 'Hello, Serial Monitor'),
    brief: l(
      'Cetak dua baris: "Halo, dunia!", lalu namamu.',
      'Print two lines: "Hello, world!", then your name.',
    ),
  },
  {
    id: 'algo-ulang',
    track: 'algo',
    level: 'sd',
    title: l('Ulangi lima kali', 'Repeat five times'),
    brief: l(
      'Cetak "Aku bisa coding!" lima kali dengan blok ulangi, bukan lima blok cetak.',
      'Print "I can code!" five times with a repeat block, not five print blocks.',
    ),
  },
  {
    id: 'algo-hitung',
    track: 'algo',
    level: 'sd',
    title: l('Hitung 1 sampai 10', 'Count from 1 to 10'),
    brief: l(
      'Pakai blok hitung dengan i untuk mencetak 1 sampai 10, satu angka per baris.',
      'Use the count with i block to print 1 to 10, one number per line.',
    ),
  },
  {
    id: 'algo-mundur',
    track: 'algo',
    level: 'sd',
    title: l('Hitung mundur', 'Countdown'),
    brief: l('Cetak 10 turun sampai 1, lalu "Meluncur!".', 'Print 10 down to 1, then "Lift off!".'),
  },
  {
    id: 'algo-genap',
    track: 'algo',
    level: 'sd',
    title: l('Bilangan genap', 'Even numbers'),
    brief: l('Cetak bilangan genap dari 2 sampai 20.', 'Print the even numbers from 2 to 20.'),
  },
  {
    id: 'algo-besar',
    track: 'algo',
    level: 'sd',
    title: l('Hanya yang besar', 'Only the big ones'),
    brief: l(
      'Hitung 1 sampai 10, tapi cetak angka yang lebih dari 5 saja.',
      'Count from 1 to 10, but print only the numbers above 5.',
    ),
  },
  {
    id: 'algo-perkalian',
    track: 'algo',
    level: 'sd',
    title: l('Tabel perkalian 7', 'The 7 times table'),
    brief: l(
      'Cetak 7 x 1 = 7 sampai 7 x 10 = 70, satu baris per perkalian.',
      'Print 7 x 1 = 7 through 7 x 10 = 70, one line each.',
    ),
  },
  {
    id: 'algo-jumlah',
    track: 'algo',
    level: 'smp',
    title: l('Jumlah 1 sampai 100', 'Add up 1 to 100'),
    brief: l(
      'Jumlahkan 1 + 2 + … + 100 di sebuah variabel, lalu cetak hasilnya sekali.',
      'Add 1 + 2 + … + 100 in a variable, then print the result once.',
    ),
  },
  {
    id: 'algo-faktorial',
    track: 'algo',
    level: 'smp',
    title: l('Faktorial', 'Factorials'),
    brief: l(
      'Cetak 1! sampai 6!, satu baris per faktorial: 1! = 1, 2! = 2, 3! = 6, dan seterusnya.',
      'Print 1! to 6!, one line each: 1! = 1, 2! = 2, 3! = 6, and so on.',
    ),
  },
  {
    id: 'algo-celsius',
    track: 'algo',
    level: 'smp',
    title: l('Tabel suhu', 'Temperature table'),
    brief: l(
      'Ubah 0, 10, 20, sampai 100 °C ke Fahrenheit dengan F = C × 9 ÷ 5 + 32, lalu cetak tabelnya.',
      'Convert 0, 10, 20 up to 100 °C to Fahrenheit with F = C × 9 ÷ 5 + 32, then print the table.',
    ),
  },
  {
    id: 'algo-fizzbuzz',
    track: 'algo',
    level: 'smp',
    title: l('FizzBuzz', 'FizzBuzz'),
    brief: l(
      'Cetak 1 sampai 15. Kelipatan 3 jadi Fizz, kelipatan 5 jadi Buzz, kelipatan keduanya jadi FizzBuzz.',
      'Print 1 to 15. Multiples of 3 become Fizz, multiples of 5 Buzz, multiples of both FizzBuzz.',
    ),
  },
  {
    id: 'algo-fibonacci',
    track: 'algo',
    level: 'smp',
    title: l('Deret Fibonacci', 'Fibonacci sequence'),
    brief: l(
      'Cetak 10 angka pertama. Setiap angka adalah jumlah dua angka sebelumnya.',
      'Print the first 10 numbers. Each one is the sum of the two before it.',
    ),
  },
  {
    id: 'algo-fpb',
    track: 'algo',
    level: 'smp',
    title: l('FPB dengan algoritma Euclid', 'GCD with Euclid’s algorithm'),
    brief: l(
      'Cari FPB dari 84 dan 36. Selama b bukan 0, ganti a dan b dengan b dan sisa a ÷ b. Cetak setiap langkah, lalu hasilnya.',
      'Find the GCD of 84 and 36. While b is not 0, replace a and b with b and the remainder of a ÷ b. Print every step, then the result.',
    ),
  },
  {
    id: 'algo-prima',
    track: 'algo',
    level: 'smp',
    title: l('Bilangan prima', 'Prime numbers'),
    brief: l(
      'Cetak bilangan prima dari 2 sampai 30, yaitu bilangan yang hanya habis dibagi 1 dan dirinya sendiri.',
      'Print the primes from 2 to 30: numbers divisible only by 1 and themselves.',
    ),
  },
  {
    id: 'algo-segitiga',
    track: 'algo',
    level: 'smp',
    title: l('Segitiga bintang', 'Star triangle'),
    brief: l(
      'Cetak segitiga lima baris: *, **, ***, sampai *****. Pakai perulangan di dalam perulangan.',
      'Print a five-row triangle: *, **, *** up to *****. Use a loop inside a loop.',
    ),
  },
  {
    id: 'ciko-kenalan',
    track: 'ciko',
    title: l('Kenalan dengan robot', 'Meet the robot'),
    brief: l(
      'Tampilkan wajah senang, bunyikan bip, lalu maju sedikit.',
      'Show a happy face, beep, then move forward a little.',
    ),
  },
  {
    id: 'ciko-finish',
    track: 'ciko',
    title: l('Berhenti di garis finis', 'Stop at the finish'),
    brief: l(
      'Atur lama maju agar robot berhenti di zona finis.',
      'Tune how long to drive so the robot stops in the finish zone.',
    ),
  },
  {
    id: 'ciko-belok',
    track: 'ciko',
    title: l('Belok di tikungan', 'Turn at the corner'),
    brief: l(
      'Maju ke tikungan, belok kiri seperempat putaran, lalu berhenti di zona finis.',
      'Drive to the corner, turn left a quarter turn, then stop in the finish zone.',
    ),
  },
  {
    id: 'ciko-sein',
    track: 'ciko',
    title: l('Sein sebelum belok', 'Signal before you turn'),
    brief: l(
      'Nyalakan sein kiri, tunggu sebentar, belok di tikungan, lalu matikan sein dan berhenti di finis.',
      'Switch the left signal on, wait a moment, turn at the corner, then switch it off and stop at the finish.',
    ),
  },
  {
    id: 'ciko-kotak',
    track: 'ciko',
    title: l('Kotak dan kembali', 'Square and return'),
    brief: l(
      'Lewati keempat sudut lalu kembali ke awal. Coba pakai ulangi.',
      'Pass all four corners and come back. Try a repeat block.',
    ),
  },
  {
    id: 'ciko-rintangan',
    track: 'ciko',
    title: l('Berhenti sebelum rintangan', 'Stop before the obstacle'),
    brief: l(
      'Maju sampai sensor jarak melihat kotak, lalu berhenti dengan wajah waspada.',
      'Drive until the distance sensor sees the box, then stop with an alert face.',
    ),
  },
  {
    id: 'ciko-hindar',
    track: 'ciko',
    title: l('Putar balik di lorong buntu', 'Turn around in a dead end'),
    brief: l(
      'Robot masuk lorong yang buntu. Pakai jika-tidak: saat dinding dekat, mundur dan putar balik, lalu keluar.',
      'The robot drives into a dead end. Use if-else: when the wall is close, back up and turn around, then drive out.',
    ),
  },
  {
    id: 'ciko-garis',
    track: 'ciko',
    title: l('Ikuti garis', 'Follow the line'),
    brief: l(
      'Pakai sensor garis kiri dan kanan untuk menyelesaikan lintasan.',
      'Use the left and right line sensors to finish the track.',
    ),
  },
  {
    id: 'ciko-persimpangan',
    track: 'ciko',
    title: l('Berhenti di garis lebar', 'Stop at the wide line'),
    brief: l(
      'Ikuti garis sampai bertemu garis lebar yang melintang, lalu berhenti tepat di situ.',
      'Follow the line until it meets a wide line across the track, then stop right there.',
    ),
  },
  {
    id: 'ciko-misi-akhir',
    track: 'ciko',
    title: l('Misi akhir: robot pintar', 'Final mission: smart robot'),
    brief: l(
      'Ikuti garis, berhenti saat ada halangan, tampilkan ekspresi, dan bunyikan bip.',
      'Follow the line, stop at the obstacle, show an expression, and beep.',
    ),
  },
  {
    id: 'ciko-arena',
    track: 'ciko',
    title: l('Tantangan arena', 'Arena challenge'),
    brief: l(
      'Lintasan angka delapan dengan persimpangan, kantong sempit, dan chicane: satu putaran dalam 70 detik. Sama dengan banner arena Ciko.',
      'A figure-eight track with a crossing, a tight pocket, and a chicane: one lap in 70 seconds. The same as Ciko’s arena banner.',
    ),
  },
  {
    id: 'ciko-sapa',
    track: 'ciko',
    group: 'extra',
    title: l('Robot penyambut', 'Greeter robot'),
    brief: l(
      'Saat tangan mendekat, Ciko tersenyum dan berbunyi bip. Saat tangannya pergi, wajahnya kembali biasa.',
      'When a hand comes close, Ciko smiles and beeps. When it leaves, the face goes back to normal.',
    ),
  },
  {
    id: 'ciko-parkir',
    track: 'ciko',
    group: 'extra',
    title: l('Parkir mundur', 'Reverse parking'),
    brief: l(
      'Lewati tempat parkir, belok, lalu mundur masuk di antara dua kotak dengan lampu hazard menyala.',
      'Drive past the space, turn, then back in between two boxes with the hazard lights on.',
    ),
  },
  {
    id: 'ciko-patroli',
    track: 'ciko',
    group: 'extra',
    title: l('Patroli lorong', 'Corridor patrol'),
    brief: l(
      'Jalan sampai dekat dinding, bip, lalu putar balik. Ulangi tiga kali tanpa menabrak.',
      'Drive up to the wall, beep, then turn around. Do it three times without touching the wall.',
    ),
  },
  {
    id: 'ciko-ambulans',
    track: 'ciko',
    group: 'extra',
    title: l('Mode ambulans', 'Ambulance mode'),
    brief: l(
      'Nyalakan lampu hazard, bunyikan bip tiga kali, lalu antar pasien sampai zona rumah sakit.',
      'Switch the hazard lights on, beep three times, then drive the patient to the hospital zone.',
    ),
  },
  {
    id: 'ciko-tarian',
    track: 'ciko',
    group: 'extra',
    title: l('Ciko menari', 'Ciko dances'),
    brief: l(
      'Putar penuh ke kiri, putar penuh ke kanan, ganti dua ekspresi wajah, lalu tutup dengan bip.',
      'Spin a full turn left and a full turn right, show two different faces, then finish with a beep.',
    ),
  },
  {
    id: 'ciko-labirin',
    track: 'ciko',
    group: 'extra',
    title: l('Keluar dari labirin', 'Escape the maze'),
    brief: l(
      'Cukup satu aturan: jika dinding dekat, belok kiri; jika tidak, maju. Ulangi sampai Ciko keluar.',
      'One rule is enough: if a wall is close, turn left; otherwise drive on. Repeat until Ciko is out.',
    ),
  },
  {
    id: 'momo-sistem',
    track: 'momo',
    title: l('Satu sensor, satu aksi', 'One sensor, one action'),
    brief: l(
      'Input, proses, output dalam satu program. Baca jarak tangan, tulis di OLED, lalu bunyikan nada saat tangan sudah dekat.',
      'Input, process, output in one program. Read how far the hand is, write it on the OLED, and play a tone once the hand is close.',
    ),
  },
  {
    id: 'momo-pwm',
    track: 'momo',
    title: l('Kendali gerak PWM', 'PWM motion control'),
    brief: l(
      'Atur kecepatan motor kiri-kanan dan waktu agar berhenti di zona 1 meter.',
      'Set left and right motor speeds and timing to stop in the 1-metre zone.',
    ),
  },
  {
    id: 'momo-garis',
    track: 'momo',
    title: l('Ikuti garis 5 sensor', '5-sensor line following'),
    brief: l(
      'Selesaikan satu putaran lintasan dengan koreksi berdasarkan posisi garis.',
      'Complete a lap using corrections from the line position.',
    ),
  },
  {
    id: 'momo-arena',
    track: 'momo',
    title: l('Tantangan arena', 'Arena challenge'),
    brief: l(
      'Hairpin, dua zigzag, tangga, sudut tajam, dan persimpangan: satu putaran dalam 32 detik. Sama dengan banner arena Momo.',
      'A hairpin, two zigzags, steps, sharp corners, and a crossing: one lap in 32 seconds. The same as Momo’s arena banner.',
    ),
  },
  {
    id: 'momo-radar',
    track: 'momo',
    title: l('Radar jarak', 'Distance radar'),
    brief: l(
      'Putar servo, bandingkan jarak kiri dan kanan, lalu pilih jalan yang terbuka.',
      'Sweep the servo, compare left and right distances, and take the open path.',
    ),
  },
  {
    id: 'momo-lingkungan',
    track: 'momo',
    title: l('Stasiun lingkungan', 'Environment station'),
    brief: l(
      'Tampilkan suhu dan kelembapan di OLED dan ikuti perubahannya.',
      'Show temperature and humidity on the OLED and keep it updated.',
    ),
  },
  {
    id: 'momo-suara',
    track: 'momo',
    title: l('Robot tepuk tangan', 'Clap-controlled robot'),
    brief: l(
      'Tepuk sekali robot jalan, tepuk lagi robot berhenti.',
      'Clap once to go, clap again to stop.',
    ),
  },
  {
    id: 'momo-telemetri',
    track: 'momo',
    title: l('Dasbor dan mode luring', 'Dashboard and offline mode'),
    brief: l(
      'Kirim suhu ke dasbor lokal lewat Wi-Fi. Di tengah misi Wi-Fi putus: robot tetap menampilkan suhu di OLED dan menulis LURING sampai Wi-Fi kembali.',
      'Send the temperature to a local dashboard over Wi-Fi. Halfway through, the Wi-Fi drops: the robot keeps showing the temperature on its OLED and writes OFFLINE until the Wi-Fi is back.',
    ),
  },
  {
    id: 'momo-bebas',
    track: 'momo',
    title: l('Proyek bebas', 'Free project'),
    brief: l(
      'Arena terbuka dengan garis dan rintangan untuk proyek akhir.',
      'An open arena with lines and obstacles for your final project.',
    ),
  },
  {
    id: 'momo-alarm',
    track: 'momo',
    group: 'extra',
    title: l('Alarm suhu', 'Temperature alarm'),
    brief: l(
      'Pasang sensor AHT10, lalu bikin alarm suhu: NORMAL selama suhu wajar, PANAS dan bunyi nada begitu lewat 30 °C.',
      'Fit the AHT10 sensor, then build a temperature alarm: NORMAL while it is fine, HOT and a tone once it passes 30 °C.',
    ),
    parts: [
      l('Sensor suhu AHT10', 'AHT10 temperature sensor'),
      l('OLED', 'OLED'),
      l('Buzzer', 'Buzzer'),
    ],
  },
  {
    id: 'momo-tepuk',
    track: 'momo',
    group: 'extra',
    title: l('Penghitung tepukan', 'Clap counter'),
    brief: l(
      'Pasang mikrofon, lalu bikin penghitung tepukan: hitung tiga tepukan di variabel, tampilkan di OLED, lalu bunyikan nada.',
      'Fit the microphone, then build a clap counter: count three claps in a variable, show them on the OLED, then play a tone.',
    ),
    parts: [l('Mikrofon', 'Microphone'), l('OLED', 'OLED'), l('Buzzer', 'Buzzer')],
  },
  {
    id: 'momo-ikuti',
    track: 'momo',
    group: 'extra',
    title: l('Ikuti tangan', 'Follow the hand'),
    brief: l(
      'Pasang HC-SR04 menghadap depan, lalu bikin Momo yang mengikuti tangan dengan jarak tetap tanpa menyentuhnya.',
      'Fit the HC-SR04 facing forward, then build a Momo that follows a hand at a steady distance without touching it.',
    ),
    parts: [l('Ultrasonik HC-SR04', 'HC-SR04 ultrasonic')],
  },
  {
    id: 'momo-rata',
    track: 'momo',
    group: 'extra',
    title: l('Pencatat suhu', 'Temperature logger'),
    brief: l(
      'Pasang sensor AHT10, lalu bikin pencatat suhu: baca lima kali sekali per detik, cetak setiap bacaan ke Serial Monitor, lalu rata-ratanya.',
      'Fit the AHT10 sensor, then build a temperature logger: read it five times, once a second, print each reading to the Serial Monitor, then the average.',
    ),
    parts: [l('Sensor suhu AHT10', 'AHT10 temperature sensor')],
  },
  {
    id: 'momo-parkir',
    track: 'momo',
    group: 'extra',
    title: l('Sensor parkir', 'Parking sensor'),
    brief: l(
      'Pasang HC-SR04 dan buzzer, lalu bikin sensor parkir: makin dekat ke dinding bip makin cepat, dan Momo berhenti 5 sampai 15 cm sebelum dinding.',
      'Fit the HC-SR04 and the buzzer, then build a parking sensor: the closer the wall, the faster the beeps, and Momo stops 5 to 15 cm before it.',
    ),
    parts: [l('Ultrasonik HC-SR04', 'HC-SR04 ultrasonic'), l('Buzzer', 'Buzzer')],
  },
  {
    id: 'momo-lampu',
    track: 'momo',
    group: 'extra',
    title: l('Lampu malam otomatis', 'Automatic night light'),
    brief: l(
      'Pasang sensor cahaya dari Sensor Pack, lalu bikin lampu malam: saat ruangan gelap tulis LAMPU NYALA di OLED, saat terang LAMPU MATI.',
      'Fit the light sensor from the Sensor Pack, then build a night light: when the room is dark write LIGHT ON on the OLED, when it is bright LIGHT OFF.',
    ),
    parts: [l('Sensor cahaya (Sensor Pack)', 'Light sensor (Sensor Pack)'), l('OLED', 'OLED')],
  },
];

export function getSimMission(id: string): SimMissionInfo | undefined {
  return simMissions.find((mission) => mission.id === id);
}
