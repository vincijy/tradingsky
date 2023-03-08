/* eslint-disable react/no-multi-comp */
// 第三方
import React, { memo, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ossImgs } from '@oss';
import { navigate } from 'gatsby';

import { createChart, ColorType } from 'lightweight-charts';
import { Card, Button } from 'antd';
import { MainWrapper } from './pc_style';

const speakPrice = (price:any) => {
  if (!window || !window.speechSynthesis || !price) {
    return;
  }
  const synthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(`${price}`) as any;
  const voiceList = synthesis.getVoices();
  const voice = voiceList.find((voice:any) => voice.lang === 'zh-CN'); // find the Chinese voice
  utterance.voice = voice;
  synthesis.speak(utterance);
};


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
        height: chartContainerRef.current.clientHeight,
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
        socket.send(JSON.stringify({ 'op': 'subscribe', 'args': [{ 'channel': 'mark-price', 'instId': 'ETH-USDT' }] }));
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
          const a = newPrice.toFixed(1);
          const b = lastBar.current.value.toFixed(1);
          if (b !== a) {
            speakPrice(a);
          }
          serieRef.current.update(d);
          lastBar.current = d;
        }
        // setData((preData) => [...preData, { time: newTs, value: newPrice }]);
      });
    });
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
          <div
            ref={chartContainerRef as any}
            className='chartCard'
          />
        </div>
      </div>
      <div className='intro' />
    </MainWrapper>
  );
});
