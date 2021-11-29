import React, { memo, useEffect, useState } from 'react';
import { Card, Input, Select, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import bitcoinLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';
import LSAppFooter from '@/components/footer'; // footer

import DiscoveryCard from '@/pages/discovery/card';
import { getCoin, getCoinList, getDynamicCoin } from '@/api/discovery';
import { ICoin } from '@/api/def';
import { DiscoverPage } from './style';
const log = console.log.bind(console);

export default memo(function Item() {
  const { Option } = Select;
  const [ isLoading, setIsLoading] = useState(true);
  const [coinList, setCoinList] = useState([] as ICoin[]);
  useEffect(() => {
    getCoinList({ pageId: 1, pageSize: 20 }).then((res) => {
      const { list } = res.data;
      // setCoinList(list);
      let count = 0;
      list.forEach(async(coin) => {
        const res = await getDynamicCoin(coin.key);
        Object.assign(coin, res.data.rows[0].r);
        count += 1;
        if (count === list.length) {
          const newList = ([] as any).concat(list);
          setCoinList(newList);
          setIsLoading(false);
        }
      });
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <DiscoverPage>
        <h2 style={{ fontSize: '32px', display: 'flex', justifyContent: 'center', marginTop: '5px' }}>探索</h2>
        <h2 style={{ fontSize: '24px', display: 'flex', justifyContent: 'center', marginTop: '15px' }}>了解区块链产品，发现最新投资机会</h2>
        {/* <div className='card-tool-bar'>
          <div className='too-bar-left'>
            <Input
              placeholder='搜索'
              bordered={false}
              suffix={<SearchOutlined/>}
              style={{ backgroundColor: 'white', borderRadius: '6px', width: '250px', border: '1px solid #4040FF' }}/>
          </div>
          <div className='too-bar-right'>
            <Select
              placeholder='分类'
              style={{ width: 120, backgroundColor: 'white', border: '1px solid #4040FF' }}
              allowClear
              bordered={false}
              className='card-tool-select'
              dropdownStyle={{ borderRadius: '8px' }}
              dropdownClassName='card-select-drop'>
              <Option value='全部'>全部</Option>
              <Option value='主流币'>主流币</Option>
              <Option value='稳定币'>稳定币</Option>
              <Option value='Defi'>Defi</Option>
              <Option value='Web3'>Web3</Option>
              <Option value='交易所'>交易所</Option>
              <Option value='DAO'>DAO</Option>
            </Select>
            <Select
              placeholder='区块链'
              style={{ width: 120, backgroundColor: 'white', border: '1px solid #4040FF' }}
              allowClear
              bordered={false}
              className='card-tool-select'
              dropdownStyle={{ borderRadius: '8px' }}
              dropdownClassName='card-select-drop'>
              <Option value='全部'>全部</Option>
              <Option value='自生为链'>自带链</Option>
              <Option value='以太坊'>以太坊</Option>
              <Option value='BSC'>BSC</Option>
            </Select>
            <Select
              placeholder='排序'
              style={{ width: 150, backgroundColor: 'white', border: '1px solid #4040FF' }}
              allowClear
              bordered={false}
              className='card-tool-select'
              dropdownStyle={{ borderRadius: '8px' }}
              dropdownClassName='card-select-drop'>
              <Option value='市值从大到小'>市值从大到小</Option>
              <Option value='市值从小到大'>市值从小到大</Option>
              <Option value='发布时间从近到晚'>发布时间从近到晚</Option>
              <Option value='发布时间从完到近'>发布时间从完到近</Option>
            </Select>
          </div>
        </div> */}
        <div className='card-all'>
          {
            isLoading && <Spin
              size='large'
              className='abs-center'
            />
          }
          {
            coinList.map((coin) => (
              <div
                className='card-item'
                key={coin.key}>
                <DiscoveryCard coin={coin} />
              </div>
            ))
          }
        </div>
      </DiscoverPage>
      <LSAppFooter/>
    </div>
  );
});
