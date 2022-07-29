export const formatDate = (date) => {
  const formatedDate = new Intl.DateTimeFormat("pt-br").format(new Date(date));
  return formatedDate;
};