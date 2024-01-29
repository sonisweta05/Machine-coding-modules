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
  export const getCurrentDate = (separator = " ") => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    return `${month}${separator}${date}${separator}${year}`;
  };