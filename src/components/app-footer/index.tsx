// 第三方
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

// 组件
import { Button } from 'antd';
import { WeiboOutlined, WechatOutlined, TwitterOutlined } from '@ant-design/icons';
import { FooterWrapper, FooterLeft, FooterRight } from './style'; // 样式

export default memo(function LSAppFooter() {
  return (
    <FooterWrapper>
      <div className='content'>
        <FooterLeft>
          <div>
                        暗淡蓝点 © 2021 - 版权所有
          </div>
        </FooterLeft>
        <FooterRight>
          <ul>
            <li>反馈</li>
            <li>联系我们</li>
            <li><NavLink to='pirate' style={{ color: 'white' }}>成为海盗</NavLink></li>
            <Button
              type='link'
              icon={<WeiboOutlined/>}
              href='https://weibo.com/u/7657665166?is_all=1'
              style={{
                color: 'white',
              }}
              target='_blank' />
            <Button
              type='link'
              icon={<WechatOutlined/>}
              href='https://weibo.com/u/7657665166?is_all=1'
              style={{
                color: 'white',
              }}
              target='_blank' />
            <Button
              className='footer-icon'
              type='link'
              icon={<TwitterOutlined/>}
              href='https://twitter.com/Lianshucha'
              style={{
                color: 'white',
              }}
              target='_blank' />
          </ul>
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});
