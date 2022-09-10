import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";

import { headerLinks } from '@/common/local-data'
import { IMenuList } from "@/types";
const AppHeader = memo(() => {
  const showSelectItem = (item: IMenuList, index: number) => {
    if (index < 3) {
      return (
        // exact 精准匹配路径
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <NavLink to={'/'} className="logo sprite_01">网易云音乐</NavLink>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {
                      showSelectItem(item, index) 
                    }
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search" />
          <div className="center">创作者中心</div>
          <div style={{cursor: "pointer"}}>登陆</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
