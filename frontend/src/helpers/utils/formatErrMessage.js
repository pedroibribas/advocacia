export const formatErrMessage = (message) => {
  const formatedMessage = message.toString().split(': ')[1];
  return formatedMessage;
};