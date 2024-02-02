export const convertDateFormat = (dateString) => {
  // Array untuk nama bulan dalam bahasa Indonesia
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Pisahkan tanggal, bulan, dan tahun
  const [year, month, day] = dateString.split("-");

  // Ambil nama bulan dari array months sesuai indeks bulan
  const monthName = months[parseInt(month, 10) - 1];

  // Gabungkan tanggal dalam format yang diinginkan
  const formattedDate = `${day} ${monthName} ${year}`;

  return formattedDate;
};
