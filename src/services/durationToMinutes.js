export const convertDurationToMinutes = (durationString) => {
  const [hours, minutes] = durationString.split(" ");

  const hoursNumeric = parseInt(hours);
  const minutesNumeric = parseInt(minutes);

  const totalMinutes = hoursNumeric * 60 + minutesNumeric;

  return totalMinutes;
};
