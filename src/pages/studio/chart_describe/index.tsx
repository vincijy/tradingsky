// 第三方
import { memo } from 'react';
import { useAppSelector } from '@/hooks';
import { Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { DescribeWrapper, MarkdownWrapper } from './style';

export default memo(function LSChartDescribe() {

  // 选中的菜单
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const { introduce,
    assetList,
  } = selectedSubMenu;

  return (
    <DescribeWrapper>
      <div className='content-describe'>
        <Card
          title='指标介绍'
          className='bord-describe'>
          <MarkdownWrapper>
            <ReactMarkdown
              linkTarget='_blank'
              remarkPlugins={[remarkGfm]}
              className='lsc-markdown'>
              { introduce.text }
            </ReactMarkdown>
            <h3 className='title' >更新币种：</h3>
            <li>{ assetList.map((item:string) => item.toUpperCase()) + '' }</li>
          </MarkdownWrapper>
        </Card>
      </div>
    </DescribeWrapper>
  );
});
