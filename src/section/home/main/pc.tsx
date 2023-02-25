// 第三方
import React, { memo, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { navigate } from 'gatsby';
import { MainWrapper } from './pc_style';

export default memo(function LSHomeMain() {
  const goChart = () => {
    navigate('/chart');
  };
  const [price, setPrice] = useState(1);
  const [rate, setRate] = useState(0);
  const [xy, setXy] = useState([-100, 0]);

  const prePrice = useRef<undefined|number>();
  // useEffect(() => {
  //   const socket = new WebSocket('wss://wspri.okx.com:8443/ws/v5/ipublic');
  //   // Connection opened
  //   socket.addEventListener('open', (event) => {
  //     socket.send(JSON.stringify({ 'op': 'subscribe', 'args': [{ 'channel': 'mark-price', 'instId': 'BTC-USDT' }] }));
  //   });

  //   let count = 0;
  //   // Listen for messages
  //   socket.addEventListener('message', (event) => {
  //     count += 1;
  //     if (!event.data) {
  //       return;
  //     }
  //     const data = JSON.parse(event.data);
  //     if (!data || !data.data || !data.data[0]) {
  //       return;
  //     }
  //     const newPrice = Number(data.data[0].markPx);
  //     setPrice(newPrice);

  //     if (count > 8) {
  //       const pre = (prePrice && prePrice.current) ? prePrice.current : newPrice;
  //       const rate = newPrice / pre - 1;
  //       prePrice.current = newPrice;
  //       count = 0;
  //       setXy((pre) => [pre[0] + 10, pre[1] + rate * 100000]);
  //     }
  //   });
  // }, []);

  return (
    <MainWrapper>
      <div className='content'>
        <div className='home-container'>
          <div className='home-slogon'>
            <h2 className='animate__animated animate__fadeInDown'>
            加密市場投資的先行者
            </h2>
            <p className='animate__animated animate__fadeInDown'>
            匯聚多種加密貨幣和衍生品數據
            </p>
          </div>
          <div className='btn-area animate__animated animate__fadeInDown'>
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => goChart()}
            >立即查看
            </button>
          </div>
          {/* {
            price && price !== 1.00 &&
            <div
              style={{ height: '200px', position: 'relative' }}
              className='animate__animated animate__fadeInDown'>
              <div style={{ position: 'absolute', top: `${xy[1]}px`, left: `${xy[0]}px`, textAlign: 'center' }}>
                <p style={{ color: 'white' }}>{Number(price).toFixed(2)}</p>
                <img
                  width='50px'
                  src='https://www.freepnglogos.com/uploads/mario-png/the-official-home-for-mario-home-15.png' />
              </div>
            </div>
          } */}
        </div>

      </div>
    </MainWrapper>
  );
});
