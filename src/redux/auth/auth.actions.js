import { types } from './auth.types'

export const actions = {
  setUserType: (payload) => ({
    type: types.AUTH_SET_USER_TYPE,
    payload
  })
}
