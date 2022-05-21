import DashboardContainer from "./dashboard/container/DashboardContainer"
import OrdersContainer from "./order/container/OrdersContainer"
import React from "react"

const routes = [
    {
        path: '/',
        page: DashboardContainer
    },
    {
        path: '/orders',
        page: OrdersContainer
    }
]

export default routes
