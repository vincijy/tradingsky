import React, { memo } from 'react';

import { Card } from 'antd';
import { Button } from 'antd';
import { ossImgs } from '@oss';
import { useDynamicRender } from '@utils/dynamic';
import { InsightWrapper, InsightTop, InsightBottom } from './style';

export default memo(function LSHomeInsight() {
  const content = (
    <div>
      <InsightTop>
        <h2>洞见/指标原理</h2>
        <p>QKLData提供专业化的市场分析及指标原理介绍</p>
        <p>让您获取最前沿的数据解读和最新的市场情报</p>
        <Button type='primary'>
          <a
            href='https://weibo.com/p/1005057657665166/wenzhang?from=page_100505_profile&wvr=6&mod=wenzhangmore&articlefeed=1&is_article=1'
            target='_blank'
            rel='noreferrer'>洞见
          </a>
        </Button>
      </InsightTop>
      <InsightBottom>
        <Card
          className='insight-img'
          hoverable
          style={{ width: '25vw', height: '18.75vw' }}
          cover={<img
            alt='QKLData'
            src={ossImgs.chart_0}
            style={{ width: '100%' }} />}
          bordered={false}
        />
        <Card
          className='insight-img'
          hoverable
          style={{ width: '25vw', height: '18.75vw' }}
          cover={<img
            alt='QKLData'
            src={ossImgs.chart_0}
            style={{ width: '100%' }} />}
          bordered={false}
        />
        <Card
          className='insight-img insight-iphone'
          hoverable
          style={{ width: '25vw', height: '18.75vw' }}
          cover={<img
            alt='QKLData'
            src={ossImgs.chart_0}
            style={{ width: '100%' }} />}
          bordered={false}
        />
      </InsightBottom>
    </div>
  );
  useDynamicRender(content, 'insight_root');

  return (
    <InsightWrapper id='insight_root'/>
  );
});
