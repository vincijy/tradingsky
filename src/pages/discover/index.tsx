import React, { memo, useState } from 'react';
import { Card, Button, Modal, Avatar } from 'antd';
import LSAppFooter from '@/components/footer'; // 尾部
import Head from './discover_head';
import List from './discover_list';
import { DiscoverWrapper, DiscoverPageWrapper } from './style';

export default memo(function PricePage() {
  const { Meta } = Card;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <DiscoverPageWrapper>
      <Head/>
      <DiscoverWrapper>
        <List/>
      </DiscoverWrapper>
      <LSAppFooter/>
    </DiscoverPageWrapper>
  );
});
