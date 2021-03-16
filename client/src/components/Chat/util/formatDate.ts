export const standarDate = () => {
  const dateObj = new Date();
  return dateObj.getUTCDate() + "/" + dateObj.getUTCMonth() + 1;
};
