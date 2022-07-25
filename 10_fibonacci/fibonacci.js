const fibonacci = function(num) {
  if (num < 1) return "OOPS";
  let array = [];
  for (let i = 0; i <= num; i++) {
    if (i <= 1) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
