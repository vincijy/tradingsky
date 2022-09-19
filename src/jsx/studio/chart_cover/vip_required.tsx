// 第三方
import React, { memo } from 'react';
import { Button } from 'antd';
import { VipTip } from './style';
export default memo(function VipRequired() {
  return (
    <div className='content'>
      <VipTip>
        <div className='vip-tip-text'>
          付费解锁高级数据
          <a href='/price'>
            点击了解定价
          </a>
        </div>
        <div className='qrcode-wrap'>
          <div className='qrcode'/>
        </div>
      </VipTip>
    </div>
  );
});
