export const convertDurationToMinutes = (minutes) => {
  if (typeof minutes !== "number" || isNaN(minutes)) {
    return "Invalid input";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedTime = `${hours}j${remainingMinutes}m`;

  return formattedTime;
};
