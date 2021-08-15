import React, { memo } from 'react'
import { Card } from 'antd'

import { DescribeWrapper } from './style'

export default memo(function LSChartDescribe() {
    return (
        <DescribeWrapper>
        <div className="content-describe">
            <Card title="指标介绍" className="bord-describe">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
      </DescribeWrapper>
    )
})
