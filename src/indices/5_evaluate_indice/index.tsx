
import { FaChartBar } from 'react-icons/fa';
import React from 'react';
import * as D from '../def';
import { stockFlow } from './stock_to_flow';
import { ahr999 } from './ahr999';
import { ahr999x } from './ahr999x';
import { sfDeflection } from './sf_deflection';
import { cvdd } from './cvdd';
import { marketHealth } from './market_health';
import { fairDeflection } from './fairvalue_deflection';
import { Pi } from './pi';
import { twoyearMultiplier } from './two_years_multiplier';
import { mayer } from './mayer';
import { deltaTop } from './deltaTop';

export const evaluateIndice:D.MenuItem = {
  name: '估值指标',
  icon: <FaChartBar />,
  key: 'sub6',
  visible: true,
  assetList: ['btc'],
  subMenus: [
    // ahr999,
    // Pi,
    deltaTop,
    // twoyearMultiplier,
    stockFlow,
    sfDeflection,
    // mayer,
    // ahr999x,
    marketHealth,
    fairDeflection,
    cvdd,
  ],
};
