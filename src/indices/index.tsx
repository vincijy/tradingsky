import { HeartOutlined } from '@ant-design/icons';
import * as D from './def';
import { address } from './0_address';
import { exchange } from './1_exchange';
import { institution } from './2_institution';
import { marketPrice } from './3_market_price';
import { capitalEnv } from './4_capital_env';
import { evaluateIndice } from './5_evaluate_indice';
import { sentiment } from './6_sentiment';
import { investorBehavior } from './7_behavior';
import { miner } from './8_miner';

// 预处理, 添加公共配置等等
const preProcess = (menus:D.MenuItem[]) => {
  menus.forEach((menu:D.MenuItem) => {
    menu.subMenus.forEach((subMenu:D.SubMenuItem) => {
      Object.keys(subMenu.chart).forEach((k:string) => {
        const chartOption = subMenu.chart[k];
        if (k === 'btc') {
          return;
        }
        // TODO: check why:不加这一行如果, push后直接return为啥还会重复添加
        if (chartOption.series.find((item:any) => item.name === 'btc价格')) {
          return;
        }
        chartOption.series.push(
          {
            name: 'btc价格',
            data: [],
            color: 'rgb(247, 147, 26, 0.5)',
            yAxis: 1,
            visible: false,
          },
        );
      });
    });
  });
  return menus;
};

const menus__:D.MenuItem[] = [
  /**
   * 我的收藏
   */
  {
    name: '收藏',
    key: '我的收藏',
    subMenus: [],
    visible: true,
    assetList: ['btc', 'eth', 'usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro'],
    icon: <HeartOutlined />,
  },
  /**
   * 地址
   */
  address,

  /**
   * 交易所
   */
  exchange,

  /**
   * 机构
   */
  institution,

  /**
   * 市场与价格
   */
  marketPrice,

  /**
   * 资金环境
   */
  capitalEnv,

  /**
   * 估值指标
   */
  evaluateIndice,

  /**
   * 市场情绪
   */
  sentiment,

  /**
   * 投资者行为
   */
  investorBehavior,

  /**
   * 旷工
   */
  miner,
];

export const menus = preProcess(menus__);
