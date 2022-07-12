const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  if (Number.isInteger(c)) return c;
  else {
    let rounded = c.toFixed(1);
    rounded = parseFloat(rounded);
    return rounded;
  }
};

const ctof = function(c) {
  let f = c * (9/5) + 32;
  if (Number.isInteger(f)) return f;
  else {
    let rounded = f.toFixed(1);
    rounded = parseFloat(rounded);
    return rounded;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
