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
        introduce: '链上活跃地址量统计了区块链网络中被确认交易的接收地址与发送地址的总量（过滤重复地址与非活动地址）',
        assetList: 'BTC,ETH',
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
        introduce: '新增地址量统计了区块链网络中，首次出现在交易里的地址数量',
        assetList: 'BTC,ETH',
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
        introduce: '地址总量统计了出现在区块链网络中的地址总数',
        assetList: 'BTC,ETH',
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
        introduce: '余额不为零的地址量统计了区块链网络中持有余额 > 0 的地址数量',
        assetList: 'BTC,ETH',
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
        introduce: '该指标统计了持有余额  > 1K 的链上地址总量，即巨鲸地址数量',
        assetList: 'BTC,ETH',
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
        introduce: '灰度比特币信托基金（GBTC）的总价值相对于信托持有的比特币资产净值（NAV）的溢价',
        assetList: 'BTC,ETH',
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
        introduce: '灰度比特币信托基金（GBTC）持有的比特币总量',
        assetList: 'BTC,ETH',
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
        introduce: '灰度比特币信托基金（GBTC）资产管理规模（AUM）',
        assetList: 'BTC,ETH',
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
        introduce: '灰度比特币信托基金（GBTC）的比特币流入/流出数量',
        assetList: 'BTC,ETH',
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
        introduce: '比特币以美元计算的价格（BTC-USD）',
        assetList: 'BTC,ETH',
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
        introduce: '市值通过当前供应量与美元价格相乘计算得出',
        assetList: 'BTC,ETH',
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
        introduce: `流通中的盈利率：该指标统计了处于流通状态的比特币盈利数量的百分比，是一个判断顶部的指标，
        更多指标内容请参考本文：${<a href='https://weibo.com/ttarticle/p/show?id=2309404673427649724507'>文章</a>}`,
        assetList: 'BTC,ETH',
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
        introduce: `稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向，
        更多指标内容请参考本文：${<a href='https://weibo.com/ttarticle/p/show?id=2309404673526568452248'>文章</a>}`,
        assetList: 'BTC',
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
        introduce: `该指标通过计算卖出价格/买入价格，可以很好的判断市场底部，衡量投资者情绪，判断市场方向，
        更多指标内容请参考本文：${<a href='https://weibo.com/ttarticle/p/show?id=2309404673526568452248'>文章</a>}`,
        assetList: 'BTC',
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
        introduce: `该指标可以用来量化长期投资者对比特币的信心，通过比特币价格/比特币网络生命周期内决定持有而不是出售的积累机会成本计算得出。预警值——顶部：0.2，底部：0.003。
        更多指标内容请参考本文：${<a href='https://weibo.com/ttarticle/p/show?id=2309404673558512009231'>文章</a>}`,
        assetList: 'BTC',
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
        introduce: `Puell倍数通过当日采矿利润/365天采矿利润均值计算得出。通过矿工的盈利状态对比特币的基本面进行评估，参考值——顶部：4—10，底部：0.3—0.5。
        更多指标内容请参考本文：${<a href='https://weibo.com/ttarticle/p/show?id=2309404673573607309341'>文章</a>}`,
        assetList: 'BTC',
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
        introduce: `该指标用于跟踪每天被销毁的硬币天数的总和，销毁天数即：比特币直到卖出那一刻所持有的天数；我们可以使用此指标来观察长期持有者的宏观支出模式和行为变化，跟踪长期投资者的投资行为，可以帮助我们判断市场周期。
        更多指标内容请参考本文：${<a href='https://weibo.com/ttarticle/p/show?id=2309404673406821073852'>文章</a>}`,
        assetList: 'BTC',
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
        introduce: `这是一个衡量市场健康程度的指标，同时也是一个量化市场年化支出行为的指标，当价格相对于市场年化支出较高时，则视为市场健康，反之则视为市场投降，进入良好的历史买入区。参考值——1M分界线。
        更多指标内容请参考本文：${<a href='https://weibo.com/ttarticle/p/show?id=2309404673588706803725'>文章</a>}`,
        assetList: 'BTC',
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
        introduce: `该指标通过计算比特币网络每一实体的未实现损益与比特币市值的比值，对于跟踪比特币的投资者情绪非常有用。参考值——顶部：0.75。
        更多指标内容请参考本文：${<a href='https://weibo.com/ttarticle/p/show?id=2309404673603814686891'>文章</a>}`,
        assetList: 'BTC,ETH',
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
        introduce: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
        assetList: 'BTC,ETH',
      },
    ],
  },
];
