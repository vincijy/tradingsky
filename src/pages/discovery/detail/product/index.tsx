
import React, { memo, useEffect, useState } from 'react';
import { Col, Row, Tag, Image, List, Avatar } from 'antd';
import { ICoin } from '@/api/def';
import { ossImgs } from '@/oss';
import { getPostListByTag, getTagList } from '@/api/post';
import { genImgUrl } from '@/utils/img';
import { ProductWrapper } from './style';
interface Iprops {
  coin:ICoin;
};

export default memo(function Product(props:Iprops) {
  const { coin } = props;
  const [articleList, setArticleList] = useState([]);
  const navigateTo = (href:string) => {
    window.open(href);
  };

  useEffect(() => {
    getTagList({ name: coin.key, pageId: 1, pageSize: 1 }).then((res:any) => {
      if (res.data.list.length < 1) {
        return;
      }
      const tagId = (res as any).data.list[0].id;
      // eslint-disable-next-line promise/no-nesting
      getPostListByTag(tagId, { pageId: 1, pageSize: 20 }).then((res:any) => {
        setArticleList(res.data.list);
      }).catch((e) => {
        console.error(e);
      });
    }).catch((e) => {
      console.log('e', e);
    });
  }, []);

  const artilce = (article:any) => {
    const { contentOutlink, img: imgHashName, tags, isContentOutside, introduction, createDate, title } = article;
    const imgSrc___ = genImgUrl(imgHashName);
    return (
      <Row
        style={{ marginBottom: '40px', cursor: 'pointer' }}
        onClick={ (e) => navigateTo(contentOutlink)}>
        <Col
          xs={ { span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 4 }}
          className='imgCol'
        >
          <Image
            src={imgSrc___}
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
            { introduction }
          </div>
          <div>
            {
              tags &&
              tags.map((tag:any) => {
                const a = 1;
                return (
                  <Tag
                    key={ tag }
                    color='blue'> { tag.toUpperCase() }
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
