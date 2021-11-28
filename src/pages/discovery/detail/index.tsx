
import React, { memo, useEffect, useState } from 'react';
import { Card, Input, Select, Row, Col, Tabs } from 'antd';
import { MdTravelExplore } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { BarChartOutlined } from '@ant-design/icons';
import { RightCircleOutlined } from '@ant-design/icons';
import LSAppFooter from '@/components/footer'; // footer
import LSChartDoubleLine from '@/components/chart/line/index';
import { getCoin, getCoinList, getDynamicCoin, getWhaleAddress, getWhaleTop, getRealTime, getAllPrice } from '@/api/discovery';
import { getUrlParams } from '@/utils/url';
import { ICoin } from '@/api/def';
import { strToFixNum } from '@/utils/cal';
import ChartPie from './chart_pie';
import Glance from './glance';
const { TabPane } = Tabs;
import { DiscoverDetailPage } from './style';

const log = console.log.bind(console);
export default memo(function Item(props:any) {
  const { key, id } = getUrlParams();
  const [ coin, setCoin ] = useState({} as ICoin);
  const reqeustData = () => {
    getCoin(id).then(async(res) => {
      const coinStaticData = res.data;
      const res2 = await getDynamicCoin(key);
      const coinDynamicData = res2.data.rows[0].r;
      setCoin({
        ...coinStaticData,
        ...coinDynamicData,
      });
    }).catch((err) => {
      console.error(err);
    });
  };
  useEffect(() => {
    reqeustData();
  }, []);
  console.log(coin, 'coin');
  return (
    <DiscoverDetailPage>
      <Card>
        <Row style={{ marginBottom: '20px' }}>
          <Col
            className={'debug'}
            xs={{ span: 16 }}
            lg={{ span: 16 }}
          >
            {coin.briefName}({coin.fullName})
            {coin.tag }
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

      <Card style={{ marginTop: '20px' }}>
        <Tabs
          defaultActiveKey='0'
          centered>
          <TabPane
            tab='总览'
            key='0'>
            <Glance />
          </TabPane>
          <TabPane
            tab='产品'
            key='1'>
      Content of Tab Pane 2
          </TabPane>
          <TabPane
            tab='巨鲸地址'
            key='2'>
            <ChartPie/>
          </TabPane>
          <TabPane
            tab='合约地址'
            key='3'>
      Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
      <LSAppFooter/>
    </DiscoverDetailPage>
  );
});
