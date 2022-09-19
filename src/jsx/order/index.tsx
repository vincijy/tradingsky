import { getMyOrders, getProfitOrders } from 'src/service/order';
import LSAppFooter from '@components/footer'; // 尾部
import ShareLink from '@components/share_link';
import { orderStatusTypeList } from '@def';
import { useAppSelector } from '@hooks';
import { Table, Tabs, Card } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { orderStatusType } from '@def';
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
      return [0.2 * v, `20% * ${v}`];
    }
    else if (totalNum > 50 && totalNum < 101) {
      return [0.3 * v, `30% * ${v}`];
    }
    else if (totalNum > 100 && totalNum < 301) {
      return [0.4 * v, `40% * ${v}`];
    }
    else if (totalNum > 300 && totalNum < 501) {
      return [0.5 * v, `50% * ${v}`];
    }
    else if (totalNum > 500) {
      return [0.6 * v, `60% * ${v}`];
    }
    else {
      return [v, `0% * ${v}`];
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

  const rules = [
    {
      level: '1星',
      orderNum: '1~10',
      rate: '10%',
    },
    {
      level: '2星',
      orderNum: '11~50',
      rate: '20%',
    },
    {
      level: '3星',
      orderNum: '51~100',
      rate: '30%',
    },
    {
      level: '4星',
      orderNum: '101~300',
      rate: '40%',
    },
    {
      level: '5星',
      orderNum: '301~500',
      rate: '50%',
    },
    {
      level: '6星',
      orderNum: '>=501',
      rate: '60%',
    },
  ];
  // 1星 10% 0-10人
  // 2星 20% 10-50人
  // 3星 30% 50-100人
  // 4星 40% 100-300人
  // 5星 50% 300-500人
  // 6星 60% 500人及以上
  const rulesColumns = [
    {
      title: '等级',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: '订单数量',
      dataIndex: 'orderNum',
      key: 'orderNum',
    },
    {
      title: '结算返佣提成比例',
      dataIndex: 'rate',
      key: 'rate',
    },
  ];

  const orderStatics = [
    {
      notReturnNum: notReturnedProfitOrders.length,
      returnedNum: returnedProfitOrders.length,
      allValidNum: profitOrders.length,
      notReturnMoney: profit.toFixed(2),
      calMethod: calMethod,
    },
  ];

  const orderStaticsColumns = [
    {
      title: '未结算订单数量',
      dataIndex: 'notReturnNum',
      key: 'notReturnNum',
    },
    {
      title: '已结算订单数量',
      dataIndex: 'returnedNum',
      key: 'returnedNum',
    },
    {
      title: '累计订单数量',
      dataIndex: 'allValidNum',
      key: 'allValidNum',
    },
    {
      title: '当前可返佣金额',
      dataIndex: 'notReturnMoney',
      key: 'notReturnMoney',
    },
    {
      title: '返佣提成计算方式',
      dataIndex: 'calMethod',
      key: 'calMethod',
    },
  ];

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

            <Card
              title='参与推荐返佣方式:'
              style={{ marginTop: 10 }}>
              <ShareLink />
            </Card>

            <Card
              title='当前结算数据'
              style={{ marginTop: 40 }}>
              <Table
                pagination={false}
                dataSource={orderStatics}
                columns={orderStaticsColumns} />
              <p style={{ marginTop: '20px' }}>点击 [返佣订单] 可查看具体的订单情况.</p>
            </Card>

            <Card
              title='结算途径'
              style={{ marginTop: 40 }}>
              <p style={{ marginTop: '20px' }}>联系客服微信 <span style={{ fontWeight: 'bold' }}>lianshucha</span> 进行结算</p>
            </Card>

            <Card
              title='提成规则说明:'
              style={{ marginTop: 40 }}>
              <p>分成计算规则: 根据不同推荐人的[累计推荐有效订单数量], 划分不同的返佣提成比例. 根据比例进行订单提成.</p>
              <p>下方为具体的规则</p>
              <Table
                dataSource={rules}
                pagination={false}
                columns={rulesColumns} />
              <p>
                举例: 用户通过分享链接, 得到已付费的累计有效订单数量为32, 则对应的结算提成为20%, 当他找客服结算的时候 [总的未结算订单金额]*20% 即是
                他的返佣所得.
              </p>
            </Card>
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
