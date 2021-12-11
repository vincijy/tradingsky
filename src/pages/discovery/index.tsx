import React, { memo, useEffect, useRef, useState } from 'react';
import { Card, Input, Select, Spin, Pagination, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import bitcoinLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';
import LSAppFooter from '@/components/footer'; // footer

import DiscoveryCard from '@/pages/discovery/card';
import { getCoin, getCoinList, getDynamicCoin } from '@/api/discovery';
import { ICoin } from '@/api/def';
import { DiscoverPage } from './style';
const log = console.log.bind(console);

const pageSize = 10;

const tagOptions = [
  {
    key: 'all',
    value: '全部',
  },
  {
    key: 'main_stream',
    value: '主流币',
  },
  {
    key: 'stable',
    value: '稳定币',
  },
  {
    key: 'defi',
    value: 'Defi',
  },
  {
    key: 'web3',
    value: 'Web3',
  },
  {
    key: 'defi',
    value: '交易所',
  },
  {
    key: 'dao',
    value: 'DAO',
  },
];

const chainOptions = [
  {
    key: 'all',
    value: '全部',
  },
  {
    key: 'eth',
    value: '以太坊',
  },
  {
    key: 'self',
    value: '自带链',
  },
  {
    key: 'bsc',
    value: 'BSC',
  },
];

export default memo(function Item() {
  const { Option } = Select;
  const [ isLoading, setIsLoading] = useState(true);
  const [coinList, setCoinList] = useState([] as ICoin[]);

  const [pageId, setPageId] = useState(1);
  const [total, setTotal] = useState(1);

  const onPageChange = (page:number) => {
    setPageId(page);
  };

  const [searchVal, setSearchVal] = useState('');
  const onChange = (e:HTMLInputElement) => {
    setSearchVal((e as any).target.value);
  };
  const tagRef = useRef('');
  const chainRef = useRef('');
  const search = () => {
    setCoinList([]);
    getCoinList({ pageId: pageId, pageSize: pageSize, briefName: searchVal, tag: tagRef.current, chain: chainRef.current } as any).then((res) => {
      const { list, total } = res.data;
      setTotal(total);
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
  };
  const tagSelect = (e:any) => {
    if (e === 'all') {
      tagRef.current = '';
      search();
      return;
    }
    tagRef.current = e;
    search();
  };
  const chainSelect = (e:any) => {
    if (e === 'all') {
      chainRef.current = '';
      search();
      return;
    }
    chainRef.current = e;
    search();
  };

  useEffect(() => {
    search();
  }, [pageId]);

  const onPressEnter = () => {
    search();
  };

  return (
    <div>
      <DiscoverPage>
        <h2
          className='card-title'
          style={{ justifyContent: 'center', marginTop: '5px' }}>探索
        </h2>
        <h2
          className='card-title-introduce'
          style={{ justifyContent: 'center', marginTop: '15px', marginBottom: '35px' }}>了解区块链产品，发现最新投资机会
        </h2>
        <div className='card-tool-bar'>
          <div className='tool-bar-left'>
            <Input
              placeholder='搜索'
              bordered={false}
              onChange={(e:any) => onChange(e)}
              onPressEnter={onPressEnter}
              suffix={<SearchOutlined/>}
              className='tool-search'
              style={{ backgroundColor: 'white', borderRadius: '6px', border: '1px solid #4040FF' }}/>
          </div>
          <div className='tool-bar-right'>
            <Select
              placeholder='分类'
              style={{ width: 120, backgroundColor: 'white', border: '1px solid #4040FF' }}
              allowClear
              bordered={false}
              className='card-tool-select'
              dropdownStyle={{ borderRadius: '8px' }}
              onChange={(e) => tagSelect(e)}
              dropdownClassName='card-select-drop'>
              {
                tagOptions.map((item) =>
                  <Option
                    key={item.key}
                    value={item.key}>{item.value}
                  </Option>)
              }
            </Select>
            <Select
              placeholder='区块链'
              style={{ width: 120, backgroundColor: 'white', border: '1px solid #4040FF' }}
              allowClear
              bordered={false}
              className='card-tool-select'
              onChange={(e) => chainSelect(e)}
              dropdownStyle={{ borderRadius: '8px' }}
              dropdownClassName='card-select-drop'>
              {
                chainOptions.map((item) =>
                  <Option
                    key={item.key}
                    value={item.key}>{item.value}
                  </Option>)
              }
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
              <Option value='发布时间从近到晚'>发布从早到晚</Option>
              <Option value='发布时间从完到近'>发布从晚到早</Option>
            </Select>
          </div>
        </div>
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
        <Row style={{ marginTop: '20px' }}>
          <Col
            span={24}
            style={{ textAlign: 'center' }}>
            <Pagination
              simple
              defaultCurrent={1}
              total={total}
              pageSize={pageSize}
              onChange={ onPageChange }
            />
          </Col>
        </Row>
      </DiscoverPage>
      <LSAppFooter/>
    </div>
  );
});
