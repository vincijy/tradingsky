import React from 'react'
import { Redirect } from 'react-router-dom'

import LSHomePage from '@/pages/home'
import LSChartPage from '@/pages/chart'
import LSCatalogPage from '@/pages/catalog'

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/home" />
        )
    },
    {
        path: "/home",
        component: LSHomePage
    },
    {
        path: "/chart",
        component: LSChartPage
    },
    {
        path: "/catalog",
        component: LSCatalogPage
    }
]

export default routes
