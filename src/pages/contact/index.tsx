import React, { memo, useState } from 'react';
import LSAppFooter from '@/components/footer'; // 尾部
import { ossImgs } from '@/oss';
import { Card, Avatar, Row } from 'antd';
import redContact from '@/assets/img/redContact.jpg';
import blueContact from '@/assets/img/blueContact.jpg';
import earthAvatar from '@/assets/img/earthAvatar.jpg';
import spaceAvatar from '@/assets/img/spaceAvatar.jpg';

import { ContactWrapper, ContactPageWrapper, ContactPageFooter } from './style';

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
                src={blueContact}
              />
            }>
            <Meta
              avatar={<Avatar src={spaceAvatar} />}
              title='联系邮箱：'
              description='contact@lianshucha.com'
            />
          </Card>
          <Card style={{ width: 300, margin: '15px' }}
            cover={
              <img
                alt='example'
                src={redContact}
              />
            }>
            <Meta
              avatar={<Avatar src={earthAvatar} />}
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
            <a href='https://twitter.com/Lianshucha' target='_blank' rel='noreferrer'>点击进入Twitter，关注日常信息</a>
          </Card>
        </div>
      </ContactWrapper>
      <ContactPageFooter>
        <LSAppFooter/>
      </ContactPageFooter>
    </ContactPageWrapper>
  );
});
