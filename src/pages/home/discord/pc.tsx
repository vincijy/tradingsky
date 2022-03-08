// 第三方
import { memo } from 'react';
import{ Button } from 'antd';

// 本地
import { DeclareWrapper } from './pc_style';

export default memo(function discord() {
  return (
    <DeclareWrapper>
      <div className='declare-container'>
        <h2>加入Discord</h2>
        <p>加入社群参与：每周项目周报、社群活动、链上直播、以及赏金任务</p>
        <Button className= 'explore-button' type='default'>
          <a href='https://discord.com/invite/jmKw6PRQ7W'>Discord</a>
        </Button>
      </div>
    </DeclareWrapper>
  );

});
