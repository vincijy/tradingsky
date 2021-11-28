import React, { memo, useEffect, useState } from 'react';
import { Card, Input, Select, Row, Col, Tabs } from 'antd';
import { MdTravelExplore } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { BarChartOutlined } from '@ant-design/icons';
import { RightCircleOutlined } from '@ant-design/icons';
import LSAppFooter from '@/components/footer'; // footer
import LSChartDoubleLine from '@/components/chart/line/index';
import { getCoin, getCoinList, getDynamicCoin, getWhaleAddress, getWhaleTop, getRealTime, getAllPrice } from '@/api/discovery';
import { ICoin } from '@/api/def';
import { strToFixNum } from '@/utils/cal';
import { DetailIntroCard } from './style';
const log = console.log.bind(console);

interface Iprops {
  coin:ICoin;
};

export default memo(function DetailIntroCardComponent(props:Iprops) {
  const { coin } = props;
  console.log('coin', coin);
  return (
    <DetailIntroCard>
      <Card>
        <Row style={{ marginBottom: '20px' }}>
          <Col
            className={'debug'}
            xs={{ span: 16 }}
            lg={{ span: 16 }}
          >
            {coin.briefName}({coin.fullName})
            { coin.tag }
          </Col>
          <Col
            className={'share_and_collect'}
            xs={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <div>收藏</div>
            <div>分享</div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col
            className={'debug'}
            xs={{ span: 24 }}
            lg={{ span: 13 }}
          >
            { coin.detail }
          </Col>
          <Col
            className={'priceWrapper'}
            xs={{ span: 24 }}
            lg={{ span: 11 }}
          >
      价格{ strToFixNum(coin.price, 3) }$
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            className={'links'}
          >
            <div className='card-foot-button'>
              <MdTravelExplore/>
              <div>官网</div>
            </div>
            <div className='card-foot-button'>
              <FiTwitter />
              <div>推特</div>
            </div>
            <div className='card-foot-button'>
              <BarChartOutlined/>
              <div>数据</div>
            </div>
            <div className='card-foot-button'>
              <FiTwitter />
              <div>推特</div>
            </div>
            <div className='card-foot-button'>
              <BarChartOutlined/>
              <div>数据</div>
            </div>
          </Col>
        </Row>
      </Card>
    </DetailIntroCard>
  );
});
