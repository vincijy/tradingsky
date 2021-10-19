// 第三方
import { memo } from 'react';
import { Select } from 'antd';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { getAnnotationManager } from '@/utils/annotation';
// 功能
import { changeAsset, toggleAnnotation } from '@/store/chart/action';

import { updateChartOption } from '@/store/chart/action';
import btcLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';
import { isMobile } from '@/utils/is';

export default memo(function AssetSelector() {
  const dispatch = useAppDispatch();
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const asset = useAppSelector((state) => state.chart.dataAsset);

  /**
   * 币种切换以后需要:
   *  1 批注重新绘制
   * @param value 币种
   */
  const changeDataAsset = (value:'eth' | 'btc') => {
    if (value === 'btc'){
      const action = changeAsset({
        dataAsset: 'btc',
      });

      dispatch(action);
    } else if (value === 'eth'){
      const action = changeAsset({
        dataAsset: 'eth',
      });

      dispatch(action);
    }
    dispatch(updateChartOption({
      options: selectedSubMenu.chart[value],
    }));
    // 关闭批注
    dispatch(toggleAnnotation({
      annotationVisible: false,
    }));
    const an = getAnnotationManager();
    an && an.clearAnnotationCircle();
  };

  return (
    <div className='asset-select'>
      <Select
        onSelect={ changeDataAsset }
        defaultValue={asset}
        style={{ width: isMobile() ? 260 : 120 }}
        bordered={false} >
        <Select.Option value='btc'><img
          src={btcLogo}
          height='16px'
          style={{ marginRight: '3px' }}/>比特币
        </Select.Option>
        <Select.Option value='eth'><img
          src={ethLogo}
          height='16px'
          style={{ marginRight: '3px' }}/>以太坊
        </Select.Option>
      </Select>
    </div>
  );
});
