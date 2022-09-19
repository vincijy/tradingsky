// 第三方
import React, { memo } from 'react';
// 本地
import { DeclareWrapper } from './mobile_style';

export default memo(function Declare() {
  return (
    <DeclareWrapper>
      <div className='declare-container'>
        <h2>加入Discord</h2>
        <p>
        加入社群参与：每周项目周报、社群活动、链上直播、以及赏金任务
        </p>
        <div className= 'btn-area'>
          <a href='https://www.lianshucha.com/discovery' className='btn'>进入探索</a>
        </div>
      </div>
    </DeclareWrapper>
  );

});
