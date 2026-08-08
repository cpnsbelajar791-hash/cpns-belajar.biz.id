/**
 * Satu sumber untuk FAQ: dipakai komponen FAQSection sekaligus schema FAQPage.
 * Pertanyaan sengaja ditulis persis seperti yang diketik orang di Google
 * ("berapa passing grade skd", "apa itu skd cpns") agar cocok dengan
 * hasil pencarian dan blok "Orang lain juga bertanya".
 *
 * PENTING: Google mensyaratkan teks di schema identik dengan yang terlihat
 * di halaman — karena itu keduanya dibangun dari array yang sama.
 */

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
{
  question: 'Apa itu SKD CPNS dan apa saja materi yang diujikan?',
  answer:
  'SKD (Seleksi Kompetensi Dasar) adalah tahap tes CPNS berbasis komputer (CAT BKN) yang menguji tiga materi: Tes Wawasan Kebangsaan (TWK), Tes Intelegensia Umum (TIU), dan Tes Karakteristik Pribadi (TKP). Ketiganya wajib lulus ambang batas masing-masing sebelum kamu bisa lanjut ke tahap SKB.'
},
{
  question: 'Berapa jumlah soal dan waktu pengerjaan SKD CPNS?',
  answer:
  'SKD terdiri dari 110 soal yang dikerjakan dalam 100 menit, dengan rincian 30 soal TWK, 35 soal TIU, dan 45 soal TKP. Artinya kamu hanya punya sekitar 54 detik per soal, jadi kecepatan sama pentingnya dengan ketepatan. Simulasi di CPNS Mastery memakai format dan alokasi waktu yang sama supaya kamu terbiasa sejak sekarang.'
},
{
  question: 'Berapa passing grade atau nilai ambang batas SKD CPNS?',
  answer:
  'Mengacu pada Keputusan Menteri PANRB Nomor 321 Tahun 2024, nilai ambang batas SKD adalah TWK minimal 65, TIU minimal 80, dan TKP minimal 166. Ketiganya harus terpenuhi sekaligus — nilai tinggi di satu materi tidak bisa menutup kekurangan di materi lain. Ambang batas resmi dapat berubah tiap periode, jadi selalu cek pengumuman terbaru dari instansi dan Kementerian PANRB.'
},
{
  question: 'Apakah setiap soal dilengkapi pembahasan?',
  answer:
  'Ya. Setiap soal punya pembahasan yang menjelaskan alasan sebuah jawaban benar dan mengapa pilihan lain keliru. Khusus TKP, kamu juga bisa melihat urutan bobot nilai tiap opsi dari 5 sampai 1, sehingga paham pola jawaban bernilai tertinggi, bukan sekadar menghafal kunci.'
},
{
  question: 'Apakah bisa latihan soal CPNS lewat HP?',
  answer:
  'Bisa. CPNS Mastery berjalan langsung di browser HP, tablet, maupun laptop tanpa perlu install aplikasi. Progres latihanmu tersimpan otomatis, jadi bisa lanjut mengerjakan kapan saja — di sela istirahat kerja atau saat menunggu di perjalanan.'
},
{
  question: 'Saya baru pertama kali ikut tes CPNS, apakah cocok untuk pemula?',
  answer:
  'Sangat cocok. Materi disusun berurutan dari dasar ke tingkat lanjut, sehingga kamu tidak perlu bingung harus mulai dari mana. Kamu juga dibekali strategi pengerjaan seperti mengatur waktu per materi dan menentukan soal mana yang sebaiknya dilewati lebih dulu.'
},
{
  question: 'Apa bedanya dengan kumpulan soal CPNS PDF yang beredar gratis?',
  answer:
  'File PDF hanya memberi soal dan kunci jawaban, tanpa tekanan waktu dan tanpa skor. Di CPNS Mastery kamu mengerjakan dalam antarmuka mirip CAT BKN lengkap dengan timer, lalu langsung melihat skor per materi dan posisinya terhadap ambang batas. Dari situ ketahuan materi mana yang masih perlu diperkuat sebelum hari-H.'
}];
