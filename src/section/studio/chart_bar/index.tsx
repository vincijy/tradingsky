import React, { memo, useEffect, useState } from 'react';

import { Button, Modal } from 'antd';
import { MenuFoldOutlined, UnlockFilled } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@hooks';
import { getHighCharts } from '@components/chart';
import { ossImgs } from '@oss';
import { toggleMenuVisible } from '@store/ui/action';
import { updateLayout } from '@store/ui/action';
import { isMobile } from '@utils/is';
import { assetList } from '@config/asset_list';
import { flatten } from 'lodash';
import { genImgUrl } from '@utils/img';
import AssetSelector from '../menu/asset_selector';
import CollectionButton from './collection_button';
import ShareButton from './share_button';
import { BarWrapper } from './style';

export default memo(function LSChartBar() {
// handle function
  const dispatch = useAppDispatch();
  const menuVisible = useAppSelector((state) => state.ui.menuVisible);
  const vipRequired = useAppSelector((state) => state.ui.currentMenu.subMenu.vipRequired);
  const role = useAppSelector((state) => state.user.userInfo.role);
  const shouldCoverIfNotPaid = vipRequired && (!role || role.code !== 'level2');
  // 渲染完成后, 动态设置宽度为图表的宽度
  const updateWidth = () => {
    const el = document.querySelector('.site-layout-background');
    if (!el) {
      return;
    }
    const { width: w } = el.getBoundingClientRect();
    dispatch(updateLayout({
      layout: {
        chartBoxWidth: w - 3,
      },
    }));
  };


  const reflowChart = () => {
    setTimeout(() => { // 图表容器自适应
      getHighCharts().charts.forEach((chart) => {
        chart && chart.reflow();
      });
      updateWidth();
    }, 0);
  };

  const toggleMenu = () => {
    dispatch(toggleMenuVisible({
      menuVisible: !menuVisible,
    }));
    reflowChart();
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const asset = useAppSelector((state) => state.chart.dataAsset);
  const { name } = selectedSubMenu;

  const assetItem = flatten(assetList.map((category) => category.children)).find((a:any) => a.key === asset);
  const logo = assetItem?.imgSrc;
  let assetName = assetItem?.displayValue;
  if (isMobile()) {
    assetName = assetItem?.displayValue.toLocaleUpperCase();
  }

  const chartBoxWidth = useAppSelector((state) => state.ui.layout.chartBoxWidth);

  const pcStyle = {
    marginLeft: '-30px',
    paddingLeft: '30px',
    marginRight: '-30px',
    paddingRight: '30px',
    zIndex: 1,
  };
  return (
    <BarWrapper>
      <div
        className='bar'
        style={ isMobile() ? {} : pcStyle }>
        {
          // 移动端隐藏菜单按钮
          isMobile() &&
          <Button
            size='small'
            onClick={ () => toggleMenu() }>
            <MenuFoldOutlined />
          </Button>
        }
        {
        // 币种切换
          !isMobile() &&
          <div
            className='asset-selector'
            style={{ right: `${chartBoxWidth + 30 }px` }}>
            <AssetSelector />
          </div>
        }
        {
          // 标题
          !isMobile() &&
          <div
            className='lsc-head-wrapper'
          >
            <img
              src={genImgUrl(logo as any)}
              alt={assetName}
              className='chart-head-img'
              style={{ marginBottom: '3px' }}
            />
            <span
              className='chart-title'
              style={ { fontWeight: 'bold' }}>
              {assetName}:
              { name }
            </span>
          </div>
        }

        <div className='btn-area'>
          {
            shouldCoverIfNotPaid &&
            <Button
            // style={{ textAlign: 'left', color: '#aaaaa', background: 'rgb(254, 234, 194)', height: '26px', lineHeight: '26px', padding: '0px 2px' }}
              onClick={ () => showModal() }>
              <UnlockFilled style={{ color: 'rgb(247, 147, 26)' }} />
              {
                isMobile() ? '解锁L2' : '解锁近期L2数据'
              }
            </Button>
          }
          <CollectionButton />
          <ShareButton />
          {
            shouldCoverIfNotPaid &&
          <div>
            <Modal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}>
              <div style={{ textAlign: 'center' }}>
                <p>L2数据为高级数据, 需将账号升级为L2才可访问近期数据</p>
                {/* <p>为了提供更好的售后支持, 请加微信开通~</p> */}
              </div>
              {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={ossImgs.qrcode}
                  width={200}
                  height={200}
                  alt='微信二维码' />
              </div> */}
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <a
                  href='/price'
                  style={{ color: 'orange', textDecoration: 'underline' }}>
            前往查看定价, 自助开通
                </a>
              </div>
            </Modal>
          </div>
          }
        </div>

      </div>
    </BarWrapper>
  );
});
