
import React, { memo, useEffect, useState } from 'react';
import { Col, Row, Tag, Image } from 'antd';
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
      imgSrc: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      title: '比特币交割猛烈',
      content: '',
      href: 'www.baidu.com',
      summary: '这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.',
      tags: ['以太坊', '虚拟货币', 'eth'],
    },
    {
      imgSrc: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      title: '比特币交割猛烈',
      content: '',
      href: 'www.baidu.com',
      tags: ['A', 'B', 'c'],

      summary: '这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述. 这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.这是一段简单的描述.',
    },
    {
      imgSrc: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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
      <Row style={{ marginBottom: '40px' }}>
        <Col
          xs={ { span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 4 }}
          className='imgCol'
        >
          <Image
            src={article.imgSrc}
            preview={false}
          />
        </Col>
        <Col
          xs={ { span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 1 }}
          style={{ height: '20px' }}
        />
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 19 }}
          className='description'
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
                    color='blue'> { tag }
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
