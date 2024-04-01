
const comments = (commentList) => {
  let counter = 0;
  commentList.forEach((comment, index) => {
    counter = index + 1;
  });
  return counter;
};

module.exports = comments;
