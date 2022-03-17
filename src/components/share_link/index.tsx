import React, { memo, useEffect, useState } from 'react';

import { Button, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { useAppSelector } from '@/hooks';

export default memo(function ShareLink() {
  const { id } = useAppSelector((state) => state.user.userInfo);

  const { host } = window.location;
  const url = `https://${host}?sharerUserId=${id}`;

  function copyToClipboard(text:string) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    (document as any).execCommand('copy');
    document.body.removeChild(elem);
    message.success('链接已经复制到剪贴板');
  };

  return (
    <div>
      <span>
        将链接分享给好友, 获取返佣收入: <span style={{ fontWeight: 'bold' }}>{ url }</span>
      </span>
      <Button
        size='small'
        onClick={ () => copyToClipboard(url) }
        type='text'
        style={{ marginLeft: '4px' }}
      >
        <LinkOutlined />
        复制
      </Button>
    </div>
  );
});
