// 第三方
import React, { memo, useEffect, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // redux的hook
import ReactDOM from 'react-dom';

// 图标React 封装
import { Card, Spin, Button } from 'antd';

// 功能
import btcLogo from '@/assets/img/btc_logo.png';
import LSChartDoubleLine from '@/components/chart/line';
import { getHighCharts } from '@/components/chart';
import { getChartData, getBtcPrice } from '@/api/chart';

// 本地
import { SubMenuItem } from '@/config/def';
import { setLoginPanelVisible } from '../../store/action';
import { BoxWrapper, ChartLoadingWrapper, WaterMask, ButtonArea, VipTip } from './style';

const log = console.log.bind(console);

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
    const chartCover = document.querySelector('#mounted-dom');
    ReactDOM.render(
      <WaterMask/>,
      chartCover,
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
        <Button onClick={loginShow}>登陆</Button>
        <Button
          onClick={registerShow}
          type='primary'>注册
        </Button>
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
        <div className='qrcode'/>
        <div className='vip-tip-text'>
          添加客服微信开通VIP, 解锁图表
        </div>
      </VipTip>,
      bg,
    );
  };

  const dipatch = useDispatch();

  // 读取选中的菜单
  const selectedSubMenu = useSelector((state) => (state as any).getIn(['uiData', 'selectedSubMenu']));
  const { args: { index, asset },
    loginRequired,
    vipRequired,
    name,
  } = selectedSubMenu as SubMenuItem;

  // 读取用户的信息
  const isLogin = useSelector((state) => (state as any).getIn(['headerLogin', 'isLogin']));
  const userInfo = useSelector((state) => (state as any).getIn(['headerLogin', 'userInfo']));
  const { role } = userInfo;

  useLayoutEffect(() => {
    reflow();
    addMountedDom();

    // 登录检查
    if (loginRequired && !isLogin) {
      addCover();
      addBtns();
      return;
    }

    // 检查是否为VIP,TODO: fix type, enum
    if (vipRequired && role.code !== 'level2') {
      addCover();
      addVipTip();
      return;
    }
    // 否则移除
    removeCover();
    removeBtns();
    addWaterMask();
    console.log('run here');
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
    const p1 = new Promise(() => {
      getChartData(index, asset)
        .then((res) => {
          hideLoading();
          setDataA((res as any).rows || []);
        })
        .catch((err) => {
          console.error(err);
        });
    });

    const p2 = new Promise(() => {
      // 价格
      getBtcPrice()
        .then((res) => {
          setDataB((res as any).rows || []);
        })
        .catch((err) => {
          console.error(err);
        });
    });

    Promise.all([p1, p2])
      .then(() => {
        hideLoading();
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
    ReactDOM.render(
      <ChartLoadingWrapper id='chart-loading'>
        <Spin
          tip='加载中...'
          size='large'/>
      </ChartLoadingWrapper>
      , dom);
  };

  /**
   * 隐藏loading
   */
  const hideLoading = () => {
    const dom = document.querySelector('#mounted-dom');
    dom && ReactDOM.unmountComponentAtNode(dom);
  };

  const cardTitle = (
    <div>
      <img
        src={btcLogo}
        alt='比特币' />
      {/* 这部分后面都用chain-data文件里的数据替换：logo、title */}
      <span title='' > { name }</span>
    </div>
  );

  return (
    <BoxWrapper>
      <div id='container' >
        <Card
          title={ cardTitle }
          className='bord-box' >
          <LSChartDoubleLine
            dataA={ dataA }
            dataB={ dataB }
          />
        </Card>
      </div>
    </BoxWrapper>
  );
});
