
import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { grayscaleHolding } from './grayscale_holding';
import { grayscalePremium } from './grayscale_premium';
import { grayscaleFlow } from './grayscale_flow';
import { purposeHolding } from './purpose_holding';
import { purposeFlow } from './purpose_flow';

export const institution:D.MenuItem = {
  name: '机构',
  icon: <PayCircleOutlined />,
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
