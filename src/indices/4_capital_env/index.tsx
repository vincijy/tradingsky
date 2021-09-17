
import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';

export const capitalEnv:D.MenuItem = {
  name: '资金环境',
  icon: <ProjectOutlined />,
  key: 'sub5',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    {
      name: '稳定币累计流通量',
      key: '稳定币累计流通量',
      loginRequired: true, // 免费指标
      vipRequired: false,
      visible: true,
      args: {
        index: 'capital/stable_circulating',
      },
      introduce: {
        text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
      },
      assetList: ['btc'],
      catalogText: '所有稳定币发行供应量统计',
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
      name: '稳定币供应比率',
      key: '稳定币供应比率',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        index: 'capital/ssr',
      },
      introduce: {
        text: '该指标通过计算卖出价格/买入价格，可以很好的判断市场底部，衡量投资者情绪，判断市场方向。',
        isURL: true,
        weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673543412514917',
      },
      assetList: ['btc'],
      catalogText: '稳定币与比特币之间的供给关系',
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
                year: 2018,
                month: 12,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2019,
                month: 6,
                day: 28,
              },
            },
            {
              color: 'green',
              date: {
                year: 2019,
                month: 11,
                day: 26,
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
                year: 2020,
                month: 9,
                day: 25,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 1,
                day: 8,
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
              color: 'red',
              date: {
                year: 2021,
                month: 3,
                day: 14,
              },
            },
            {
              color: 'green',
              date: {
                year: 2021,
                month: 5,
                day: 24,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 9,
              },
            },
            {
              color: 'red',
              date: {
                year: 2019,
                month: 6,
                day: 28,
              },
            },
            {
              color: 'green',
              date: {
                year: 2019,
                month: 11,
                day: 26,
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
                year: 2020,
                month: 9,
                day: 25,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 1,
                day: 8,
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
              color: 'red',
              date: {
                year: 2021,
                month: 3,
                day: 14,
              },
            },
            {
              color: 'green',
              date: {
                year: 2021,
                month: 5,
                day: 24,
              },
            },
          ],
        },
      },
    },
  ],
};
