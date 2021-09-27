
import { getAnnotationManager } from '@/utils/annotation';
import store from '@/store/index';
export const xAxis = {
  labels: {
    formatter: function():string {
      // JS时间戳
      const value = (this as any).value;

      // TODO: 使用统一的时间格式化工具函数, 避免一些容易搞错的问题
      const date = new Date(value);

      if ((this as any).tickPositionInfo.unitName === 'year') {
        return `${date.getFullYear()}年`;
      }

      return `${date.getMonth() + 1}月 ${date.getDate()}日`;
    },
  },
  events: {
    setExtremes: function(event:any) {
      if (store.getState().chart.annotationVisible) {
        const ano = getAnnotationManager();
        if (!ano) {
          return;
        }
        ano.clearAnnotationCircle();
        ano.drawAnnotationCircle();
      }
    },
  },
};
