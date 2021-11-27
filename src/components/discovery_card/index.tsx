import React, { memo } from 'react';
import { Card, Tag } from 'antd';
import { RightCircleOutlined, BarChartOutlined, TagsOutlined, ShopOutlined, PieChartOutlined } from '@ant-design/icons';
import { FiTwitter } from 'react-icons/fi';
import { MdTravelExplore } from 'react-icons/md';

import { DiscoverItem } from './style';

interface IProps{
  item:any;
}

export default memo(function DiscoveryCard(props:IProps) {

  const { item } = props;

  return (
    <DiscoverItem>
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
        <div className='card-separate'></div>
        <div className='card-data-area'>
          <div className='card-data-item'>
            <div className='card-data-info'>
              <TagsOutlined style={{ fontSize: '15px' }} />
              <div className='data-name'>价格</div>
            </div>
            <div>60000 $</div>
          </div>

          <div className='card-data-item'>
            <div className='card-data-info'>
              <ShopOutlined style={{ fontSize: '15px' }} />
              <div className='data-name'>市值排名</div>
            </div>
            <div> 1 </div>
          </div>
          <div className='card-data-item'>
            <div className='card-data-info'>
              <PieChartOutlined style={{ fontSize: '15px' }} />
              <div className='data-name'>市值占比</div>
            </div>
            <div> 44.56% </div>
          </div>
        </div>
        <div className='card-foot'>
          <div className='card-foot-button'>
            <MdTravelExplore style={{ fontSize: '15px', marginBottom: '5px', marginLeft: '5.2px' }} />
            <div>官网</div>
          </div>
          <div className='card-foot-button'>
            <FiTwitter style={{ fontSize: '15px', marginBottom: '5px', marginLeft: '5.2px' }} />
            <div>推特</div>
          </div>
          <div className='card-foot-button'>
            <BarChartOutlined style={{ fontSize: '15px', marginBottom: '5px' }}/>
            <div>数据</div>
          </div>
          <div className='card-foot-button'>
            <RightCircleOutlined style={{ fontSize: '15px', marginBottom: '5px', color: '#4040FF', fontWeight: 'bold' }} />
            <span style={{ color: '#4040FF', fontWeight: 'bold' }} >更多</span>
          </div>
        </div>
      </Card>
    </DiscoverItem>
  );
});

