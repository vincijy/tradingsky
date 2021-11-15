import React, { memo } from 'react';
import { Card, Button, Tag, Avatar } from 'antd';
import { RightCircleOutlined, BarChartOutlined, CodeOutlined, TagsOutlined, ShopOutlined, PieChartOutlined } from '@ant-design/icons';
import bitcoinLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';

import { DiscoverItem } from './style';

const assetList = [
  {
    title: '比特币（BTC）',
    logo: bitcoinLogo,
    lable: '主流币',
    introduce: '比特币最早的去中心化加密货币',
  },
  {
    title: '以太坊（ETH）',
    logo: ethLogo,
    lable: '主流币',
    introduce: '世界计算机',
  },
  {
    title: '以太坊（ETH）',
    logo: ethLogo,
    lable: '主流币',
    introduce: '世界计算机',
  },
  {
    title: '以太坊（ETH）',
    logo: ethLogo,
    lable: '主流币',
    introduce: '世界计算机',
  },
  {
    title: '以太坊（ETH）',
    logo: ethLogo,
    lable: '主流币',
    introduce: '世界计算机',
  },
  {
    title: '以太坊（ETH）',
    logo: ethLogo,
    lable: '主流币',
    introduce: '世界计算机',
  },
  {
    title: '以太坊（ETH）',
    logo: ethLogo,
    lable: '主流币',
    introduce: '世界计算机',
  },
  {
    title: '以太坊（ETH）',
    logo: ethLogo,
    lable: '主流币',
    introduce: '世界计算机',
  },

];
export default memo(function Item() {
  const { Meta } = Card;

  return (
    <div>
      <DiscoverItem>
        <div className='card-all'>
          {
            assetList.map((item) => (
              <div className='card-item' key={item.title}>
                <Card
                  hoverable
                  bordered>
                  <div className='card-info-area'>
                    <img src={item.logo} className='card-logo'/>
                    <div className='card-info'>
                      <div className='card-name'> {item.title} </div>
                      <Tag color='magenta'> { item.lable } </Tag>
                    </div>
                  </div>
                  <div className='card-introduce'>
                    { item.introduce }
                  </div>
                  <div className='card-data-area'>
                    <div className='card-data-item'>
                      <div className='card-data-info'>
                        <TagsOutlined style={{ fontSize: 'large' }} />
                        <div className='data-name'>价格</div>
                      </div>
                      <div>60000 $</div>
                    </div>

                    <div className='card-data-item'>
                      <div className='card-data-info'>
                        <ShopOutlined style={{ fontSize: 'large' }} />
                        <div className='data-name'>市值排名</div>
                      </div>
                      <div> 1 </div>
                    </div>
                    <div className='card-data-item'>
                      <div className='card-data-info'>
                        <PieChartOutlined style={{ fontSize: 'large' }} />
                        <div className='data-name'>市值占比</div>
                      </div>
                      <div> 44.56% </div>
                    </div>
                  </div>
                  <div className='card-foot'>
                    <div className='card-foot-button'>
                      <CodeOutlined style={{ fontSize: 'large', marginBottom: '5px' }} />
                      <div>官网</div>
                    </div>
                    <div className='card-foot-button'>
                      <BarChartOutlined style={{ fontSize: 'large' }}/>
                      <div>链上指标</div>
                    </div>
                    <div className='card-foot-button'>
                      <RightCircleOutlined style={{ fontSize: 'large' }} />
                      <div>更多</div>
                    </div>
                  </div>
                </Card>
              </div>
            ))
          }
        </div>
      </DiscoverItem>
    </div>
  );
});
