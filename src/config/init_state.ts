import { menus } from '@indices';
import { getUrlParams, findMenuByIndex } from '@utils/url';
import { mergeOption } from '@utils/merge_option';
import { chart as initialPrivateOption } from '@indices/5_evaluate_indice/ahr999/chart';
import { commonOptions } from '@indices/chart_common';

/**
 * 如果能从URL中读取到指标的话初始状态就设置成改指标对应菜单, 否则使用默认的sopf作为菜单
 * 需要菜单与图表配置需要对应得上
 * @returns
 */
export function getAppInitState() {
  const { index, asset } = getUrlParams();
  const { menu, subMenu } = findMenuByIndex(menus, index);
  // const dataAssetStr = asset || localStorage.getItem('dataAsset');
  const dataAssetStr = 'btc';

  let chartOptions;
  if (subMenu) {
    if (dataAssetStr) {
      chartOptions = subMenu.chart[dataAssetStr];
    } else {
      chartOptions = subMenu.chart['btc'];
    }
  }


  const getUserInfoFromStorage = () => {
    // 从缓存里面取出用户数据
    if (typeof window !== 'undefined') {
      const userInfoString = localStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        return userInfo;
      }
    }
    return [];
  };

  const appInitState = {
    chartOptions: mergeOption(commonOptions, chartOptions || initialPrivateOption),
    menu: menu || menus[1],
    subMenu: subMenu || menus[1].subMenus[0],
    dataAsset: dataAssetStr ? dataAssetStr : 'btc',
    userInfo: getUserInfoFromStorage(),
    // isLogin: getUserInfoFromStorage().token !== undefined,
    isLogin: true
  };

  return appInitState;
};
