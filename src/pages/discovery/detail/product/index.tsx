
import React, { memo, useEffect, useState } from 'react';
import { Col, Row, Tag } from 'antd';
import { ICoin } from '@/api/def';
import { ossImgs } from '@/oss';
import { ProductWrapper } from './style';
interface Iprops {
  coin:ICoin;
};
export default memo(function Product(props:Iprops) {
  const { coin } = props;
  (coin as any).articleList = [
    {
      title: '比特币交割猛烈',
      content: '',
      href: 'www.baidu.com',
      summary: '这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.',
      tags: ['A', 'B', 'c'],
    },
    {
      title: '比特币交割猛烈',
      content: '',
      href: 'www.baidu.com',
      tags: ['A', 'B', 'c'],

      summary: '这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.',
    },
    {
      title: '比特币交割猛烈',
      content: '',
      href: 'www.baidu.com',
      tags: ['A', 'B', 'c'],

      summary: '这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.',
    },
  ];

  const artilce = (article:any) => {
    const { title, summary, tags } = article;
    return (
      <Row style={{ height: '150px', marginBottom: '40px' }}>
        <Col
          xs={ { span: 7 }}
          sm={{ span: 7 }}
          lg={{ span: 7 }}
          className='debug'
        >
          <img
            className='postImg'
            src={ossImgs.chart_0}
            width={'100%'}
            object-fit='fill'
          />
        </Col>
        <Col
          xs={ { span: 1 }}
          sm={{ span: 1 }}
          lg={{ span: 1 }}
        />
        <Col
          xs={{ span: 16 }}
          sm={{ span: 16 }}
          lg={{ span: 16 }}
          className='description debug'
        >
          <div>
            <h3>{ title }</h3>
          </div>
          <div style={{ overflow: 'hidden', padding: '10px 0px', color: '#aaa' }}>
            { summary }
          </div>
          <div>
            {
              tags.map((tag:any) => {
                const a = 1;
                return (
                  <Tag
                    key={ tag }
                    style={{ color: '#aaa' }}> { tag }
                  </Tag>
                );
              })
            }
          </div>
        </Col>
      </Row>
    );
  };
  return (
    <ProductWrapper>
      {
        (coin as any).articleList.map((item:any) => (
          artilce(item)
        ))
      }
    </ProductWrapper>
  );
});
