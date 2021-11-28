import React, { memo, useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';

import LSChartDoubleLine from '@/components/chart/line/index';
import { getCoin, getCoinList, getWhaleAddress, getWhaleTop, getRealTime, getAllPrice } from '@/api/discovery';
import { ICoin } from '@/api/def';
import { GlanceWrapper } from './style';

interface Iprops {
  coin:ICoin;
}
export default memo(function Glance(props:Iprops) {
  const { coin } = props;
  const [dataRows, setDataRows] = useState([]);
  useEffect(() => {
    // getAllPrice(coin.key).then((res) => {
    //   console.log(res);
    //   const { data: { rows: dataRows } } = res;
    //   setDataRows(dataRows);
    // }).catch((err) => {
    //   console.log(err);
    // });
  }, []);

  const resData = [] as any;
  dataRows.forEach((row) => {
    const r = (row as any).r;
    const m = {
      r: {
        t: (r as any).t,
        o: { v: (r as any).v },
      },
    };
    resData.push(m);
  });
  console.log(resData);

  return (
    <GlanceWrapper>
      <Row style={{ marginBottom: '20px' }}>
        <Col
          className={'debug'}
          xs={{ span: 24 }}
          lg={{ span: 14 }}
        >
          <LSChartDoubleLine
            seriesA={ { data: [], name: 'name' } }
            seriesB={ { data: resData, name: '价格' } }
          />
        </Col>
        <Col
          className={'glanceDataWrapper'}
          xs={{ span: 24 }}
          lg={{ span: 10 }}
        >
          <Card>
            <div>MarketCap</div>
            <div>1080</div>
            <div>30%</div>
          </Card>
          <Card>
            <div>MarketCap</div>
            <div>1080</div>
            <div>30%</div>
          </Card>
          <Card>
            <div>MarketCap</div>
            <div>1080</div>
            <div>30%</div>
          </Card>
          <Card>
            <div>MarketCap</div>
            <div>1080</div>
            <div>30%</div>
          </Card>
        </Col>
      </Row>
    </GlanceWrapper>
  );
});
