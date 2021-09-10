import { memo } from 'react';

import LSAppFooter from '@/components/footer'; // 尾部

import { PirateWrapper } from './style';

export default memo(function LSPiratePage() {
  return (
    <PirateWrapper>
      <div className='title' />
      <div className='join-us'>
        <div className='content'>
          <h2>加入我们</h2>
          <p>Q：什么是海盗精神？</p>
          <p>A：在通向未知的领域时，要永远保持好奇心；要为自己的工作感到自豪，崇尚自由而不受传统束缚，敢于冒险，拥有超强的团队精神和执行能力。</p>
          <p className='联系方式（微信）：hedge_zhu'/>
          <p/>
        </div>
      </div>
      <LSAppFooter />
    </PirateWrapper>
  );
});
