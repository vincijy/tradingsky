// 第三方
import React, { memo, useState, useCallback } from 'react'

// 功能

// 组件
import { ChartWrapper, ChartLeft, ChartRight } from './style'
import LSAppFooter from '@/components/app-footer'
import { Layout } from 'antd'
import LSChartMenu from './c-cpns/menu'  // 菜单
import LSChartBar from './c-cpns/chart-bar'  // 功能栏
import LSChartBox from './c-cpns/chart-box'  // 图表框
import LSChartDescribe from './c-cpns/chart-describe'

export default memo(function LSChartPage() {
    // state/props
    const [isShow, setIsShow] = useState(true)

    // handle
    const { Content, Sider, Footer } = Layout

    // handle function
    const changeShow = useCallback(
        () => {
            setIsShow(!isShow)
        },
        [isShow],
    )

    return (
        <ChartWrapper>
            <Layout>
                
                <ChartLeft>
                    <Sider className="side" width={289} style={{display: isShow ? 'block' : 'none' }}>
                        <LSChartMenu />
                    </Sider>
                </ChartLeft>


                <Layout className="site-layout" >
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            <LSChartBar changeShow={changeShow} />
                            <LSChartBox />
                            <LSChartDescribe />
                        </div>
                    </Content>
                    <LSAppFooter />
                </Layout>


            </Layout>
        </ChartWrapper>
    )
})
