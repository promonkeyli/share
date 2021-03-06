import {RouteObject} from "react-router";
import React from "react";

const routers:Array<RouteObject|any> = [
    {
        path:'information',
        element: React.lazy(() => import('../../pages/information'))
    },
    {
        path:'resource',
        index: true,
        element: React.lazy(() => import('../../pages/resource'))
    },
    {
        path:'sample',
        element: React.lazy(() => import('../../pages/sample'))
    },
    {
        path:'hobby',
        element: React.lazy(() => import('../../pages/hobby'))
    },
    {
        path:'about',
        element: React.lazy(() => import('../../pages/about'))
    },
    {
        path: '*',
        element: React.lazy(() => import('../../components/404'))
    }
]

export default routers
