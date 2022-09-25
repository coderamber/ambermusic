import React from "react";

import { Redirect } from "react-router-dom";
import type { RouteConfig } from "react-router-config";

const Discover = React.lazy(() => import("@/pages/discover"))
const Recommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"))
const Singer = React.lazy(() => import("@/pages/discover/c-pages/singer"))
const Ranking = React.lazy(() => import("@/pages/discover/c-pages/ranking"))
const Songs = React.lazy(() => import("@/pages/discover/c-pages/songs"))
const DjRadio = React.lazy(() => import("@/pages/discover/c-pages/djradio"))
const Album = React.lazy(() => import("@/pages/discover/c-pages/album"))
const Player = React.lazy(() => import("@/pages/player"))
const Friend = React.lazy(() => import("@/pages/friend"))
const Mine = React.lazy(() => import("@/pages/mine"))

/**
 * 页面路由配置
 * 
 */
const routes: RouteConfig[] =[
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/discover" />
    }
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        component: Discover,
        render: () => {
          return <Redirect to="/discover/recommend" />
        },
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/djradio',
        component: DjRadio
      },
      {
        path: '/discover/singer',
        component: Singer
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/player',
        component: Player
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  }
]

export default routes;