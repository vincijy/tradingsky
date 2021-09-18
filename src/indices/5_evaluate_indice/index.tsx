
import { LineChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { stockFlow } from './stock_to_flow';
import { sfDeflection } from './sf_deflection';
import { cvdd } from './cvdd';
import { marketHealth } from './market_health';
import { fairDeflection } from './fairvalue_deflection';

export const evaluateIndice:D.MenuItem = {
  name: '估值指标',
  icon: <LineChartOutlined />,
  key: 'sub6',
  visible: true,
  assetList: ['btc'],
  subMenus: [
    stockFlow,
    sfDeflection,
    cvdd,
    marketHealth,
    fairDeflection,
  ],
};
