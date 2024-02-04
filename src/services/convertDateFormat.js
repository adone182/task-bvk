export const convertDateFormat = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const [year, month, day] = dateString.split("-");
  const monthName = months[parseInt(month, 10) - 1];
  const formattedDate = `${monthName} ${day}, ${year}`;
  return formattedDate;
};
