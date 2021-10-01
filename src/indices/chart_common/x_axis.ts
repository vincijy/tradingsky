
import { getAnnotationManager } from '@/utils/annotation';
import store from '@/store/index';
export const xAxis = {
  labels: {
    formatter: function():string {
      // JS时间戳
      const value = (this as any).value;

      // TODO: 使用统一的时间格式化工具函数, 避免一些容易搞错的问题
      const date = new Date(value);

      // TODO: 搞清楚这几个值的含义
      const extremes = (this as any).chart.axes[0].getExtremes() as { min:number, max:number, userMin:number, userMax:number, dataMax:number, dataMin:number };
      if ((extremes.dataMax) === (extremes.max)) {
        return `${date.getFullYear()}年`;
      }

      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
  },
  events: {
    setExtremes: function(event:any) {
      if (store.getState().chart.annotationVisible) {
        const ano = getAnnotationManager();
        ano && ano.rePaint();
      }
    },
  },
};
