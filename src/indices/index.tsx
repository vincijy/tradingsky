import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from './def';
import { address } from './0_address';
import { exchange } from './1_exchange';
import { institution } from './2_institution';
import { marketPrice } from './3_market_price';
import { capitalEnv } from './4_capital_env';
import { evaluateIndice } from './5_evaluate_indice';
import { marketEmotion } from './6_market_emotion';
import { investorBehavior } from './7_investor_behavior';
import { miner } from './8_miner';
export const menus:D.MenuItem[] = [
  /**
   * 地址
   */
  address,

  /**
   * 交易所
   */
  exchange,

  /**
   * 机构
   */
  institution,

  /**
   * 市场与价格
   */
  marketPrice,

  /**
   * 资金环境
   */
  capitalEnv,

  /**
   * 估值指标
   */
  evaluateIndice,

  /**
   * 市场情绪
   */
  marketEmotion,

  /**
   * 投资者行为
   */
  investorBehavior,

  /**
   * 旷工
   */
  miner,
];
