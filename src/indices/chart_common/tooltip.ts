export const tooltip = {
  animation: false, // 关闭动画效果（what）
  backgroundColor: '#fcfcfc', // 背景颜色
  borderColor: 'rgb(247, 147, 26)', // 边框颜色
  borderRadius: 3, // 边框圆角
  borderWidth: 1, // 边框宽度

  xDateFormat: '%Y-%m-%d', // 时间格式化

  split: false, // 两个数据的提示框合并
  shared: true,

  shadow: true, // 是否显示阴影
  style: { // 文字内容相关样式
    color: 'black',
    fontSize: '12px',
  },

  // crosshairs: [true, true],  // 同时启用竖直及水平准星线

  crosshairs: [{ // 设置准星线样式
    width: 1,
    color: 'rgb(204, 204, 204)',
  }, {
    width: 0,
    color: 'rgb(204, 204, 204)',
  }],

  formatter: function():string {
    const that = this as any;
    return that.points.reduce(function(s:any, point:any) {
      const normal = `${s}<br/>
      <div style='color: ${point.color};font-size:16px;'>•</div>
      ${ point.series.name }: ${ (point.y).toFixed(6) }`;

      const price = `${s}<br/>
      <div style='color: ${point.color};font-size:16px;'>•</div>
      ${ point.series.name }: ${ point.y.toFixed(6) }`;

      return point.series.name === '价格' ? price : normal;

    }, `<b>${ new Date(that.x).toLocaleDateString('zh-CN')}</b>`);
  },
};
