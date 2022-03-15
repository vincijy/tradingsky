import React, { memo, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { getOrderByOrderId } from '@/api/order';
import { useRef } from 'react';
import { orderStatusTypeList } from '@/def';
import { message } from 'antd';
import { getAuthingClient } from '@/authing';
import * as UA from '@/store/user/action'; // 改变登录状态
import * as UIAction from '@/store/ui/action'; // 改变登录状态

interface IProps {
  orderId:string;
}
export default memo(function CheckPaidTimer(props:IProps) {
  const userId = useAppSelector((state) => state.user.userInfo.id);
  const ref = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { orderId } = props;

  const stopLoopCheck = () => {
    ref.current && clearInterval(ref.current);
    ref.current = undefined;
  };

  // TODO: 后端增加指定订单号的查询
  const getMyorders = async() => {
    if (!orderId) {
      return;
    }
    const res = await getOrderByOrderId(orderId);
    if (!res || !res.data) {
      return;
    }
    const order = res.data;
    console.log(order);
    if (order.orderStatusTypeCode !== '0') {
      logout();
      message.success('支付成功, 请重新登录');
      stopLoopCheck();
      dispatch(UIAction.setLoginPanelVisible({ loginPanelVisible: true }));
    };
  };
  const authenticationClient = getAuthingClient();
  const logout = () => { // 退出登录
    // history && history.push('/chart');
    authenticationClient.logout();
    dispatch(UA.toggleLogin({
      isLogin: false,
    }));
    localStorage.removeItem('userInfo');
  };

  const loopCheck = async() => {
    const timer = setInterval(() => {
      getMyorders();
    }, 3000);
    ref.current = timer;
  };

  useEffect(() => {
    console.log('mounted');
    loopCheck();
    return () => {
      console.log('unmountrd');
      ref.current && clearInterval(ref.current);
      ref.current = undefined;
    };
  }, []);

  return (
    <>
    </>
  );
});
