import { memo, useEffect, useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

import { Spin } from 'antd';

import { useAppSelector, useAppDispatch } from '@/hooks';

import LSChartDoubleLine from '@/components/chart/line';
import { getChart, getHighCharts } from '@/components/chart';
import { getChartData, getAssetPrice } from '@/api/chart';

import { LoadingOutlined } from '@ant-design/icons';
import { setBtcPriceData } from '@/store/chart/action';
import { TypeDataRow } from '@/components/chart/def';
import LoginButton from '@/components/login_btn';
import RegisterButton from '@/components/register_btn';
import { Provider } from 'react-redux'; // 集中管理状态
import store from '@/store';
import LSChartToolbox from '../chart_toolbox';
import LSChartHead from '../char_head';
import LSChartCover from '../chart_cover';
import { BoxWrapper, ChartLoadingWrapper, WaterMask } from './style';

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin />
);

export default memo(function LSChartBox() {
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

  // 读取选中的菜单
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const { args: { index },
    loginRequired,
    vipRequired,
    name,
  } = selectedSubMenu;
  const asset = useAppSelector((state) => state.chart.dataAsset); // 切换币种

  // 读取用户的信息
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const role = userInfo.role || { code: 'level1', description: '' };


  const [vipRequired__, setvipRequired__] = useState(false);
  const [loginRegisterRequiredVisible, setLoginRegisterRequiredVisible] = useState(false);
  const [noDataVisible, setNoDataVisible] = useState(false);
  const [coverImgVisible, setCoverImgVisible] = useState(false);

  useLayoutEffect(() => {
    reflow();

    // 如果需要登录, 但是没有登录
    if (loginRequired && !isLogin) {
      setCoverImgVisible(true);
      setLoginRegisterRequiredVisible(true);
      return;
    }

    // 检查是否为VIP,TODO: fix type, enum
    if (loginRequired && vipRequired && role.code !== 'level2') {
      setCoverImgVisible(true);
      setvipRequired__(true);
      return;
    }
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
      getAssetPrice(asset)
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
          // 价格缓存
          // dipatch(setBtcPriceData({
          //   btcPriceData: dataB,
          // }));
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


  const [loadingVisible, setLoadingVisible] = useState(false);
  const showLoading = () => {
    setLoadingVisible(true);
  };
  const hideLoading = () => {
    setLoadingVisible(false);
    setvipRequired__(false);
    setCoverImgVisible(false);
    setNoDataVisible(false);
  };
  const oneVisible = loginRegisterRequiredVisible || vipRequired__ || loadingVisible || coverImgVisible || noDataVisible;
  return (
    <BoxWrapper>
      <div id='container' >
        <LSChartHead/>
        <LSChartToolbox />
        {
          oneVisible &&
          <LSChartCover
            loginRegisterRequiredVisible={loginRegisterRequiredVisible}
            vipRequiredVisible={vipRequired__}
            loadingVisible={loadingVisible}
            coverImgVisible={coverImgVisible}
            noDataVisible={noDataVisible}
          />
        }

        <LSChartDoubleLine
          seriesA={ { data: dataA, name: name } }
          seriesB={ { data: dataB, name: '价格' } }
        />
      </div>
    </BoxWrapper>
  );
});
