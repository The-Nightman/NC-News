export const parseDate = (date) => {
  return date.split("T", 1)[0];
};

export const newDate = () => {
  return new Date().toISOString().split("T", 1)[0];
};