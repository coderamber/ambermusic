import { IMenuList } from "@/common/types";

// 标题组件类型
export interface ITitleBarProps {
  title: string,
  keywords?: IMenuList[]
}

// 歌曲封面样式类型
export interface ISongsCoverStyled {
  right: string
}

export interface ISongsCoverInfoType {
  picUrl: string,
  playCount: number,
  name: string,
  copywriter?: string,
  creator?: any
}
// 歌曲封面组件 props 类型
export interface ISongsCoverProps {
  info: ISongsCoverInfoType
}

// 新碟上架封面样式类型
export interface INewAlbumStyled {
  width: number
  size: number
  bgp: number
}
export interface INewAlbumInfoType {
  id: number
  picUrl: string
  name: string
  artist: any
}
// 新碟上架封面组件 props 类型
export interface INewAlbumProps extends INewAlbumStyled {
  info: INewAlbumInfoType
}

// 榜单 props 类型
export interface ITopListInfoType {
  coverImgUrl: string
  name: string
  tracks: any[]
}
export interface ITopListProps {
  info: ITopListInfoType
}