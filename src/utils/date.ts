export function dateFormat():string {
  // TODO
  return '';
}


export const getTimeStamp = (obj:{
  year:number; month:number; day:number; hour?:number; minute?:number; second?:number;
}) => {
  const { year, month, day } = obj;
  const t = new Date(year, month - 1, day).getTime();
  return t;
};



export const findFirstGreater = (values:number[], value:number, valueInterval:number) => {
  const index = values.findIndex((v) => v - value > valueInterval);
  return index;
};
