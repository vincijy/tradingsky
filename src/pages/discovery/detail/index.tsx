
import React, { memo, useEffect } from 'react';
import { Card, Input, Select } from 'antd';
import LSAppFooter from '@/components/footer'; // footer
import { getCoin, getCoinList, getWhaleAddress, getWhaleTop, getRealTime, getAllPrice } from '@/api/discovery';
const log = console.log.bind(console);
export default memo(function Item() {
  useEffect(() => {
    getCoinList({ pageId: 1, pageSize: 10 }).then((res) => {
      const { list: coinList } = res.data;
      log(coinList);
    }).catch((err) => {
      console.error(err);
    });

    getWhaleAddress('btc')
      .then((res) => {
        console.log(res.data || []);
      })
      .catch((err) => {
        console.error(err);
      });

    getWhaleTop('btc')
      .then((res) => {
        console.log(res.data || []);
      })
      .catch((err) => {
        console.error(err);
      });

    getRealTime('btc')
      .then((res) => {
        console.log(res.data || []);
      })
      .catch((err) => {
        console.error(err);
      });

    getAllPrice('btc')
      .then((res) => {
        console.log(res.data || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      详情页
      <LSAppFooter/>
    </div>
  );
});
