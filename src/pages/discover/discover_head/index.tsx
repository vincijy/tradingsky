import { Menu } from 'antd';
import React, { Component } from 'react';
import { DiscoverMenu } from './style';

const subNames = [
  { id: 1, name: '全部' },
  { id: 2, name: '主流币' },
  { id: 3, name: '稳定币' },
  { id: 4, name: 'Defi' },
  { id: 5, name: 'Metaverse' },
  { id: 6, name: 'Web3.0' },
  { id: 7, name: '交易所' },
];


export default class Head extends Component {
  state = {
    current: '全部',
  };

  handleClick = (e:any) => {
    const { key } = e;
    this.setState({ current: key });
  };

  render() {
    const { current } = this.state;
    return (
      <DiscoverMenu>
        <div className='menu-item'>
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode='horizontal'>
            {
              subNames.map((item) => (
                <Menu.Item
                  style={{ fontSize: '25px', margin: '30px', textAlign: 'center', display: 'flex' }}
                  key= {item.id}>
                  {item.name}
                </Menu.Item>
              ))
            }
          </Menu>
        </div>
      </DiscoverMenu>
    );
  }
}
