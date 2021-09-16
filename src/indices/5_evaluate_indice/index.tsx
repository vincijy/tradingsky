
import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';

export const evaluateIndice:D.MenuItem = {
  name: '估值指标',
  icon: <LineChartOutlined />,
  key: 'sub6',
  visible: true,
  subMenus: [
    {
      name: 'Stock-to-Flow 模型',
      key: 'Stock-to-Flow 模型',
      loginRequired: true, // 免费指标
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'value/stock_flow',
      },
      introduce: {
        text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
      },
      assetList: 'BTC',
      catalogText: '从稀缺性角度预测比特币未来估值的模型',
      toolbox: {
        annotation: {
          enabled: false, // 无标注
        },
        sma: {
          enabled: true,
        },
      },
    },
    {
      name: 'Stock-to-Flow 模型偏差量',
      key: 'Stock-to-Flow 模型偏差量',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'value/stockflow_deflection',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '比特币价格相对于S/F模型的偏差量',
      toolbox: {
        annotation: {
          enabled: false, // 无标注
        },
        sma: {
          enabled: true,
        },
      },
    },
    {
      name: 'CVDD底部指标',
      key: 'CVDD底部指标',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'value/cvdd',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '量化比特币底部区域的精准指标',
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
              color: 'green',
              date: {
                year: 2011,
                month: 10,
                day: 20,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 15,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 16,
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
          ],
          IndicePoints: [
            {
              color: 'green',
              date: {
                year: 2011,
                month: 10,
                day: 20,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 15,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 16,
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
          ],
        },
      },
    },
    {
      name: '市场健康程度',
      key: '市场健康程度',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'value/market_health',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '衡量市场健康程度的指标',
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
              color: 'green',
              date: {
                year: 2010,
                month: 10,
                day: 3,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 11,
                day: 18,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 15,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 16,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 3,
                day: 17,
              },
            },
            {
              color: 'green',
              date: {
                year: 2021,
                month: 7,
                day: 20,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'green',
              date: {
                year: 2010,
                month: 10,
                day: 3,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 11,
                day: 18,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 15,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 16,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 3,
                day: 17,
              },
            },
            {
              color: 'green',
              date: {
                year: 2021,
                month: 7,
                day: 20,
              },
            },
          ],
        },
      },
    },
    {
      name: '公允价值偏差量',
      key: '公允价值偏差量',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'value/fairvalue_deflection',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '相对于已实现市值评估市值是否被高估/低估',
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
                year: 2010,
                month: 11,
                day: 8,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 6,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 4,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 11,
                day: 30,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 15,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 12,
                day: 8,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 15,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 3,
                day: 13,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 2,
                day: 21,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 10,
                day: 20,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'red',
              date: {
                year: 2010,
                month: 11,
                day: 8,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 6,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 4,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 11,
                day: 30,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 15,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 12,
                day: 8,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 15,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 3,
                day: 13,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 2,
                day: 21,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 10,
                day: 20,
              },
            },
          ],
        },
      },
    },
  ],
};
