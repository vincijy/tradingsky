
import { BsBank } from 'react-icons/bs';
import React from 'react';
import * as D from '../def';
import { grayscaleHolding } from './grayscale_holding';
import { grayscalePremium } from './grayscale_premium';
import { grayscaleFlow } from './grayscale_flow';
import { purposeHolding } from './purpose_holding';
import { purposeFlow } from './purpose_flow';

export const institution:D.MenuItem = {
  name: '机构',
  icon: <BsBank />,
  key: 'sub3',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    grayscaleHolding,
    grayscalePremium,
    grayscaleFlow,
    purposeHolding,
    purposeFlow,
  ],
};
