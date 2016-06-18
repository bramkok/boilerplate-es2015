module.exports = function (message) {
  const wait = setTimeout(() => {
    console.log(message);
  }, 1000);
  return wait;
};
