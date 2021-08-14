// 第三方
import React, { memo } from 'react'
import { useHistory } from "react-router-dom"

// 功能

// 组件
import { MainWrapper, MainLeft, MainRight } from './style'
import { Button } from 'antd'
import tech from '@/assets/img/tech.svg'

export default memo(function LSHomeMain(props) {

    // other hook
    let history = useHistory()

    // handle function
    let goChart = () => {
        history.push("/chart")
    }

    return (
        <MainWrapper>
            <div className="content">
                <MainLeft>
                    <div className="container">
                        <h2>
                            链上数据：最好的区块链估值工具
                        </h2>
                        <p>
                            数据赋能智慧投资，使链上估值变得透明，点击查看您的第一张动态数据图表
                        </p>
                        <Button type="primary" onClick={e => goChart()} >查看动态图表</Button>
                    </div>
                </MainLeft>
                <MainRight>
                    <img src={tech} /> 
                </MainRight>
            </div>
        </MainWrapper>
    )
})
