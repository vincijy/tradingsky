import React, { memo, useEffect, useState } from 'react';
import { Card, Input, Select, Row, Col, Tabs, Table, Space } from 'antd';
import { DotChartOutlined } from '@ant-design/icons';
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
  const [OtherData, setOtherData] = useState(0);
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

    // add up others balance
    let sum = 0;
    for (let i = 0; i < 20; i++) {
      sum += result[i].y;
    }
    const newSum = 100 - sum;
    setOtherData(newSum);

    // slice top10 addresses
    setPieData(result.slice(0, 20));

    const whaleTopData = await getWhaleTop(key);

    log('whaleTopData', whaleTopData);
  };

  useEffect(() => {
    requestData();
  }, []);
  const{ name } = pieData;

  const columns = [
    {
      title: '地址',
      dataIndex: 'name',
    },
    {
      title: '所占百分比 %',
      dataIndex: 'y',
    },
    {
      title: '持有数量',
      dataIndex: 'balance',
    },
    {
      title: '查看明细',
      // eslint-disable-next-line react/display-name
      render: (pieData:any) => (
        <Space>
          <a href={`https://etherscan.io/address/${pieData.name}`} target='_blank' rel='noreferrer'>
            <DotChartOutlined style={{ marginLeft: '10px', fontSize: '20px' }}/>
          </a>
        </Space>
      ),
    },
  ];
  return (
    <WhaleWrapper>
      <Card style={{ height: '500px' }}>
        <Row >
          <Col span={24}>
            <ChartPie data={pieData} otherData={OtherData}/>
          </Col>
        </Row>
      </Card>
      <div className='whale-table'>
        <Table columns={columns} dataSource={pieData} pagination={{ pageSize: 1300, hideOnSinglePage: true }} />
      </div>
    </WhaleWrapper>
  );
});
