// 第三方
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { navigate } from 'gatsby';
import { MainWrapper } from './pc_style';


export default memo(function LSHomeMain() {
  const goChart = () => {
    navigate('/chart');
  };

  return (
    <MainWrapper>
      <div className='content'>
        <div className='home-container'>
          <div className='home-slogon'>
            <h2>
            QKLData：区块链数据, 让投资归于理性
            </h2>
            <p>
            点击开启你的数据探索之旅
            </p>
          </div>
          <div className='btn-area'>
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => goChart()}
            >start
            </button>
          </div>
          {/* <div className='pad'>
            <div className='pad_inner_box'>
              <Carousel >
                <div>
                </div>
                <div>
                </div>
                <div>
                  <h3 />
                </div>
                <div>
                  <h3 />
                </div>
              </Carousel>
            </div>
          </div> */}
        </div>
      </div>
    </MainWrapper>
  );
});
