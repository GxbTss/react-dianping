import 'whatwg-fetch'
import 'es6-promise'

// 将对象拼接成 key=val&key=val 的字符串形式
function objParams(obj) {
  let result = ''
  let item
  for (item in obj) {
    result += '&' + item + '=' + encodeURIComponent(obj[item])
  }

  if (result) {
    result = result.slice(1)
  }

  return result
}

// post
export function post(url, params) {
  let result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: objParams(params)
  })
  return result
}