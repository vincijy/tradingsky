import { memo } from 'react';
import btcLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';
import { useAppSelector } from '@/hooks';
import { ChartTitleArea } from './style';

export default memo(function LSChartHead() {
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const asset = useAppSelector((state) => state.chart.dataAsset);
  const { name } = selectedSubMenu;

  const logo = asset === 'btc' ? btcLogo : ethLogo;
  const assetName = asset === 'btc' ? '比特币' : '以太坊';

  return (
    <ChartTitleArea>
      <img
        src={logo}
        alt={assetName}
        className='chart-head-img'
      />
      <span className='chart-title'> {assetName}：{ name }</span>
    </ChartTitleArea>
  );
});
