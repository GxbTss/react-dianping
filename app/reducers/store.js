import * as types from '../constants/store'

const initialState = []
export default function userinfo(state = initialState, action) {
  switch (action.type) {
    case types.STORE_UPDATE:
      return action.data
    case types.STORE_ADD:
      return [action.data, ...state]
    case types.STORE_RM:
      return state.filter(item => {
        if (item.id !== action.data.id) {
          return item
        }
      })
    default:
      return state;
  }
}