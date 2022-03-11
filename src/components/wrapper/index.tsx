// 第三方
import React, { memo, useEffect } from 'react';
import { getUrlParams } from '@/utils/url';
import { StorageKey } from '@/def';
export default memo(function Wrapper() {
  useEffect(() => {
    const params = getUrlParams();
    if (params.sharerUserId) {
      localStorage.setItem(StorageKey.sharerUserId, params.sharerUserId);
    }
  }, []);
  return (
    <>
    </>
  );
});
