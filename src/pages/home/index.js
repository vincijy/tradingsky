// 第三方
import React, { memo } from 'react'

// 功能

// 组件
import { CatalogWrapper } from './style'
import LSHomeMain from './c-cpns/main'  // 主页
import LSCatalog from '@/components/catalog'  // 目录
import LSAppFooter from '@/components/app-footer'  // 尾部

export default memo(function LSHomePage() {
    return (
        <div>
            <LSHomeMain />
            <CatalogWrapper>
                <LSCatalog />
            </CatalogWrapper>
            <LSAppFooter />
        </div>
    )
})
