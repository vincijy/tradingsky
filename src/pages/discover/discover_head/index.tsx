// import { Menu } from 'antd';
import React, { memo, useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { DiscoverMenu } from './style';

const subNames = [
  { id: 0, name: '全部' },
  { id: 1, name: '主流币' },
  { id: 2, name: '稳定币' },
  { id: 3, name: 'Defi' },
  { id: 4, name: 'Metaverse' },
  { id: 5, name: 'Web3.0' },
  { id: 6, name: '交易所' },
];

export default memo(function Head() {
  const [key, setKey] = useState('');
  const handleClick = (e:any) => {
    setKey(e.key);
  };
  return (
    <DiscoverMenu>
      <Menu
        onClick={handleClick}
        selectedKeys={[key]}
        mode='horizontal'>
        {
          subNames.map((item) => (
            <Menu.Item
              key={item.id}
              icon={<AppstoreOutlined />}>
              { item.name }
            </Menu.Item>
          ))
        }
      </Menu>
    </DiscoverMenu>
  );
});
