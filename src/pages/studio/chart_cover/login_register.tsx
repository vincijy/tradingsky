// 第三方
import React, { memo } from 'react';
import { Provider } from 'react-redux'; // 集中管理状态
import store from '@/store';
import LoginButton from '@/components/login_btn';
import RegisterButton from '@/components/register_btn';
import { ButtonArea } from './style';

export default memo(function LoginRegisterRequired() {
  return (
    <div className='content'>
      <Provider store={ store }>
        <ButtonArea>
          <div className='button-tip'>
          登录解锁图表页面
          </div>
          <div className='buttons-wrap'>
            <LoginButton
              type='primary'
              text='登录'
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <RegisterButton
              type='primary'
              text='注册'
            />
          </div>
        </ButtonArea>
      </Provider>
    </div>
  );
});
