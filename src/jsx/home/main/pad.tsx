// 第三方
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { Carousel } from 'antd';
import { MainWrapper } from './pad_style';

export default memo(function LSHomeMainPad() {
  // other hook
  const history = useHistory();

  // handle function
  const goChart = () => {
    history && history.push('/chart');
  };

  return (
    <MainWrapper>
      <div className='content'>
        <div className='home-container'>
          <div className='home-slogon'>
            <h2>
            链数查：链上数据使投资变得更透明
            </h2>
            <p>
                          您的链上数据访问门户，点击查看您的第一张动态数据图表
            </p>
          </div>
          <div className='btn-area'>
            <a
              target='_blank'
              rel='noreferrer'
              onClick={() => goChart()}
              className='btn'>免费使用
            </a>
          </div>
          <div className='pad'>
            <div className='pad_inner_box'>
              <Carousel autoplay>
                <div>
                  <h3 />
                </div>
                <div>
                  <h3 />
                </div>
                <div>
                  <h3 />
                </div>
                <div>
                  <h3 />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
});
