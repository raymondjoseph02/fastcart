export const formatDate = (timeString: string) => {
  const date = new Date(timeString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleString("en-US", options);
};
