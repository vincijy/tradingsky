// 第三方
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

// 组件
import { Button } from 'antd';
import { WeiboOutlined, WechatOutlined, TwitterOutlined } from '@ant-design/icons';
import discordLogo from '@/assets/img/discord_logo_white.svg';
import { useDynamicRender } from '@/utils/dynamic';
import { FooterWrapper, FooterLeft, FooterRight } from './style'; // 样式
export default memo(function LSAppFooter() {
  const h = useHistory();
  const goPirate = () => {
    h.push('/pirate');
  };
  const content = (
    <div className='content'>
      <FooterLeft>
        <div>
                    链数查 © 2021 - 版权所有
        </div>
      </FooterLeft>
      <FooterRight>
        <ul>
          <li>反馈</li>
          <li>联系我们</li>
          <li>
            <div
              style={{ color: 'white' }}
              onClick={ goPirate }
            >成为海盗
            </div>
          </li>
          <div className='footer-iphone'>
            <Button
              type='link'
              href='https://discord.gg/jmKw6PRQ7W'
              style={{
                color: 'white',
              }}
              target='_blank' >
              <img style={{ height: '12px', marginRight: '-6px' }} src={discordLogo} />
            </Button>
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
              type='link'
              icon={<TwitterOutlined/>}
              href='https://twitter.com/Lianshucha'
              style={{
                color: 'white',
              }}
              target='_blank' />
          </div>
        </ul>
      </FooterRight>
    </div>
  );
  useDynamicRender(content, 'footer_root');
  return (
    <FooterWrapper id='footer_root'/>
  );
});
