import * as types from '../constants/userinfo'

export function update(data) {
  return {
    type: types.USERINFO_UPDATE,
    data
  }
}