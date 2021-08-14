// 第三方
import React, { memo, useState } from 'react'

// 功能
import { dataMenu } from '@/common/local-data'  // 分类数据

// 组件
import { MenuWrapper } from './style'
import { Menu, Select } from 'antd'

export default memo(function LSChartMenu() {
    // state/props
    const [openKeys, setOpenKeys] = useState(['sub1'])

    // other handle
    const { SubMenu } = Menu
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 
                             'sub10', 'sub11', 'sub12', 'sub13', 'sub14', 'sub15', 'sub16', 'sub17', 'sub18', 'sub19' ]
    const { Option } = Select

    // handle function
    const onOpenChange = keys => {  
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    return (
        <MenuWrapper>
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
                {
                    dataMenu.map((items, index) => {
                        return (
                            <SubMenu key={items.key} icon={items.icon} title={items.name}>
                                    {
                                        items.dataSet.map((item, index) => {
                                            return (
                                                <Menu.Item key={item.name}>{item.name}</Menu.Item>
                                            )
                                        })
                                    }
                            </SubMenu>
                        )
                    })
                }
            </Menu>
        </MenuWrapper>
    )
})
