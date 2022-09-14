import React from "react";

import type { RouteConfig } from "react-router-config";

import Discover from "@/pages/discover";
import Recommend from "@/pages/discover/c-pages/recommend";
import Singer from "@/pages/discover/c-pages/singer";
import Ranking from "@/pages/discover/c-pages/ranking";
import Songs from "@/pages/discover/c-pages/songs";
import DjRadio from "@/pages/discover/c-pages/djradio";
import Album from "@/pages/discover/c-pages/album";

import Friend from "@/pages/friend";
import Mine from "@/pages/mine";
import { Redirect } from "react-router-dom";


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