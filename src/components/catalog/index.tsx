import React, { memo } from 'react';

import { menus } from '@/config/menu';
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

export default memo(function LSCatalog() {
  return (
    <CatalogWrapper>
      <div id='catalog'>
        {
          menus.map((item, index) => (
            <div key={item.name}>
              <h2 key={item.name} className='table-title'>{ item.name }</h2>
              <Table
                key={index}
                columns={columns}
                dataSource={
                  item.subMenus.map((subItem, index) => (
                    {
                      key: `${index}`,
                      序号: `R${++index}`,
                      名称: `${subItem.name}`,
                      资产种类: `${subItem.assetList}`,
                      指标介绍: `${subItem.catalogText}`,
                      等级: `${
                        subItem.vipRequired ? '付费' : '免费'
                      }`,
                    }
                  ))
                }
                pagination={false} />
            </div>
          ))
        }
      </div>
    </CatalogWrapper>
  );
});
