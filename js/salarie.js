function sumSalaries(obj) {
  var resultSum = 0;
  for (const key in obj) {
    resultSum+=obj[key]
  };
  return resultSum;
};
