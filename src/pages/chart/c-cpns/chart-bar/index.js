import React, { memo, useState } from 'react'
import { Button } from 'antd'

import { BarWrapper } from './style'

export default memo(function LSChartBar(props) {
    // state/props

    // handle
    const { changeShow } = props

    // handle function
    const changeIsShow = () => {
        changeShow()
    }

    return (
        <BarWrapper>
            <div>
                <Button onClick={ e => changeIsShow() }>收起菜单栏</Button>
            </div>
        </BarWrapper>
    )
})
