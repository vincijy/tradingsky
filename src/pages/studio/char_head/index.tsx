import { memo } from 'react';
import btcLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';
import { useAppSelector } from '@/hooks';
import { isMobile } from '@/utils/is';
import { ChartTitleArea } from './style';

export default memo(function LSChartHead() {
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const asset = useAppSelector((state) => state.chart.dataAsset);
  const { name } = selectedSubMenu;

  const logo = asset === 'btc' ? btcLogo : ethLogo;

  let assetName = asset === 'btc' ? '比特币' : '以太坊';

  if (isMobile()) {
    assetName = asset === 'btc' ? 'BTC' : 'ETH';
  }

  return (
    <ChartTitleArea>
      <img
        src={logo}
        alt={assetName}
        className='chart-head-img'
      />
      <span className='chart-title'> {assetName}: { name }</span>
    </ChartTitleArea>
  );
});
