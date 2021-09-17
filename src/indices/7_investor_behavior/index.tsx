import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';

export const investorBehavior:D.MenuItem = {
  name: '投资者行为',
  icon: <ThunderboltOutlined />,
  key: 'sub8',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    {
      name: '储备风险',
      key: '储备风险',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        index: 'behavior/reserve_risk',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc'],
      catalogText: '用于量化长期持有者市场信心的指标',
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
                month: 6,
                day: 10,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 4,
                day: 10,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 12,
                day: 4,
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
                month: 11,
                day: 19,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 17,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 8,
                day: 25,
              },
            },
            {
              color: 'green',
              date: {
                year: 2019,
                month: 2,
                day: 7,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 3,
                day: 16,
              },
            },
            {
              color: 'green',
              date: {
                year: 2021,
                month: 7,
                day: 21,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'red',
              date: {
                year: 2011,
                month: 6,
                day: 10,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 4,
                day: 10,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 12,
                day: 4,
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
                month: 11,
                day: 19,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 1,
                day: 17,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 8,
                day: 25,
              },
            },
            {
              color: 'green',
              date: {
                year: 2019,
                month: 2,
                day: 7,
              },
            },
            {
              color: 'green',
              date: {
                year: 2020,
                month: 3,
                day: 16,
              },
            },
            {
              color: 'green',
              date: {
                year: 2021,
                month: 7,
                day: 21,
              },
            },
          ],
        },
      },
    },
    {
      name: '长期持有者行为',
      key: '长期持有者行为',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        index: 'behavior/long_behavior',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc'],
      catalogText: '量化长期持有者的宏观支出模式和行为变化',
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
      name: '长期持有者抛售趋势',
      key: '长期持有者抛售趋势',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        index: 'behavior/long_sell',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc'],
      catalogText: '量化长期持有者抛压大小的指标',
      toolbox: {
        annotation: {
          enabled: true, // 有标注
        },
        sma: {
          enabled: true,
        },
      },
    },
    {
      name: '出售时的年龄分布占比',
      key: '出售时的年龄分布占比',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        index: 'behavior/realized_age',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc'],
      catalogText: '不同年龄的投资者抛售占比',
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
      name: '持有年龄分布',
      key: '持有年龄分布',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        index: 'behavior/hodl_age',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc', 'eth'],
      catalogText: '不同年龄的投资者持有占比',
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
