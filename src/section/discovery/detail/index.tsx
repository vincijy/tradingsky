
import React, { memo, useEffect, useState } from 'react';
import { Card, Tabs } from 'antd';
import { isMobile, isPad } from '@utils/is';

import LSAppFooter from '@components/footer'; // footer
import { getCoin, getDynamicCoin } from '@service/discovery';
import { getUrlParams } from '@utils/url';
import { ICoin } from '@service/def';
import DetailIntroCard from './intro_card';
import Glance from './glance/index';
const { TabPane } = Tabs;
import { DiscoverDetailPage } from './style';
import WhaleComponent from './whale';
import ProductComponent from './product';
import ContractComponent from './contract';

export default memo(function Item(props:any) {
  const { key, id } = getUrlParams();
  const [ coin, setCoin ] = useState({} as ICoin);
  const reqeustData = () => {
    getCoin(id).then(async(res) => {
      const coinStaticData = res.data;
      const res2 = await getDynamicCoin(key);
      const coinDynamicData = res2.data.rows.length > 0 ? res2.data.rows[0].r : {};
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
            tabBarGutter={isMobile() ? 10 : 70 }>
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
            {
              coin && (coin as any).hasWhale !== '0' &&
              <TabPane
                tab='巨鲸地址'
                key='2'>
                <WhaleComponent coin={coin}/>

              </TabPane>
            }
            {
              coin.contrastJson && coin.contrastJson !== '{}' &&
              <TabPane
                tab='合约地址'
                key='3'>
                <ContractComponent coin={coin} />
              </TabPane>
            }
          </Tabs>
        </Card>
      </DiscoverDetailPage>
      <LSAppFooter/>
    </div>
  );
});
