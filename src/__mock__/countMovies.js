
const movies = (arr) => {
  let length = 0;
  arr.forEach((element, i) => {
    length = i + 1;
  });
  return length;
};

// export default movies;
module.exports = movies;
