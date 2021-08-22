// 第三方
import React, { memo, useEffect, useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux'; // redux的hook

// 图标React 封装
import { Card } from 'antd';

// 功能
import btcLogo from '@/assets/img/btc_logo.png';
import LSChartDoubleLine from '@/components/chart/line';
import { getHighCharts } from '@/components/chart';
import { getChartData } from '@/api/chart';

// 本地
import { SubMenuItem } from '@/config/def';
import { BoxWrapper } from './style';

const log = console.log.bind(console);

export default memo(function LSChartBox() {

  const addWaterMask = () => {
    const root = document.querySelector('.highcharts-root');
    const div = document.createElement('div');
    div.classList.add('water-mask');
    root?.insertAdjacentElement('afterend', div);
  };

  const reflow = () => {
    setTimeout(() => {
      getHighCharts().charts.forEach((chart) => {
        chart && chart.reflow();
      });
    }, 0);
  };

  useLayoutEffect(() => {
    reflow();
    addWaterMask();
  }, []);

  const selectedSubMenu = useSelector((state) => (state as any).getIn(['uiData', 'selectedSubMenu']));
  const { args: { index, asset } } = selectedSubMenu as SubMenuItem;

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
            // TODO
            chartData={chartData}
          />
        </Card>
      </div>
    </BoxWrapper>
  );
});
