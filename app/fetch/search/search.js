import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
  // 判断是否有 keyword 
  const keywordStr = keyword ? '/' + keyword : ''
  const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
  return result
}