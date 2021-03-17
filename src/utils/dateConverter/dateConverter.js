const dateConverter = (fullDate) => {
  return `${
    fullDate.getDate() < 10 ? `0${fullDate.getDate()}` : fullDate.getDate()
  }.${
    fullDate.getMonth() + 1 < 10
      ? `0${fullDate.getMonth() + 1}`
      : fullDate.getMonth() + 1
  }.${fullDate.getFullYear()}`;
};

export default dateConverter;
