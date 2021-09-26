import { memo, useEffect, useState, useLayoutEffect, useCallback, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import LSChartDoubleLine from '@/components/chart/line';
import { getHighCharts } from '@/components/chart';
import { getChartData, getAssetPrice } from '@/api/chart';
import { setPriceData } from '@/store/chart/action';
import { TypeDataRow } from '@/components/chart/def';
import axios from 'axios';
import { CancelTokenSource } from 'axios';
import { isMobile } from '@/utils/is';
import LSChartToolbox from '../chart_toolbox';
import LSChartHead from '../char_head';
import LSChartCover from '../chart_cover';
import { BoxWrapper } from './style';

let source:CancelTokenSource | undefined;

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
  const role = useMemo(() => userInfo.role || { code: 'level1', description: '' }, [userInfo]);

  // 初始化状态
  const [vipRequiredvisible, setvipRequiredVisible] = useState(false);
  const [loginRegisterRequiredVisible, setLoginRegisterRequiredVisible] = useState(false);
  const [noDataVisible, setNoDataVisible] = useState(false);
  const [coverImgVisible, setCoverImgVisible] = useState(false);

  useLayoutEffect(() => {
    reflow();
    // 如果需要登录, 但是没有登录, 要求登录(背景图 + 登录按钮)
    if (loginRequired && !isLogin) {
      setLoadingVisible(false);
      setvipRequiredVisible(false);
      setCoverImgVisible(true);
      setNoDataVisible(false);
      setLoginRegisterRequiredVisible(true);
      return;
    }

    // 如果非VIP, 要求VIP(背景图 + VIP入口)
    if (loginRequired && vipRequired && role.code !== 'level2') {
      setLoadingVisible(false);
      setvipRequiredVisible(true);
      setCoverImgVisible(true);
      setNoDataVisible(false);
      setLoginRegisterRequiredVisible(false);
      return;
    }

    // 全部重置为false, 必要的时候开启
    setLoadingVisible(false);
    setvipRequiredVisible(false);
    setCoverImgVisible(false);
    setNoDataVisible(false);
    setLoginRegisterRequiredVisible(false);
  }, [loginRequired, vipRequired, isLogin, role]);

  const priceData = useAppSelector((state) => state.chart.priceData);
  const currrentAsset = useAppSelector((state) => state.chart.dataAsset);
  const initData:TypeDataRow = [];
  const [dataA, setDataA] = useState(initData);
  const [dataB, setDataB] = useState(priceData[currrentAsset]);
  const dispatch = useAppDispatch();

  const requestData = () => {
    // 左边指标、右边价格
    // 指标
    setDataA(initData);
    setDataB(initData);
    showLoading();
    source && source.cancel();
    source = axios.CancelToken.source();

    // 请求指标数据的promise
    const p1 = new Promise<TypeDataRow>((resolve, reject) => {
      getChartData(index, asset, source)
        .then((res) => {
          resolve(res.data.rows || initData);
        })
        .catch((err) => {
          console.error(err);
          reject();
        });
    });

    // 请求价格数据的promise
    const p2 = new Promise<TypeDataRow>((resolve, reject) => {
      // 如果已经请求过了, 不必再次请求
      if (priceData[currrentAsset].length !== 0) {
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
          if (currrentAsset === 'btc') {
            dispatch(setPriceData({
              priceData: {
                ...priceData,
                btc: dataB,
              },
            }));
          } else if(currrentAsset === 'eth') {
            dispatch(setPriceData({
              priceData: {
                ...priceData,
                eth: dataB,
              },
            }));
          };
        } else {
          setDataB(priceData[currrentAsset]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 请求接口
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

    // 在指标和币种切换的时候,重新请求数据
  }, [asset, index, isLogin, role, vipRequired, loginRequired, userInfo]);


  const [loadingVisible, setLoadingVisible] = useState(false);
  const showLoading = () => {
    setLoadingVisible(true);
  };
  const hideLoading = () => {
    setLoadingVisible(false);
  };
  const menuVisible = useAppSelector((state) => state.ui.menuVisible);
  const oneVisible = loginRegisterRequiredVisible || vipRequiredvisible || loadingVisible || coverImgVisible || noDataVisible;
  return (
    <BoxWrapper>
      <div id='container' >
        <LSChartHead/>
        {
          !(isMobile() && menuVisible) &&
           <LSChartToolbox />
        }
        {
          oneVisible &&
          <LSChartCover
            loginRegisterRequiredVisible={loginRegisterRequiredVisible}
            vipRequiredVisible={vipRequiredvisible}
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
