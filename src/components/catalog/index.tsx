import React, { memo } from 'react';

import { Table } from 'antd';
import { CatalogWrapper } from './style';

// 表头
const columns = [
  {
    title: '序号',
    dataIndex: '序号',
    key: '序号',
    width: 80,
  },
  {
    title: '名称',
    dataIndex: '名称',
    key: '名称',
    width: 150,
    render: function textHtml(text:string) {
      return (<a>{text}</a>);
    },
  },
  {
    title: '资产种类',
    dataIndex: '资产种类',
    key: '资产种类',
    width: 150,
  },
  {
    title: '指标介绍',
    key: '指标介绍',
    dataIndex: '指标介绍',
    width: 200,
    render: function textHtml(text:string) {
      return (<a>{text}</a>);
    },
  },
  {
    title: '等级',
    key: '等级',
    dataIndex: '等级',
    width: 80,
  },
];

// 地址指标
const addressData = [
  {
    key: '1',
    序号: 'R1',
    名称: '活跃地址数',
    资产种类: 'BTC,ETH',
    指标介绍: '每天发生交易的地址数量',
    等级: '免费', // 免费
  },
  {
    key: '2',
    序号: 'R2',
    名称: '新增地址数',
    资产种类: 'BTC,ETH',
    指标介绍: '去除空地址后，每天新增的地址数量',
    等级: '免费',
  },
  {
    key: '3',
    序号: 'R3',
    名称: '地址总量',
    资产种类: 'BTC,ETH',
    指标介绍: '所有地址的数量',
    等级: '免费',
  },
  {
    key: '4',
    序号: 'R4',
    名称: '非零余额地址',
    资产种类: 'BTC,ETH',
    指标介绍: '所有余额不为零的地址数量',
    等级: '付费', // 付费
  },
  {
    key: '5',
    序号: 'R5',
    名称: '巨鲸地址数：持币>1k地址数',
    资产种类: 'BTC,ETH',
    指标介绍: '持有币数大于1k的地址数量',
    等级: '付费',
  },
];

// 机构指标
const institutionData = [
  {
    key: '1',
    序号: 'R1',
    名称: '灰度溢价率',
    资产种类: 'BTC,ETH',
    指标介绍: '灰度价格相对于市场价格的溢价和折价率',
    等级: '免费', // 免费
  },
  {
    key: '2',
    序号: 'R2',
    名称: '灰度持仓量：币本位',
    资产种类: 'BTC,ETH',
    指标介绍: '灰度基金AUM、使用币本位计算',
    等级: '付费', // 付费
  },
  {
    key: '3',
    序号: 'R3',
    名称: '灰度持仓量：美元',
    资产种类: 'BTC,ETH',
    指标介绍: '灰度基金AUM、使用美元计算',
    等级: '付费',
  },
  {
    key: '4',
    序号: 'R4',
    名称: '灰度净流量变化',
    资产种类: 'BTC,ETH',
    指标介绍: '流入流出灰度基金的金额',
    等级: '付费',
  },
];

// 价格相关指标
const priceData = [
  {
    key: '1',
    序号: 'R1',
    名称: '价格',
    资产种类: 'BTC,ETH',
    指标介绍: '取多个交易所数据计算后的等权重价格',
    等级: '免费', // 免费
  },
  {
    key: '2',
    序号: 'R2',
    名称: '市值',
    资产种类: 'BTC,ETH',
    指标介绍: '总市值规模',
    等级: '免费',
  },
];

// 盈利与亏损指标
const profitData = [
  {
    key: '1',
    序号: 'R1',
    名称: '流通中的盈利率',
    资产种类: 'BTC,ETH',
    指标介绍: '在当前的市场价格下，处于盈利状态的百分比',
    等级: '免费', // 免费
  },
];

// 市场估值指标
const valueData = [
  {
    key: '1',
    序号: 'R1',
    名称: '稳定币资金环境',
    资产种类: 'BTC,ETH',
    指标介绍: '用来衡量宏观资金环境的指标',
    等级: '免费', // 免费
  },
  {
    key: '2',
    序号: 'R2',
    名称: '短期市场估值（SOPR）',
    资产种类: 'BTC,ETH',
    指标介绍: '用来衡量短期超买超卖（超跌超涨）的指标',
    等级: '付费', // 付费
  },
  {
    key: '3',
    序号: 'R3',
    名称: '储备风险指数',
    资产种类: 'BTC,ETH',
    指标介绍: '追踪长期持有者对市场的估值态度',
    等级: '付费',
  },
  {
    key: '4',
    序号: 'R4',
    名称: 'Puell估值倍数',
    资产种类: 'BTC,ETH',
    指标介绍: '使用puell对市场估值的方法，确定牛市和熊市',
    等级: '付费',
  },
  {
    key: '5',
    序号: 'R5',
    名称: '长期持有者行为（CDD）',
    资产种类: 'BTC,ETH',
    指标介绍: '追踪长期投资者的行为',
    等级: '付费',
  },
  {
    key: '6',
    序号: 'R6',
    名称: '市场健康程度',
    资产种类: 'BTC,ETH',
    指标介绍: '描述市场运行的健康程度',
    等级: '付费',
  },
  {
    key: '7',
    序号: 'R7',
    名称: '长期市场估值',
    资产种类: 'BTC,ETH',
    指标介绍: '确定市场中的总盈亏状态，并据此进行估值',
    等级: '付费',
  },
];

// 交易所相关指标
const exchangeData = [
  {
    key: '1',
    序号: 'R1',
    名称: '交易所余额',
    资产种类: 'BTC,ETH',
    指标介绍: '交易所持有的余额总量',
    等级: '付费', // 付费
  },
];

export default memo(function LSCatalog() {
  return (
    <CatalogWrapper>
      <div id='catalog'>
        <h2>地址指标</h2>
        <Table
          columns={columns}
          dataSource={addressData}
          pagination={false} />
        <h2 className='table-title'>机构指标</h2>
        <Table
          columns={columns}
          dataSource={institutionData}
          pagination={false} />
        <h2 className='table-title'>价格相关指标</h2>
        <Table
          columns={columns}
          dataSource={priceData}
          pagination={false} />
        <h2 className='table-title'>盈利与亏损指标</h2>
        <Table
          columns={columns}
          dataSource={profitData}
          pagination={false} />
        <h2 className='table-title'>市场估值指标</h2>
        <Table
          columns={columns}
          dataSource={valueData}
          pagination={false} />
        <h2 className='table-title'>交易所相关指标</h2>
        <Table
          columns={columns}
          dataSource={exchangeData}
          pagination={false} />
      </div>
    </CatalogWrapper>
  );
});
