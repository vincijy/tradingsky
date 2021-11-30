import React, { memo, useEffect, useState } from 'react';
import { Card, Row, Col, Progress } from 'antd';
import { getAllPrice, getExtremum } from '@/api/discovery';
import { ICoin, IExtremum } from '@/api/def';
import HighchartsReact from 'highcharts-react-official';
import { getHighCharts } from '@/components/chart';
import { strToFixNum } from '@/utils/cal';
import { unixToHuman } from '@/utils/date';
import { GlanceWrapper } from './style';
import { options } from './options';
interface Iprops {
  coin:ICoin;
}
export default memo(function Glance(props:Iprops) {
  const { coin } = props;
  const [dataRows, setDataRows] = useState([]);
  const [minData, setMinData] = useState({} as IExtremum);
  const [maxData, setMaxData] = useState({} as IExtremum);
  const supplyPct = Number(coin.circulating_supply) / Number(coin.max_supply);
  const reqeustData = () => {
    getExtremum(coin.briefName).then(async(res) => {
      const min = res.data.rows[0];
      setMinData(min);
      const max = res.data.rows[1];
      setMaxData(max);
    }).catch((err) => {
      console.error(err);
    });
  };
  useEffect(() => {
    getAllPrice(coin.key).then((res) => {
      console.log(res);
      const { data: { rows: dataRows } } = res;
      setDataRows(dataRows);
    }).catch((err) => {
      console.log(err);
    });
    reqeustData();
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
  console.log(typeof strToFixNum(coin.market_cap, 2), 'AAAAAAcoin');

  return (
    <GlanceWrapper>
      <Row style={{ marginBottom: '20px' }}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 15 }}
          xxl={{ span: 18 }}

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
          <Card className='glance-card'>
            <h2>项目情况</h2>
            <div className='glance-row'>
              <span>发布日期</span>
              <span>某个日期</span>
            </div>
          </Card>
          <Card className='glance-card'>
            <h2>市值情况</h2>
            <div className='glance-row'>
              <span>总市值</span>
              <span> { !coin.market_cap ? '无数据' : strToFixNum(coin.market_cap, 2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') + '$' } </span>
            </div>
            <div className='glance-row'>
              <span>市值占比</span>
              <span> { !coin.market_cap_dominance ? '无数据' : strToFixNum(coin.market_cap_dominance, 2) + '%' } </span>
            </div>
            <div className='glance-row'>
              <Progress percent={ Number(coin.market_cap_dominance) } size='small' status='active' style={{ width: 420 }} showInfo={false} strokeColor='#4040FF'/>
            </div>
            <div className='glance-row'>
              <span>市值排名</span>
              <span> { !coin.cmc_rank ? '无数据' : coin.cmc_rank } </span>
            </div>
          </Card>
          <Card className='glance-card'>
            <h2>最值</h2>
            <div className='glance-row'>
              <span>最高价格</span>
              <span>
                { (0.12312313123.toPrecision(4)) } $
              </span>
            </div>
            <div style={{ fontSize: '12px', color: 'rgb(130, 130, 130)', marginBottom: '5px', marginTop: '3px' }}>
              <span>{ !maxData.index ? '无数据' : unixToHuman(maxData.index) }</span>
            </div>
            <div className='glance-row'>
              <span>最低价格</span>
              <span>{ 0.123213131.toPrecision(4) } $</span>
            </div>
            <div style={{ fontSize: '12px', color: 'rgb(130, 130, 130)', marginTop: '3px' }}>
              <span>{ !minData.index ? '无数据' : unixToHuman(minData.index) }</span>
            </div>
          </Card>
          <Card className='glance-card'>
            <h2>流通情况</h2>
            <div className='glance-row'>
              <span>流通占比</span>
              <span>{ !coin.max_supply ? '无数据' : strToFixNum((supplyPct * 100).toString(), 2) + '%'} </span>
            </div>
            <div className='glance-row'>
              <Progress percent={ supplyPct * 100} size='small' status='active' style={{ width: 420 }} showInfo={false} strokeColor='#4040FF'/>
            </div>
            <div className='glance-row'>
              <span>流通量</span>
              <span>{ !coin.circulating_supply ? '无数据' : coin.circulating_supply.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')} {!coin.circulating_supply ? '' : coin.briefName}</span>
            </div>
            <div className='glance-row'>
              <span>最大供应量</span>
              <span>{!coin.max_supply ? '无数据' : coin.max_supply.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')} { !coin.max_supply ? '' : coin.briefName}</span>
            </div>
          </Card>
        </Col>
      </Row>
    </GlanceWrapper>
  );
});
