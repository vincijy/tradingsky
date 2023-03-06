/* eslint-disable react/no-multi-comp */
// 第三方
import React, { memo, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ossImgs } from '@oss';
import { navigate } from 'gatsby';

import { createChart, ColorType } from 'lightweight-charts';
import { Card, Button } from 'antd';
import { MainWrapper } from './pc_style';


// // Sample closing prices for 30 periods
// const closingPrices = [10.5, 10.7, 10.8, 10.6, 10.9, 11.1, 11.0, 11.2, 11.5, 11.3, 11.2, 11.1, 11.0, 11.1, 11.2, 11.4, 11.5, 11.4, 11.6, 11.7, 11.5, 11.3, 11.4, 11.6, 11.8, 11.9, 11.8, 11.7, 11.5, 11.6];

// // Calculate the 26-period EMA
// function calculateEMA26(data) {
//   const multiplier = 2 / (26 + 1);
//   let ema = data[0];
//   for (let i = 1; i < data.length; i++) {
//     ema = (data[i] - ema) * multiplier + ema;
//   }
//   return ema;
// }

// // Calculate the 12-period EMA
// function calculateEMA12(data) {
//   const multiplier = 2 / (12 + 1);
//   let ema = data[0];
//   for (let i = 1; i < data.length; i++) {
//     ema = (data[i] - ema) * multiplier + ema;
//   }
//   return ema;
// }

// // Calculate the MACD line
// function calculateMACDLine(data) {
//   const ema12 = calculateEMA12(data);
//   const ema26 = calculateEMA26(data);
//   return ema12 - ema26;
// }

// // Calculate the signal line
// function calculateSignalLine(data) {
//   const multiplier = 2 / (9 + 1);
//   let signal = calculateMACDLine(data.slice(0, 9));
//   for (let i = 9; i < data.length; i++) {
//     signal = (calculateMACDLine(data.slice(i - 8, i + 1)) - signal) * multiplier + signal;
//   }
//   return signal;
// }

// // Calculate the MACD histogram
// function calculateHistogram(data) {
//   const macdLine = calculateMACDLine(data);
//   const signalLine = calculateSignalLine(data);
//   return macdLine - signalLine;
// }

// // Test the functions with the sample data
// const macdLine = calculateMACDLine(closingPrices);
// const signalLine = calculateSignalLine(closingPrices);
// const histogram = calculateHistogram(closingPrices);

// console.log(`MACD Line: ${macdLine.toFixed(4)}`);
// console.log(`Signal Line: ${signalLine.toFixed(4)}`);
// console.log(`Histogram: ${histogram.toFixed(4)}`);

export default memo(function LSHomeMain(props:any) {
  const initialData:{ time:number, value:number }[] = [];

  const {
    colors: {
      backgroundColor = 'white',
      lineColor = '#2962FF',
      textColor = 'black',
      areaTopColor = '#2962FF',
      areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
  } = props;

  const chartContainerRef = useRef<any>();

  const goChart = () => {
    navigate('/chart');
  };
  const serieRef = useRef<any>();
  useEffect(
    () => {
      if (!chartContainerRef || !chartContainerRef.current || !chartContainerRef.current.clientWidth) {
        return;
      }
      const handleResize = () => {
        if (!chartContainerRef || !chartContainerRef.current || !chartContainerRef.current.clientWidth) {
          return;
        }
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      };

      const chart = createChart((chartContainerRef as any).current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },
        width: chartContainerRef.current.clientWidth,
        height: 500,
        timeScale: {
          timeVisible: true,
        },
      });
      chart.timeScale().fitContent();

      const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
      newSeries.setData(initialData as any);
      serieRef.current = newSeries;
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        chart.remove();
      };
    },
    [],
  );
  const lastBar = useRef<{time:Number, value:Number}>({
    time: 0,
    value: 0,
  });
  useEffect(() => {
    setTimeout(() => {
      const socket = new WebSocket('wss://wspri.okx.com:8443/ws/v5/ipublic');
      // Connection opened
      socket.addEventListener('open', (event) => {
        socket.send(JSON.stringify({ 'op': 'subscribe', 'args': [{ 'channel': 'mark-price', 'instId': 'BTC-USDT' }] }));
      });

      socket.addEventListener('message', (event:any) => {
        if (!event.data) {
          return;
        }
        const data = JSON.parse(event.data);
        if (!data || !data.data || !data.data[0]) {
          return;
        }
        const newPrice = Number(data.data[0].markPx);
        const newTs = Number(data.data[0].ts);
        const d = {
          time: newTs / 1000,
          value: newPrice,
        };
        if (lastBar && lastBar.current && lastBar.current?.time < d.time) {
          serieRef.current.update(d);
          lastBar.current = d;
        }
        // setData((preData) => [...preData, { time: newTs, value: newPrice }]);
      });
    }, 30);

    // Listen for messages

  }, []);

  return (
    <MainWrapper>
      <div className='banner'>
        <a
          className='Banner_RpyO'>
          <div
            className='BannerContent_bHEU'
            style={{ color: 'white' }}>
            推荐给朋友, 可获取USDT奖励.
          </div>
        </a>
      </div>
      <div className='HeroContainer'>
        <main className='HeroMain'>
          <h1 className='animate__animated animate__fadeInDown'>区块链投资的先行者</h1>
          <p
            className='animate__animated animate__fadeInDown'
            style={{ textIndent: '6px' }}> { 'Explorer of cryptocurrency investment.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px', marginTop: '30px' }}>
            <Button
              className='startBtn'
              size='large'
              type='primary'
              onClick={goChart}
            >
              开始
            </Button>
            <Button
              className='startBtn'
              size='large'
            >
              注册
            </Button>
          </div>
        </main>
        <div
          className='HeroChartSection' >
          <Card
            style={{ borderRadius: '50px', height: '530px', width: '100%' }}
            className='chartCard'>
            <div ref={chartContainerRef as any}
            />
          </Card>
        </div>
      </div>
      <div className='intro' />
    </MainWrapper>
  );
});
