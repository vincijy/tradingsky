
import { LineChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { stockFlow } from './stock_to_flow';
import { arh999 } from './arh999';
import { arh999x } from './arh999x';
import { sfDeflection } from './sf_deflection';
import { cvdd } from './cvdd';
import { marketHealth } from './market_health';
import { fairDeflection } from './fairvalue_deflection';
import { Pi } from './pi';
import { twoyearMultiplier } from './two_years_multiplier';
import { mayer } from './mayer';

export const evaluateIndice:D.MenuItem = {
  name: '估值指标',
  icon: <LineChartOutlined />,
  key: 'sub6',
  visible: true,
  assetList: ['btc'],
  subMenus: [
    Pi,
    twoyearMultiplier,
    stockFlow,
    arh999,
    arh999x,
    mayer,
    sfDeflection,
    cvdd,
    marketHealth,
    fairDeflection,
  ],
};
