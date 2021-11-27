import React, { memo } from 'react';
import { Card, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import bitcoinLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';
import LSAppFooter from '@/components/footer'; // footer

import DiscoveryCard from '@/components/discovery_card';

import { DiscoverPage } from './style';

const assetList = [
  {
    title: '比特币 (BTC)',
    logo: bitcoinLogo,
    lable: '主流币',
    introduce: '比特币最早的去中心化加密货币',
  },
  {
    title: '以太坊 (ETH)',
    logo: ethLogo,
    lable: '主流币',
    introduce: '世界计算机',
  },
  {
    title: 'Tether (USDT)',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/usdt.svg',
    lable: '稳定币',
    introduce: '一种将加密货币与美元挂钩的稳定币',
  },
  {
    title: 'Binance USD (BUSD)',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/BUSD.png',
    lable: '稳定币',
    introduce: '由币安发行的美元稳定币',
  },
  {
    title: 'USD Coin (USDC)',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/usdc.svg',
    lable: '稳定币',
    introduce: 'Circle和Coinbase背书的稳定币',
  },
  {
    title: 'Uniswap (UNI)',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/UNISWAP.svg',
    lable: 'Defi',
    introduce: '主流的去中心化交易协议',
  },
  {
    title: 'SushiSwap (SUSHI)',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/SUSHI.jpg',
    lable: 'Defi',
    introduce: '主流的去中心化交易协议之一',
  },
  {
    title: 'Avalanche (AVAX)',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    lable: 'Defi',
    introduce: '新一代智能合约平台，以太坊的竞争对手之一',
  },
  {
    title: 'Decentraland (MANA)',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/mana.svg',
    lable: 'Metaverse',
    introduce: '基于以太坊的虚拟土地购买和开发的应用',
  },
  {
    title: 'Ethereum Name Service (ENS)',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ENS.jpg',
    lable: 'Web3',
    introduce: '以太坊的域名和身份基础设施',
  },
  {
    title: 'FTX Token (FTT)',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ftt.jpg',
    lable: '交易所',
    introduce: '加密衍生品交易平台 FTX',
  },
  {
    title: 'OKB',
    logo: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/OKB.png',
    lable: '交易所',
    introduce: '加密货币综合交易平台OKEx',
  },
  {
    title: 'ConstitutionDAO (PEOPLE)',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14806.png',
    lable: 'DAO',
    introduce: '为了拍下美国宪法副本而组织起来的DAO',
  },
];

export default memo(function Item() {

  const { Meta } = Card;
  const { Option } = Select;

  return (
    <div>
      <DiscoverPage>
        <h2 style={{ fontSize: '32px', display: 'flex', justifyContent: 'center', marginTop: '5px' }}>探索</h2>
        <h2 style={{ fontSize: '24px', display: 'flex', justifyContent: 'center', marginTop: '15px' }}>了解区块链产品，发现最新投资机会</h2>
        <div className='card-tool-bar'>
          <div className='too-bar-left'>
            <Input placeholder='搜索' bordered={false} suffix={<SearchOutlined/>} style={{ backgroundColor: 'white', borderRadius: '6px', width: '250px', border: '1px solid #e0e0e0' }}/>
          </div>
          <div className='too-bar-right'>
            <Select placeholder='分类' style={{ width: 120, backgroundColor: 'white' }} allowClear={true} bordered={false} className='card-tool-select'
              dropdownStyle={{ borderRadius: '8px' }} dropdownClassName='card-select-drop'>
              <Option value='全部'>全部</Option>
              <Option value='主流币'>主流币</Option>
              <Option value='稳定币'>稳定币</Option>
              <Option value='Defi'>Defi</Option>
              <Option value='Web3'>Web3</Option>
              <Option value='交易所'>交易所</Option>
              <Option value='DAO'>DAO</Option>
            </Select>
            <Select placeholder='区块链' style={{ width: 120, backgroundColor: 'white' }} allowClear={true} bordered={false} className='card-tool-select'
              dropdownStyle={{ borderRadius: '8px' }} dropdownClassName='card-select-drop'>
              <Option value='全部'>全部</Option>
              <Option value='自生为链'>自带链</Option>
              <Option value='以太坊'>以太坊</Option>
              <Option value='BSC'>BSC</Option>
            </Select>
            <Select placeholder='排序' style={{ width: 150, backgroundColor: 'white' }} allowClear={true} bordered={false} className='card-tool-select'
              dropdownStyle={{ borderRadius: '8px' }} dropdownClassName='card-select-drop'>
              <Option value='市值从大到小'>市值从大到小</Option>
              <Option value='市值从小到大'>市值从小到大</Option>
              <Option value='发布时间从近到晚'>发布时间从近到晚</Option>
              <Option value='发布时间从完到近'>发布时间从完到近</Option>
            </Select>
          </div>
        </div>
        <div className='card-all'>
          {
            assetList.map((item) => (
              <div className='card-item' key={item.title}>
                <DiscoveryCard item={item} />
              </div>
            ))
          }
        </div>
      </DiscoverPage>
      <LSAppFooter/>
    </div>
  );
});
