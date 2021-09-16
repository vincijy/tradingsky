
import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
export const miner:D.MenuItem = {
  name: '矿工',
  icon: <PieChartOutlined />,
  key: 'sub9',
  visible: true,
  subMenus: [
    {
      name: '哈希带',
      key: '哈希带',
      loginRequired: true, // 免费指标
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'miner/hash_ribbon',
      },
      introduce: {
        text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
      },
      assetList: 'BTC',
      catalogText: '基于哈希率量化挖矿难度与价格的关系',
      toolbox: {
        annotation: {
          enabled: false, // 无标注
        },
        sma: {
          enabled: true,
        },
      },
      annotation: {
        circle: {
          pricePoints: [
            {
              color: 'red',
              date: {
                year: 2011,
                month: 12,
                day: 28,
              },
            },
            {
              color: 'red',
              date: {
                year: 2012,
                month: 3,
                day: 6,
              },
            },
            {
              color: 'red',
              date: {
                year: 2012,
                month: 7,
                day: 21,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 1,
                day: 31,
              },
            },
            {
              color: 'red',
              date: {
                year: 2014,
                month: 12,
                day: 31,
              },
            },
            {
              color: 'red',
              date: {
                year: 2015,
                month: 3,
                day: 2,
              },
            },
            {
              color: 'red',
              date: {
                year: 2016,
                month: 8,
                day: 22,
              },
            },
            {
              color: 'red',
              date: {
                year: 2019,
                month: 1,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2019,
                month: 11,
                day: 22,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 4,
                day: 24,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 6,
                day: 23,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 12,
                day: 2,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 4,
                day: 25,
              },
            },
            {
              color: 'red',
              date: {
                year: 2015,
                month: 3,
                day: 2,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 8,
                day: 8,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'red',
              date: {
                year: 2011,
                month: 12,
                day: 28,
              },
            },
            {
              color: 'red',
              date: {
                year: 2012,
                month: 3,
                day: 6,
              },
            },
            {
              color: 'red',
              date: {
                year: 2012,
                month: 7,
                day: 21,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 1,
                day: 31,
              },
            },
            {
              color: 'red',
              date: {
                year: 2014,
                month: 12,
                day: 31,
              },
            },
            {
              color: 'red',
              date: {
                year: 2015,
                month: 3,
                day: 2,
              },
            },
            {
              color: 'red',
              date: {
                year: 2016,
                month: 8,
                day: 22,
              },
            },
            {
              color: 'red',
              date: {
                year: 2019,
                month: 1,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2019,
                month: 11,
                day: 22,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 4,
                day: 24,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 6,
                day: 23,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 12,
                day: 2,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 4,
                day: 25,
              },
            },
            {
              color: 'red',
              date: {
                year: 2015,
                month: 3,
                day: 2,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 8,
                day: 8,
              },
            },
          ],
        },
      },
    },
    {
      name: '难度彩虹带',
      key: '难度彩虹带',
      loginRequired: true,
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'miner/difficulty_ribbon',
      },
      introduce: {
        text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
      },
      assetList: 'BTC',
      catalogText: '基于7种不同的挖矿难度平均线量化比特币底部的指标',
      toolbox: {
        annotation: {
          enabled: true, // 有标注
        },
        sma: {
          enabled: true,
        },
      },
      annotation: {
        circle: {
          pricePoints: [
            {
              color: 'red',
              date: {
                year: 2011,
                month: 12,
                day: 19,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 1,
                day: 4,
              },
            },
            {
              color: 'red',
              date: {
                year: 2015,
                month: 6,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2016,
                month: 8,
                day: 15,
              },
            },
            {
              color: 'red',
              date: {
                year: 2019,
                month: 1,
                day: 1,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 4,
                day: 7,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 6,
                day: 15,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 11,
                day: 29,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 8,
                day: 3,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'red',
              date: {
                year: 2011,
                month: 12,
                day: 19,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 1,
                day: 4,
              },
            },
            {
              color: 'red',
              date: {
                year: 2015,
                month: 6,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2016,
                month: 8,
                day: 15,
              },
            },
            {
              color: 'red',
              date: {
                year: 2019,
                month: 1,
                day: 1,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 4,
                day: 7,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 6,
                day: 15,
              },
            },
            {
              color: 'red',
              date: {
                year: 2020,
                month: 11,
                day: 29,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 8,
                day: 3,
              },
            },
          ],
        },
      },
    },
    {
      name: '普埃尔倍数',
      key: '普埃尔倍数',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'miner/puell',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '基于挖矿利润衡量比特币市场周期',
      toolbox: {
        annotation: {
          enabled: true, // 有标注
        },
        sma: {
          enabled: true,
        },
      },
      annotation: {
        circle: {
          pricePoints: [
            {
              color: 'red',
              date: {
                year: 2013,
                month: 4,
                day: 11,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 12,
                day: 1,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 12,
                day: 19,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 12,
                day: 18,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 10,
                day: 25,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 11,
                day: 25,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 21,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 13,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 3,
                day: 20,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 5,
                day: 20,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'red',
              date: {
                year: 2013,
                month: 4,
                day: 11,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 12,
                day: 1,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 12,
                day: 19,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 12,
                day: 18,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 10,
                day: 25,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 11,
                day: 25,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 21,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 13,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 3,
                day: 20,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 5,
                day: 20,
              },
            },
          ],
        },
      },
    },
    {
      name: '矿工交易费用收入占比',
      key: '矿工交易费用收入占比',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'miner/transaction_fee',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '矿工从交易费用获取的收入所占百分比',
      toolbox: {
        annotation: {
          enabled: false, // 无标注
        },
        sma: {
          enabled: true,
        },
      },
    },
  ],
};
