import styled from 'styled-components';
import { INewAlbumStyled } from '../types';

export const AlbumWrapper = styled.div`
  width: ${(props: INewAlbumStyled) => props.width + "px"};
  .album-image {
    position: relative;
    width: ${(props: INewAlbumStyled)  => props.width + "px"};
    height: ${(props: INewAlbumStyled) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props: INewAlbumStyled) => props.size + "px"};
      height: ${(props: INewAlbumStyled) => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props: INewAlbumStyled) => props.bgp + "px"};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props: INewAlbumStyled) => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`