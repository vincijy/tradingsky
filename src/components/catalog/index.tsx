import React, { memo } from 'react';

import { menus } from '@/indices';
import { Table } from 'antd';
import { changeMenu } from '@/store/ui/action';
import { SubMenuItem } from '@/indices/def';
import { useHistory } from 'react-router';
import { useAppDispatch } from '@/hooks';
import { CatalogWrapper } from './style';
import { ICatalogItem } from './def';

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
    render: function rank(level:string){
      return (
        <span className={level === 'L2' ? 'vip-icon' : 'free-icon'}>
          { level }
        </span>
      );
    },
  },
];

export default memo(function LSCatalog() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  /**
   * 先更新菜单状态, 再跳转到图表页面
   * @param record 表格列
   * @returns
   */
  const navigateToChartPage = (record:ICatalogItem) => {
    const { key } = record;
    const [menuItemKey, subMenuItemKey] = key.split(':');
    const menuItem = menus.find((item) => item.key === menuItemKey);
    if (!menuItem) {
      console.error('menuItem not found');
      return;
    }
    const subMenuItem = menuItem.subMenus.find((item) => item.key === subMenuItemKey);
    if (!subMenuItem) {
      console.error('subMenuItem not found');
      return;
    }

    dispatch(changeMenu({
      currentMenu: {
        menu: menuItem,
        subMenu: subMenuItem,
      },
    }));
    history.push('/chart');
    // 页面滚动到顶部
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  return (
    <CatalogWrapper>
      <div id='catalog'>
        {
          menus.map((item) => (
            <div key={item.name}>
              <h2
                key={item.name}
                className='table-title'>{ item.name }
              </h2>
              <Table
                onRow={(record:ICatalogItem) => ({
                  onClick: () => navigateToChartPage(record),
                })}
                key={item.name}
                columns={columns}
                dataSource={
                  item.subMenus.map((subItem:SubMenuItem, index) => (
                    {
                      key: `${item.key}:${subItem.key}`,
                      序号: `R${++index}`,
                      名称: `${subItem.name}`,
                      资产种类: `${subItem.assetList.map((item) => item.toUpperCase())}`,
                      指标介绍: `${subItem.catalogText}`,
                      等级: `${
                        subItem.vipRequired ? 'L2' : 'L1'
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
