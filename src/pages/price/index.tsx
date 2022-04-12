import React, { memo, useState } from 'react';
import { Card, Button, Modal, message } from 'antd';

import LSAppFooter from '@/components/footer'; // 尾部
import { ossImgs } from '@/oss';
import { alipayOrder, hupiPayOrder } from '@/api/pay';
import QRCode from 'qrcode';
import { useLoading, useAppSelector } from '@/hooks';
import { StorageKey } from '@/def';
import { PriceWrapper, PricePageWrapper } from './style';
import { PayMethod } from './def';
import CheckPaidTimer from './check_paid_timer';

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
  const [wechatPayQrcode, setWechatPayQrcode] = useState('');
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
  // TODO: refactor
  (window as any).handleCancel = handleCancel;

  const { isLoading, startLoading, stopLoading } = useLoading(undefined);
  const { id } = useAppSelector((state) => state.user.userInfo);
  const [orderId, setOrderId] = useState('');
  const payByAlipay = async(money:number) => {
    setPayMethod(PayMethod.alipay);
    if (!id) {
      message.error('请先登录');
      return;
    }
    const data = {
      'final_price': `${money}`,
      'user_id': id,
      'intro_user_id': localStorage.getItem(StorageKey.sharerUserId) || '',
    };
    startLoading();
    try {
      const res = await alipayOrder(data);
      const qrcode = res.data.data['alipay_trade_precreate_response']['qr_code'];
      const out_trade_no = res.data.data['alipay_trade_precreate_response']['out_trade_no'];
      setOrderId(out_trade_no);
      QRCode.toDataURL(qrcode, function(error:any, url:string) {
        setAlipayQrcodeBase64(url);
        showModal();
      });
    } catch (error) {
      console.error(error);
      message.error('支付宝生成订单失败, 请使用[微信]或者联系[客服微信]支付');
    } finally {
      stopLoading();
    }
  };
  (window as any).payByAlipay = payByAlipay;
  const payByHupi = async(money:number, method:PayMethod) => {
    setPayMethod(method);
    if (!id) {
      message.error('请先登录');
      return;
    }
    const data = {
      'final_price': `${money}`,
      'user_id': id,
      'intro_user_id': localStorage.getItem(StorageKey.sharerUserId) || '',
      'method': method,
    };
    startLoading();
    try {
      const res = await hupiPayOrder(data);
      const qrcode = res.data.data['url_qrcode'];
      const order_uid = res.data.data['order_uid'];
      setOrderId(order_uid);
      setWechatPayQrcode(qrcode);
      showModal();
    } catch (error) {
      console.error(error);
      message.error('微信生成订单失败, 请使用[支付宝]或者联系[客服微信]支付');
    } finally {
      stopLoading();
    }
  };
  (window as any).payByHupi = payByHupi;
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
                        onClick={ () => payByHupi(item.price, PayMethod.alipay)}
                        block>
                    支付宝
                      </Button>
                      <Button
                        loading={isLoading}
                        type='primary'
                        onClick={ () => payByHupi(item.price, PayMethod.wechat) }
                        block>
                    微信支付
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
        // <Modal
        //   visible={isModalVisible}
        //   onOk={handleOk}
        //   onCancel={handleCancel}>
        //   <div style={{ textAlign: 'center' }}>
        //     <p>暂不支持微信自动收款,可加微信客服开通或使用支付宝支付~</p>
        //   </div>
        //   <div style={{ display: 'flex', justifyContent: 'center' }}>
        //     <img
        //       src={ossImgs.qrcode}
        //       width={200}
        //       height={200}
        //       alt='微信联系二维码' />
        //   </div>
        // </Modal>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}>
          <div style={{ textAlign: 'center' }}>
            <p>{ payMethd === PayMethod.alipay ? '支付宝' : '微信' }支付:扫码开通~</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={wechatPayQrcode}
              width={200}
              height={200}
              alt='支付二维码' />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p>支付结束后, 请退出重新登录 </p>
          </div>
        </Modal>
      }
      {/* {
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
            <div style={{ textAlign: 'center' }}>
              <p>支付结束后, 请退出重新登录 </p>
            </div>
          </Modal>
      } */}
      {
        isModalVisible &&
          <CheckPaidTimer orderId={orderId}/>
      }

      <LSAppFooter/>
    </PricePageWrapper>
  );
});
