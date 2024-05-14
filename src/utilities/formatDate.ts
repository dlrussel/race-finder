function formatDate(date: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObject = new Date(date);
  const month = months[dateObject.getMonth()];
  const day = dateObject.getUTCDate();
  const year = dateObject.getFullYear();

  return `${month} ${day}, ${year}`;
}

export default formatDate;
