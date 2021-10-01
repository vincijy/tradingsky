export const introduce = {
  text: `### 使用方法
  + 我们默认选择SMA7日均线（您可在工具栏中自定义均线）。
  + • 关注黑色分隔线（数值1）：若指标在1以上，说明卖出盈利；若指标在1以下，说明卖出亏损。
  + • 牛市中：指标跌到1附近，价格往往到达短期底部。
  + • 熊市中：指标上涨到1附近，价格往往到达短期顶部。
  
  ### 指标原理
  + 我们将spent outputs利润率定义为：卖出价格 ÷ 买入价格。
  + 当SOPR > 1时，大部分的持有者处于盈利状态（卖出即盈利）、当SOPR < 1时，大部分的持有者处于亏损状态（卖出即亏损）。
  + 在牛市中每当SOPR跌到1附近（此时卖出面临亏损），投资者更倾向于持有，价格会进一步上涨。
  + 在熊市中每当SOPR涨到1附近（此时卖出面临盈利），投资者更倾向于卖出，价格会进一步下跌。
  
  ### 创作者
  + 该指标来源于 [Renato Shirakashi](https://medium.com/unconfiscatable/introducing-sopr-spent-outputs-to-predict-bitcoin-lows-and-tops-ceb4536b3b9) 的创作
  `,
  height: 1520,
};
