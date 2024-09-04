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
  return (
    <MainWrapper>
      <div className='HeroContainer'>
        <main className='HeroMain'>
          <h1 className='animate__animated animate__fadeInDown'>解锁隐藏信号，洞察市场趋势
          </h1>
          <p
            className='animate__animated animate__fadeInDown'
            style={{ textIndent: '6px' }}> { 'QKLData 专注于研究复杂的链上数据，提供链上资本流动、资产面和市场情绪的独特见解。'}
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
          </div>
        </main>
        <div
          className='HeroChartSection' style={{position: 'relative', height: '500px !important'}}>
          <div className='HeroImg1'>
            <img src={ossImgs.drowdownChart} width={'100%'}></img>
          </div>
          <div className='HeroImg2'>
            <img src={ossImgs.greedyChart} width={'100%'}></img>
          </div>
        </div>
      </div>
      {/* <div className='intro' /> */}
    </MainWrapper>
  );
});
