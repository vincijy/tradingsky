import React, { memo, useEffect, useRef, useState } from 'react';
import { Input, Select, Spin, Pagination, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import LSAppFooter from '@/components/footer'; // footer

import DiscoveryCard from '@/pages/discovery/card';
import { getCoinList, getDynamicCoin } from '@/api/discovery';
import { ICoin } from '@/api/def';
import { DiscoverPage } from './style';
import { tagOptions, chainOptions } from './def';
const pageSize = 16;

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

  const [orderDescBy, setOrderDescBy] = useState('');
  const [orderAscBy, setOrderAscBy] = useState('');

  const sortBy = (key:string, desc_asc:'desc' | 'asc') => {
    setPageId(1);
    if (desc_asc === 'desc') {
      setOrderDescBy(key);
      setOrderAscBy('');
    } else if (desc_asc === 'asc') {
      setOrderDescBy('');
      setOrderAscBy(key);
    }
    search();
  };

  const search = () => {
    setCoinList([]);
    setIsLoading(true);
    getCoinList({ orderDescBy, orderAscBy, pageId: pageId, pageSize: pageSize, briefName: searchVal, tag: tagRef.current, chain: chainRef.current } as any).then((res) => {
      const { list, total } = res.data;
      setTotal(total);
      if (list.length === 0) {
        setIsLoading(false);
      }
      const newList = ([] as any).concat(list);
      setCoinList(newList);
      setIsLoading(false);
    }).catch((err) => {
      console.error(err);
    });
  };
  const tagSelect = (e:any) => {
    setPageId(1);
    if (e === 'all') {
      tagRef.current = '';
      search();
      return;
    }
    tagRef.current = e;
    search();
  };
  const chainSelect = (e:any) => {
    setPageId(1);
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
              onChange={ (e:'asc'|'desc') => sortBy('coinPublishDate', e) }
              dropdownClassName='card-select-drop'>
              {/* <Option value='市值从大到小'>市值从大到小</Option>
              <Option value='市值从小到大'>市值从小到大</Option> */}
              <Option value='asc'>发布从早到晚</Option>
              <Option value='desc'>发布从晚到早</Option>
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
