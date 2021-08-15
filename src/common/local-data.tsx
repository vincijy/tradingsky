import { MergeCellsOutlined, PullRequestOutlined, GlobalOutlined } from '@ant-design/icons';
import React, { Component } from 'react';

export const headerLinks = [
  {
    title: '主页',
    link: '/home',
  },
  {
    title: '图表',
    link: '/chart',
  },
  {
    title: '指标目录',
    link: '/catalog',
  },
  {
    title: '指标介绍',
    link: 'https://weibo.com/u/7657665166?is_all=1',
  },
  {
    title: '洞见',
    link: 'https',
  },
];

export const dataMenu = [
  {
    name: '地址',
    icon: <MergeCellsOutlined />,
    key: 'sub1',
    dataSet: [
      {
        name: '活跃地址数',
      },
      {
        name: '地址总数',
      },
    ],
  },
  {
    name: '衍生品',
    icon: <PullRequestOutlined />,
    key: 'sub2',
    dataSet: [
      {
        name: '期货',
      },
      {
        name: '期权',
      },
    ],
  },
  {
    name: '分布',
    icon: <GlobalOutlined />,
    key: 'sub3',
    dataSet: [
      {
        name: '长期持有',
      },
      {
        name: '短期持有',
      },
    ],
  },
  {
    name: '实体',
    icon: <GlobalOutlined />,
    key: 'sub4',
    dataSet: [
      {
        name: '交易所',
      },
      {
        name: '大户',
      },
    ],
  },
  {
    name: '交易所',
    icon: <GlobalOutlined />,
    key: 'sub5',
    dataSet: [
      {
        name: '净流入',
      },
      {
        name: '净流出',
      },
    ],
  },
  {
    name: '费用',
    icon: <GlobalOutlined />,
    key: 'sub6',
    dataSet: [
      {
        name: '期货费用',
      },
      {
        name: '手续费',
      },
    ],
  },
  {
    name: '机构',
    icon: <GlobalOutlined />,
    key: 'sub7',
    dataSet: [
      {
        name: '灰度',
      },
      {
        name: '加拿大ETF',
      },
    ],
  },
  {
    name: '生命周期',
    icon: <GlobalOutlined />,
    key: 'sub8',
    dataSet: [
      {
        name: '创建',
      },
      {
        name: '销毁',
      },
    ],
  },
  {
    name: '长期/短期持有者',
    icon: <GlobalOutlined />,
    key: 'sub9',
    dataSet: [
      {
        name: '长期持有',
      },
      {
        name: '短期持有',
      },
    ],
  },
  {
    name: '市场指标',
    icon: <GlobalOutlined />,
    key: 'sub10',
    dataSet: [
      {
        name: '价格',
      },
      {
        name: '市值',
      },
    ],
  },
  {
    name: '矿工',
    icon: <GlobalOutlined />,
    key: 'sub11',
    dataSet: [
      {
        name: '矿工流入',
      },
      {
        name: '矿工流出',
      },
    ],
  },
  {
    name: '网络状态',
    icon: <GlobalOutlined />,
    key: 'sub12',
    dataSet: [
      {
        name: '难度',
      },
      {
        name: '哈希率',
      },
    ],
  },
  {
    name: 'OTC交易',
    icon: <GlobalOutlined />,
    key: 'sub13',
    dataSet: [
      {
        name: '净流入',
      },
      {
        name: '净流出',
      },
    ],
  },
  {
    name: '价格/市值指标',
    icon: <GlobalOutlined />,
    key: 'sub14',
    dataSet: [
      {
        name: '价格',
      },
      {
        name: '市值',
      },
    ],
  },
  {
    name: '盈利/亏损',
    icon: <GlobalOutlined />,
    key: 'sub15',
    dataSet: [
      {
        name: '盈利',
      },
      {
        name: '亏损',
      },
    ],
  },
  {
    name: '交易所',
    icon: <GlobalOutlined />,
    key: 'sub16',
    dataSet: [
      {
        name: '净流入',
      },
      {
        name: '净流出',
      },
    ],
  },
  {
    name: '供应量',
    icon: <GlobalOutlined />,
    key: 'sub17',
    dataSet: [
      {
        name: '总量',
      },
      {
        name: '新增',
      },
    ],
  },
  {
    name: '交易量',
    icon: <GlobalOutlined />,
    key: 'sub18',
    dataSet: [
      {
        name: '链上交易量',
      },
      {
        name: '链上新增交易量',
      },
    ],
  },
  {
    name: '未花费/已花费输出',
    icon: <GlobalOutlined />,
    key: 'sub19',
    dataSet: [
      {
        name: '未花费输出',
      },
      {
        name: '已花费输出',
      },
    ],
  },
  {
    name: '市场指标',
    icon: <GlobalOutlined />,
    key: 'sub20',
    dataSet: [
      {
        name: '价格',
      },
      {
        name: '市值',
      },
    ],
  },
  {
    name: '矿工',
    icon: <GlobalOutlined />,
    key: 'sub21',
    dataSet: [
      {
        name: '矿工流入',
      },
      {
        name: '矿工流出',
      },
    ],
  },
  {
    name: '网络状态',
    icon: <GlobalOutlined />,
    key: 'sub22',
    dataSet: [
      {
        name: '难度',
      },
      {
        name: '哈希率',
      },
    ],
  },
  {
    name: 'OTC交易',
    icon: <GlobalOutlined />,
    key: 'sub23',
    dataSet: [
      {
        name: '净流入',
      },
      {
        name: '净流出',
      },
    ],
  },
  {
    name: '价格/市值指标',
    icon: <GlobalOutlined />,
    key: 'sub24',
    dataSet: [
      {
        name: '价格',
      },
      {
        name: '市值',
      },
    ],
  },
  {
    name: '盈利/亏损',
    icon: <GlobalOutlined />,
    key: 'sub25',
    dataSet: [
      {
        name: '盈利',
      },
      {
        name: '亏损',
      },
    ],
  },
  {
    name: '交易所',
    icon: <GlobalOutlined />,
    key: 'sub26',
    dataSet: [
      {
        name: '净流入',
      },
      {
        name: '净流出',
      },
    ],
  },
  {
    name: '供应量',
    icon: <GlobalOutlined />,
    key: 'sub27',
    dataSet: [
      {
        name: '总量',
      },
      {
        name: '新增',
      },
    ],
  },
  {
    name: '交易量',
    icon: <GlobalOutlined />,
    key: 'sub28',
    dataSet: [
      {
        name: '链上交易量',
      },
      {
        name: '链上新增交易量',
      },
    ],
  },
  {
    name: '未花费/已花费输出',
    icon: <GlobalOutlined />,
    key: 'sub29',
    dataSet: [
      {
        name: '未花费输出',
      },
      {
        name: '已花费输出',
      },
    ],
  },
];
