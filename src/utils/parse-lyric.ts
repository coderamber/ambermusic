// 时间匹配正则
const parseExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/

export const parseLyric = (lyricString: string) => {
  const lyricStrings = lyricString.split('\n')
  const lyrics = []
  for (let line of lyricStrings) {
    if (line) {
      const times = parseExp.exec(line)
      if (times) {
        const time1 = times[1] as any * 60 * 1000
        const time2 = times[2] as any * 1000
        const time3 = times[3].length === 3 ? times[3] as any * 1 : times[3] as any * 10
        const time = time1 + time2 + time3
        const content = line.replace(parseExp, "").trim()
        const lineObj = {
          time,
          content
        }
        lyrics.push(lineObj)
      }
    }
  }
  return lyrics
}