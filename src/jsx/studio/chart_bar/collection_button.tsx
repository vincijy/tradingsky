import React, { memo, useEffect, useState } from 'react';

import { Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@hooks';

import { updateUserCollection } from '@store/user/action';
import { setUserCollection } from 'src/service/user';
import { IUserInfo } from '@store/user/def';

export default memo(function CollectionButton() {
// handle function
  const dispatch = useAppDispatch();

  const { menu: selectedMenu, subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const collection = useAppSelector((state) => state.user.userInfo.collection);
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const [hasCollected, setHasCollected] = useState((false));
  const collect = async() => {
    setHasCollected(true);
    if (!collection) {
      const collection__ = {
        keyPaths: [
          {
            menuKey: selectedMenu.key,
            subMenuKey: selectedSubMenu.key,
          },
        ],
      };
      userInfo.collection = collection__;
      await store(userInfo);
      return;
    }
    // 检查是否已经在收藏中
    const keys = collection.keyPaths.map((item) => item.subMenuKey);
    if (!keys.includes(selectedSubMenu.key)) {
      collection.keyPaths.push({
        menuKey: selectedMenu.key,
        subMenuKey: selectedSubMenu.key,
      });
    }
    await store(userInfo);
  };

  /**
   * 存储在本地缓存 & redux, 服务端
   * @param userInfo 用户信息
   */
  const store = async(userInfo:IUserInfo) => {
    userInfo.collection && dispatch(updateUserCollection({
      collection: userInfo.collection,
    }));
    await setUserCollection({
      collection: JSON.stringify(userInfo.collection),
    });
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const cancelCollect = async() => {
    setHasCollected(false);
    if (!collection || !userInfo) {
      return;
    }
    const keys = collection.keyPaths.map((item) => item.subMenuKey);
    if (!keys.includes(selectedSubMenu.key)) {
      return;
    }
    const keyPaths = collection.keyPaths;
    collection.keyPaths = keyPaths.filter((item) => item.subMenuKey !== selectedSubMenu.key);
    userInfo.collection = collection;
    await store(userInfo);
  };

  useEffect(() => {
    if (collection) {
      const keyPaths = collection.keyPaths;
      for (const kp of keyPaths) {
        if (kp.subMenuKey === selectedSubMenu.key) {
          setHasCollected(true);
          return;
        }
      }
      setHasCollected(false);
    }
  }, [collection, selectedSubMenu]);

  return (
    <Button
      size='small'
      shape='round'
      type='link'
      onClick={ hasCollected ? cancelCollect : collect }
    >
      {
        hasCollected ?
          <HeartFilled style={{ color: 'red' } }/> :
          <HeartOutlined />
      }
      {
        hasCollected ?
          '收藏' :
          '收藏'
      }
    </Button>
  );
});
