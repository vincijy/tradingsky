export const introduce = {
  text: `### 使用方法
  + 我们默认选择SMA7日均线（您可在工具栏中自定义均线）。
  + • 红色区域（7以上）：说明当前市值高于「公允价值」，市场被严重高估。
  + • 绿色区域（0.3以下）：说明当前市值低于「公允价值」，市场被严重低估。
  
  ### 指标原理
  + 公允价值(realized cap) = UTXO最后一次移动时的价格 · 流通量
  + realized cap较为平稳且不容易受短期价格波动影响，所以我们将其定义为「公允价值」，关于realized cap的详细解释可以看这篇文章：[Introducing Realized Capitalization](https://coinmetrics.io/realized-capitalization/)
  + 公允价值偏差量 = 当前市值 ÷ 公允价值
  + 并且该指标通过市值与公允价值（realized cap）之间的过滤，使得精确性更加明显。
  
  ### 创作者
  + 该指标来源于[David Puell](https://medium.com/@kenoshaking/bitcoin-market-value-to-realized-value-mvrv-ratio-3ebc914dbaee)的创作
  `,
  height: 1510,
};
