import { MergeCellsOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { active } from './active';

export const address:D.MenuItem = {
  name: '地址',
  icon: <MergeCellsOutlined />,
  key: 'sub1',
  visible: true,
  subMenus: [
    active,
    {
      name: '新增地址量',
      key: '新增地址量',
      loginRequired: true, // 免费指标
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'address/new',
      },
      introduce: {
        text: '新增地址量统计了区块链网络中，首次出现在交易里的地址数量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC,ETH',
      catalogText: '每天区块链网络新增地址数量统计',
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
                year: 2021,
                month: 7,
                day: 21,
              },
            },
            {
              color: 'green',
              date: {
                year: 2021,
                month: 8,
                day: 21,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 9,
                day: 21,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'green',
              date: {
                year: 2021,
                month: 4,
                day: 21,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 5,
                day: 21,
              },
            },
            {
              color: 'red',
              date: {
                year: 2021,
                month: 6,
                day: 21,
              },
            },
          ],
        },
      },
    },
    {
      name: '余额 > 0.01地址量',
      key: '余额 > 0.01地址量',
      loginRequired: true,
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'address/balance_more001',
      },
      introduce: {
        text: '地址总量统计了出现在区块链网络中的地址总数。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC,ETH',
      catalogText: '持币余额 > 0.01 的地址数量',
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
      name: '余额 > 1地址量',
      key: '余额 > 1地址量',
      loginRequired: true,
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'address/balance_more1',
      },
      introduce: {
        text: '地址总量统计了出现在区块链网络中的地址总数。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC,ETH',
      catalogText: '持币余额 > 1 的地址数量',
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
      name: '余额 > 100地址量',
      key: '余额 > 100地址量',
      loginRequired: true,
      vipRequired: false,
      visible: true,
      args: {
        asset: 'btc',
        index: 'address/balance_more100',
      },
      introduce: {
        text: '地址总量统计了出现在区块链网络中的地址总数。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC,ETH',
      catalogText: '持币余额 > 100 的地址数量',
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
      name: '一年以上持有量占比',
      key: '一年以上持有量占比',
      loginRequired: true, // 付费指标
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'address/more_1y',
      },
      introduce: {
        text: '余额不为零的地址量统计了区块链网络中持有余额 > 0 的地址数量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC',
      catalogText: '持有一年以上没有移动的供应量占比',
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
                day: 13,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 11,
                day: 22,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 12,
                day: 2,
              },
            },
            {
              color: 'red',
              date: {
                year: 2015,
                month: 1,
                day: 17,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 12,
                day: 20,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 20,
              },
            },
          ],
          IndicePoints: [
            {
              color: 'red',
              date: {
                year: 2011,
                month: 6,
                day: 13,
              },
            },
            {
              color: 'green',
              date: {
                year: 2011,
                month: 11,
                day: 22,
              },
            },
            {
              color: 'red',
              date: {
                year: 2013,
                month: 12,
                day: 2,
              },
            },
            {
              color: 'red',
              date: {
                year: 2015,
                month: 1,
                day: 17,
              },
            },
            {
              color: 'red',
              date: {
                year: 2017,
                month: 12,
                day: 20,
              },
            },
            {
              color: 'green',
              date: {
                year: 2018,
                month: 12,
                day: 20,
              },
            },
          ],
        },
      },
    },
    {
      name: '巨鲸地址数量（>1k）',
      key: '巨鲸地址数量（>1k）',
      loginRequired: true,
      vipRequired: true,
      visible: true,
      args: {
        asset: 'btc',
        index: 'address/balance_more1k',
      },
      introduce: {
        text: '该指标统计了持有余额  > 1K 的链上地址总量，即巨鲸地址数量。',
        isURL: false,
        weiboURL: '',
      },
      assetList: 'BTC,ETH',
      catalogText: '巨鲸地址数量统计（余额 > 1K）',
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
