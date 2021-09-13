import { getChart } from '@/components/chart';
import { Point } from 'highcharts';
import store from '@/store';
import { IAnnotationConfig } from '@/config/def';

class AnnotationManager {
  private circleStorage:any[];
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
    const circle = this.createCircle(x, y, r, color);
    this.circleStorage.push(circle);
  };

  private createCircle = (x:number, y:number, r:number, color:string) => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    const circle = c.renderer.circle(x, y, r)
      .attr({
        fill: '#FFFFFF',
        stroke: color,
        'stroke-width': 2,
        zIndex: 0,
        'stroke-dasharray': 5,
      })
      .add();
    return circle;
  };
  private drawCircleByDate = (
    date:{
          year:number; month:number; day:number; hour?:number; minute?:number; second?:number;
      },
    data:Point[],
    color:'red' | 'green',
  ) => {
    if (data.length < 2) {
      console.error('Data lenght must be greater than 2');
      return;
    }
    const point = this.getPointByDate(date, data);
    this.createCircleByPoint(point, color);
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
   if (data.length < 2) {
     console.error('Data lenght must be greater than 2');
     return;
   }
   /**
       * 时间戳 时间区间的大小
       */
   const xInterval = data[1].x - data[0].x;

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
     this.drawCircleByDate(
       p.date,
       c.series[0].data,
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
       c.series[1].data,
       p.color,
     );
   });
 };


  public clearAnnotationCircle = () => {
    this.circleStorage.forEach((e:any) => {
      e && e.destroy();
    });
    this.circleStorage = [];
  };
}

let annotationManager:AnnotationManager;
export const getAnnotationManager = function() {
  if (!annotationManager) {
    const cfg = store.getState().ui.currentMenu.subMenu.annotation;
    if (!cfg) {
      return;
    }
    annotationManager = new AnnotationManager(cfg);
  }
  return annotationManager;
};






