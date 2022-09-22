import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import { useDynamicRender } from '@utils/dynamic';

import { PirateWrapper } from './style';

export default memo(function LSHomePirate() {

  // other hook
  const history = useHistory();

  // handle function
  const goPirate = () => {
    history.push('/pirate');
  };

  const content = (
    <PirateWrapper>
      <div className='content'>
        <div className='container'>
          <h2>Welcome On Board</h2>
          <p>链数查欢迎您的加入</p>
          <p>欢迎成为海盗</p>
          <Button
            type='primary'
            onClick={() => goPirate()} >成为海盗
          </Button>
        </div>
      </div>
    </PirateWrapper>
  );

  useDynamicRender(content, 'pirate_root');

  return (
    <div id='pirate_root'/>
  );
});
