
import React, { memo, useEffect } from 'react';
import { Card, Input, Select, Row, Col } from 'antd';
import { MdTravelExplore } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { BarChartOutlined } from '@ant-design/icons';
import { RightCircleOutlined } from '@ant-design/icons';
import LSAppFooter from '@/components/footer'; // footer
import { getCoin, getCoinList, getWhaleAddress, getWhaleTop, getRealTime, getAllPrice } from '@/api/discovery';
const log = console.log.bind(console);

import { DiscoverDetailPage } from './style';

export default memo(function Item() {
  return (
    <DiscoverDetailPage>
      <Card>
        <Row style={{ marginBottom: '20px' }}>
          <Col
            className={'debug'}
            xs={{ span: 16 }}
            lg={{ span: 16 }}
          >
          BTC(BitCoin)
          标签
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
            比特币是一种去中心化的加密货币。在2008年发布的白皮书中，由某个人或某个群体化名为中本聪（Satoshi Nakamoto） ，首度探讨了比特币的机制。2009年1月，比特币正式问世。
            比特币是一种基于点对点网络的货币，所有交易都是在平等独立的网络参与者之间直接进行，而无需任何中间方的许可或促成。用中本聪自己的话来说，创造比特币就是为了让“一方无需通过金融机构就能直接对另一方在线付款”。
            在比特币出现之前，出现过一些类似的去中心化电子货币概念，但比特币的独特之处在于，它是有史以来首个被应用于现实生活中的加密货币。
          </Col>
          <Col
            className={'priceWrapper'}
            xs={{ span: 24 }}
            lg={{ span: 11 }}
          >
          价格$66666
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
      <LSAppFooter/>
    </DiscoverDetailPage>
  );
});
