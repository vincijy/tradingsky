
import React, { memo, useEffect, useState } from 'react';
import { Col, Row, Tag, Image, List, Avatar } from 'antd';
import { ICoin } from '@/api/def';
import { ossImgs } from '@/oss';
import { ContractWrapper } from './style';
interface Iprops {
  coin:ICoin;
};
export default memo(function Contact(props:Iprops) {
  const { coin } = props;
  const { contrastJson } = coin;
  const { contrastList } = JSON.parse(contrastJson);

  return (
    <ContractWrapper>
      <List
        itemLayout= 'horizontal'
        dataSource={contrastList}
        renderItem= {(item:any) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.imgSrc}/>}
              title={item.title}
              description= {item.address}
            />
            <div className='metamask'>🦊</div>
          </List.Item>
        )}
      />
    </ContractWrapper>

  );

});

