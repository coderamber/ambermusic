/**
 * 数字格式化
 * @param count 数据
 * @returns xx万 xx亿
 * 
 */
export function getCount(count: number) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

/**
 * 获取特定尺寸的图片
 * @param imgUrl 图片链接
 * @param size 图片尺寸
 * @returns 特定尺寸的图片地址
 * 
 */
export function getSizeImage(imgUrl: string, size: number) {
  return `${imgUrl}?param=${size}x${size}`
}