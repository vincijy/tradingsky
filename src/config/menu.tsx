import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, LineChartOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from './def';

export const menus:D.MenuItem[] = [
  {
    name: '地址',
    icon: <MergeCellsOutlined />,
    key: 'sub1',
    visible: true,
    subMenus: [
      {
        name: '活跃地址数',
        key: '活跃地址数',
        loginRequired: false, // 所有人都能看的指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'address_active',
        },
      },
      {
        name: '新增地址数',
        key: '新增地址数',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'address_new',
        },
      },
      {
        name: '地址总量',
        key: '地址总量',
        loginRequired: true,
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'address_total',
        },
      },
      {
        name: '非零余额地址',
        key: '非零余额地址',
        loginRequired: true, // 付费指标
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'address_more_zero',
        },
      },
      {
        name: '巨鲸地址数：持币>1k地址数',
        key: '巨鲸地址数：持币>1k地址数',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'address_more_1k',
        },
      },
    ],
  },
  {
    name: '机构',
    icon: <PullRequestOutlined />,
    key: 'sub2',
    visible: true,
    subMenus: [
      {
        name: '灰度溢价率',
        key: '灰度溢价率',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'grayscale_premium',
        },

      },
      {
        name: '灰度持仓量：币本位',
        key: '灰度持仓量：币本位',
        loginRequired: true, // 付费指标
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'grayscale_aum_coin',
        },

      },
      {
        name: '灰度持仓量：美元',
        key: '灰度持仓量：美元',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'grayscale_aum_usd',
        },

      },
      {
        name: '灰度净流量变化',
        key: '灰度净流量变化',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'grayscale_flow',
        },
      },
    ],
  },
  {
    name: '市场与价格',
    icon: <PayCircleOutlined />,
    key: 'sub3',
    visible: true,
    subMenus: [
      {
        name: '价格',
        key: '价格',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'market_price',
        },
      },
      {
        name: '市值',
        key: '市值',
        loginRequired: true,
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'market_cap',
        },
      },
    ],
  },
  {
    name: '盈利与亏损',
    icon: <FlagOutlined />,
    key: 'sub4',
    visible: true,
    subMenus: [
      {
        name: '流通中的盈利率',
        key: '流通中的盈利率',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'profit_percent',
        },
      },
    ],
  },
  {
    name: '市场估值指标',
    icon: <LineChartOutlined />,
    key: 'sub5',
    visible: true,
    subMenus: [
      {
        name: '稳定币资金环境',
        key: '稳定币资金环境',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value_ssr',
        },
      },
      {
        name: '短期市场估值（SOPR）',
        key: '短期市场估值（SOPR）',
        loginRequired: true, // 付费指标
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value_sopr',
        },
      },
      {
        name: '储备风险指数',
        key: '储备风险指数',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value_reserve_risk',
        },
      },
      {
        name: 'Puell估值倍数',
        key: 'Puell估值倍数',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value_puell',
        },
      },
      {
        name: '长期持有者行为（CDD）',
        key: '长期持有者行为（CDD）',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value_long_cdd',
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
          index: 'value_health',
        },
      },
      {
        name: '长期市场估值',
        key: '长期市场估值',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value_nupl',
        },
      },
    ],
  },
  {
    name: '交易所',
    icon: <PieChartOutlined />,
    key: 'sub6',
    visible: true,
    subMenus: [
      {
        name: '交易所余额',
        key: '交易所余额',
        loginRequired: true, // 付费指标
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'exchange_balance',
        },
      },
    ],
  },
];
