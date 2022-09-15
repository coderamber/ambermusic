import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "@/pages/discover/c-pages/recommend/store/actionCreators";

import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

import type { IBanners } from "../../types";

const TopBanner = memo(() => {
  // 获取轮播图数据
  const { topBanners } = useSelector(
    (state: any) => ({
      topBanners: state.getIn(["recommendReducer", "topBanners"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // 获取轮播组件
  const bannerRef = useRef<CarouselRef>(null)

  // 轮播编号
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  // 在切换图片之前获取下一张图片传递给最外层 bgImage 展示，给函数包裹 useCallback 防止轮播组件任意刷新
  const bannerChange = useCallback((from: number, to: number) => {
    setCurrentIndex(to)
  }, [])
  // 获取轮播背景图
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl
  // 图片高斯模糊
  const bgImageWithBlur = bgImage + '?imageView&blur=40x20'
  return (
    <BannerWrapper bgImage={bgImageWithBlur}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item: IBanners) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} className="image"/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current?.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current?.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBanner;
