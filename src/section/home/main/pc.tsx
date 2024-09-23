/* eslint-disable react/no-multi-comp */
// 第三方
import React, { memo, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ossImgs } from '@oss';
import { navigate } from 'gatsby';

import { Card, Button } from 'antd';
import { MainWrapper } from './pc_style';


export default memo(function LSHomeMain(props:any) {

  const goChart = () => {
    navigate('/chart');
  };

  function onSignIn(googleUser:any) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  return (
    <MainWrapper>
      <div className='HeroContainer'>
        <main className='HeroMain'>
          <h1 className='slogan animate__animated animate__fadeInDown'>
            解锁隐藏信号, 洞察市场趋势
          </h1>
          <p
            className='animate__animated animate__fadeInDown'
            style={{ textIndent: '6px' }}> { 'QKLData 专注于研究复杂的链上数据,'}
          </p>
          <p
            className='animate__animated animate__fadeInDown'
            style={{ textIndent: '6px' }}> { '提供链上资本流动、资产面和市场情绪的独特见解。'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px', marginTop: '30px' }}>
            <Button
              className='startBtn'
              size='large'
              type='primary'
              onClick={goChart}
            >
              开始使用
            </Button>
            <div id="g_id_onload"
                data-client_id="660388239328-g0h70bqq00uekqmsfdgsovv3thqq1dm3.apps.googleusercontent.com"
                data-ux_mode="redirect"
                data-login_uri="https://qkldata.com">
            </div>
            <div class="g_id_signin"
                  data-type="standard"
                  data-size="large"
                  data-theme="outline"
                  data-text="sign_in_with"
                  data-shape="rectangular"
                  data-logo_alignment="left">
            </div>
            <div id="g_id_onload"
                data-client_id="660388239328-g0h70bqq00uekqmsfdgsovv3thqq1dm3.apps.googleusercontent.com"
                data-login_uri="https://qkldata.com"
                data-your_own_param_1_to_login="any_value"
                data-your_own_param_2_to_login="any_value">
            </div>

          </div>
        </main>
        <div
          className='HeroChartSection' style={{position: 'relative', height: '500px !important'}}>
          <div className='HeroImg1 animate__animated animate__fadeInDown'>
            <img src={ossImgs.drowdownChart} width={'100%'}></img>
          </div>
          <div className='HeroImg2 animate__animated animate__fadeInDown'>
            <img src={ossImgs.greedyChart} width={'100%'}></img>
          </div>
        </div>
      </div>
      {/* <div className='intro' /> */}
    </MainWrapper>
  );
});
