export const getOptionValue = (key:string, options:{ key:string, value:string }[]) => {
  const op = options.find((op) => op.key === key);
  if (op) {
    return op.value;
  }
  return '';
};