import React, { memo } from 'react'

import { CatalogWrapper } from './style'
import { Table } from 'antd';

//表头
const columns = [
{
    title: '序号',
    dataIndex: '序号',
    key: '序号',
    width:200,
},
{
    title: '名称',
    dataIndex: '名称',
    key: '名称',
    width:200,
    render: (text:string) => <a>{text}</a>,
},
{
    title: '资产种类',
    dataIndex: '资产种类',
    key: '资产种类',
    width:200,
},
{
    title: '所属类别',
    key: '所属类别',
    dataIndex: '所属类别',
    width:200,
},
{
    title: '指标介绍',
    key: '指标介绍',
    dataIndex: '指标介绍',
    width:200,
    render: (text:string) => <a>{text}</a>,
},
]
    
//普通数据
const standData = [
{
    key: '1',
    序号: 'R1',
    名称: '活跃地址量',
    资产种类: 'BTC,ETH,ERC-20',
    所属类别: '地址指标',
    指标介绍: '活跃的地址数量统计'
},
{
    key: '2',
    序号: 'R2',
    名称: '新增地址量',
    资产种类: 'BTC,ETH,ERC-20',
    所属类别: '地址指标',
    指标介绍: '新增的地址数量统计'
},
{
    key: '3',
    序号: 'R3',
    名称: '底部指标',
    资产种类: 'BTC,ETH,ERC-20',
    所属类别: '市场估值',
    指标介绍: '超买超卖区间统计'
}
]

//高级数据
const advancedData = []

//专业级数据
const proData = []

export default memo(function LSCatalog() {
    return (
        <CatalogWrapper>
            <div id="catalog">
                <h2>普通指标</h2>
                <Table columns={columns} dataSource={standData} pagination={false} />
                <h2 className="table-title">高级指标</h2>
                <Table columns={columns} dataSource={standData} pagination={false} />
            </div>
        </CatalogWrapper>
    )
})
