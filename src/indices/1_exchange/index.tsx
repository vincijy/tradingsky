import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';

export const exchange:D.MenuItem = {
  name: '交易所',
  icon: <PullRequestOutlined />,
  key: 'sub2',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    {
      name: '交易所余额占比',
      key: '交易所余额占比',
      loginRequired: true, // 免费指标
      vipRequired: false,
      visible: true,
      args: {
        index: 'exchange/balance_percent',
      },
      introduce: {
        text: '灰度比特币信托基金（GBTC）的总价值相对于信托持有的比特币资产净值（NAV）的溢价。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc', 'eth'],
      catalogText: '交易所余额的供应量占比',
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
      name: '交易所净头寸变化',
      key: '交易所净头寸变化',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        index: 'exchange/position_change',
      },
      introduce: {
        text: '灰度比特币信托基金（GBTC）持有的比特币总量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc', 'eth'],
      catalogText: '交易所钱包净持仓变化（流入/流出）',
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
      name: '交易所净流量变化',
      key: '交易所净流量变化',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        index: 'exchange/flow_change',
      },
      introduce: {
        text: '灰度比特币信托基金（GBTC）资产管理规模（AUM）。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc', 'eth'],
      catalogText: '交易所净流量变化',
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
      name: '期货资金费率',
      key: '期货资金费率',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        index: 'exchange/funding_rate',
      },
      introduce: {
        text: '灰度比特币信托基金（GBTC）的比特币流入/流出数量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: ['btc', 'eth'],
      catalogText: '交易所永续期货合约的平均融资利率（单位：%）',
      toolbox: {
        annotation: {
          enabled: true, // 有标注
        },
        sma: {
          enabled: true,
        },
      },
    },
  ],
};
