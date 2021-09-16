
import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';

export const institution:D.MenuItem = {
  name: '机构',
  icon: <PayCircleOutlined />,
  key: 'sub3',
  visible: true,
  subMenus: [
    {
      name: '灰度持仓量（GBTC）',
      key: '灰度持仓量（GBTC）',
      loginRequired: true, // 免费指标
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'institution/grayscale_holding',
      },
      introduce: {
        text: '比特币以美元计算的价格（BTC-USD）。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '灰度信托基金持有的BTC数量',
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
      name: '灰度溢价（GBTC）',
      key: '灰度溢价（GBTC）',
      loginRequired: true,
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'institution/grayscale_premium',
      },
      introduce: {
        text: '市值通过当前供应量与美元价格相乘计算得出。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '灰度信托基金的总价值相对于信托持有的比特币资产净值的溢价',
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
      name: '灰度净流量（GBTC）',
      key: '灰度净流量（GBTC）',
      loginRequired: true,
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'institution/grayscale_flow',
      },
      introduce: {
        text: '比特币以美元计算的价格（BTC-USD）。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '灰度信托基金持有比特币的流入/流出数量',
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
      name: 'Purpose Bitcoin ETF持仓量',
      key: 'Purpose Bitcoin ETF持仓量',
      loginRequired: true,
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'institution/purpose_holding',
      },
      introduce: {
        text: '比特币以美元计算的价格（BTC-USD）。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: 'Purpose Bitcoin ETF 持有的BTC数量',
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
      name: 'Purpose Bitcoin ETF净流量',
      key: 'Purpose Bitcoin ETF净流量',
      loginRequired: true,
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'institution/purpose_flow',
      },
      introduce: {
        text: '比特币以美元计算的价格（BTC-USD）。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: 'Purpose Bitcoin ETF 持有比特币的流入/流出数量',
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
