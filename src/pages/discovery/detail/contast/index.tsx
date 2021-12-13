
import React, { memo, useEffect, useState } from 'react';
import { Col, Row, Tag, Image, List, Avatar, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { ICoin } from '@/api/def';
import { ossImgs } from '@/oss';
import { genImgUrl } from '@/utils/img';
import metamasklogo from '@/assets/img/metamask_logo.svg';
import { ContractWrapper } from './style';
interface Iprops {
  coin:ICoin;
};
export default memo(function Contact(props:Iprops) {
  const { coin } = props;
  const { contrastJson } = coin;
  const { contrastList } = JSON.parse(contrastJson);
  const copyAddress = () => {
    message.success('链接已经复制到剪贴板');
  };

  return (
    <ContractWrapper>
      <List
        itemLayout='horizontal'
        dataSource={contrastList}
        renderItem={(item:any) => (
          <List.Item>
            <CopyToClipboard text={item.address}
              onCopy={copyAddress}>
              <List.Item.Meta
                avatar={<Avatar style={{ marginTop: '10px', marginBottom: '10px' }} src={genImgUrl(item.imgSrc)}/>}
                title={item.title}
                description={item.address}
              />
            </CopyToClipboard>
            {
              item.metamask == 'true' &&
                <div className='metamask'><img style={{ height: '17.5px' }} src={metamasklogo} /></div>
            }
          </List.Item>
        )}
      />
    </ContractWrapper>

  );

});

