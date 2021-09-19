// 第三方
import React, { memo } from 'react';
import { VipTip } from './style';
export default memo(function VipRequired() {
  return (
    <div className='content'>
      <VipTip>
        <div className='vip-tip-text'>
          付费解锁高级数据
        </div>
        <div className='qrcode-wrap'>
          <div className='qrcode'/>
        </div>
      </VipTip>,
    </div>
  );
});
