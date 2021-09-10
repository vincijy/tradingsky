import { memo, useEffect, useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

import { Card, Spin } from 'antd';

import { useAppSelector, useAppDispatch } from '@/hooks';

import btcLogo from '@/assets/img/btc_logo.png';
import LSChartDoubleLine from '@/components/chart/line';
import { getHighCharts } from '@/components/chart';
import { getChartData, getBtcPrice } from '@/api/chart';

import { LoadingOutlined } from '@ant-design/icons';
import { setBtcPriceData } from '@/store/chart/action';
import { TypeDataRow } from '@/components/chart/def';
import LoginButton from '@/components/login_btn';
import RegisterButton from '@/components/register_btn';
import { Provider } from 'react-redux'; // 集中管理状态
import store from '@/store';
import LSChartToolbox from '../chart_toolbox';
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
    if (!bg) {
      return;
    }
    bg && ReactDOM.render(
      <Provider store={ store }>
        <ButtonArea>
          <div className='button-tip'>
          登录解锁图表页面
          </div>
          <div className='buttons-wrap'>
            <LoginButton
              type='primary'
              text='登录'
            />
            <RegisterButton
              type='primary'
              text='注册'
            />
          </div>
        </ButtonArea>
      </Provider>,
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

  const dipatch = useAppDispatch();

  // 读取选中的菜单
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const { args: { index, asset },
    loginRequired,
    vipRequired,
    name,
  } = selectedSubMenu;

  // 读取用户的信息
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const role = userInfo.role || { code: 'level1', description: '' };

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

  const btcPriceData = useAppSelector((state) => state.chart.btcPriceData);
  const initData:TypeDataRow = [];
  const [dataA, setDataA] = useState(initData);
  const [dataB, setDataB] = useState(btcPriceData);

  /**
   * 请求接口数据
   */
  const requestData = () => {
    // 左边指标、右边价格
    // 指标
    setDataA(initData);
    setDataB(initData);
    showLoading();

    const p1 = new Promise<TypeDataRow>((resolve, reject) => {
      getChartData(index, asset)
        .then((res) => {
          resolve(res.data.rows || initData);
        })
        .catch((err) => {
          console.error(err);
          reject();
        });
    });
    const p2 = new Promise<TypeDataRow>((resolve, reject) => {
      // 如果已经请求过了, 不必再次请求
      if (btcPriceData.length !== 0) {
        resolve(initData);
        return;
      }

      // 价格
      getBtcPrice()
        .then((res) => {
          resolve(res.data.rows || []);
        })
        .catch((err) => {
          console.error(err);
          reject();
        });
    });

    Promise.all([p1, p2])
      .then((res) => {
        hideLoading();
        const [dataA, dataB] = res;
        dataA.length > 0 && setDataA(dataA);
        if (dataB.length > 0) {
          setDataB(dataB);
          dipatch(setBtcPriceData({
            btcPriceData: dataB,
          }));
        } else {
          setDataB(btcPriceData);
        }
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
          className='bord-box'
        >
          {/* <LSChartToolbox /> */}
          <LSChartDoubleLine
            seriesA={ { data: dataA, name: name } }
            seriesB={ { data: dataB, name: '价格' } }
          />
        </Card>
      </div>
    </BoxWrapper>
  );
});
