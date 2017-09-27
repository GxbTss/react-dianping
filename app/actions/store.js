import * as types from '../constants/store'

export function update(data) {
  return {
    type: types.STORE_UPDATE,
    data
  }
}
export function add(item) {
  return {
    type: types.STORE_ADD,
    data: item
  }
}

export function rm(item) {
  return {
    type: types.STORE_RM,
    data: item
  }
}