// 第三方
import { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import RegisterButton from '@/components/register_btn';
import { MainWrapper } from './style';

export default memo(function LSHomeMain() {
  // other hook
  const history = useHistory();

  // handle function
  const goChart = () => {
    history && history.push('/chart');
  };

  return (
    <MainWrapper>
      <div className='content'>
        <div className='container'>
          <h2>
                          LianShuCha：链上数据使投资变得更透明
          </h2>
          <h2 className='main-iphone'>
            链上数据使投资变得更透明
          </h2>
          <p>
                          链数查，您的链上数据访问门户，点击查看您的第一张动态数据图表
          </p>
          <div className='btns'>
            <Button
              type='primary'
              onClick={() => goChart()} >查看动态图表
            </Button>
            <RegisterButton
              type='primary'
              text='立即注册' />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
});
