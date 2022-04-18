import { GET_USER_ID, LOGOUT, SIGN_IN, SIGN_UP } from "../types/personTypes"

export const personReducer = (store = {}, action) => {
  switch (action.type) {
	  case SIGN_IN:
      return {
		    ...store,
		    ...action.payload
	    }

    case SIGN_UP:
      return {
        ...store,
        ...action.payload
      }

    case LOGOUT:
      return {
        ...store,
        payload: null,
        token: '',
      }

    case GET_USER_ID:
      return {
        ...store,
        ...action.payload
      }
	
	default:
	  return store
  }
}
