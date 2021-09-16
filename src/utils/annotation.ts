import { getChart } from '@/components/chart';
import { Point } from 'highcharts';
import store from '@/store';
import { IAnnotationConfig } from '@/indices/def';

interface IStoredcircle {
    circle:any;
    option:{
        x:number;
        y:number;
        r:number;
    };
    attrs:{};
}
class AnnotationManager {
  public circleStorage:IStoredcircle[];
  private ancfg:IAnnotationConfig;
  constructor(ancfg:IAnnotationConfig) {
    this.circleStorage = [];
    this.ancfg = ancfg;
  }
  private createCircleByPoint = (p:any, color:string) => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    const x = p.plotX + c.plotLeft;
    const y = p.plotY + c.plotTop;
    const r = 20;
    if (x <= r || y <= r || isNaN(x) || isNaN(y)) {
      return;
    }
    this.createCircle(x, y, r, color);
  };

  private createCircle = (x:number, y:number, r:number, color:string) => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    const option = {
      x,
      y,
      r,
    };
    const attrs = {
      fill: '#FFFFFF',
      stroke: color,
      'stroke-width': 2,
      zIndex: 0,
      'stroke-dasharray': 5,
    };
    const circle = c.renderer.circle(option.x, option.y, option.r)
      .attr(attrs).add();
    this.circleStorage.push({ circle, option, attrs });
    return circle;
  };
  private drawCircleByDate = (
    date:{
          year:number; month:number; day:number; hour?:number; minute?:number; second?:number;
      },
    data:Point[],
    color:'red' | 'green',
  ) => {
    // TODO 补充坑爹原因
    if (data.length === 0) {
      console.error('Data lenght must be greater than 0');
      return;
    }
    const point = this.getPointByDate(date, data);
    point && this.createCircleByPoint(point, color);
  };
  private getTimeStamp = (obj:{
    year:number; month:number; day:number; hour?:number; minute?:number; second?:number;
  }) => {
    const { year, month, day } = obj;
    const t = new Date(year, month - 1, day).getTime();
    return t;
  };

 private findFirstGreater = (values:number[], value:number, valueInterval:number) => {
   const index = values.findIndex((v) => v - value > valueInterval);
   return index;
 };
 private getPointByDate = (
   date:{
          year:number; month:number; day:number; hour?:number; minute?:number; second?:number;
      },
   data:Point[],
 ) => {
   const length = data.length;
   if (length === 0) {
     console.error('Data lenght must be greater than 0');
     return;
   }
   // TODO: 补充坑爹原因
   if (!data[length - 1] || !data[length - 2]) {
     return;
   }
   /**
       * 时间戳 时间区间的大小
       */
   const xInterval = data[length - 2].x - data[length - 1].x;

   const { year, month, day } = date;
   const xList = data.map((cell) => cell.x);
   const t = this.getTimeStamp({ year, month, day });
   /**
       * 寻找到第一个大于的值
       */
   const index = this.findFirstGreater(xList, t, xInterval);

   /**
       * TODO: 补充一点逻辑使得更严谨
       */
   const pIndex = index - 1 > 0 ? index : 0;
   return data[pIndex];
 };
 public drawAnnotationCircle = () => {
   // 让其渲染完成, 获取得到 getChart()
   setTimeout(() => {
     this.__drawAnnotationCircle();
   }, 200);
 }
 private __drawAnnotationCircle = () => {
   const c = getChart();
   if (!c) {
     console.error('Chart not init');
     return;
   }
   if (!this.ancfg.circle) {
     console.error('Not config circle anotation');
     return;
   }
   const indicePoints = this.ancfg.circle.IndicePoints;
   indicePoints.forEach((p) => {
     if (!this.ancfg.circle) {
       return;
     }
     // https://stackoverflow.com/questions/28207881/highcharts-get-series-data-zoom-indices

     /**
      * It's also worth noting that the dataGrouping feature modifies the data array,
      *  data begins empty but seems to insert points into the data array relative to their index
      * from the dataset when you zoom or pan(perhaps other actions).
      * Due to this behaviour your data array can have points stored
      * but not starting from an index of 0. The jsFiddle example iterates
      * through data from 0 to length-1 with jQuery each(),
      * which errors due to the initial index being greater than 0.
      */
     let data = c.series[0].data;
     // 当切换到均线的时候, 源数据会被置空, 这个时候取均线为data
     if (data.length === 0) {
       data = c.series[2].data;
     }
     this.drawCircleByDate(
       p.date,
       data,
       p.color,
     );
   });

   const pricePoints = this.ancfg.circle.pricePoints;
   pricePoints.forEach((p) => {
     if (!this.ancfg.circle) {
       return;
     }
     this.drawCircleByDate(
       p.date,
       c.series[1].points,
       p.color,
     );
   });
 };


  public clearAnnotationCircle = () => {
    this.circleStorage.forEach((e:IStoredcircle) => {
      e && e.circle.destroy();
    });
    this.circleStorage = [];
  };
  public setConfig(ancfg:IAnnotationConfig) {
    this.ancfg = ancfg;
  }
}

let annotationManager:AnnotationManager;
export const getAnnotationManager = function() {
  const cfg = store.getState().ui.currentMenu.subMenu.annotation;
  if (!cfg) {
    return;
  }
  if (!annotationManager) {
    annotationManager = new AnnotationManager(cfg);
    return annotationManager;
  }
  annotationManager.setConfig(cfg);
  return annotationManager;
};






