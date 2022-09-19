import React, { memo, useEffect, useRef, useState } from 'react';
import { Input, Select, Spin, Pagination, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import LSAppFooter from '@components/footer'; // footer

import DiscoveryCard from '@jsx/discovery/card';
import { getCoinList } from 'src/service/discovery';
import { ICoin } from 'src/service/def';
import { isProdEnv } from '@utils/is';
import { DiscoverPage } from './style';
import { tagOptions, chainOptions } from './def';

export default memo(function Item() {
  // // 宽屏20张卡片、其余10张卡片
  // const mediaMatch = window.matchMedia('(min-width: 1550px)');
  // const [matches, setMatches] = useState(mediaMatch.matches);
  // useEffect(() => {
  //   const handler = (e:any) => setMatches(e.matches);
  //   mediaMatch.addListener(handler);
  //   return () => mediaMatch.removeListener(handler);
  // });
  // const pageSize = matches ? 20 : 20;
  const pageSize = 20;

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

  const [orderDescBy, setOrderDescBy] = useState('coinPublishDate');
  const [orderAscBy, setOrderAscBy] = useState('');

  const sortBy = (e:string) => {
    const [key, desc_asc] = e.split('.');
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
    const payload = {
      orderDescBy,
      orderAscBy,
      pageId: pageId,
      pageSize: pageSize,
      briefName: searchVal,
      tag: tagRef.current,
      chain: chainRef.current,
    };
    // 生产环境需要过滤下仅仅显示已经发布的
    if (isProdEnv) {
      (payload as any)['statusCode'] = '1';
    }

    getCoinList(payload).then((res) => {
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
              onChange={ (e:string) => sortBy(e) }
              dropdownClassName='card-select-drop'>
              {/* <Option value='makeplaceRank.asc'>市值从大到小</Option>
              <Option value='makeplaceRank.desc'>市值从小到大</Option> */}
              <Option value='coinPublishDate.asc'>发布时间降序</Option>
              <Option value='coinPublishDate.desc'>发布时间升序</Option>
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
