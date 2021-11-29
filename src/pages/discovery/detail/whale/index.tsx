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
  const [pieData, setPieData] = useState([] as any);
  const requestData = async() => {
    // 获取巨鲸地址值
    // addressData = { data: { rows: [{ r: {address: 'xx', share: '0.5', balance: '1000' }}]}}
    const addressData = await getWhaleAddress(key);
    log(addressData, 'addressData');

    const rows = addressData.data.rows;
    const result = [] as any;
    rows.forEach((row:any) => {
      const r = row.r;
      const e = {
        name: r.address,
        y: parseFloat(r.share),
        balance: r.balance,
      };
      result.push(e);
    });

    setPieData(result);

    const whaleTopData = await getWhaleTop(key);

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
            <ChartPie data={pieData}/>
          </Col>
        </Row>
      </Card>

      <Card style={{ height: '500px', border: '1px solid red' }}>
        {
          pieData.map((e:any) => (
            <Row
              key={e.name}
            >
              <Col span={ 16 }>
                { e.name }
              </Col>
              <Col span={ 4 }>
                { e.y }
              </Col>
              <Col span={ 4 }>
                { e.balance }
              </Col>
            </Row>
          ))
        }
      </Card>
    </WhaleWrapper>
  );
});
