import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
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
        name: '活跃地址量',
        key: '活跃地址量',
        loginRequired: false, // 所有人都能看的指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'address/active',
        },
        introduce: {
          text: '链上活跃地址量统计了区块链网络中被确认交易的接收地址与发送地址的总量（过滤重复地址与非活动地址）。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC,ETH',
        catalogText: '每天发生交易的地址数量统计',
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
            colorOfHigher: 'red',
            colorOfLower: 'green',
            dates: [
              {
                year: 2021,
                month: 8,
                day: 21,
              },
              {
                year: 2021,
                month: 8,
                day: 26,
              },
              {
                year: 2021,
                month: 7,
                day: 19,
              },
            ],
          },
        },
      },
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
  },
  {
    name: '交易所',
    icon: <PullRequestOutlined />,
    key: 'sub2',
    visible: true,
    subMenus: [
      {
        name: '交易所余额占比',
        key: '交易所余额占比',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'exchange/balance_percent',
        },
        introduce: {
          text: '灰度比特币信托基金（GBTC）的总价值相对于信托持有的比特币资产净值（NAV）的溢价。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC,ETH',
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
          asset: 'btc',
          index: 'exchange/position_change',
        },
        introduce: {
          text: '灰度比特币信托基金（GBTC）持有的比特币总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC,ETH',
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
          asset: 'btc',
          index: 'exchange/flow_change',
        },
        introduce: {
          text: '灰度比特币信托基金（GBTC）资产管理规模（AUM）。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC,ETH',
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
          asset: 'btc',
          index: 'exchange/funding_rate',
        },
        introduce: {
          text: '灰度比特币信托基金（GBTC）的比特币流入/流出数量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC,ETH',
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
  },
  {
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
  },
  {
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
      },
    ],
  },
  {
    name: '资金环境',
    icon: <ProjectOutlined />,
    key: 'sub5',
    visible: true,
    subMenus: [
      {
        name: '稳定币累计流通量',
        key: '稳定币累计流通量',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'capital/stable_circulating',
        },
        introduce: {
          text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
          isURL: true,
          weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
        },
        assetList: 'BTC',
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
          asset: 'btc',
          index: 'capital/ssr',
        },
        introduce: {
          text: '该指标通过计算卖出价格/买入价格，可以很好的判断市场底部，衡量投资者情绪，判断市场方向。',
          isURL: true,
          weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673543412514917',
        },
        assetList: 'BTC',
        catalogText: '稳定币与比特币之间的供给关系',
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
  },
  {
    name: '估值指标',
    icon: <LineChartOutlined />,
    key: 'sub6',
    visible: true,
    subMenus: [
      {
        name: 'Stock-to-Flow 模型',
        key: 'Stock-to-Flow 模型',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value/stock_flow',
        },
        introduce: {
          text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
          isURL: true,
          weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
        },
        assetList: 'BTC',
        catalogText: '从稀缺性角度预测比特币未来估值的模型',
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
        name: 'Stock-to-Flow 模型偏差量',
        key: 'Stock-to-Flow 模型偏差量',
        loginRequired: true, // 付费指标
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value/stockflow_deflection',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
        catalogText: '比特币价格相对于S/F模型的偏差量',
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
        name: 'CVDD底部指标',
        key: 'CVDD底部指标',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value/cvdd',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
        catalogText: '量化比特币底部区域的精准指标',
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
        name: '市场健康程度',
        key: '市场健康程度',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value/market_health',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
        catalogText: '衡量市场健康程度的指标',
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
        name: '公允价值偏差量',
        key: '公允价值偏差量',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'value/fairvalue_deflection',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
        catalogText: '相对于已实现市值评估市值是否被高估/低估',
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
  },
  {
    name: '市场情绪',
    icon: <AlertOutlined />,
    key: 'sub7',
    visible: true,
    subMenus: [
      {
        name: 'spent outputs 利润率（SOPR）',
        key: 'spent outputs 利润率（SOPR）',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'sentiment/sopr',
        },
        introduce: {
          text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
          isURL: true,
          weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
        },
        assetList: 'BTC,ETH',
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
          asset: 'btc',
          index: 'sentiment/market_greed',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC,ETH',
        catalogText: '衡量市场情绪及贪婪度的精准顶部指标',
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
  },
  {
    name: '投资者行为',
    icon: <ThunderboltOutlined />,
    key: 'sub8',
    visible: true,
    subMenus: [
      {
        name: '储备风险',
        key: '储备风险',
        loginRequired: true, // 付费指标
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'behavior/reserve_risk',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
        catalogText: '用于量化长期持有者市场信心的指标',
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
        name: '长期持有者行为',
        key: '长期持有者行为',
        loginRequired: true,
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'behavior/long_behavior',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
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
          asset: 'btc',
          index: 'behavior/long_sell',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
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
          asset: 'btc',
          index: 'behavior/realized_age',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC,ETH',
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
          asset: 'btc',
          index: 'behavior/hodl_age',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC,ETH',
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
  },
  {
    name: '矿工',
    icon: <PieChartOutlined />,
    key: 'sub9',
    visible: true,
    subMenus: [
      {
        name: '哈希带',
        key: '哈希带',
        loginRequired: true, // 免费指标
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'miner/hash_ribbon',
        },
        introduce: {
          text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
          isURL: true,
          weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
        },
        assetList: 'BTC',
        catalogText: '基于哈希率量化挖矿难度与价格的关系',
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
        name: '难度彩虹带',
        key: '难度彩虹带',
        loginRequired: true,
        vipRequired: false,
        visible: true,
        args: {
          asset: 'btc',
          index: 'miner/difficulty_ribbon',
        },
        introduce: {
          text: '稳定币供应比率指标量化了稳定币相对于比特币的购买力，可以理解为比特币与稳定币之间的供需结构的可视化，很好的衡量了比特币价格上涨的潜力大小，优化过后的该指标可以指示出市场资金的流入流出方向。',
          isURL: true,
          weiboURL: 'https://weibo.com/ttarticle/p/show?id=2309404673526568452248',
        },
        assetList: 'BTC',
        catalogText: '基于7种不同的挖矿难度平均线量化比特币底部的指标',
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
        name: '普埃尔倍数',
        key: '普埃尔倍数',
        loginRequired: true, // 付费指标
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'miner/puell',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
        catalogText: '基于挖矿利润衡量比特币市场周期',
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
        name: '矿工交易费用收入占比',
        key: '矿工交易费用收入占比',
        loginRequired: true, // 付费指标
        vipRequired: true,
        visible: true,
        args: {
          asset: 'btc',
          index: 'miner/transaction_fee',
        },
        introduce: {
          text: '交易所余额统计了：Binance, Bitfinex, Bithumb, Bitmex, Bitstamp, Bittrex, Coinbase, Coincheck, Gate.io, Gemini, Hitbtc, Huobi, Kraken, Kucoin, Luno, Okex, Poloniex等主流交易所的余额总量。',
          isURL: false,
          weiboURL: '',
        },
        assetList: 'BTC',
        catalogText: '矿工从交易费用获取的收入所占百分比',
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
  },
];
