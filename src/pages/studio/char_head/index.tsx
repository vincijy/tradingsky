import { memo } from 'react';
import btcLogo from '@/assets/img/btc_logo.png';
import { useAppSelector } from '@/hooks';
import { ChartTitleArea } from './style';

export default memo(function LSChartHead() {
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const { name } = selectedSubMenu;
  return (
    <ChartTitleArea>
      <img
        src={btcLogo}
        alt='比特币'
      />
      <span className='chart-title'> 比特币：{ name }</span>
    </ChartTitleArea>
  );
});
