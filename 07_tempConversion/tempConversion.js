const ftoc = function(t) {
  temp = (t - 32.0) * (5.0/9.0);
  return Math.round(temp * 10) / 10;
};

const ctof = function(t) {
  temp = (t * (9.0/5.0)) + 32.0;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
