// 第三方
import React, { memo } from 'react';
import { Select } from 'antd';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { getAnnotationManager } from '@/utils/annotation';
// 功能
import { changeAsset, toggleAnnotation } from '@/store/chart/action';

import { updateChartOption } from '@/store/chart/action';
import { isMobile } from '@/utils/is';
import { assetList } from '@/config/asset_list';
import { genImgUrl } from '@/utils/img';

export default memo(function AssetSelector() {
  const dispatch = useAppDispatch();
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const asset = useAppSelector((state) => state.chart.dataAsset);

  /**
   * 币种切换以后需要:
   *  1 批注重新绘制
   * @param value 币种
   */
  const changeDataAsset = (value:string) => {
    dispatch(changeAsset({
      dataAsset: value,
    }));
    selectedSubMenu.chart[value] && dispatch(updateChartOption({
      options: selectedSubMenu.chart[value],
    }));
    // 关闭批注
    dispatch(toggleAnnotation({
      annotationVisible: false,
    }));
    const an = getAnnotationManager();
    an && an.clearAnnotationCircle();
  };
  function onChange(value:any) {
    console.log(`selected ${value}`);
  }

  function onSearch(val:any) {
    console.log('search:', val);
  }
  const filterOption = (input:string, option:any) => {
    const matchKey = (option as any).key.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    const matchValue = (option as any).children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    return matchKey || matchValue;
  };
  return (
    <div className='asset-select'>
      <Select
        onSelect={ changeDataAsset }
        defaultValue={asset}
        showSearch
        placeholder='选择币种'
        optionFilterProp='children'
        onChange={onChange}
        onSearch={onSearch}
        style={{ width: isMobile() ? 260 : 120 }}
        bordered={false}
        filterOption={filterOption}
      >{
          assetList.map((category) => (
            <Select.OptGroup
              label={category.value}
              key={category.key}>
              {
                category.children.map((item) => (
                  <Select.Option
                    value={item.key}
                    key={item.key}>
                    <img
                      src={genImgUrl(item.imgSrc)}
                      height='16px'
                      style={{ marginRight: '3px' }}/>
                    {item.displayValue}
                  </Select.Option>
                ))
              }
            </Select.OptGroup>
          ))
        }
      </Select>
    </div>
  );
});
