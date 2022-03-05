import React, { memo, useState } from 'react';
import { Card, Button, Modal, message } from 'antd';

import LSAppFooter from '@/components/footer'; // 尾部
import { ossImgs } from '@/oss';
import { alipayOrder } from '@/api/pay';
import QRCode from 'qrcode';
import { useLoading } from '@/hooks';
import { PriceWrapper, PricePageWrapper } from './style';
import { PayMethod } from './def';
// 月：120（日均4元）
// 季：299（日均3.3元）
// 年：999（日均2.7元）

const priceList = [
  {
    title: '季费',
    price: 299,
    average: '日均3.3元',
    unit: '季',
    content: '季付款，价格低至日均3.3元。不仅满足您最基本的数据需求，还会为您提供数据市场的最新研报。',
  },
  {
    title: '年费',
    price: 999,
    average: '日均2.7元',
    unit: '年',
    content: '年付款，价格低至日均2.7元。有更专业的科学家团队为您解读数据原理，帮助您与数据更好的结合。',
  },
];


export default memo(function PricePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [alipayQrcodeBase64, setAlipayQrcodeBase64] = useState('');
  const [payMethd, setPayMethod] = useState(PayMethod.alipay);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { isLoading, startLoading, stopLoading } = useLoading(undefined);
  const payByAlipay = async(money:number) => {
    setPayMethod(PayMethod.alipay);
    const orderUid = '';
    const data = {
      'order_uid': orderUid,
      'final_price': money,
    };
    startLoading();
    try {
      const res = await alipayOrder(data);
      const qrcode = res.data.data['alipay_trade_precreate_response']['qr_code'];
      QRCode.toDataURL(qrcode, function(error:any, url:string) {
        setAlipayQrcodeBase64(url);
        showModal();
      });
    } catch (error) {
      console.error(error);
      message.error('支付宝生成订单失败, 请加客服微信支付');
    } finally {
      stopLoading();
    }
  };
  const payByWechat = async() => {
    setPayMethod(PayMethod.wechat);
    showModal();
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
                      ¥{item.price}
                      <span className='price-unit'>/{item.unit}</span>
                    </div>
                    <div className='price-average'>
                      { item.average }
                    </div>
                    <div className='price-desc'>
                      { item.content }
                    </div>
                    <div>
                      <Button
                        loading={isLoading}
                        type='primary'
                        onClick={ () => payByAlipay(item.price) }
                        block>
                    支付宝(推荐)
                      </Button>
                      <Button
                        type='primary'
                        onClick={ payByWechat }
                        block>
                    微信
                      </Button>
                    </div>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
      </PriceWrapper>
      {
        payMethd === PayMethod.wechat &&
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}>
          <div style={{ textAlign: 'center' }}>
            <p>暂不支持微信自动收款,可加微信客服开通或使用支付宝支付~</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={ossImgs.qrcode}
              width={200}
              height={200}
              alt='微信联系二维码' />
          </div>
        </Modal>
      }
      {
        payMethd === PayMethod.alipay &&
          <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div style={{ textAlign: 'center' }}>
              <p>支付宝:扫码开通(推荐)~</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={alipayQrcodeBase64}
                width={200}
                height={200}
                alt='支付宝二维码' />
            </div>
          </Modal>
      }

      <LSAppFooter/>
    </PricePageWrapper>
  );
});
