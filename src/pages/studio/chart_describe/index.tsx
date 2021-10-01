// 第三方
import { memo } from 'react';
import { useAppSelector } from '@/hooks';
import { Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { DescribeWrapper } from './style';

export default memo(function LSChartDescribe() {

  // 选中的菜单
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const { introduce,
    assetList,
  } = selectedSubMenu;

  const example = `

## 指标介绍
+ 关于资格
+ 尼玛
+ 滚

## 指标使用
+ fuck
+ silly

* Lists
* [ ] todo
* [x] done

这是一个链接 [菜鸟教程](https://www.runoob.com)


> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

`;



  return (
    <DescribeWrapper>
      <div className='content-describe'>
        <Card
          title='指标介绍'
          className='bord-describe'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className='lsc-markdown'>
            { example }
          </ReactMarkdown>
        </Card>
      </div>
    </DescribeWrapper>
  );
});
