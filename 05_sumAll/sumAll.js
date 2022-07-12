const sumAll = function(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    return "ERROR";
  }
  if (a > b) {
    min = b;
    max = a;
  } else {
    min = a;
    max = b;
  }

  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  let total = 0;
  for (num of array) {
    total+= num;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
