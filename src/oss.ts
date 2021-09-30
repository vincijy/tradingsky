// 临时的图片OSS方案, TODO: 改用webpack处理
import { OSS_HOST } from '@/config';

import homeMain from '@/assets/img/home_main.png';
import homePirate from '@/assets/img/home_pirate.png';
import homeCatalog from '@/assets/img/home_catalog.jpeg';
import insightOne from '@/assets/img/insight_one.jpeg';
import insightTwo from '@/assets/img/insight_two.jpeg';
import insightThree from '@/assets/img/insight_three.jpeg';
import chart_0 from '@/assets/img/chart_0.jpg';
import catalog_chart from '@/assets/img/catalog_chart.jpg';

// export const ossImgs = {
//   homeMain: `${OSS_HOST}/home_main.png`,
//   homePirate: `${OSS_HOST}/home_pirate.png`,
//   homeCatalog: `${OSS_HOST}/home_catalog.jpeg`,

//   insightOne: `${OSS_HOST}/insight_one.jpeg`,
//   insightTwo: `${OSS_HOST}/insight_two.jpeg`,
//   insightThree: `${OSS_HOST}/insight_three.jpeg`,
// };

export const ossImgs = {
  homeMain,
  homePirate,
  homeCatalog,

  insightOne,
  insightTwo,
  insightThree,
  chart_0,
  catalog_chart,
};
