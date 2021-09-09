import React, { memo } from 'react';
import { shallowEqual } from 'react-redux';

import { useAppSelector } from '@/hooks';

import { Tabs, Card, Form, Input, Button, Radio } from 'antd';
import LSAppFooter from '@/components/app-footer'; // 尾部

import { SettingWrapper } from './style';

export default memo(function LSSettingPage() {

  const { TabPane } = Tabs;

  // redux hook
  const { userInfo } = useAppSelector((state) => ({
    userInfo: state.headerLogin.userInfo,
  }), shallowEqual);

  return (
    <div>
      <SettingWrapper>
        <Tabs defaultActiveKey='1' >
          <TabPane tab='个人信息' key='1'>
            <Card title='基本信息' style={{ width: 500, marginBottom: '30px' }} className='user-card' >
              <Form>
                <Form.Item label='用户名'>
                  <Input placeholder='恭喜您成为LianShuCha内测用户' defaultValue='恭喜您成为LianShuCha内测用户' />
                </Form.Item>
                <Form.Item label='手机号'>
                  <Input placeholder='未绑定手机号' defaultValue={userInfo.phone} />  {/* 这里未来用redux数据修改 */}
                </Form.Item>
              </Form>
            </Card>
            <Card title='重置' style={{ width: 500, marginBottom: '50px' }}>
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
          <TabPane tab='费用管理' key='2' style={{ marginBottom: '500px' }}>
            正在开发中～
          </TabPane>
          <TabPane tab='开发者工具' key='3' style={{ marginBottom: '500px' }}>
            正在开发中～
          </TabPane>
        </Tabs>
      </SettingWrapper>
      <LSAppFooter />
    </div>
  );
});
