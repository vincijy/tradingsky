import React, { memo, useState } from 'react';
import { Card, Button, Modal } from 'antd';

import LSAppFooter from '@/components/footer'; // 尾部
import { ossImgs } from '@/oss';
import { PriceWrapper, PricePageWrapper } from './style';
// 月：120（日均4元）
// 季：299（日均3.3元）
// 年：999（日均2.7元）

const priceList = [
  {
    title: '季费',
    price: '¥299',
    average: '日均3.3元',
    unit: '季',
    content: '季付款，价格低至日均3.3元。不仅满足您最基本的数据需求，还会为您提供数据市场的最新研报。',
  },
  {
    title: '年费',
    price: '¥999',
    average: '日均2.7元',
    unit: '年',
    content: '年付款，价格低至日均2.7元。有更专业的科学家团队为您解读数据原理，帮助您与数据更好的结合。',
  },
];


export default memo(function PricePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <PricePageWrapper style={{ height: '100%' }}>
      <PriceWrapper>
        <div className='site-card-wrapper'>
          <div className='price-row'>
            {
              priceList.map((item) => (
                <div key={item.price}>
                  <Card
                    hoverable
                    title={item.title}
                    bordered>
                    <div className='price-money'>
                      {item.price}
                      <span className='price-unit'>/{item.unit}</span>
                    </div>
                    <div className='price-average'>
                      { item.average }
                    </div>
                    <div className='price-desc'>
                      { item.content }
                    </div>
                    <Button
                      type='primary'
                      onClick={ showModal }
                      block>
                    支付
                    </Button>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
      </PriceWrapper>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div style={{ textAlign: 'center' }}>
          <p>为了提供更好的售后支持, 请加微信开通~</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={ossImgs.qrcode}
            width={200}
            height={200}
            alt='微信二维码' />
        </div>
      </Modal>
      <LSAppFooter/>
    </PricePageWrapper>
  );
});
