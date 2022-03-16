import { getMyOrders, getProfitOrders } from '@/api/order';
import LSAppFooter from '@/components/footer'; // 尾部
import ShareLink from '@/components/share_link';
import { orderStatusTypeList } from '@/def';
import { useAppSelector } from '@/hooks';
import { Table, Tabs } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { orderStatusType } from '@/def';
import { OrderWrapper } from './style';

export default memo(function OrderPage() {
  const { TabPane } = Tabs;
  const id = useAppSelector((state) => state.user.userInfo.id);

  const [myOrders, setMyOrders] = useState([] as any);
  const myOrdersColumns = [
    {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '订单ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: '价格',
      dataIndex: 'finalPrice',
      key: 'finalPrice',
    },
    {
      title: '订单状态',
      dataIndex: 'orderStatusTypeCode',
      key: 'orderStatusTypeCode',
    },
    {
      title: '时间',
      dataIndex: 'createDate',
      key: 'createDate',
    },
  ];
  const fetchMyOrders = async() => {
    const res = await getMyOrders({ pageId: 1, pageSize: 100, userId: id });
    if (res && res.data && res.data.list) {
      // 过滤掉未支付
      const paidList = res.data.list.filter((item) => item.orderStatusTypeCode !== orderStatusType.notPaid);
      paidList.forEach((order) => {
        const statusType = orderStatusTypeList.find((item) => item.code === order.orderStatusTypeCode);
        if (!statusType) {
          return;
        }
        order.orderStatusTypeCode = statusType.title;
      });
      setMyOrders(paidList);
    }
  };

  const profitOrdersColumns = [
    {
      title: '订单ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: '价格',
      dataIndex: 'finalPrice',
      key: 'finalPrice',
    },
    {
      title: '订单状态',
      dataIndex: 'orderStatusTypeCode',
      key: 'orderStatusTypeCode',
    },
    {
      title: '介绍人ID',
      dataIndex: 'introUserId',
      key: 'introUserId',
    },
    {
      title: '时间',
      dataIndex: 'createDate',
      key: 'createDate',
    },
  ];
  const [profit, setProfit] = useState(0);

  // 返佣的计算方式
  const [calMethod, setCalMethod] = useState('');
  /**
   *
   * @param totalNum 有效订单数量(包含历史累计)
   * @param notReturnedProfitOrders (未结算的订单数量)
   * @returns 返佣的钱, 计算方式
   */
  const calProfit = (totalNum:number, notReturnedProfitOrders:any[]):[number, string] => {
    let v = 0;
    notReturnedProfitOrders.forEach((item) => {
      v += parseFloat(item.finalPrice);
    });
    if (totalNum > 0 && totalNum < 11) {
      return [0.1 * v, `10% * ${v}`];
    }
    else if (totalNum > 10 && totalNum < 51) {
      return [0.3 * v, `30% * ${v}`];
    }
    else if (totalNum > 50 && totalNum < 201) {
      return [0.4 * v, `40% * ${v}`];
    }
    else if (totalNum > 200 && totalNum < 301) {
      return [0.5 * v, `50% * ${v}`];
    }
    else if (totalNum > 300 && totalNum < 501) {
      return [0.6 * v, `60% * ${v}`];
    }
    else if (totalNum > 500) {
      return [0.7 * v, `70% * ${v}`];
    }
    else {
      return [v, `100% * ${v}`];
    }
  };
  const [profitOrders, setProfitOrders] = useState([] as any);
  const [returnedProfitOrders, setReturnedProfitOrders] = useState([] as any);
  const [notReturnedProfitOrders, setNotReturnedProfitOrders] = useState([] as any);
  const fetchProfitOrders = async() => {
    const res = await getProfitOrders({ pageId: 1, pageSize: 1000, introUserId: id });
    if (res && res.data && res.data.list) {

      // 过滤掉未支付
      const paidList = res.data.list.filter((item) => item.orderStatusTypeCode !== orderStatusType.notPaid);
      setProfitOrders(paidList);

      const hasReturned = paidList.filter((order) => order.orderStatusTypeCode === orderStatusType.profitReturned);
      setReturnedProfitOrders(hasReturned);

      const notReturn = paidList.filter(
        (order) => order.orderStatusTypeCode === orderStatusType.paidAndUpgrade ||
         order.orderStatusTypeCode === orderStatusType.paidButNotUpgrade,
      );
      setNotReturnedProfitOrders(notReturn);

      paidList.forEach((order) => {
        const statusType = orderStatusTypeList.find((item) => item.code === order.orderStatusTypeCode);
        if (!statusType) {
          return;
        }
        order.orderStatusTypeCode = statusType.title;
      });
      const [prof, calMethod] = calProfit(paidList.length, notReturn);
      setProfit(prof);
      setCalMethod(calMethod);
    }
  };

  useEffect(() => {
    fetchMyOrders();
    fetchProfitOrders();
  }, []);

  return (
    <div>
      <OrderWrapper>
        <Tabs defaultActiveKey='1' >
          <TabPane
            tab='我的订单'
            key='1'
            style={{ marginBottom: '500px' }}>
            <Table
              dataSource={myOrders}
              columns={myOrdersColumns} />;
          </TabPane>
          <TabPane
            tab='返佣统计'
            key='2'
            style={{ marginBottom: '500px' }}>
            <ShareLink />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              <span>未结算的订单数: {notReturnedProfitOrders.length}</span>
              <span>已结算的订单数: {returnedProfitOrders.length}</span>
              <span>总的订单数: {profitOrders.length}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
              <span style={{ marginRight: '20px' }}>未结算的金额: ¥{profit.toFixed(2)}</span>
              <span>返佣计算方式: {calMethod}</span>
            </div>
            <div style={{ marginTop: '20px' }}>点击 [返佣订单] 可查看具体的订单情况</div>
          </TabPane>
          <TabPane
            tab='返佣订单'
            key='3'
            style={{ marginBottom: '500px' }}>
            <Table
              dataSource={profitOrders}
              columns={profitOrdersColumns} />;
          </TabPane>
        </Tabs>
      </OrderWrapper>
      <LSAppFooter />
    </div>
  );
});
