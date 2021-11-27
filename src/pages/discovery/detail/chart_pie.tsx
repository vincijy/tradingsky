import React, { memo, useEffect } from 'react';
import { Card, Input, Select, Row, Col, Tabs } from 'antd';
import { MdTravelExplore } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { BarChartOutlined } from '@ant-design/icons';
import { RightCircleOutlined } from '@ant-design/icons';
import LSAppFooter from '@/components/footer'; // footer
import LSChartDoubleLine from '@/components/chart/line/index';
import { getCoin, getCoinList, getWhaleAddress, getWhaleTop, getRealTime, getAllPrice } from '@/api/discovery';
const log = console.log.bind(console);
const { TabPane } = Tabs;
import HighchartsReact from 'highcharts-react-official';
import { DiscoverDetailPage } from './style';
export default memo(function ChartPie() {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: '2018年1月浏览器市场份额',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          // style: {
          //   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
          // },
        },
      },
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true,
      }, {
        name: 'Internet Explorer',
        y: 11.84,
      }, {
        name: 'Firefox',
        y: 10.85,
      }, {
        name: 'Edge',
        y: 4.67,
      }, {
        name: 'Safari',
        y: 4.18,
      }, {
        name: 'Sogou Explorer',
        y: 1.64,
      }, {
        name: 'Opera',
        y: 1.6,
      }, {
        name: 'QQ',
        y: 1.2,
      }, {
        name: 'Other',
        y: 2.61,
      }],
    }],
  };
  return (
    <HighchartsReact
      constructorType={ 'chart' }
      options={ options }
    />
  );
});
