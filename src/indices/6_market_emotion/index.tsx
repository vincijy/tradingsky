
import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';

export const marketEmotion:D.MenuItem = {
  name: '市场情绪',
  icon: <AlertOutlined />,
  key: 'sub7',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    {
      name: 'spent outputs 利润率（SOPR）',
      key: 'spent outputs 利润率（SOPR）',
      loginRequired: true, // 免费指标
      vipRequired: false,
      visible: true,
      args: {
        index: 'sentiment/sopr',
      },
      introduce: {
        text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
      },
      assetList: ['btc', 'eth'],
      catalogText: '衡量投资者行为的短期抄底指标',
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
      name: '市场贪婪度',
      key: '市场贪婪度',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        index: 'sentiment/market_greed',
      },
      introduce: {
        text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc', 'eth'],
      catalogText: '衡量市场情绪及贪婪度的精准顶部指标',
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
                day: 7,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 2,
                day: 10,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 5,
                day: 13,
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
                year: 2017,
                month: 12,
                day: 8,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 11,
                day: 19,
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
              color: 'red',
              date: {
                year: 2021,
                month: 2,
                day: 22,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'red',
              date: {
                year: 2010,
                month: 11,
                day: 7,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 2,
                day: 10,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 5,
                day: 13,
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
                year: 2017,
                month: 12,
                day: 8,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 11,
                day: 19,
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
              color: 'red',
              date: {
                year: 2021,
                month: 2,
                day: 22,
              },
            },
          ],
        },
      },
    },
  ],
};
