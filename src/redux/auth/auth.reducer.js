import { types } from './auth.types'

export const initialState = {
  userType: 'user'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SET_USER_TYPE:
      return {
        userType: action.payload
      };
    default:
      return state
  }
}
