import React, { memo, useEffect, useState } from 'react';

import { Button, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@/hooks';

export default memo(function ShareButton() {
  const subMenu = useAppSelector((state) => state.ui.currentMenu.subMenu);
  const asset = useAppSelector((state) => state.chart.dataAsset);
  const share = () => {
    const { args: { index } } = subMenu;
    const { host, pathname } = window.location;
    const url = `${host}${pathname}?index=${index}&asset=${asset}`;
    copyToClipboard(url);
  };

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
    <Button
      size='small'
      onClick={ share }
      shape='round'
      type='link'
    >
      <LinkOutlined />
      分享
    </Button>
  );
});
