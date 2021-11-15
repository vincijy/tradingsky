import React, { memo } from 'react';
import { Card } from 'antd';
import Item from '../discover_item';
import { DiscoverList } from './style';


export default memo(function List() {
  const { Meta } = Card;

  return (
    <DiscoverList>
      <Item/>
    </DiscoverList>
  );
});
