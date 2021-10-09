export const introduce = {
  text: `### 使用方法
  + • 绿色区域：当价格落入realized price与CVDD之间时，往往是周期的底部。
  
  ### 指标原理
  + 根据历史回测发现，CVDD精确的确定了价格的底部区域，与realized price构成了底部价格的运行区间。
  + CDD：coin数量 · 持有时间
  + CVDD：将CDD与价格结合
  + realized cap：UTXO最后一次移动时的价格 · 流通量
  + realized price：realized cap/流通量
  如果想对realized cap有更深入的了解，可以参考 [这篇文章](https://coinmetrics.io/realized-capitalization/)
  
  ### 创作者
  [Willy Woo 与 David Puell](https://woobull.com/experiments-on-cumulative-destruction/) 联合推出`,
  height: 1470,
};
