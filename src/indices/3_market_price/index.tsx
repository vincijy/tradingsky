import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';

export const marketPrice:D.MenuItem = {
  name: '市场与价格',
  icon: <FlagOutlined />,
  key: 'sub4',
  visible: true,
  subMenus: [
    {
      name: '距最高点的回撤幅度',
      key: '距最高点的回撤幅度',
      loginRequired: true, // 免费指标
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'market/price_drawdown',
      },
      introduce: {
        text: '流通中的盈利率：该指标统计了处于流通状态的比特币盈利数量的百分比，是一个判断顶部的指标。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673427649724507',
      },
      assetList: 'BTC,ETH',
      catalogText: '资产价格距历史最高点的下跌幅度（单位：%）',
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
      name: '已实现净损益',
      key: '已实现净损益',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'market/realized_pl',
      },
      introduce: {
        text: '该指标通过计算卖出价格/买入价格，可以很好的判断市场底部，衡量投资者情绪，判断市场方向。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673543412514917',
      },
      assetList: 'BTC',
      catalogText: '链上移动硬币的净损益',
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
      name: '流通盈利率',
      key: '流通盈利率',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'market/profit_percent',
      },
      introduce: {
        text: '该指标通过计算卖出价格/买入价格，可以很好的判断市场底部，衡量投资者情绪，判断市场方向。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673543412514917',
      },
      assetList: 'BTC,ETH',
      catalogText: '盈利的比特币数量占总量的百分比',
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
                day: 26,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 2,
                day: 17,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 6,
                day: 4,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 11,
                day: 21,
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
                month: 12,
                day: 3,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 2,
                day: 10,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 10,
                day: 5,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 6,
                day: 7,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 1,
                day: 4,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 3,
                day: 6,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 6,
                day: 11,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 9,
                day: 8,
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
                year: 2019,
                month: 2,
                day: 18,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 1,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 4,
                day: 18,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'red',
              date: {
                year: 2010,
                month: 11,
                day: 26,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 2,
                day: 17,
              },
            },
            {
              color: 'red',
              date: {
                year: 2011,
                month: 6,
                day: 4,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 11,
                day: 21,
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
                month: 12,
                day: 3,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 2,
                day: 10,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 10,
                day: 5,
              },
            },
            {
              color: 'green',
              date: {
                year: 2015,
                month: 6,
                day: 7,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 1,
                day: 4,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 3,
                day: 6,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 6,
                day: 11,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 9,
                day: 8,
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
                year: 2019,
                month: 2,
                day: 18,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 1,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 4,
                day: 18,
              },
            },
          ],
        },
      },
    },
  ],
};
