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

export const unixToHuman = (unix:string) => {
  const a = new Date(Number(unix) * 1000);
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = year + '年' + month + '' + date + '日';
  if(hour){
    const time = year + '年' + month + '' + date + '日' + hour + ':00';
    return time;
  }
  if(min){
    const time = year + '年' + month + '' + date + '日' + hour + ':' + min + '';
    return time;
  }
  return time;
};