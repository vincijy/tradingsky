export const strToFixNum = (numStr:string, n:number, isPercent = false) => {
  const v = parseFloat(numStr);
  let result;
  if (isPercent) {
    result = (v * 100).toFixed(3);
  } else {
    result = v.toFixed(n);
  }
  return isNaN(v) ? '-' : result;
};

