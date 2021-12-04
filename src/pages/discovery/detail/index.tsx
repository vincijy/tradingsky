
import React, { memo, useEffect, useState } from 'react';
import { Card, Tabs } from 'antd';

import LSAppFooter from '@/components/footer'; // footer
import { getCoin, getDynamicCoin } from '@/api/discovery';
import { getUrlParams } from '@/utils/url';
import { ICoin } from '@/api/def';
import DetailIntroCard from './intro_card';
import Glance from './glance/index';
const { TabPane } = Tabs;
import { DiscoverDetailPage } from './style';
import WhaleComponent from './whale';
import ProductComponent from './product';
import ContractComponent from './contast';

export default memo(function Item(props:any) {
  const { key, id } = getUrlParams();
  const [ coin, setCoin ] = useState({} as ICoin);
  const changeSwitch = () => {
    console.log('aa');
  };
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
    <div>
      <DiscoverDetailPage>
        {
          coin &&
          <DetailIntroCard coin={coin} />
        }
        <Card style={{ marginTop: '20px' }}>
          <Tabs
            defaultActiveKey='0'
            tabBarGutter={70}>
            <TabPane
              tab='总览'
              key='0'>
              {
                coin.key &&
                  <Glance coin={coin}/>
              }
            </TabPane>
            <TabPane
              tab='产品'
              key='1'>
              <ProductComponent coin={coin} />
            </TabPane>
            <TabPane
              tab='巨鲸地址'
              key='2'>
              {
                coin &&
                <WhaleComponent coin={coin}/>
              }
            </TabPane>
            <TabPane
              tab='合约地址'
              key='3'>
              <ContractComponent coin={coin} />
            </TabPane>
          </Tabs>
        </Card>
      </DiscoverDetailPage>
      <LSAppFooter/>
    </div>
  );
});
