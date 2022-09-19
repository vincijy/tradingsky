import React, { memo } from 'react';
import { Card, Tag } from 'antd';
import { RightCircleOutlined, BarChartOutlined, TagsOutlined, ShopOutlined, PieChartOutlined } from '@ant-design/icons';
import { FiTwitter } from 'react-icons/fi';
import { MdTravelExplore } from 'react-icons/md';
import { useHistory } from 'react-router';
import { ICoin } from 'src/service/def';
import { strToFixNum } from '@utils/cal';
import { genImgUrl } from '@utils/img';
import { getOptionValue } from '@utils/select_option';
import { tagOptions } from '../def';
import { DiscoverItem } from './style';
interface IProps{
  coin:ICoin;
}

export default memo(function DiscoveryCard(props:IProps) {

  const { coin: item } = props;
  const h = useHistory();
  const navigateToDetail = (item:any) => {
    const { id, key } = item;
    h.push(`discovery/detail?id=${id}&key=${key}`);
  };
  const navigateTo = (url:string) => {
    (window as any).open(url, '_blank').focus();
  };

  let indexUrl = '';
  if (item.chainIndiceJson) {
    try {
      const chainIndiceJson = JSON.parse(item.chainIndiceJson);
      indexUrl = chainIndiceJson.default;
    } catch (error) {
      console.error(error, item.chainIndiceJson);
    }
  }
  return (
    <DiscoverItem>
      <Card
        bordered
        className='card-big'>
        <div
          className='card-info-area'
          onClick={() => navigateToDetail(item) }>
          <img
            src={genImgUrl(item.imgSrc)}
            className='card-logo'/>
          <div className='card-info'>
            <div className='card-name'> { `${item.fullName} (${item.briefName})` } </div>
            <Tag color='magenta'> { getOptionValue(item.tag, tagOptions) } </Tag>
          </div>
        </div>
        <div
          className='card-introduce'
          onClick={() => navigateToDetail(item) }>
          { item.briefIntroduction }
        </div>
        <div className='card-separate' />
        <div
          className='card-data-area'
          onClick={() => navigateToDetail(item) }>
          <div className='card-data-item'>
            <div className='card-data-info'>
              <TagsOutlined style={{ fontSize: '15px' }} />
              <div className='data-name'>价格</div>
            </div>
            <div className='card-name-data'>{ item.price == '' ? '无数据' : `${strToFixNum(item.price, 3).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') }$`} </div>
          </div>

          <div className='card-data-item'>
            <div className='card-data-info'>
              <ShopOutlined style={{ fontSize: '15px' }} />
              <div className='data-name'>市值排名</div>
            </div>
            <div className='card-name-data'> { item.makeplaceRank == '' ? '无数据' : item.makeplaceRank} </div>
          </div>
          <div className='card-data-item'>
            <div className='card-data-info'>
              <PieChartOutlined style={{ fontSize: '15px' }} />
              <div className='data-name'>市值占比 </div>
            </div>
            <div className='card-name-data'>{!item.markplacePercent ? '无数据' : `${strToFixNum(item.markplacePercent, 2) }%`}</div>
          </div>
        </div>
        <div className='card-foot'>
          {
            item.officalUrl ?
              <div
                className='card-foot-button'
                onClick={() => navigateTo(item.telegramUrl) }>
                <MdTravelExplore style={{ fontSize: '15px', marginBottom: '5px', marginLeft: '5.2px' }} />
                <div>官网</div>
              </div> :
              <div style={{ display: 'none' }} />
          }
          {
            item.twitterUrl ?
              <div
                className='card-foot-button'
                onClick={() => navigateTo(item.twitterUrl) }>
                <FiTwitter style={{ fontSize: '15px', marginBottom: '5px', marginLeft: '5.2px' }} />
                <div>推特</div>
              </div> :
              <div style={{ display: 'none' }} />
          }
          {
            indexUrl ?
              <div
                className='card-foot-button'
                onClick={() => navigateTo(indexUrl) }>
                <BarChartOutlined style={{ fontSize: '15px', marginBottom: '5px' }} />
                <div>数据</div>
              </div> :
              <div style={{ display: 'none' }} />
          }
          <div
            className='card-foot-button'
            onClick={() => navigateToDetail(item) }>
            <RightCircleOutlined style={{ fontSize: '15px', marginBottom: '5px', color: '#4040FF', fontWeight: 'bold' }} />
            <span style={{ color: '#4040FF', fontWeight: 'bold' }} >更多</span>
          </div>
        </div>
      </Card>
    </DiscoverItem>
  );
});

