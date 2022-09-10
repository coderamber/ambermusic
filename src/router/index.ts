import type { RouteConfig } from "react-router-config";
import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";

/**
 * 页面路由配置
 * 
 */
const routes: RouteConfig[] =[
  {
    path: '/',
    exact: true,
    component: Discover
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