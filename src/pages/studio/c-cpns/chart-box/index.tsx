// 第三方
import React, { memo, useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux'; // redux的hook
import ReactDOM from 'react-dom';

// 图标React 封装
import { Card, Spin, Button } from 'antd';

import { useAppSelector } from '@/hooks';


// 功能
import btcLogo from '@/assets/img/btc_logo.png';
import LSChartDoubleLine from '@/components/chart/line';
import { getHighCharts } from '@/components/chart';
import { getChartData, getBtcPrice } from '@/api/chart';

// 本地
import { SubMenuItem } from '@/config/def';
import { LoadingOutlined } from '@ant-design/icons';
import { setLoginPanelVisible } from '../../store/action';
import { BoxWrapper, ChartLoadingWrapper, WaterMask, ButtonArea, VipTip } from './style';

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin />
);

export default memo(function LSChartBox() {
  // 添加水印
  const [hasAddedCover, setHasAddedCover] = useState(false);
  const [hasAddedMountedDom, setHasAddedMountedDom] = useState(false);

  /**
   * 添加封面(用于遮挡图表)
   * @returns
   */
  const addCover = () => {
    if (hasAddedCover) {
      return;
    }
    const chartRoot = document.querySelector('.highcharts-root');

    // 添加图表封面
    const div = document.createElement('div');
    div.setAttribute('id', 'highchart-cover');
    chartRoot?.insertAdjacentElement('afterend', div);
    setHasAddedCover(true);
  };

  /**
   * 移除封面
   */
  const removeCover = () => {
    const cover = document.querySelector('#highchart-cover');
    cover && cover.remove();
    setHasAddedCover(false);
  };

  /**
   * resize
   */
  const reflow = () => {
    setTimeout(() => {
      getHighCharts().charts.forEach((chart) => {
        chart && chart.reflow();
      });
    }, 0);
  };

  /**
   * 添加一个提供水印, loading 挂载的节点
   */
  const addMountedDom = () => {
    if (hasAddedMountedDom) {
      return;
    }
    const chartRoot = document.querySelector('.highcharts-root');

    // 添加图表封面
    const div = document.createElement('div');
    div.setAttribute('id', 'mounted-dom');
    chartRoot?.insertAdjacentElement('afterend', div);
    setHasAddedMountedDom(true);
  };

  /**
   * 添加水印
   */
  const addWaterMask = () => {
    const mountedDom = document.querySelector('#mounted-dom');
    const waterMaskDom = document.querySelector('#water-mask');
    mountedDom && !waterMaskDom && ReactDOM.render(
      <WaterMask id='water-mask'/>,
      mountedDom,
    );
  };

  const removeWaterMask = () => {
    const mountedDom = document.querySelector('#mounted-dom');
    const waterMaskDom = document.querySelector('#water-mask');
    mountedDom && waterMaskDom && ReactDOM.unmountComponentAtNode(
      mountedDom,
    );
  };

  /**
   * 添加登录和注册按钮
   * @returns
   */
  const addBtns = () => {
    const bg = document.querySelector('#highchart-cover');

    const loginShow = () => {
      dipatch(setLoginPanelVisible({ loginPanelVisible: true }));
    };
    const registerShow = loginShow;

    ReactDOM.render(
      <ButtonArea>
        <div className='button-tip'>
          登录解锁图表页面
        </div>
        <div className='buttons-wrap'>
          <Button
            type='primary'
            onClick={loginShow}>
              登录
          </Button>
          <Button
            onClick={registerShow}>
              注册
          </Button>
        </div>
      </ButtonArea>,
      bg,
    );
  };

  /**
  * 移除登录和注册按钮
  */
  const removeBtns = () => {
    const bg = document.querySelector('#highchart-cover');
    bg && ReactDOM.unmountComponentAtNode(bg);
  };

  const addVipTip = () => {
    const bg = document.querySelector('#highchart-cover');
    ReactDOM.render(
      <VipTip>
        <div className='vip-tip-text'>
          付费解锁高级数据
        </div>
        <div className='qrcode-wrap'>
          <div className='qrcode'/>
        </div>
      </VipTip>,
      bg,
    );
  };

  const dipatch = useDispatch();

  // 读取选中的菜单
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.uiData.currentMenu);
  const { args: { index, asset },
    loginRequired,
    vipRequired,
    name,
  } = selectedSubMenu as SubMenuItem;

  // 读取用户的信息
  const isLogin = useAppSelector((state) => state.headerLogin.isLogin);
  const userInfo = useAppSelector((state) => state.headerLogin.userInfo);
  const role = userInfo.role || {};

  useLayoutEffect(() => {
    reflow();
    addMountedDom();

    // 如果需要登录, 但是没有登录
    if (loginRequired && !isLogin) {
      addCover();
      addBtns();
      removeWaterMask();
      return;
    }

    // 检查是否为VIP,TODO: fix type, enum
    if (loginRequired && vipRequired && role.code !== 'level2') {
      addCover();
      addVipTip();
      removeWaterMask();
      return;
    }

    // 否则移除
    removeCover();
    removeBtns();
  }, [loginRequired, vipRequired, isLogin]);


  const [dataA, setDataA] = useState([]);
  const [dataB, setDataB] = useState([]);

  /**
   * 请求接口数据
   */
  const requestData = () => {
    // 左边指标、右边价格
    // 指标
    setDataA([]);
    setDataB([]);
    showLoading();
    const p1 = new Promise<void>((resolve, reject) => {
      getChartData(index, asset)
        .then((res) => {
          setDataA((res as any).rows || []);
          resolve();
        })
        .catch((err) => {
          console.error(err);
          reject();
        });
    });

    const p2 = new Promise<void>((resolve, reject) => {
      // 多个图表公用的BTC价格, 只请求一次
      // TODO: 使用redux存储而不是直接挂在window上

      if ((window as any).btcPriceData) {
        resolve();
        return;
      }

      // 价格
      getBtcPrice()
        .then((res) => {
          const dataB = (res as any).rows || [];
          setDataB(dataB);
          // TODO: 使用redux存储而不是直接挂在window上
          (window as any).btcPriceData = dataB;
          resolve();
        })
        .catch((err) => {
          console.error(err);
          reject();
        });
    });

    Promise.all([p1, p2])
      .then(() => {
        hideLoading();
        // TODO: 使用redux存储而不是直接挂在window上
        // BTC 价格线数据, 之所以在这里更新是为了保证loading的时候空空如也
        setDataB((window as any).btcPriceData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (loginRequired && !isLogin) {
      return;
    }
    // TODO: 定义个enum值
    if (vipRequired && role.code !== 'level2') {
      return;
    }
    // TODO: vip
    requestData();
  }, [index, asset]);


  /**
   * 显示loading
   */
  const showLoading = () => {
    const dom = document.querySelector('#mounted-dom');
    if (!dom) {
      return;
    }
    const loadingDom = document.querySelector('#chart-loading');
    if (loadingDom) {
      return;
    }
    const newDom = dom.cloneNode(true) as Element;
    newDom.setAttribute('id', 'loading-mounted-dom');
    dom.insertAdjacentElement('afterend', newDom);
    removeWaterMask();
    ReactDOM.render(
      <ChartLoadingWrapper id='chart-loading'>
        <Spin
          indicator={antIcon}
          tip='加载中...'
          size='large'/>
      </ChartLoadingWrapper>
      , newDom);
  };

  /**
   * 隐藏loading
   */
  const hideLoading = () => {
    const dom = document.querySelector('#loading-mounted-dom');
    dom && ReactDOM.unmountComponentAtNode(dom);
    addWaterMask();
  };

  const cardTitle = (
    <div>
      <img
        src={btcLogo}
        alt='比特币' />
      {/* 这部分后面都用chain-data文件里的数据替换：logo、title、币种名 */}
      <span title='' > 比特币：{ name }</span>
    </div>
  );

  return (
    <BoxWrapper>
      <div id='container' >
        <Card
          title={ cardTitle }
          className='bord-box' >
          <LSChartDoubleLine
            seriesA={ { data: dataA, name: name } }
            seriesB={ { data: dataB, name: '价格' } }
          />
        </Card>
      </div>
    </BoxWrapper>
  );
});
