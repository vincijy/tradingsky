import { memo } from 'react';
import { useAppSelector } from '@/hooks';
import { isMobile } from '@/utils/is';
import { assetList } from '@/config/asset_list';
import { flatten } from 'lodash';
import { genImgUrl } from '@/utils/img';
import { ChartTitleArea } from './style';

export default memo(function LSChartHead() {
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const asset = useAppSelector((state) => state.chart.dataAsset);
  const { name } = selectedSubMenu;

  const assetItem = flatten(assetList.map((category) => category.children)).find((a:any) => a.key === asset);
  const logo = assetItem?.imgSrc;
  let assetName = assetItem?.displayValue;
  if (isMobile()) {
    assetName = assetItem?.key.toLocaleUpperCase();
  }

  const introduce = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const chartBoxWidth = useAppSelector((state) => state.ui.layout.chartBoxWidth);
  // 垃圾代码, PC端gap
  const pcStyle = {
    background: '#f0f2f5',
    width: chartBoxWidth + 2 * 30,
    marginLeft: '-30px',
    borderTop: '1px solid rgba(0,0,0,0.1)',
  };
  return (
    <ChartTitleArea>
      <div
        className='lsc-head-wrapper'
        style={ isMobile() ? {} : pcStyle }>
        {
          isMobile() &&
            <span>
              <img
                src={ genImgUrl(logo as string) }
                alt={assetName}
                className='chart-head-img'
              />
              <span
                className='chart-title'
                style={ { fontSize: isMobile() ? '14px' : '1rem' }}>
                {assetName}: { name }
              </span>
            </span>
        }

      </div>
    </ChartTitleArea>
  );
});
