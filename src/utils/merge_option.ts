function replaceByPrivate(newOption:any, privateOption:any) {
  // 背景图片替换, TODO, 写一个更加通用的
  if (privateOption.chart && privateOption.chart.plotBackgroundImage) {
    newOption.chart.plotBackgroundImage = privateOption.chart.plotBackgroundImage;
  }
  if (privateOption.chart && privateOption.chart.tooltip) {
    newOption.tooltip.formatter = privateOption.chart.tooltip.formatter;
    newOption.tooltip.positioner = privateOption.chart.tooltip.positioner;
  }
  if (privateOption.chart && privateOption.chart.plotBackgroundImage) {
    newOption.chart.plotBackgroundImage = privateOption.chart.plotBackgroundImage;
  }
}

export function mergeOption(commonOption:any, privateOption:any) {
  // TODO: 重构配置合并垃圾代码
  // 合并
  const newOption = { ...commonOption, ...privateOption };

  // 私有的替换
  replaceByPrivate(newOption, privateOption);
  return newOption;
};
