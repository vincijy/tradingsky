import React, { memo, useEffect, useState } from 'react';
import { Card, Input, Select, Row, Col, Tabs } from 'antd';

import { getCoin, getCoinList, getWhaleAddress, getWhaleTop, getRealTime, getAllPrice } from '@/api/discovery';
import HighchartsReact from 'highcharts-react-official';
import { options } from './options';
interface IProps {
  data:any;
  otherData:any;
}

export default memo(function ChartPie(props:IProps) {

  const { data } = props;
  const { otherData } = props;

  const [ops, setOps] = useState(options);

  const others = {
    name: 'others',
    y: otherData,
    balance: 0,
  };

  const newData = [...data, others];
  useEffect(() => {
    // 将外部组件传入的值data赋个ops.series[0].data
    (ops as any).series[0].data = newData;
    setOps({ ...ops });
    console.log('巨鲸数据', ops);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <HighchartsReact
      constructorType={ 'chart' }
      options={ ops }
    />
  );
});
