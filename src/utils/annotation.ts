import { getChart } from '@/components/chart';
import { Point } from 'highcharts';

interface Idate {
    year:number; month:number; day:number; hour?:number; minute?:number; second?:number;
}
interface IAnnotationConfig {
    /**
     * 画圈标注
     */
    circle?:{
        /**
         * 上方的颜色
         */
        colorOfHigher:'green' | 'red';

        /**
         * 下方的颜色
         */
        colorOfLower:'green' | 'red';

        /**
         * 价格线
         */
        priceLine:{
            dates:Idate[];
        };
        /**
         * 指标线
         */
        indiceLine:{
            dates:Idate[];
        };
    };

    /**
     * 画区域标注
     */
    area?:{
      // TODO
    };

    /**
     * 画线性标注
     */
    line?:{
      // TODO
    };
}

const ancfg:IAnnotationConfig = {
  circle: {
    colorOfHigher: 'red',
    colorOfLower: 'green',
    priceLine: {
      dates: [
        {
          year: 2021,
          month: 8,
          day: 21,
        },
        {
          year: 2021,
          month: 8,
          day: 26,
        },
        {
          year: 2021,
          month: 7,
          day: 19,
        },
      ],
    },
    indiceLine: {
      dates: [
        {
          year: 2021,
          month: 8,
          day: 21,
        },
        {
          year: 2021,
          month: 8,
          day: 26,
        },
        {
          year: 2021,
          month: 7,
          day: 19,
        },
      ],
    },
  },
};


let circleStorage:any[] = [];

const createCircle = (x:number, y:number, r:number, color:string) => {
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

const createCircleByPoint = (p:any, color:string) => {
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
  const circle = createCircle(x, y, r, color);
  circleStorage.push(circle);
};

const getTimeStamp = (obj:{
    year:number; month:number; day:number; hour?:number; minute?:number; second?:number;
  }) => {
  const { year, month, day } = obj;
  const t = new Date(year, month - 1, day).getTime();
  return t;
};

const drawCircleByDate = (
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

  const point = getPointByDate(date, data);
  createCircleByPoint(point, color);
};

const getPointByDate = (
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
  const t = getTimeStamp({ year, month, day });
  /**
     * 寻找到第一个大于的值
     */
  const index = findFirstGreater(xList, t, xInterval);

  /**
     * TODO: 补充一点逻辑使得更严谨
     */
  const pIndex = index - 1 > 0 ? index : 0;
  return data[pIndex];
};

const findFirstGreater = (values:number[], value:number, valueInterval:number) => {
  const index = values.findIndex((v) => v - value > valueInterval);
  return index;
};

export const drawAnnotationCircle = () => {
  const c = getChart();
  if (!c) {
    console.error('Chart not init');
    return;
  }
  if (!ancfg.circle) {
    console.error('Not config circle anotation');
    return;
  }
  const priceLineDates = ancfg.circle.priceLine.dates;
  const indiceLineDates = ancfg.circle.indiceLine.dates;

  priceLineDates.forEach((date) => {
    if (!ancfg.circle) {
      return;
    }
    const pricePoint = getPointByDate(date, c.series[0].data) as any;
    const indicePoint = getPointByDate(date, c.series[1].data) as any;
    if (!indicePoint || !pricePoint) {
      return;
    }
    const color = pricePoint.plotY > indicePoint.plotY ? ancfg.circle.colorOfHigher : ancfg.circle.colorOfLower;
    drawCircleByDate(
      date,
      c.series[0].data,
      color,
    );
  });

  indiceLineDates.forEach((date) => {
    if (!ancfg.circle) {
      return;
    }
    const pricePoint = getPointByDate(date, c.series[0].data) as any;
    const indicePoint = getPointByDate(date, c.series[1].data) as any;
    if (!indicePoint || !pricePoint) {
      return;
    }
    const color = pricePoint.plotY < indicePoint.plotY ? ancfg.circle.colorOfHigher : ancfg.circle.colorOfLower;
    drawCircleByDate(
      date,
      c.series[1].data,
      color,
    );
  });
};


export const clearAnnotationCircle = () => {
  circleStorage.forEach((e:any) => {
    e && e.destroy();
  });
  circleStorage = [];
};
