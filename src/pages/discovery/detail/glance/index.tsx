import React, { memo, useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';
import { getAllPrice } from '@/api/discovery';
import { ICoin } from '@/api/def';
import HighchartsReact from 'highcharts-react-official';
import { getHighCharts } from '@/components/chart';
import { strToFixNum } from '@/utils/cal';
import { GlanceWrapper } from './style';
import { options } from './options';
interface Iprops {
  coin:ICoin;
}
export default memo(function Glance(props:Iprops) {
  const { coin } = props;
  const [dataRows, setDataRows] = useState([]);
  useEffect(() => {
    getAllPrice(coin.key).then((res) => {
      console.log(res);
      const { data: { rows: dataRows } } = res;
      setDataRows(dataRows);
    }).catch((err) => {
      console.log(err);
    });
  }, [coin]);

  const resData = [] as any;
  dataRows.forEach((row) => {
    const r = (row as any).r;
    const v = parseFloat((r as any).v);
    const t = parseFloat((r as any).t);
    resData.push([t * 1000, v]);
  });
  (options as any).series[0].data = resData;
  (options as any).title.text = `${coin.briefName} 价格走势`;
  const op = { ...options };
  console.log(coin, 'coin');
  return (
    <GlanceWrapper>
      <Row style={{ marginBottom: '20px' }}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 14 }}
        >
          <HighchartsReact
            highcharts={getHighCharts()}
            options={ op }
            constructorType='stockChart'
          />
        </Col>
        <Col
          className={'glanceDataWrapper'}
          xs={{ span: 24 }}
          lg={{ span: 10 }}
        >
          <Card>
            <div>MarketCap</div>
            <div> { coin.market_cap }</div>
            <div>{ strToFixNum(coin.market_cap_dominance, 3, true) }</div>
          </Card>
          <Card>
            <div>Fully Distibuted Market Cap</div>
            <div>1080</div>
            <div>30%</div>
          </Card>
          <Card>
            <div>Volumn</div>
            <div>1080</div>
            <div>30%</div>
          </Card>
          <Card>
            <div>Circulating Supply</div>
            <div>1080</div>
            <div>30%</div>
          </Card>

        </Col>
      </Row>
    </GlanceWrapper>
  );
});
