import React, { memo, useEffect, useState } from 'react';
import { Card, Input, Select, Row, Col, Tabs } from 'antd';

import { getWhaleAddress, getWhaleTop } from '@/api/discovery';
import { ICoin } from '@/api/def';
import { strToFixNum } from '@/utils/cal';
import { WhaleWrapper } from './style';
import ChartPie from './chart_pie';
const log = console.log.bind(console);

interface Iprops {
  coin:ICoin;
};

export default memo(function WhaleComponent(props:Iprops) {
  const { coin } = props;
  console.log('coin', coin);
  const { key } = coin;
  const requestData = async() => {
    const addressData = await getWhaleAddress(key);
    // TODO: 从里面取出数据
    // TODO: 从里面取出数据, 然后传给ChartPie组件
    const whaleTopData = await getWhaleTop(key);
    // TODO: 从里面取出数据, 然后传给ChartPie组件
    log('whaleTopData', whaleTopData);
  };

  useEffect(() => {
    requestData();
  }, []);
  return (
    <WhaleWrapper>
      <Card style={{ height: '500px', border: '1px solid red' }}>
        <Row >
          <Col span={24}>
            <ChartPie />
          </Col>
        </Row>
      </Card>
    </WhaleWrapper>
  );
});
