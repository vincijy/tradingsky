import React, { memo, useState } from 'react';
import LSAppFooter from '@/components/footer'; // 尾部
import { ossImgs } from '@/oss';
import { Card, Avatar, Row } from 'antd';

import { ContactWrapper, ContactPageWrapper } from './style';

export default memo(function ContactPage() {

  const { Meta } = Card;

  return (
    <ContactPageWrapper style={{ height: '100%' }}>
      <ContactWrapper>
        <div className='card-top'>
          <Card style={{ width: 300, margin: '15px' }}
            cover={
              <img
                alt='example'
                src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/blue-and-turquoise-minimalist-mountain-landscape-matthias-hauser.jpg'
              />
            }>
            <Meta
              avatar={<Avatar src='https://images.fineartamerica.com/images-medium-large-5/the-hatchery-the-vault.jpg' />}
              title='联系邮箱：'
              description='contact@lianshucha.com'
            />
          </Card>
          <Card style={{ width: 300, margin: '15px' }}
            cover={
              <img
                alt='example'
                src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/sunset-and-red-mountain-landscape-abstract-minimalism-matthias-hauser.jpg'
              />
            }>
            <Meta
              avatar={<Avatar src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/earthrise-the-original-apollo-8-color-photograph-eric-glaser.jpg' />}
              title='联系微信：'
              description='hedge_zhu'
            />
          </Card>
        </div>
        <div className='card-bottom'>
          <Card title='discord社群' style={{ width: 300, margin: '15px' }}>
            <a href='https://discord.gg/jmKw6PRQ7W' target='_blank' rel='noreferrer'>点击进入社群，与开发者面对面</a>
          </Card>
          <Card title='微博' style={{ width: 300, margin: '15px' }}>
            <a href='https://weibo.com/u/7657665166?is_all=1' target='_blank' rel='noreferrer'>点击跳转微博</a>
          </Card>
          <Card title='Twitter' style={{ width: 300, margin: '15px' }}>
            <a href='https://discord.gg/jmKw6PRQ7W' target='_blank' rel='noreferrer'>点击进入Twitter，关注日常信息</a>
          </Card>
        </div>
        {/* <div>
          dicord: https://discord.com/invite/jmKw6PRQ7W
        </div>
        <div>
          mail: @dsd.com
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={ossImgs.qrcode}
            width={200}
            height={200}
            alt='微信二维码' />
        </div> */}
      </ContactWrapper>
      <LSAppFooter/>
    </ContactPageWrapper>
  );
});
