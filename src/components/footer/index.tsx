// 第三方
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
// 组件
import { Button } from 'antd';
import { WeiboOutlined, WechatOutlined, TwitterOutlined } from '@ant-design/icons';
import discordLogo from '@assets/img/discord_logo_white.svg';
import { FooterWrapper, FooterLeft, FooterRight } from './style'; // 样式
export default memo(function LSAppFooter() {
  const h = useHistory();
  const goPirate = () => {
    h.push('/pirate');
  };

  const goContact = () => {
    h.push('/contact');
  };

  const content = (
    <div className='content'>
      <FooterLeft>
        <div>
                Tokenaly © 2022 - all rights reserved
        </div>
      </FooterLeft>
      {/* <FooterRight>
        <ul>
          <li><a href='https://discord.gg/zgkHnJyuJs' target='_blank' rel='noreferrer' style={{ color: 'white' }}>反馈</a></li>
          <li>
            <div
              style={{ color: 'white' }}
              onClick={ goContact }
            >联系我们
            </div>
          </li>
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
              <img style={{ height: '12.5px', marginRight: '-6px', marginBottom: '3.5px' }} src={discordLogo} />
            </Button>
            <Button
              type='link'
              icon={<TwitterOutlined/>}
              href='https://twitter.com/Lianshucha'
              style={{
                color: 'white',
              }}
              target='_blank' />
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
              href='https://mp.weixin.qq.com/s/qF_Hvqdgv3TENFjLLwgU2g'
              style={{
                color: 'white',
              }}
              target='_blank' />
          </div>
        </ul>
      </FooterRight> */}
    </div>
  );
  // useDynamicRender(content, 'footer_root');
  return (
    <FooterWrapper id='footer_root'>
      { content }
    </FooterWrapper>
  );
});
