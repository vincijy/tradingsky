import { menus } from '@/indices';
import { getUrlParams, findMenuByIndex } from '@/utils/url';
import { mergeOption } from '@/utils/merge_option';
import { chartBtc as initialPrivateOption } from '@/indices/6_sentiment/sopr/chart_btc';
import { commonOptions } from '@/indices/chart_common';
import store from '@/store';

/**
 * 如果能从URL中读取到指标的话初始状态就设置成改指标对应菜单, 否则使用默认的sopf作为菜单
 * 需要菜单与图表配置需要对应得上
 * @returns
 */
export function getAppInitState() {
  const { index } = getUrlParams();
  const { menu, subMenu } = findMenuByIndex(menus, index);
  let chartOptions;
  if (subMenu) {
    chartOptions = subMenu.chart.btc;
  }
  const dataAssetStr = localStorage.getItem('dataAsset') as 'btc'|'eth'| undefined;

  const appInitState = {
    chartOptions: mergeOption(commonOptions, chartOptions || initialPrivateOption),
    menu: menu || menus[7],
    subMenu: subMenu || menus[7].subMenus[0],
    dataAsset: dataAssetStr ? dataAssetStr : 'btc',
  };

  return appInitState;
};
