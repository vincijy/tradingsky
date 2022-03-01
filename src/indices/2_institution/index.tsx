
import { BsBank } from 'react-icons/bs';
import React from 'react';
import * as D from '../def';
import { purposeHolding } from './purpose_holding';
import { purposeFlow } from './purpose_flow';

export const institution:D.MenuItem = {
  name: '机构',
  icon: <BsBank />,
  key: 'sub3',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    purposeHolding,
    purposeFlow,
  ],
};
