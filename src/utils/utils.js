export const parseDate = () => {
  return new Date().toISOString().split("T", 1)[0];
};