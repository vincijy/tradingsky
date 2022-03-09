import React, { memo, useEffect } from 'react';
import { shallowEqual } from 'react-redux';

import { useAppSelector } from '@/hooks';

import { Tabs, Card, Form, Input, Button } from 'antd';
import { IdcardOutlined, SolutionOutlined } from '@ant-design/icons';
import LSAppFooter from '@/components/footer'; // 尾部

import { getMyOrders, getProfitOrders } from '@/api/order';
import { SettingWrapper } from './style';

export default memo(function LSSettingPage() {

  const { TabPane } = Tabs;

  // redux hook
  const { userInfo } = useAppSelector((state) => ({
    userInfo: state.user.userInfo,
  }), shallowEqual);
  const id = useAppSelector((state) => state.user.userInfo.id);

  const fetchMyOrders = async() => {
    const res = await getMyOrders({ pageId: 1, pageSize: 100, userId: id });
    console.log(res.data.list);
  };

  const fetchProfitOrders = async() => {
    const res = await getProfitOrders({ pageId: 1, pageSize: 100, introUserId: id });
    console.log(res.data.list);
  };

  useEffect(() => {
    fetchMyOrders();
    fetchProfitOrders();
  }, []);

  return (
    <div>
      <SettingWrapper>
        <Tabs defaultActiveKey='1' >
          <TabPane
            tab='个人信息'
            key='1'>
            <Card
              title='基本信息'
              style={{ width: 500, marginBottom: '30px' }}
              className='user-card' >
              <Form>
                <Form.Item label='用户名'>
                  <Input
                    placeholder='恭喜您成为LianShuCha的种子用户'
                    defaultValue='恭喜您成为LianShuCha的种子用户' />
                </Form.Item>
                <Form.Item label='手机号'>
                  <Input
                    placeholder='未绑定手机号'
                    defaultValue={userInfo.phone || ''} />  {/* 这里未来用redux数据修改 */}
                </Form.Item>
              </Form>
            </Card>
            <Card
              title='重置'
              style={{ width: 500, marginBottom: '50px' }}>
              <Form>
                <Form.Item label='修改密码（开发中～）'>
                  <Button style={{ borderRadius: '3px' }}>修改密码</Button>
                </Form.Item>
                <Form.Item label='修改绑定手机号（开发中～）'>
                  <Button style={{ borderRadius: '3px' }}>修改手机号</Button>
                </Form.Item>
              </Form>
            </Card>
          </TabPane>
          <TabPane
            tab='费用管理'
            key='2'
            style={{ marginBottom: '500px' }}>
            <Card
              title='基本信息'
              style={{ width: 500, marginBottom: '50px' }}>
              <Form>
                <Form.Item label={<span>权限等级 <IdcardOutlined/></span>}>
                  { userInfo.role?.description === '付费用户' ? '付费用户' : '普通用户' }
                </Form.Item>
                <Form.Item label={<span>到期时间 <SolutionOutlined /></span>}>
                  { userInfo.role?.description === '付费用户' ? userInfo.vipDate : '您非付费用户'}
                </Form.Item>
              </Form>
            </Card>
          </TabPane>
          <TabPane
            tab='开发者工具'
            key='3'
            style={{ marginBottom: '500px' }}>
            正在开发中～
          </TabPane>
        </Tabs>
      </SettingWrapper>
      <LSAppFooter />
    </div>
  );
});
