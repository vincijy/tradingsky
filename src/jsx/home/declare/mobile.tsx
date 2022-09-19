// 第三方
import React, { memo } from 'react';
// 本地
import { DeclareWrapper } from './mobile_style';

export default memo(function Declare() {
  return (
    <DeclareWrapper>
      <div className='declare-container'>
        <h2>免责声明</h2>
        <p>
          根据央行等部门发布“关于进一步防范和处置虚拟货币交易炒作风险的通知”本网站和服务不提供任何投资建议。
          所有数据研究均以学术目的为主，不用于投资交易。
          任何投资决策均不得基于网站或服务中包含的信息，您应对自己的投资决策承担全部责任。
          对于您因根据链数查所提供的信息做出的任何投资决策产生的任何伤害，链数查概不负责。
        </p>
      </div>
    </DeclareWrapper>
  );

});
