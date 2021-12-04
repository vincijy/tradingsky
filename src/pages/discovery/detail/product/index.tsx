
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
  const articleJson = JSON.parse((coin as any).articleJson);
  const { articleList } = articleJson;
  const navigateTo = (href:string) => {
    window.open(href);
  };
  const artilce = (article:any) => {
    const { title, summary, tagList, href } = article;
    return (
      <Row
        style={{ marginBottom: '40px', cursor: 'pointer' }}
        onClick={ (e) => navigateTo(href)}>
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
              tagList &&
              tagList.map((tag:any) => {
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
        articleList &&
        articleList.map((item:any) => (
          artilce(item)
        ))
      }
    </ProductWrapper>
  );
});
