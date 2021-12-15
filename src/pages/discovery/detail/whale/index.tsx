import React, { memo, useEffect, useState } from 'react';
import { Card, Col, Row, Table, Space } from 'antd';
import { GoLinkExternal } from 'react-icons/go';
import { getWhaleAddress, getWhaleTop } from '@/api/discovery';
import { ICoin } from '@/api/def';
import { WhaleWrapper } from './style';
import ChartPie from './chart_pie';

interface Iprops {
  coin:ICoin;
};

export default memo(function WhaleComponent(props:Iprops) {
  const { coin } = props;
  const { key } = coin;
  const [topData, setTopData] = useState([] as any);
  const [pieData, setPieData] = useState([] as any);
  const [OtherData, setOtherData] = useState(0);
  const requestData = async() => {
    // 获取巨鲸地址值
    // addressData = { data: { rows: [{ r: {address: 'xx', share: '0.5', balance: '1000' }}]}}
    const addressData = await getWhaleAddress(key);
    if (!addressData || !addressData.data || !addressData.data.rows) {
      return;
    }
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
    const tops = whaleTopData.data.rows;
    const topsResults = [] as any;
    tops.forEach((top:any) => {
      const r = top.r;
      const e = {
        top10: r.top10,
        top20: r.top20,
        top50: r.top50,
        top100: r.top100,
      };
      topsResults.push(e);
    });

    setTopData(topsResults);
  };

  useEffect(() => {
    requestData();
  }, []);

  const whaleList = pieData.map((list:any, index:any) => ({
    index: index + 1,
    ...list,
  }));


  const addColumns = [
    {
      title: '#',
      dataIndex: 'index',

    },
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
          <a
            href={`https://etherscan.io/address/${pieData.name}`}
            target='_blank'
            rel='noreferrer'>
            <GoLinkExternal style={{ marginLeft: '10px', fontSize: '20px' }}/>
          </a>
        </Space>
      ),
    },
  ];
  const topColumns = [

    {
      title: 'Top 10 占比',
      dataIndex: 'top10',
    },
    {
      title: 'Top 20 占比',
      dataIndex: 'top20',
    },
    {
      title: 'Top 50 占比',
      dataIndex: 'top50',
    },
    {
      title: 'Top 100 占比',
      dataIndex: 'top100',
    },

  ];
  return (
    <WhaleWrapper>
      <Card style={{ height: '500px' }}>
        <Row>
          <Col
            xs={ { span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 24 }}
            style={{ textAlign: 'center' }}
          >
            <ChartPie
              data={pieData}
              otherData={OtherData}/>
          </Col>
        </Row>
      </Card>
      <div className='whale-table'>
        <Table
          columns={topColumns}
          dataSource={topData}
          pagination={{ hideOnSinglePage: true }}
          title={() => '持有分布'} />
      </div>
      <div className='whale-table'>
        <Table
          columns={addColumns}
          dataSource={whaleList}
          pagination={{ pageSize: 1300, hideOnSinglePage: true }} />
      </div>

    </WhaleWrapper>
  );
});
