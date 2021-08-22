export const options = {
  credits: {
    enable: true,
    text: 'lianshucha.com',
    href: 'https:lianshucha.com', // TODO
  },
  yAxis: [
    {
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
      className: 'highcharts-navigator-yaxis',
      labels: {
        // 橙色
        style: { color: 'rgb(247, 147, 26)' },
      },
    },
    {
      // 右侧轴线
      title: {
        text: '',
      },
      opposite: true,
      align: 'left',
    },
  ],
  xAxis: {
    labels: {
      formatter: function():string {
        // JS时间戳
        const value = (this as any).value;

        // TODO: 使用统一的时间格式化工具函数, 避免一些容易搞错的问题
        const date = new Date(value);
        return `${date.getMonth() + 1}月 ${date.getDate()}日`;
      },
    },
  },
  series: [
    {
      name: '活跃地址量',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)', // 线条颜色
      yAxis: 0,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)', // 线条颜色
      yAxis: 1,
    },
  ],
};
