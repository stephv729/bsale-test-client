export const debounce = (callback, timePeriod) => {
  let timeout;

  return (argument) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(argument), timePeriod || 500);
  };
};
