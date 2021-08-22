// 第三方
import React, { memo, useEffect, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // redux的hook

// 图标React 封装
import { Card } from 'antd';

// 功能
import btcLogo from '@/assets/img/btc_logo.png';
import LSChartDoubleLine from '@/components/chart/line';
import { getHighCharts } from '@/components/chart';
import { getChartData } from '@/api/chart';

// 本地
import { SubMenuItem } from '@/config/def';
import { setLoginPanelVisible } from '../../store/action';
import { BoxWrapper } from './style';

const log = console.log.bind(console);

export default memo(function LSChartBox() {

  // 添加水印
  const [waterMasked, setWaterMasked] = useState(false);
  useLayoutEffect(() => {
    const reflow = () => {
      setTimeout(() => {
        getHighCharts().charts.forEach((chart) => {
          chart && chart.reflow();
        });
      }, 0);
    };
    reflow();

    const addWaterMask = () => {
      if (waterMasked) {
        return;
      }
      const root = document.querySelector('.highcharts-root');
      const div = document.createElement('div');
      div.classList.add('water-mask');
      root?.insertAdjacentElement('afterend', div);
      setWaterMasked(true);
    };
    addWaterMask();
  });

  // 限制用户查看图表
  const restrict = () => {
    const bg = document.querySelector('.water-mask');
    bg?.classList.add('restriction');
  };

  // 移除限制
  const removeRestrict = () => {
    const bg = document.querySelector('.water-mask');
    bg?.classList.remove('restriction');
  };

  const dipatch = useDispatch();

  // 添加登录和注册按钮
  const addBtns = () => {
    const bg = document.querySelector('.water-mask');
    let cloneBtns = document.querySelector('.clone-btns');
    if (cloneBtns) {
      return;
    }

    const btns = document.querySelector('#login-register-btns');
    if (!btns) {
      return;
    }
    cloneBtns = btns.cloneNode(true) as HTMLElement;
    if (cloneBtns) {
      cloneBtns.classList.add('clone-btns');
      bg?.appendChild(cloneBtns);
      // TODO: 区分登录与注册?
      cloneBtns.addEventListener('click', () => {
        dipatch(setLoginPanelVisible({ loginPanelVisible: true }));
      });
    }
  };

  // 移除登录和注册按钮
  const removeBtns = () => {
    const btns = document.querySelector('.clone-btns');
    btns && btns.remove();
  };


  // 读取选中的菜单
  const selectedSubMenu = useSelector((state) => (state as any).getIn(['uiData', 'selectedSubMenu']));
  if (!selectedSubMenu) {
    console.log('selectedSubMenu', selectedSubMenu);
  }
  const { args: { index, asset },
    loginRequired,
    vipRequired,
  } = selectedSubMenu as SubMenuItem;

  // 读取用户的信息
  const isLogin = useSelector((state) => (state as any).getIn(['headerLogin', 'isLogin']));

  useLayoutEffect(() => {
    // 首先判断有没登录
    if (loginRequired && !isLogin) {
      restrict();
      addBtns();
      return;
    }

    // 检查是否为VIP,TODO
    if (vipRequired) {
      restrict();
      return;
    }

    removeRestrict();
    removeBtns();

  }, [loginRequired, vipRequired, isLogin]);

  // 在菜单发生更改的时候, 重新请求数据即可
  useEffect(() => {
    getChartData(index, asset)
      .then((res) => {
        log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [index, asset]);

  const [chartData] = useState([]);

  const cardTitle = (
    <div>
      <img
        src={btcLogo}
        alt='比特币' />
      {/* 这部分后面都用chain-data文件里的数据替换：logo、title */}
      <span title='比特币地址：链上活跃地址量' >比特币地址：链上活跃地址量 </span>
    </div>
  );

  return (
    <BoxWrapper>
      <div id='container' >
        <Card
          title={ cardTitle }
          className='bord-box' >
          <LSChartDoubleLine
            chartData={chartData}
          />
        </Card>
      </div>
    </BoxWrapper>
  );
});
